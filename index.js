let inp = document.querySelector("input")
let btn = document.querySelector("button")
let graduEl = document.getElementById("gradus")
let city = document.querySelector(".city")
let body = document.querySelector("body")
let oclock = document.querySelector(".oclock-value")

console.log(oclock);
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"tashkent"}&units=metric&appid=${key}`)
.then(res => res.json())
.then(data => {
    graduEl.innerHTML = Math.floor(data.main.temp) + " °C"
    city.innerHTML = data.name
})
setInterval(() => {
    let nowDate=new Date()
    oclock.innerHTML=nowDate.getFullYear() +" year ,"+((nowDate.getMonth()+1)<10?"0"+(nowDate.getMonth()+1):(nowDate.getMonth()+1)) +" month ,"+(nowDate.getDate()<10?"0"+nowDate.getDate():nowDate.getDate()) +" day"
    
}, 1000);

let weatherFunc = () => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
        .then(res => res.json())

        .then(data => {
            graduEl.innerHTML = Math.floor(data.main.temp) + " °C"
            city.innerHTML = data.name
            body.style.background= `url(https://source.unsplash.com/1600x900/?${inp.value})`
            inp.value=""

        })

        .catch(err=>{
            alert("Siz xato bo`lgan mamlakat nomini kiritdingiz yoki malumot kiritmadingiz")
            inp.value=""    
        })
}
btn.addEventListener("click", weatherFunc)
