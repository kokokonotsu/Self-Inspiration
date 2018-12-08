function radialMenu (){
    var radialButton = document.getElementById("radial-button"),
    wrapper = document.getElementById("radial-wrap"),
    overlay = document.getElementById("radial-overlay");
    var open = false;
    radialButton.addEventListener("click", handler, false);
    radialButton.addEventListener("focus", handler, false);
    wrapper.addEventListener("click", rwHandle, false);

    function rwHandle(e){
        e.stopPropagation();
    }

    function handler(e){
        if(!e) var e = window.event;
        e.stopPropagation();

        if(!open){
            openNav();
        } else {
            closeNav();
        }
    }
    function openNav(){
        open = true;
        radialButton.innerHTML = "-";
        overlay.classList.add("radial-overlay-on");
        wrapper.classList.add("radial-opened");
    }
    function closeNav(){
        open = false;
        radialButton.innerHTML = "+";
        overlay.classList.remove("radial-overlay-on");
        wrapper.classList.remove("radial-opened");
    }
    document.addEventListener("click", closeNav);
};
window.addEventListener("load", radialMenu);