CouldTag = {};

CouldTag.words = [];
CouldTag.wordsSize = [];
CouldTag.width = 250;
CouldTag.TimeoutId = null;

CouldTag.onStart = function(){
	if(CouldTag.TimeoutId){
		clearTimeout(CouldTag.TimeoutId);
		CouldTag.TimeoutId = null;
	}
	CouldTag.TimeoutId = setTimeout(CouldTag.onDraw,500);
}

CouldTag.onDraw = function(){

	CouldTag.width = $("#keywords").width();
	CouldTag.height = $("#keywords").height();
	$("#keywords").html("");
	// console.log(CouldTag.words);
	// draw(CouldTag.words);
	if(d3.layout && d3.layout.cloud){
		d3.layout.cloud().size([CouldTag.width, CouldTag.height])
		.words(CouldTag.words.map(function(d) {
		return {text: d.keyword, size: d.size,rotate : d.rotate};
		}))
		.rotate(function(d) { return ~~(Math.random() * 2) * 90; })
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
console.log($("#bodyWrapper").width()+"keywords");
		d3.select("#keywords").append("svg")
			.attr("width", CouldTag.width) //*10/10
			.attr("height", CouldTag.height)//*15/10
			.append("g")
			.attr("transform", "translate(135,"+$("#bodyWrapper").height()*1.5/5+")scale(1.1,1.1) ")
			.selectAll("text")
			.data(words)
			.enter().append("text")
			.style("font-size", function(d) { return d.size + "px"; })
			.style("font-family", "Impact")
			.style("fill", function(d, i) { return fill(i)})//"rgb(31, 119, 180)"
			// .style("fill","rgb(31, 119, 180)")
			.attr("text-anchor", "middle")
			.attr("transform", function(d) {
				return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
			})
			.text(function(d) { return "#"+d.text; })
			.on("mousedown",App.onClickEachKeyword);
  }