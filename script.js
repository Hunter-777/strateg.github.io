var cristal=0;
var gold=0;
var stone=1000;
var pole;
var dgold=0;
var dcrist=0;
var kletka=[[],[]];
for(i=0;i<9;i++){
    for (j=1;i<10;j++){
        kletka[i][j]=0;
    }
}
for(i=0;i<11;i++){
    c=Math.floor(Math.random()*9);
    t=Math.floor(Math.random()*10);
    IDpic=document.getElementById("s"+c+"r"+t);
    IDpic.src="img/raslom.jpg"
    kletka[t][c]=1;   
};
for(i=0;i<5;i++){
    c=Math.floor(Math.random()*9);
    t=Math.floor(Math.random()*10);
    IDpic=document.getElementById("s"+c+"r"+t);
    IDpic.src="img/cristal.jpg"
    kletka[t][c]=2;   
};
function workgold(){
    gold=gold+dgold;
    gold.innerHTML="Your gold: "+gold;
};
function workcrist(){
    cristal=cristal+dcrist
    cristal.innerHTML="Your cristals: "+cristal;
};
function smena(stolb,row){
    
    if(kletka[stolb-1][row-1]=1 && stone>=500){
        pole=document.getElementById('s'+stolb+'r'+row);
        pole.src="img/minework.jpg";
        dgold=dgold+10;
        workgold();
        stone=stone-500
        stone.innerHTML="Your matirials: "+stone;
    }
    if(kletka[stolb-1][row-1]=2 && gold>=500){
        pole=document.getElementById('s'+stolb+'r'+row);
        pole.src="img/Crystal_Mine.jpg";
        dcrist=dcrist+10;  
        workcrist() 
        gold=gold-500
        gold.innerHTML="Your gold: "+gold;
    }
    if(kletka[stolb-1][row-1]=0 && stone>=10000 && gold>=1000 && cristal>=100){
        pole=document.getElementById('s'+stolb+'r'+row);
        pole.src="img/castle.png";
        dcrist=dcrist+10;   
        gold=gold-1000;
        cristal=cristal-100;
        stone=stone-10000;
        gold.innerHTML="Your gold: "+gold;
        stone.innerHTML="Your matirials: "+stone;
        cristal.innerHTML="Your cristals: "+cristal;
        alert("Победа!")
    }
    else{
        alert('Недостаточно ресурсов!')
    }
};
interval=setInterval(workgold,1000);
interval=setInterval(workcrist,1000);