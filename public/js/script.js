console.log('client side javascript is loaded')

fetch('http://api.positionstack.com/v1/forward?access_key=c0fc2921111419658408722b33ad9d5c&query=London').then((res) => {
    res.json().then((dataJson) => {
       // console.log(dataJson)
        console.log(dataJson.data[0].latitude)
    })
})


// const data = async () => {
// const response = await fetch('http://api.weatherstack.com/current?access_key=48209312b2b02dc161bcc5e6b60f9d97&query=London')
//    const dataJson = await response.json()
//    console.log(dataJson.location.lat)
// }

// data()


fetch('http://localhost:3000/weather?address=London').then((res) => {
    res.json().then((data) => {
        if(data.error){
            return console.log(data.error)
        }
        console.log({location:data.Theweather.location, data: data.Theweather})
    })
   
})


  
const weatherForm = document.querySelector('.form')

const searchInput = document.querySelector('input')
const result = document.querySelector('.result')

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const location = searchInput.value
//     fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
//         res.json().then((data) => {
//              if(data.error){
//                 console.log(data.error)
//                 result.value = data.error
//             }else{
//                 console.log({location:data.Theweather.location, temperature:data.Theweather.Temperature, humidity:data.Theweather.Humidity})
//                 result.value = `The weather at ${data.Theweather.location}, is at temperature of ${data.Theweather.Temperature} and Humidity of ${data.Theweather.Humidity}`
        
//             }
            
//         })
//     })
   
// })


//on Render 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchInput.value
    fetch(`/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
             if(data.error){
                console.log(data.error)
                result.value = data.error
            }else{
                console.log({location:data.Theweather.location, temperature:data.Theweather.Temperature, humidity:data.Theweather.Humidity})
                result.value = `The weather at ${data.Theweather.location}, ${data.Theweather.Country}, is at temperature of ${data.Theweather.Temperature} and Humidity of ${data.Theweather.Humidity}`
        
            }
            
        })
    })
   
})