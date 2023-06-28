const myface=document.getElementById("face-img");
let faceRotationDegrees = 0;
let faceClickCount = 0;

myface.addEventListener("click",function (){
    myface.style.transform="rotate(360deg)";
    faceRotationDegrees += 360;
    faceClickCount++;
    myface.style.transform = `rotate(${faceRotationDegrees}deg)`;
    if (faceClickCount % 2 != 0) {
        myface.style.borderRadius = "2%";
    }else{
        myface.style.borderRadius = "50%";
    }

    if (faceClickCount=== 32){
        myface.src = "resources/img/javier/javier-2.png";
    }
});

