




function doit(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KLjmqmJ0a/model.json', outofspace);
}

function outofspace(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
        
    }else{
        console.log(results);
        rr=Math.floor(Math.random()*255)+1;
        gg=Math.floor(Math.random()*255)+1;
        bb=Math.floor(Math.random()*255)+1;

        document.getElementById("r1").innerHTML="I can hear - "+results[0].label;
    document.getElementById("r2").innerHTML="accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("r1").style.color="rgb("+rr+","+gg+","+bb+")";
    document.getElementById("r2").style.color="rgb("+rr+","+gg+","+bb+")";
    i1=document.getElementById("p1");
    i2=document.getElementById("p2");
    i3=document.getElementById("p3");
    i4=document.getElementById("p4");

    if(results[0].label=="BANG"){
        i1.src='aliens-01.gif';
        i2.src='aliens-02.png';
        i3.src='aliens-03.png';
        i4.src='aliens-04.png';
    }
    else if(results[0].label=="CLAP"){
    i1.src='aliens-01.png';
    i2.src='aliens-02.gif';
    i3.src='aliens-03.png';
    i4.src='aliens-04.png';
} else if(results[0].label=="SNAP"){
i1.src='aliens-01.png';
i2.src='aliens-02.png';
i3.src='aliens-03.gif';
i4.src='aliens-04.png';
} else{
    i1.src='aliens-01.png';
    i2.src='aliens-02.png';
    i3.src='aliens-03.png';
    i4.src='aliens-04.gif';
}
}
}