document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


/*imgs*/
function changeImg(){
  let num = Math.floor(Math.random()*(26-1) + 1)
  document.querySelector(".draws").src=`/img/${num}.png`
  console.log(num)
}

/*scroll*/
ScrollReveal().reveal(".about", {
  duration :1800,
  scale : 2,
  reset:true,
}); 

ScrollReveal().reveal(".imgDetail", {
  duration :1800,
  reset:true,
})

ScrollReveal().reveal(".about-detail",{
  duration : 2000,
  scale : 1.1,
  reset:true,
})



