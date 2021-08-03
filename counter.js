let counter = 0;
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent () {
   console.log(this.id)
   this.id == "increase" ? counter += 1 :  counter -= 1;
   counterDOM.innerHTML = counter 
   }

let list = ["HTML", "CSS", "JS", "React"]
const userlist = document.querySelector("#userlist")

for (let index = 0; index < list.length; index++) {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = list [index]
    userlist.appendChild(liDOM)
    
}