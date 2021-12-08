var header = document.getElementById('header');
window.addEventListener('scroll', ()=>{
    var scroll= window.scrollY
    if(scroll>10){
        header.style.backgroundColor = 'rgb(16, 49, 65)'
    } else{
        header.style.backgroundColor = 'transparent'
    }
})


function mostrar1() {
    document.getElementById('op').style.backgroundColor = "transparent";
    document.getElementById('op').style.color = "black";
    document.getElementById('op1').style.backgroundColor = "transparent";
    document.getElementById('op1').style.color = "black";
    document.getElementById('cloud').style.backgroundColor = "rgb(16, 10, 49)";
    document.getElementById('cloud').style.color = "white";
};
function mostrar2() {
    document.getElementById('cloud').style.backgroundColor = "transparent";
    document.getElementById('cloud').style.color = "black";
    document.getElementById('op1').style.backgroundColor = "transparent";
    document.getElementById('op1').style.color = "black";
    document.getElementById('op').style.backgroundColor = "rgb(16, 10, 49)";
    document.getElementById('op').style.color = "white";
};
function mostrar3() {
    document.getElementById('cloud').style.backgroundColor = "transparent";
    document.getElementById('cloud').style.color = "black";
    document.getElementById('op').style.backgroundColor = "transparent";
    document.getElementById('op').style.color = "black";
    document.getElementById('op1').style.backgroundColor = "rgb(16, 10, 49)";
    document.getElementById('op1').style.color = "white";
};