//дата
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.querySelector('.date').innerHTML = today;
//день неділі
let dayOfWeek = new Date();
let day = String(dayOfWeek.getDay()).padStart(2, '0');
let arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
if(day == 01)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[0];
}
else if(day == 02)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[1];
}
else if(day == 03)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[2];
}
else if(day == 04)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[3];
}
else if(day == 05)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[4];
}
else if(day == 06)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[5];
}
else if(day == 07)
{
  document.querySelector('.dayOfWeek').innerHTML = arr[6];
}
//час
let time = new Date();
let hours = String(time.getHours()).padStart(2, '0');
let minutes = String(time.getMinutes()).padStart(2, '0');
let seconds = String(time.getSeconds()).padStart(2, '0');
time = hours + ':' + minutes + ':' + seconds;
document.querySelector('.time').textContent = time;
//пошук потрібного міста
let input = document.querySelector('.city-search');
console.log(input.value);
let button = document.querySelector('.search-button');
button.addEventListener("click",function()
{
    let city = input.value;
    function setLinkValue(city) {
      var link = 'https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19';
      console.log(link);
      newLink= link.replace('KYIV', city);
      console.log(newLink);
      fetch(newLink)
      .then((response)=>response.json())
      .then(data =>
        {
          console.log(data)
          document.querySelector('.city-name').textContent = data.name;
          document.querySelector('.temperature').innerHTML = Math.round(data.main.temp)+'&deg;';
          document.querySelector('.feels-like').innerHTML = Math.round(data.main.feels_like)+'&deg;';
          document.querySelector('.pressure').innerHTML = data.main.pressure;
          document.querySelector('.humidity').innerHTML = data.main.humidity+"%";
          document.querySelector('.weather-description').textContent = data.weather[0]['description'];
          document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
        }
      )    
    }
  setLinkValue(city);
})



  //You would pass netsvar here
//   setLinkValue('ExampleValue');
// function showAvatar()
// {
//     fetch("https://api.github.com/users/arkavenkoliuda15")
//     .then((response)=>response.json())
//     .then(data =>
//     {
//         let img = document.createElement("img");
//         let avatar = data.avatar_url;
//         img.setAttribute("src",avatar);
//         document.body.prepend(img);
//     })
// }
// let btn = document.querySelector("button");
// console.log(btn)
// btn.addEventListener("click",showAvatar)