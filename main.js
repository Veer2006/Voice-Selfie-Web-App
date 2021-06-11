var SpeechRecognition= window.webkitSpeechRecognition; //window.webkitSpeechRecognition = web API that converts Speeach--> Text
var recognition= new SpeechRecognition()// API= Application Programming Interface
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    var synth=window.speechSynthesis; // window.speechSynthesis= webAPI that converts Text--> Speech
    speak_data= "Taking selfie in five seconds."
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(cam);
    setTimeout(
        function() {
            take_snapshot();
            save();
        },5000
    ); 
}

Webcam.set({
    width:250,
    height: 200,
    image_format:'png',
    png_quality: 90
});

cam= document.getElementById("camera");
console.log(cam);

function take_snapshot() { //to take picture
    console.log("snapshot");
    Webcam.snap(function(data_URI){
        console.log(data_URI);
        document.getElementById("result").innerHTML="<img src="+data_URI+" id='captured_image'>";
    }) 
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("captured_image").src;
    link.href=image;
    link.click()
}


