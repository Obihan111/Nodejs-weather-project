 
const weatherForm = document.querySelector('.form')

const searchInput = document.querySelector('input')
const result = document.querySelector('.result')


//on Render and local machine

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