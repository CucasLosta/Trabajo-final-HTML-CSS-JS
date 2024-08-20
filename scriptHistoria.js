const navScrollChange=()=>{
    if(window.scrollY > 200){
        document.querySelector("nav").classList.add("scrolledNav");
    }else{
        document.querySelector("nav").classList.remove("scrolledNav");
    }
}

window.addEventListener("scroll", navScrollChange);

// Controles para el video
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const video = document.querySelector("video");

playButton.addEventListener('click',()=>{video.play()});
pauseButton.addEventListener('click',()=>{video.pause()});


/* ----------------------- */
/* -------- VIDEO -------- */
/* ----------------------- */
const videoFooterStr = document.getElementById("videoFooterStr");

let timeTransform=(inputTime)=>{ //Funcion que da formato mm:ss a variables float de cantidad de segundos
    let elapsedMinutes;
    let elapsedSeconds;
    let elapsedTime;
    
    elapsedMinutes = parseInt(inputTime / 60);
    elapsedSeconds = parseInt(inputTime % 60);

    elapsedTime = elapsedMinutes.toString().padStart(2, '0') + ":" + elapsedSeconds.toString().padStart(2, '0');

    return elapsedTime;
}

//Espera a que cargue la metadata del video para acceder a su duración y la coloca en el footer
video.addEventListener('loadedmetadata',()=>{
    const videoDuration = video.duration;
    videoFooterStr.textContent = "Duración video " + timeTransform(videoDuration);
});

//Si el video comenzó a reproducirse, en su footer muestra el tiempo transcurrido
playButton.addEventListener('click', ()=>{setInterval(()=>{videoFooterStr.textContent = timeTransform(video.currentTime)}, 1000)});