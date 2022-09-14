// 1. Ödev JS dosyası

// name handling
let myName = document.querySelector("#myName");
let promptName = prompt("Adınız nedir?");
promptName = promptName ? promptName : "Anonim";
myName.innerHTML = promptName;


// clock handling
function showTime() {
    let myClock = document.querySelector("#myClock");
    let day = new Date().getDay();
    let time = new Date().toLocaleTimeString();

    day = (
        day == 0 ? "Pazar" :
        day == 1 ? "Pazartesi" :
        day == 2 ? "Salı" :
        day == 3 ? "Çarşamba" :
        day == 4 ? "Perşembe" :
        day == 5 ? "Cuma" :
        "Cumartesi"
    );

    myClock.innerHTML = time + " " + day;
    setTimeout(showTime, 1000);
}

showTime();

// let myClock = document.querySelector("#myClock");
// let today = new Date();
// let day = today.getDay();
// let time = new Date().toLocaleTimeString();

// day = (
//     day == 0 ? "Pazar" :
//     day == 1 ? "Pazartesi" :
//     day == 2 ? "Salı" :
//     day == 3 ? "Çarşamba" :
//     day == 4 ? "Perşembe" :
//     day == 5 ? "Cuma" :
//     "Cumartesi"
// );

// myClock.innerHTML = time + " " + day;
