const request = require('request')


// const geo = ((address, callback) => {
//    const url = `http://api.positionstack.com/v1/forward?access_key=c0fc2921111419658408722b33ad9d5c&query=${address}`

//    request({url:url, json:true}, (error, response) => {
//         if(error) {
//             callback('network error', undefined)
//         }else if(body.error){
//             callback('url error', undefined)
//         }else{
//             callback(undefined, {
//                 latitude:body.data[0].latitude, 
//                 longitude:body.data[0].longitude,
//                 location:body.data[0].neighbourhood,
//                 country:body.data[0].country}
//             )
//         }
//    })
// })



//Destructured alternative. The avove style works just fine.
const geo = ((address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=c0fc2921111419658408722b33ad9d5c&query=${address}`
 
    request({url:url, json:true}, (error, {body}) => {
         if(error) {
             callback('network error', undefined)
         }else if(body.error){
             callback('url error, unable to get location', undefined)
         }else{
             callback(undefined, {
                 latitude:body.data[0].latitude, 
                 longitude:body.data[0].longitude,
                 location:body.data[0].neighbourhood,
                 country:body.data[0].country}
                )
            }
        })
})

// const geocode = ((address, callback) => {
//     const url1 = `http://api.weatherstack.com/current?access_key=48209312b2b02dc161bcc5e6b60f9d97&query=${address}`
//     response({url1:url1, json:true}, (error, response) => {
//         if(error) {
//             callback('network error', undefined)
//         }else if(body.error){
//             callback('url error', undefined)
//         }else{
//             callback(undefined, {
//                 latitude:body.location.lat,
//                 longitude:body.location.lon,
//                 country:body.location.country
//             })
//         }
//    })
// })

// geo('london', (error, data) => {
//     console.log('error:', error)
//     console.log('data:', data)
// })



//  

module.exports= geo