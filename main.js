Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
Webcam.attach("webcam_1");

camera = document.getElementById("webcam_1");
data_uri = "downarrow.png";

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" height="100%" width="100%" src="'+data_uri+'">';
    });
}

console.log("ml5 version ==> ",ml5.version);

classifier = ml5.imageClassifier("teachablemachine.withgoogle.com/models/LWnRhtAsx/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

window.addEventListener("keydown",function(e){
    if(e.keyCode == '13'){
        take_snapshot();
        console.log("Snapshot taken");
    }
});