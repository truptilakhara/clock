var deg = 6 ;
const hh = document.querySelector("#hr");
const mn = document.querySelector("#min");
const sc = document.querySelector("#sec");
setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hh.style.transform = `rotateZ(${hr + mm / 12}deg)`;

  mn.style.transform = `rotateZ(${mm}deg)`;

  sc.style.transform = `rotateZ(${ss}deg)`;
});
