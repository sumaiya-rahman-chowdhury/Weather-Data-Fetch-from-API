const weather = async () =>{
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fdaf887ba076d6cf51d5bc054417c13d');
    const data = await res.json() ;
    console.log(data)
    displayWeather(data)
}
const displayWeather = (data) =>{
    const container = document.getElementById('div-con')
   const div = document.createElement('div');
   div.innerHTML = `
   <div class="card w-96 bg-slate-300 glass mx-auto mt-10 h-[500px]">
   <figure><img src="clipart-clouds-picture-images-0.png" alt="cloud picture" class="p-10"/></figure>
  <div class="card-body ">
    <h2 class="card-title">${data.main.feels_like}</h2>
    <p><span class="font-bold text-lg">cloud cover:</span> ${data.clouds.all}</p>
    <p><span class="font-bold text-lg">Place :</span>${data.name}</p>
    <p><span class="font-bold text-lg">temperature:</span> ${data.main.temp}</p>
    <p><span class="font-bold text-lg">humidity:</span> ${data.main.humidity}</p>
    <p><span class="font-bold text-lg">weather description:</span> ${data.weather[0].description
    }</p>
    <div class="card-actions justify-end">
    
    </div>
  </div>
</div>
   
   `
   container.appendChild(div)
}
weather()