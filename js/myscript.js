function mouseOver(id) {
    var elem = document.getElementById(id);
    var pos = 0;
    function mouseOut() {
        clearInterval(id);
        elem.style.backgroundColor = 'rgba(222,222,222,'+ 0 + ')';
        elem.removeEventListener("mouseout", mouseOut);
    }
    elem.addEventListener("mouseout", mouseOut);
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 80) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.backgroundColor = 'rgba(222,222,222,'+ (1.0*pos/100) + ')';
        }
    }

}
