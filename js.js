// let enddate = "20 August 2023 10:00Pm";
// document.getElementById('end_date').innerText = enddate;
let inputs = document.querySelectorAll('input');
let diff = 0;


function clock() {
    let end = new Date("20 August 2023 10:00")
    let now = new Date()
    diff = (end - now) / 1000;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
clock();


setInterval(() => {
    clock();
}, 1000)