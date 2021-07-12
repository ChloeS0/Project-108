https://teachablemachine.withgoogle.com/models/x0ILziNmG/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("webcam_output").innerHTML="<img id='img' src='"+data_uri+"'>";
    })
}
console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x0ILziNmG/model.json", model_loaded);

function model_loaded()
{
    console.log("model loaded works :D");
}

function speak()
{
    api=window.speechSynthesis;
     speak_data1="The prediction means" + prediction1;
    utterThis= new SpeechSynthesisUtterance(speak_data1);
    api.speak(utterThis);
}

function check()
{
    img=document.getElementById("img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
if (error)
{
    console.error(error);
} else{
    console.log(results);
    document.getElementById("gesture_name").innerHTML=results[0].label;
    prediction1=results[0].label;
    speak();
    if(prediction1=="amazing")
    {
        document.getElementById("gesture_emoji").innerHTML="&#128076;"
    }
    if(prediction1=="best")
    {
        document.getElementById("gesture_emoji").innerHTML="&#128077;"
    }
    if(prediction1=="victory")
    {
        document.getElementById("gesture_emoji").innerHTML="&#9996;"
    }

}
}