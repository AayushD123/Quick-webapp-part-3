
function updateCanvas(){
    background("white");
    sketch = Element_of_array;
    

}
function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
   canvas.mouseReleased(classifyCanvas);
   synth = window.speechSynthesis;
}

function preload()
{
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw()
{
 strokeWeight(13);
 stroke(0);
 if(mouseIsPressed)
 {
     line(pmouseX,pmouseY,mouseX,mouseY)
 }


}

function classifyCanvas()
{
classifier.classify(canvas,gotResult);
}

function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
console.log(results);

document.getElementById("sketch").innerHTML = 'sketch : ' + results[0].sketch;
document.getElementById("score").innerHTML = 'score : ' + Math.round(results[0].score * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].timer);
synth.speak(utterThis);
}

function clearCanvas()
{
 background("white");
}

