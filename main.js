let temp = document.querySelector(".temp"),
  temp_type = document.querySelector(".temp_type"),
  hum_num = document.querySelector(".hum-num"),
  uv_num = document.querySelector(".uv-num"),
  pre_num = document.querySelector(".pre-num"),
  prec_num = document.querySelector(".prec-num"),
  clo_num = document.querySelector(".clo-num"),
  wind_num = document.querySelector(".wind-num"),
  wind_dir = document.querySelector(".wind-dir"),
  city_name = document.querySelector(".city-name"),
  last_upd = document.querySelector(".last-upd"),
  temp_img = document.querySelector(".temp_icon");

let whether_input = document.querySelector(".whether_input"),
  whether_dis = document.querySelector(".whether_display");
let back = document.querySelector(".back_btn");
let val_inp = document.querySelector(".input");

const fetchData = () => {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=0ee9e6de517a4253866111433212509&q=${val_inp.value}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city_name.innerHTML = data.location.name;
      temp.innerHTML = data.current.temp_c + "°";
      temp_type.innerHTML = data.current.condition.text;
      last_upd.innerHTML = data.current.last_updated;
      hum_num.innerHTML = data.current.humidity;
      uv_num.innerHTML = data.current.uv;
      pre_num.innerHTML = data.current.pressure_mb;
      prec_num.innerHTML = data.current.precip_mm;
      wind_num.innerHTML = data.current.wind_kph;
      wind_dir.innerHTML = data.current.wind_dir;
      clo_num.innerHTML = data.current.cloud;

      // const a = data.current.condition.icon;
      //  temp_img.style.backgroundImage = "url(`https:${data.current.condition.icon}`)";
      // console.log(a)
    });
};

let btn = document.querySelector(".btn"),
  form = document.querySelector(".form");

// btn.addEventListener("click", showData);
form.addEventListener("submit", showData);

function showData(e) {
  e.preventDefault();
  whether_dis.classList.add("show");
  whether_input.classList.add("show");
  back.classList.add("show");
  fetchData();
  // val_inp= " ";
}

const showInput = () => {
  whether_dis.classList.remove("show");
  whether_input.classList.remove("show");
  back.classList.remove("show");
};

back.addEventListener("click", showInput);
