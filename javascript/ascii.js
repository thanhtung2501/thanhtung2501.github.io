let interval;
let speed = 250;
let animationArr;

window.onload = pageLoad;

function pageLoad() {
    document.getElementById('start').onclick = startAnimation;
    document.getElementById('stop').onclick = stopAnimation;
    document.getElementById('animation').onchange = changeAnimation;
    document.getElementById('fontsize').onchange = changeFontSize;
    document.getElementById('turbo').onclick = adjustSpeed;
}

function startAnimation() {
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('animation').disabled = true;

    if (animationArr === undefined || animationArr.length === 0) {
        animationArr = document.getElementById('text-area').value.split('=====\n');
    }
    interval = updateInterval;
    interval();
}

function updateInterval() {
    interval = setInterval(function() {
        displayAnimation();
    }, speed);
}

function displayAnimation() {
    let firstAni = animationArr.shift();
    document.getElementById('text-area').value = firstAni;
    animationArr.push(firstAni);
}

function stopAnimation() {
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('animation').disabled = false;
    
    clearInterval(interval);
    changeAnimation();
}

function changeAnimation() {
    let animationVal = document.getElementById('animation').value;
    document.getElementById('text-area').value = ANIMATIONS[animationVal];
}

function changeFontSize() {
    let fontSizeVal = document.getElementById('fontsize').value;
    document.getElementById('text-area').style.fontSize = fontSizeVal;
}

function adjustSpeed() {
    let turboEle = document.getElementById('turbo');
    speed = turboEle.checked ? 50 : 250;

    clearInterval(interval);

    updateInterval();
}