let toggleBtn = document.getElementById('toggle');
let navbar = document.getElementById('header__navbar');
let body = document.getElementById('body');
toggleBtn.addEventListener('click', ()=>{
  toggleBtn.classList.toggle('active');
  navbar.classList.toggle('active');
  body.classList.toggle('active');
  
});


// Security Section Slider and image Changer
const itme1 = document.getElementById('item1');
const itme2 = document.getElementById('item2');
const itme3 = document.getElementById('item3');
const itme4 = document.getElementById('item4');

itme2.style.display = 'none';
itme3.style.display = 'none';
itme4.style.display = 'none';

function changer(id){
  let item = 'item';
  targeted = item+id;
  console.log(targeted);
  itme1.style.display = 'none';
  itme2.style.display = 'none';
  itme3.style.display = 'none';
  itme4.style.display = 'none';
  document.getElementById(targeted).style.display  = 'flex';
  /*
  This code is also valid for the upper code
  if(id == 1){
    itme1.style.display = 'flex';
    itme2.style.display = 'none';
    itme3.style.display = 'none';
    itme4.style.display = 'none';
  } else if(id == 2){
    itme1.style.display = 'none';
    itme2.style.display = 'flex';
    itme3.style.display = 'none';
    itme4.style.display = 'none';
  } else if(id == 3){
    itme1.style.display = 'none';
    itme2.style.display = 'none';
    itme3.style.display = 'flex';
    itme4.style.display = 'none';
  }else{
    itme1.style.display = 'none';
    itme2.style.display = 'none';
    itme3.style.display = 'none';
    itme4.style.display = 'flex';
  }
  */
}




// Filter images for solution section

const navbtn = document.querySelectorAll('.navbtn');
const imageItem = document.querySelectorAll('.solution .items .item');

for(let i = 0; i < navbtn.length; i++){
    navbtn[i].addEventListener('click', function(){
      for(let j = 0; j < navbtn.length; j++){
        navbtn[j].classList.remove('active');
      }
      this.classList.add('active');

      let targetNavbtn = this.getAttribute('data-filter');
      for(let x = 0; x < imageItem.length; x ++){
        imageItem[x].classList.remove('active');
        imageItem[x].classList.add('delete');
        
        if(imageItem[x].getAttribute('data-item') == targetNavbtn || targetNavbtn == 'all'){
          imageItem[x].classList.remove('delete');
          imageItem[x].classList.add('active');
      }
    }
  })
}


