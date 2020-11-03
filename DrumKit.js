
function removeTransition(e){
  e.target.classList.remove('playing');
}

window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return ;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

var keys = document.querySelectorAll('.block');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
