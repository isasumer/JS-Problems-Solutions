let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick )

let renk = document.querySelector("#renk")
renk.addEventListener("mouseover", domOver)

let kod = document.querySelector("#kod");

function domOver () {
    renk.style.color =getRandomColor()
    greeting.style.color = getRandomColor()
}

function domClick() {

    this.style.color = getRandomColor()
}

function getRandomColor(){
    let letters= "0123456789ABCDEF";
    var color1 ="#"
    for (let i=0; i<6; i++) {
        color1 += letters[Math.floor(Math.random()*16)];

    }
    kod.innerHTML = color1;
    return color1;
}

let colorbox= document.querySelector("#select")
let renkbox= document.querySelector("#renkbox")
colorbox.addEventListener("change", selectBox)




function selectBox(event){
    console.log("Etkinlik tipi : " + event.type);
    console.log("deger : " + event.target.value);
    renkbox.innerHTML += event.target.value;
    renkbox.style.color=`${event.target.value}`
}