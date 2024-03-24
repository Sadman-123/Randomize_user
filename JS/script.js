let btn=document.querySelector('button');
let card=document.getElementById('id');
let img=document.querySelector('img');
let nam=document.getElementById('nam');
let mail=document.getElementById('mail');
btn.addEventListener('click',()=>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>{
        img.src=data.results[0].picture.medium;
        nam.innerText=`${data.results[0].name.first} ${data.results[0].name.last}`;
        mail.innerText=data.results[0].email;
    })
    .catch(e=>console.log(e))
    card.style.display="block";
})