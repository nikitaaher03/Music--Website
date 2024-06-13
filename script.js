
let songIndex =0;
let audioElement=new Audio('song/song1.mp3');
let masterplay=document.getElementById('masterplay');
let progressBar=document.getElementById('progressBar');
let audioElement1=new Audio('song/song5.mp3');
let song1=document.getElementById('1')
let audioElement2=new Audio('song/song2.mp3');
let song2=document.getElementById('2')
let audioElement3=new Audio('song/song4.mp3');
let song3=document.getElementById('3')
let audioElement4=new Audio('song/song3.mp3');
let song4=document.getElementById('4')


masterplay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterplay.classList.remove('bx','bxs-right-arrow');
      masterplay.classList.add('bx-pause');
   }
   else{
      audioElement.pause();
      masterplay.classList.add('bx','bxs-right-arrow');
      masterplay.classList.remove('bx','bx-pause');
   }
})

song1.addEventListener('click',()=>{
   if(audioElement1.paused || audioElement1.currentTime<=0){
      audioElement1.play();
      song1.classList.remove('bx','bxs-right-arrow');
      song1.classList.add('bx','bx-pause');
   }
   else{
      audioElement1.pause();
      song1.classList.add('bx','bxs-right-arrow');
      song1.classList.remove('bx','bx-pause');
   }
})

song2.addEventListener('click',()=>{
   if(audioElement2.paused || audioElement2.currentTime<=0){
      audioElement2.play();
      song2.classList.remove('bx','bxs-right-arrow');
      song2.classList.add('bx','bx-pause');
   }
   else{
      audioElement2.pause();
      song2.classList.add('bx','bxs-right-arrow');
      song2.classList.remove('bx','bx-pause');
   }
})

song3.addEventListener('click',()=>{
   if(audioElement3.paused || audioElement3.currentTime<=0){
      audioElement3.play();
      song3.classList.remove('bx','bxs-right-arrow');
      song3.classList.add('bx','bx-pause');
   }
   else{
      audioElement3.pause();
      song3.classList.add('bx','bxs-right-arrow');
      song3.classList.remove('bx','bx-pause');
     
   }
})

song4.addEventListener('click',()=>{
   if(audioElement4.paused || audioElement4.currentTime<=0){
      audioElement4.play();
      song4.classList.remove('bx','bxs-right-arrow');
      song4.classList.add('bx','bx-pause');
   }
   else{
      audioElement4.pause();
      song4.classList.add('bx','bxs-right-arrow');
      song4.classList.remove('bx','bx-pause');
   }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

const menuOpen=document.getElementById('menu-open');
const menuClose=document.getElementById('menu-close');
const sidebar=document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', ()=>sidebar.style.left='0');
menuClose.addEventListener('click', ()=>sidebar.style.left='-100%');