/* --------------------------------------------------------- */
/* --------------- CAMBIO DE NAV AL SCROLLEAR -------------- */
/* --------------------------------------------------------- */

const navScrollChange=()=>{
    if(window.scrollY > 200){
        document.querySelector("nav").classList.add("scrolledNav");
    }else{
        document.querySelector("nav").classList.remove("scrolledNav");
    }
}

window.addEventListener("scroll", navScrollChange);

/* --------------------------------------------------------- */
/* ------------------ SCRIPT ROMPECABEZAS ------------------ */
/* --------------------------------------------------------- */

let puzzleImg1 = document.getElementById("puzzleImg1");
let puzzleImg2 = document.getElementById("puzzleImg2");
let puzzleImg3 = document.getElementById("puzzleImg3");
let puzzleDropBox1 = document.getElementById("puzzleDropBox1");
let puzzleDropBox2 = document.getElementById("puzzleDropBox2");
let puzzleDropBox3 = document.getElementById("puzzleDropBox3");

//Leer el id y src de la imagen que comience a arrastrar
puzzleImg1.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("Text", puzzleImg1.id)});
puzzleImg2.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("Text", puzzleImg2.id)});
puzzleImg3.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("Text", puzzleImg3.id)});
puzzleImg1.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("URL", puzzleImg1.src)});
puzzleImg2.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("URL", puzzleImg2.src)});
puzzleImg3.addEventListener("dragstart",(e)=>{e.dataTransfer.setData("URL", puzzleImg3.src)});

//Para habilitar el evento drop al soltar las imágenes sobre las cajas
puzzleDropBox1.addEventListener("dragover", (e)=>{e.preventDefault()});
puzzleDropBox2.addEventListener("dragover", (e)=>{e.preventDefault()});
puzzleDropBox3.addEventListener("dragover", (e)=>{e.preventDefault()});

//Función al soltar sobre la primera caja
puzzleDropBox1.addEventListener("drop", (e)=>{
    //Agrega la imagen y quita el texto:
    puzzleDropBox1.style.backgroundImage = "url(" + e.dataTransfer.getData("URL") + ")";
    puzzleDropBox1.innerHTML="";
    //Quita la visibilidad de la imagen que se arrastró
    document.getElementById(e.dataTransfer.getData("Text")).style.display = "none";
    //Limpia el dataTransfer
    e.dataTransfer.clearData;
})

//Función al soltar sobre la segunda caja
puzzleDropBox2.addEventListener("drop", (e)=>{
    //Agrega la imagen y quita el texto:
    puzzleDropBox2.style.backgroundImage = "url(" + e.dataTransfer.getData("URL") + ")";
    puzzleDropBox2.innerHTML="";
    //Quita la visibilidad de la imagen que se arrastró
    document.getElementById(e.dataTransfer.getData("Text")).style.display = "none";
    //Limpia el dataTransfer
    e.dataTransfer.clearData;
})

//Función al soltar sobre la tercera caja
puzzleDropBox3.addEventListener("drop", (e)=>{
    //Agrega la imagen y quita el texto:
    puzzleDropBox3.style.backgroundImage = "url(" + e.dataTransfer.getData("URL") + ")";
    puzzleDropBox3.innerHTML="";
    //Quita la visibilidad de la imagen que se arrastró
    document.getElementById(e.dataTransfer.getData("Text")).style.display = "none";
    //Limpia el dataTransfer
    e.dataTransfer.clearData;
})