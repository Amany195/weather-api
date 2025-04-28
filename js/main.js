var input1=document.querySelector(".input1");
var jscode=document.querySelector(".jscode");
var days=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
var months=["january","februarey","march","abril","may","june","july","august","septemper","octoper","november","decemper"];
var activee=document.querySelector(".activee");
var homee=document.querySelector(".homee");
var pass=document.querySelector(".pass");
async function weatherr(city){
    
    var response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=559851b5997249b6ad3182000252504&q=${city}&days=4`);



    if (response.ok === true && response.status === 200) {
        var data = await response.json();
        // console.log(data);
        
        display(data);
       
      }
}
var data=[];
function display(data){
    function getDateName(dateNum) {
        var day = dateNum;
        var date = new Date(day);
        var dateText = date.getDay();
        var dateName = days[dateText];
        return dateName;
      }
    
      function getDateAndMonth(dateNum) {
        var day = dateNum;
        var dayText = new Date(day);
        var dayNum = dayText.getDate();
        var monthText = dayText.getMonth();
        var monthName = months[monthText];
        return dayNum + " " + monthName;
      }
    
jscode.innerHTML=`
  <div class="inner">
              <div class="card">
                <div class="header d-flex justify-content-between pe-2 ps-2 pt-1">
                  <div class="left">
                    <p>${getDateName(
                        data.forecast.forecastday[1].date
                      )}</p>
                  </div>
                  <div class="right">
                    <p>${getDateAndMonth(
                        data.forecast.forecastday[1].date
                      )}</p>
                  </div>
                </div>
                <div class="contentt">
                  <div class="content">
                    <h2 class="country city">${data.location.name}</h2>
                    <div class="degree">
                      <h2 class="text-white degre">${
                        data.current.temp_c
                      } <sup>o</sup>c</h2>
                      <img src="${data.current.condition.icon}" alt="" class="img1" />
                      <p class="party"> ${data.current.condition.text}</p>
                    </div>
                  </div>
                  <div class="footer d-flex justify-content-start gap-4">
                    <div class="umb">
                      <img src="image/icon-umberella.png" alt="" />
                      <span>${  data.current.feelslike_c}%</span>
                    </div>
                    <div class="wind">
                      <img src="image/icon-wind.png" alt="" />
                      <span>${data.current.wind_kph}km/h</span>
                    </div>
                    <div class="umb">
                      <img src="image/icon-compass.png" alt="" />
                      <span>${data.current.wind_dir}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card1 text-center">
                <div class="header1 pt-1">
                  <p class="today">${getDateName(
                    data.forecast.forecastday[2].date
                  )}</p>
                </div>
                <div class="sun1">
                  <img src="${
                    data.forecast.forecastday[2].day.condition.icon
                  }" alt="" />
                  <h2 class="sundeg text-white">${
                    data.forecast.forecastday[2].day.maxtemp_c
                  }<sup>o</sup>c</h2>
                  <h3 class="deg2">${data.forecast.forecastday[2].day.mintemp_c} <sup>o</sup></h3>
                  <h2 class="sunny">${data.forecast.forecastday[2].day.condition.text}</h2>
                </div>
              </div>
            </div>
            <div class="inner">
              <div class="card text-center">
                <div class="header pt-1">
                  <p class="today">${getDateName(
                    data.forecast.forecastday[3].date
                  )}</p>
                </div>
                <div class="sun1">
                  <img src="${
                    data.forecast.forecastday[3].day.condition.icon
                  }" alt="" />
                  <h2 class="sundeg text-white">${
                    data.forecast.forecastday[3].day.maxtemp_c
                  }< <sup>o</sup>c</h2>
                  <h3 class="deg2"> ${data.forecast.forecastday[3].day.mintemp_c}<sup>o</sup></h3>
                  <h2 class="sunny">${data.forecast.forecastday[3].day.condition.text}</h2>
                </div>
              </div>
            </div>

            `
}
// display();
input1.addEventListener("input",function(){
    weatherr(this.value);
})
weatherr("cairo");

var success = function (position) {
    console.log(position);
  };
  
  var error = function (error) {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
  activee.addEventListener("click",function(){
    window.location.replace('../contact.html')

  });
  homee.addEventListener("click",function(){
    window.location.replace('../index.html')

  });
  
  pass.addEventListener("click",function(){
    window.location.replace('../index.html')

  });