let input=document.getElementById('input');
let conv=document.getElementById('conv');
let reset=document.getElementById('reset');
function convert(){ 
    var c= input.value;
    var f=(c*1.8)+32;
    
    document.getElementById('res').innerText=`${c}C=${f}F`
}
function cvrt() {
   var a = input.value;
   var ff= (a-32)*0.55;
   document.getElementById('res').innerText=`${a}F=${ff}C`
}
  
