const words=document.querySelector(".words");
const time=document.querySelector(".time");
const custom=document.querySelector(".custom");

console.log(words);

const a1=document.querySelector(".one");
const a2=document.querySelector(".thirdpart li .two");
const a3=document.querySelector(".thirdpart li .three");
const a4=document.querySelector(".thirdpart li .four");
words.addEventListener('click', ()=>{
   event.preventDefault();
    a1.innerHTML=" 10";
    a2.innerHTML=" 25";
    a3.innerHTML=" 50";
    a4.innerHTML=" 100";
    const b=words.classList.toggle('active');
    const b1=time.classList.toggle('active');
    const b2=custom.classList.toggle('active');
    if(b1){
        time.classList.remove('active');
    }if(b2){
        custom.classList.remove('active');
    }
    console.log(b);
    
});
time.addEventListener('click', ()=>{
    event.preventDefault();
     a1.innerHTML=" 15";
     a2.innerHTML=" 30";
     a3.innerHTML=" 60";
     a4.innerHTML=" 120";
     const b=words.classList.toggle('active');
     const b1=custom.classList.toggle('active');
     if(b){
        words.classList.remove('active');
     }if(b1){
        custom.classList.remove('active');
     }
     console.log(b);
     
 });
