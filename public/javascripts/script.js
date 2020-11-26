document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


function changeImg(){
  let num = Math.floor(Math.random()*(26-1) + 1)
  document.querySelector(".draws").src=`/img/${num}.png`
  console.log(num)
}


