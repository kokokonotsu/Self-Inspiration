document.onmousemove = trackCursorPos;
function trackCursorPos(event) {
    var eventDoc, doc, body, pageX, pageY;
    // var pointerVerticalLeft = document.getElementById("pointer-vertical-left");
    // var pointerVerticalRight = document.getElementById("pointer-vertical-right");
    // var pointerHorizontalTop = document.getElementById("pointer-horizontal-top");
    // var pointerHorizontalBottom = document.getElementById("pointer-horizontal-bottom");
    event = event || window.event; //For IE

    if(event.pageX == null && event.clientX != null){
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }
    // pointerVerticalLeft.style.top = event.pageY - 15 + "px";
    // pointerVerticalRight.style.top = event.pageY - 15 + "px";
    // pointerHorizontalTop.style.left = event.pageX - 15 + "px";
    // pointerHorizontalBottom.style.left = event.pageX - 15 + "px";

}