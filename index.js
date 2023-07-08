
const containerEl = document.querySelector('.container');
const leftDiv = document.querySelector('.left')
const rightDiv = document.querySelector('.right');

leftDiv.addEventListener('mouseenter', ()=> {
containerEl.classList.add("active-left")
});

leftDiv.addEventListener('mouseleave', ()=> {
containerEl.classList.remove("active-left")
});

rightDiv.addEventListener('mouseenter', ()=> {
  containerEl.classList.add("active-right")
  });
  
  rightDiv.addEventListener('mouseleave', ()=> {
  containerEl.classList.remove("active-right")
  });






