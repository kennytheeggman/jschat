var socket = io();
socket.on("receive",(message) => {
    var cnt = document.createElement("TR");
    var usr = document.createElement("TH");
    var msg = document.createElement("TD");
    usr.innerHTML=message.name;
    usr.setAttribute("class","user");
    msg.innerHTML=message.msg;
    cnt.setAttribute("class","message");
    cnt.appendChild(usr);
    cnt.appendChild(msg);
    document.getElementById("msgcont").appendChild(cnt);
});
document.addEventListener("keypress", (event) => {
    if(event.keyCode==13) {
        send();
    }
});
function send() {
    if (document.getElementById("namebox").value==""){
        alert("Message is invalid");
    }
    else {
        socket.emit("send",{name:document.getElementById("namebox").value,msg:document.getElementById("inputbox").value});
        document.getElementById("inputbox").value="";
    }
}