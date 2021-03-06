document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


/*imgs*/


function changeImg(){
  let num = Math.floor(Math.random()*(26-1) + 1)
  document.querySelector(".draws").src=`/img/${num}.png`
  console.log(num)
}

if(window.innerWidth < 768){
  console.log(window.innerWidth)
  setInterval(changeImg, 2000)
}else if(window.innerWidth >= 768){
  clearInterval()
}


/*scroll*/
ScrollReveal().reveal(".about", {
  duration :1800,
  reset:true,
}); 

ScrollReveal().reveal(".imgDetail", {
  duration :1800,
})

ScrollReveal().reveal(".about-detail",{
  duration : 2000,
  scale : 1.1,
})

ScrollReveal().reveal(".title",{
  duration:2500,
  scale : 2.8,
})

