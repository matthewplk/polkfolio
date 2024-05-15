function playButton(){
    count = 0;
    count++;
    if(count % 2 === 0)
    {
        document.getElementById("demo").innerHTML = "ButtonON";
    }
    if(count % 1 === 0)
    {
        document.getElementById("demo").innerHTML = "ButtonOFF";
    }
    console.log(count);
}
  
