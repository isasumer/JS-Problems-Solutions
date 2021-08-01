let username = prompt("Kullanıcı Bilginizi Yazınız");
let info = document.querySelector("#info")

info.innerHTML= `${username.length > 0 ? username : "Kullanıcı bilgisi bulunamadı"}`;