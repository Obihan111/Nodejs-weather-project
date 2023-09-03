const express = require('express')
const path = require('path') //A core module. No need to use npm
const hbs = require('hbs')
const geo = require('./utils/geocoding')
const weather = require('./utils/weather')

const publicDirectoryPath = path.join(__dirname, '../public')
//console.log(__dirname)
//console.log(__filename)



const app = express()

app.set('view engine', 'hbs')  //for dynamic website templates. create a views directory in the root of the project, and then create .hbs files replacing static .html files

//static website.
app.use(express.static(publicDirectoryPath)) //This will now override the index.html, /help and /about pages in the app.get router below. for static websites.

//To change or customise the views directory. It is only necressary if we want to change the views dierectory to something else
const viewsPath = path.join(__dirname, '../templates/views')  
app.set('views', viewsPath)

//tO CREATE A PARTIALS PATH (>header)FOR REPRODUCING FILES ACROSS DIFFERENT PAGES
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {  //use res.render, only for dynamic pages and through the hbs router.
    res.render('index', {
        title:'Weather',
        name:'Solomon'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'My about page.',
        story:'This is a weather app created for me.',
        name:'solomon'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        SOS:'This is a help page. Ask anything',
        name:'solomon'
    })
})
// app.get('/help', (req, res) => {
//     res.send('<h1>this is a help page</h1>')
// })

// app.get('/about', (req, res) => {
//     res.send({
//         name: 'This is a product',
//         number:10
//     })
// })

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
        error: 'Enter a valid address'
        })
    }
    geo(req.query.address, (error, {latitude, longitude, country}={}) => {
        if(error){
            console.log('url error, unable to get location')
            return res.send({
                error:error
            })          
        }weather(latitude, longitude, (error, weatherdata)=> {
                    if(error){
                        return res.send({
                            error
                        })
                    }
                     res.send({
                        Theweather:weatherdata,
                        location:req.query.address
                    })
            })
    }) 
})

app.get('/products', (req, res) => {
    if(req.query){
        console.log(req.query)
        return res.send({
        products: []
        })
    }
    console.log('Enter a search term')
    res.send({
        error:'Enter a search term'
    })   
})

// app.get('/solomon', (req, res) => {
//     if(!req.query.search){
//         return res.send({
//             error:'There is an error'
//         })
//     }res.send({
//         name:'solomon',
//         title:'DEveloper'
//     })

//})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'solomon',
        errorMessage:'help article not found'
    })
})  //all error pages should come last just before the app.listen 


app.get('*', (req, res)=> {
    res.render('404',{
        title:'404',
        name: 'solomon obihan',
        errorMessage: 'Page not found'
    })
}) // * is for every page not included in the router.  res.render is used for all the pages in the views folder to render html to that folder
     


app.listen(3000, () => {
    console.log('server is running on port 3000.')
})