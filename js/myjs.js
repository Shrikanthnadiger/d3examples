usersummary("#ch1","Total Number of Users",100);
usersummary("#ch3","Total Number of Looks",1000);
	

var svg = d3.select("#ch2")
			.append("svg")
  			.attr("width", 400)
  			.attr("height", 200)
  			.append("g")
  			.attr("transform", "translate(200,100)");

var dataset=[{"val":55},{"val":45}];
var color = d3.scale.ordinal()
      		  .range(["#98abc5", "#ffffff"]);
var pie = d3.layout
 	   	    .pie()
		    .sort(null) 
		    .value(function(d) { return d.val; });    
var arc = d3.svg
            .arc()
    		.outerRadius(100)
    		.innerRadius(70);
var g =  svg.selectAll(".arc")
    	    .data(pie(dataset))
    		.enter()
    		.append("g")
    		.attr("class", "arc");

  		   g.append("path")
    		.attr("d", arc)
    		.style("fill", "#fff")
    		.transition()
    		.delay(function (d, i) { return i*300; })
    		.style("fill", function(d) { return color(d.data.val); });

   		   g.append("text")                                     
    		.attr("text-anchor", "middle")                          
    		.text("Total Active Users:55");

	    svg=d3.select("#lookh")
	  		.append("svg")
			.attr("width","100%")
			.attr("height",50);
		
		svg.append("text")
	   		.attr("x",200)
	   		.attr("y",30)
	   		.attr("font-size","30px")
	   		.attr("text-anchor","middle")
	   		.text("Most Recent Looks");


svg = d3.select("#lookph").append("svg")
		.attr("width","100%")
		.attr("height",50);
		
		svg.append("text")
	   .attr("x",200)
	   .attr("y",40)
	   .attr("font-size","30px")
	   .attr("text-anchor","middle")
	   .text("Most Popular Look of Today");
	
svg = d3.select("#lookpd").append("svg")
		.attr("width","100%")
		.attr("height",50);
		
	svg.append("text")
	   .attr("x",200)
	   .attr("y",30)
	   .attr("font-size","20px")
	   .attr("text-anchor","middle")
	   .text("www.gmail.com");	 

$.ajax({
	url:"../data.json",
	contentType: "application/json; charset=utf-8",
	dataType: "text",
	success:function(result){
		var r=JSON.parse(result);
		setdata(r.urlval,"#lookd");
	}
});	   

var color = ["blue", "black", "red"];
var sampleSVG = d3.select("#viz")
    			  .append("svg")
    			  .attr("width", 500)
    			  .attr("height", 100);    
    i=0;
r=sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 10)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("click",start);

    

setInterval(function(){repeat1(r);},1);



p=d3.select("#clock").append("svg")
	.attr("width",'300')
	.attr("height",300);

addcircle(p,100,"lightblue");
addcircle(p,5,"black");

textvalues=[[183,83,1],[215,112,2],[228,157,3],[216,198,4],[187,228,5],[145,240,6],[100,230,7],[73,198,8],[63,155,9],[64,115,10],[95,85,11],[135,70,12]];
for(i=0;i<12;i++){

addtext(textvalues[i][0],textvalues[i][1],textvalues[i][2]);

}

s_line=line();
m_line= line();
h_line= line();

	p.append("g")
  	 .attr("transform", "translate(" + 150 + "," + 150 + ")");

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d; }); 
   
repeat(s_line,m_line,h_line);
setInterval(function(){repeat(s_line,m_line,h_line);},1000);
