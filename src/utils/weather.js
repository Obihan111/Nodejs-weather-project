const request = require('request')
const fs = require('fs')

const weatherUrl='https://api.openweathermap.org/data/2.5/weather?lat=51.509648&lon=-0.099076&appid=aadc3d0e38a0871700b8f5204cef039b&units=metric'

// request({url:weatherUrl, json:true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to Api') //Netwrok issues
//     }else if(body.error){  //error in url input //getdata.error = body.error
//         console.log('ERROR!! Check url input')
//     }else{
//         console.log(body)
//         console.log(`London has a temperature of ${body.main.temp} and a humidity of ${body.main.humidity}`)
//     }
// })


// const url2 = 'http://api.weatherstack.com/current?access_key=48209312b2b02dc161bcc5e6b60f9d97&query=37.8267,-122.4233'

// request({url:url2, json:true}, (error, response) => {
//    // console.log(response)
//     const data = body.location.lat
//     console.log(data)
// })

// const url3 = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aadc3d0e38a0871700b8f5204cef039b'

// request({url:url3, json:true}, (error, response) => {
//    // console.log(response)
//     const data = body
//     console.log(data)
// })

// const weather = (lat, lon, callback) => {
//     const url = `http://api.weatherstack.com/current?access_key=48209312b2b02dc161bcc5e6b60f9d97&query=${lat},${lon}`

//     request({url:url, json:true},(error, response) => {
//         if(error){
//             callback('netwrok error', undefined)
//         }else if(body.error){
//             callback('url error', undefined)
//         }else{
//             callback(undefined, {
//                 location:body.location.name,
//                 Temperature:body.current.temperature,
//                 Humidity:body.current.humidity})
//         }
//     })

// }


//Destructured Alternatively. The above style works just fine.

const weather = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=48209312b2b02dc161bcc5e6b60f9d97&query=${lat},${lon}`

    request({url:url, json:true},(error, {body}) => {
        if(error){
            callback('netwrok error', undefined)
        }else if(body.error){
            callback('url error, unable to get Location', undefined)
        }else{
            callback(undefined, {
                location:body.location.name,
                Temperature:body.current.temperature,
                Humidity:body.current.humidity,
                Country:body.location.country})
        }
    })

}


// weather('37.8267','-122.4233', (error, data)=> {
//     console.log('data:', data)
//     console.log('error:', error)
// })

module.exports = weather

//alternatively

