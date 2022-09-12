function ktra(a){
    if(a<2){
        return false;
    }
    var i;
    for(i=2; i<=Math.sqrt(a);i++){
        if (a%i == 0){
            return false;    
        }
    }
    return true;
}
document.getElementById("Find").onclick=function(){
    var num=document.getElementById("number").value*1;
    var i;
    kq="";
    for (i=1;i<=num;i++){
        if (ktra(i)==true){
            kq = kq+ " " + i;
        }
    }
    document.getElementById("nto-number").innerHTML=kq;
}