!function(){var e,n,t=document.getElementById("board"),r=document.querySelectorAll("li"),c=document.getElementById("restart"),i=document.getElementById("reset-1"),a=document.getElementById("reset-2"),l=document.getElementById("player-turn"),o=document.getElementById("alerts"),s=document.getElementById("p1-score"),d=document.getElementById("p2-score"),u={player1:"x",player2:"o"},m=[],f=0,y=0,v=function(){e=0,n=h(),m[0]=new Array(3),m[1]=new Array(3),m[2]=new Array(3);for(var t=0;t<r.length;t++)r[t].addEventListener("click",g,!1);c.addEventListener("click",E,!1),i.addEventListener("click",L,!1),a.addEventListener("click",p,!1)},g=function(){this.removeEventListener("click",g),this.className=n,this.innerHTML=n;var t=this.getAttribute("position").split(",");m[t[0]][t[1]]="x"==h()?1:0,B()&&N(),e++,n=h(),l.className=n},E=function(){k(),v();for(var e=0;e<r.length;e++)r[e].className="",r[e].innerHTML="";l.className=n,o.className=""},L=function(){f=0,s.innerHTML=""},p=function(){y=0,d.innerHTML=""},h=function(){return e%2==0?u.player1:u.player2},B=function(){for(var e=0,n=0;n<m.length;n++){for(var t=0,r=0,c=0;c<m[n].length;c++)t+=m[n][c],r+=m[c][n],"undefined"!=typeof m[n][c]&&e++;var i=m[0][0]+m[1][1]+m[2][2],a=m[0][2]+m[1][1]+m[2][0];if(0==i||0==a||3==i||3==a)return!0;if(0==t||0==r||3==t||3==r)return!0;9==e&&I()}},I=function(){o.className="draw",k()},k=function(){for(var e=0;e<r.length;e++)r[e].removeEventListener("click",g)},N=function(){switch(k(),o.className="p"+h()+"-win",h()){case"x":s.innerHTML=++f;break;case"o":d.innerHTML=++y}};t&&v()}();