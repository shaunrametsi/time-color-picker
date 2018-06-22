var clock = document.getElementById('clock');
const frame = document.querySelector('.clock-frame');

const secondsHand = document.querySelector('.seconds-hand')
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand   = document.querySelector('.hours-hand');
//analog-clock


function updateClock(){
    var time = new Date();
    
    var hours = time.getHours().toString();
    var minut = time.getMinutes().toString();
    var secos = time.getSeconds().toString();
    
    hours = hours.length < 2 ? '0' + hours: hours;
    minut = minut.length < 2 ? '0' + minut: minut;
    secos = secos.length < 2 ? '0' + secos: secos;  

    var clockText = hours + ' : ' + minut + ' . ' + secos ;
    var hexText = '#' + hours + minut + secos ;
    
    this.clock.textContent = clockText;
    document.body.style.backgroundColor = hexText;
    frame.style.backgroundColor = hexText;
    minutesHand.style.backgroundColor = hexText;
    minutesHand.style.borderColor = hexText;
}

function updateAnalog(){
    var time = new Date();

    var hours    = time.getHours();
    var minutes  = time.getMinutes();
    var seconds  = time.getSeconds();
    console.log(time);
    const secDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secDegrees}deg)`;
    console.log(minutes);
    const minuteDeg = ((minutes / 60 ) *360) +(seconds/60)+ 90;
    minutesHand.style.transform = `rotate(${minuteDeg}deg)`;
    
    
    const hoursFormatted = hours < 12 ? hours = hours : hours - 12 ;
    const hDeg = (((hoursFormatted + minutes / 60) / 12) * 360)+ 90;
    hoursHand.style.transform = `rotate(${hDeg}deg)`;
}

function RunAll()
{
    updateClock();
    updateAnalog();
}

setInterval(RunAll,1000);

