function pic4(){
    document.getElementById('pic02').style.zIndex='1' ;
    document.getElementById('pic04').style.zIndex='10';
    document.getElementById('img02').style.filter='grayscale(1)';
    document.getElementById('img04').style.filter='grayscale(0)';
    document.getElementById('img02').style.boxShadow='0.3vw 0.3vw 5px #5a0404';
    document.getElementById('img04').style.boxShadow='0.6vw 0.6vw 5px #5a0404';
}
function pic2(){
    document.getElementById('pic02').style.zIndex='10' ;
    document.getElementById('pic04').style.zIndex='1';
    document.getElementById('img02').style.filter='grayscale(0)';
    document.getElementById('img04').style.filter='grayscale(4)';
    document.getElementById('img02').style.boxShadow='-0.6vw -0.6vw 5px #5a0404';
    document.getElementById('img04').style.boxShadow='-0.3vw -0.3vw 5px #5a0404';
}