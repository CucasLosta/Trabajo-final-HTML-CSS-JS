const navScrollChange=()=>{
    if(window.scrollY > 200){
        document.querySelector("nav").classList.add("scrolledNav");
    }else{
        document.querySelector("nav").classList.remove("scrolledNav");
    }
}

window.addEventListener("scroll", navScrollChange);