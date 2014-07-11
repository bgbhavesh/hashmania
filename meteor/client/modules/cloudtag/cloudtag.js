CouldTag = {};

CouldTag.words = [];
CouldTag.wordsSize = [];
CouldTag.width = 250;
CouldTag.TimeoutId = null;
CouldTag.onStart = function(){
	if(CouldTag.TimeoutId){
		clearTimeout(CouldTag.TimeoutId);
	}
	CouldTag.TimeoutId = setTimeout(CouldTag.onDraw,500);
}
CouldTag.onDraw = function(){
	console.log($("#keywords").width())
	CouldTag.width = $("#keywords").width();
	$("#keywords").html("");
	// console.log(CouldTag.words);
	// draw(CouldTag.words);
	if(d3.layout && d3.layout.cloud){
		d3.layout.cloud().size([CouldTag.width, CouldTag.width])
		.words(CouldTag.words.map(function(d) {
		return {text: d, size: 20 + Math.random() * 50};
		}))
		.rotate(function() { return ~~(Math.random() * 2) * 90; })
		.font("Impact")
		.fontSize(function(d) { return d.size; })
		.on("end", draw)
		.start();
	}
	CouldTag.TimeoutId = null;
}
// [".NET", "Silverlight", "jQuery", "CSS3", "HTML5", "JavaScript", "SQL","C#"]
var fill = d3.scale.category20();
	

	function draw(words) {
// console.log($("#keywords").width()+"keywords");
		d3.select("#keywords").append("svg")
			.attr("width", $("#keywords").width()*9/10)
			.attr("height", $("#keywords").width()*12/10)
			.append("g")
			.attr("transform", "translate("+$("#keywords").position().left*2+","+$("#keywords").position().top*2+")scale(0.9,1.1) ")
			.selectAll("text")
			.data(words)
			.enter().append("text")
			.style("font-size", function(d) { return d.size + "px"; })
			.style("font-family", "Impact")
			.style("fill", function(d, i) { return fill(i); })
			// .style("fill","rgb(31, 119, 180)")
			.attr("text-anchor", "middle")
			.attr("transform", function(d) {
				return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
			})
			.text(function(d) { return d.text; })
			.on("mousedown",App.onClickEachKeyword);
  }