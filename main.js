prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

var classifier=  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iDvxufmXx/model.json",model_loaded)

function model_loaded(){
    console.log("model_laoded")
}

 function check() {
   image= document.getElementById("captured_image") 
   classifier.classify(image, gotResult)
 }



 function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("status").innerHTML= results[0].label;
        prediction_1= results[0].label;
        if(results[0].label == "Entry Accepted"){
            document.getElementById("update_emoji").innerHTML= "&#x1F637;";

        }
        if(results[0].label == "Entry Denied"){
            document.getElementById("update_emoji").innerHTML= "&#x26d4;";
        }
    }
 }
