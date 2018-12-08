document.onmousemove = trackCursorPos;
function trackCursorPos(event) {
    var eventDoc, doc, body, pageX, pageY;
    var pointer = document.getElementById("pointer");
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
    pointer.style.top = event.pageY - 25 + "px";
    
}