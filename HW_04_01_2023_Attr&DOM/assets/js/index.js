
const btnHandler=({target:{dataset:{position}}})=>{
document.querySelector('.blockBox').style.flexDirection=position;
} 

const btns=document.querySelectorAll('.wrapper button');
for (const btn of btns) {
  btn.addEventListener('click',btnHandler);
}

