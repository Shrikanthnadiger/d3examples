function usersummary(id,text,val){

var p=d3.select(id)
  		.append("svg")
		.attr("width",'400')
		.attr("height",200);
	   p.append("rect")
		.attr("x",30)
		.attr("y",30)
		.attr("width",300)
		.attr("height",100)
		.attr("fill","#af91e1");
	   p.append("text")
		.attr("x",50)
		.attr("y",85)
		.text(text+":"+val)
		.attr("fill","#ffe")
		.attr("font-size","16px");
}

function setdata(data_val,id){	 

svg = d3.select(id)
		.append("svg")
		.attr("width","100%")
		.attr("height",200);

	svg.selectAll("text")
	   .data(data_val)
	   .enter()
	   .append("text")
	   .attr("x",10)
	   .attr("y",function(d,i){return i*30+10;})
	   .attr("font-size",function(d,i){ return (25-(i*3));})
	   .text(function(d){return d.url;});
	
}

function repeat1(r1){
	
if(r1.attr("cx") < 500){
	r1.transition()
  	.delay(500)
  	.duration(500)
  	.attr("r", 30)
    .attr("cx",function(){ return i*500+1000;});
    
     }else{
    r1.transition()
    .attr("r", 10)
    .attr("cx",50);
    }

}

function line(){

var line=p.append("line")
	.attr("x1",150)
	.attr("y1",150)
	.attr("x2",150)
	.attr("y2",150)
	.attr("stroke","black")
	.attr("stroke-width",3);
	return line;

}

function getX(degrees, r, adjust, x) {

	var x = x || r, 
	adj = adjust || 1;
	return x + r * adj * Math.cos(getRad(degrees));
}

function getY(degrees, r, adjust, y) {

	var y = y || r,
	adj = adjust || 1;
	return y + r * adj * Math.sin(getRad(degrees));
}

function getRad(degrees) {

	var adjust = Math.PI / 2;
	return (degrees * Math.PI / 180) - adjust;

}

function repeat(sline,mline,hline){
	var currentTime = new Date();	
	
	var deg=currentTime.getSeconds()*6;
		x2 = getX(deg, 75, 1, 150),
	    y2 = getY(deg, 75, 1, 150);
	    ax=x2+" "+y2;
	sline.attr("x2",x2)
	    .attr("y2",y2);
	
	deg=currentTime.getMinutes()*6;
	x2 = getX(deg, 75, 0.9, 150),
	y2 = getY(deg, 75, 0.9, 150);
	mline.attr("x2",x2)
	      .attr("y2",y2);
	
	deg=(currentTime.getHours()+(currentTime.getMinutes()/60))*30;
	x2 = getX(deg, 75, 0.5, 150),
	y2 = getY(deg, 75, 0.5, 150);
	hline.attr("x2",x2)
	      .attr("y2",y2);
}

function addtext(x,y,t){

	p.append("text")
  	 .attr('x',x)
	 .attr("y",y)
	 .attr("stroke","blue")
	 .attr("font-size",20)
	 .text(t);
}

function addcircle(p,r,c){

	p.append("circle")
	.attr("cx",150)
	.attr("cy",150)
	.attr("r",r)
	.attr("fill",c)
	.attr("stroke","black")
	.attr("stroke-width","3");

}

 function start(){ 

    	d3.select(this).transition()
    	.attr("r", 10)
    	.attr("cx",50); 
    }
