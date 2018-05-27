$(function(){

	var sentense = [
						 'Do not fear',
						 'FEAR',
						 'RED',
						 'Circle cell',
						 'PEOPLE',
						 'PUBLIC',
						 'VESSEL',
						 'NEEDLE!!',
						 'SYTRINGE',
						 'Cotton applicator',
						 'WHITE COAT',
						 'Lets help other people',
						 'That will be honor',
						 'Never do that',
						 'No way',
						 'You should try',
						 'Is it really true?',
						 'Why me?',
						 'BLOOD',
						 'you will find yourself',
						 'HOPE',
						 'HELP',
						 '???',
						 'Next time',
						 'Maybe other will do that',
						 'Unhealthy',
						 'DANGEROUS',
						 'HIV',
						 'I fear the needle',
						 '?',
						 '!',
						 '...',
						 'Busy',
						 'PATIENTS',
						 'SAVING LIFE'
						]
	var ArrayLength = sentense.length - 1					

function makeText(x){
	
	for(var i=0;i<x;i++){
		$("#textArea").append('<p></p>')
		var count = $("#textArea p").length
		if(count>150){
			break
		}
	}
	$("#textArea p").each(function(){
		
		var r = "text" 
		var rSenten = Math.floor(Math.random()*ArrayLength+1)
		var rSize = Math.floor(Math.random()*5+1)
		var r3 = Math.floor(Math.random()*100+1)
		var r4 = Math.floor(Math.random()*100+1)
			$(this)
			.fadeIn(0)
			.attr({"class":r})
			.css({
				"position":"absoulute",
				"transform": "translate(" + r4*10 + "px," + r3*10 + "px)",
				"font-size": rSize + "em"
			})
			.typetype(sentense[rSenten])
		})
}

$("#textArea p").hover(function(event) {
	alert("1")
});

		

	


$("#textButton").hover(function(){
	$("#textArea p").remove()
	makeText(600)
	},function(){

	$("#textArea p").each(function(){
		$(this).fadeOut(50000)
		

	})
	
})	

	
	var s1 = Snap("#svg1")
	cellbutton = $("#cellMaker")
	var pathGroup = s1.selectAll('path')
	pathGroup.attr({
		fill:'none',
		stroke:'none'
	})

	var cir = s1.use('cell').attr({fill:'#fff'})
	var num = 0

	
 cellbutton.mousemove(function(e) { 
      
          var target = e.target || e.srcElement,
          rect = target.getBoundingClientRect(),
          btWidth = rect.right - rect.left,
          offsetX = e.clientX -  rect.left;
          
          
          var cenX = btWidth / 2;
            
            
          var goX = [cenX - offsetX];
           
          
          var mouseX =  Math.abs(Math.floor(goX-cenX)); //0-400的
          
          	var dySpeed = mouseX/40,
          		dySize = mouseX*1.3-250;
          
   			var lineNum = Math.floor(Math.random()*13)
   			var ranSize = Math.floor(Math.random()*dySize+25)
   			var ranSpeed = Math.floor(Math.random()*dySpeed+2)
   			// var ranColorN = Math.floor(Math.random()*ranColorG.length)
   			var lengthLine = Snap.path.getTotalLength(pathGroup[lineNum])
   			var cir = s1.circle(0,-200,ranSize).attr({fill:'none'})

   			
   			
   			Snap.animate(0, lengthLine, function(val) {
   			    var point = Snap.path.getPointAtLength(pathGroup[lineNum], val); // 根据path长度变化获取坐标
   			    var m = new Snap.Matrix();
   			    m.translate(point.x, point.y);
   			    // m.rotate(point.alpha-90); 
   			    m.scale(-val/1500);
   			    cir.transform(m).attr({
   					// fill:ranColorG[ranColorN]
   					fill:'#ca4c45'
   				})

   			}, ranSpeed*350, mina.easeout(), function() {
   			    cir.remove()
   			});  

   			num ++
   		
   			$("#count #span1").html(num*13)   
   			 
 		  
      })


 	// var s2 = Snap("#svg2")
 	// 	bloodC = s2.paper.rect(0, 10, 300, 500, 10).attr({fill:"#C6DBDA"})
 	// 	blood = s2.paper.rect(10, 400, 280, 100, 10).attr({fill:"url('#color1')"})
 	// 	light = s2.paper.rect(260, 50, 10, 400, 10).attr({fill:"white"})

 	// var BloodG = g(bloodC,blood,light)	















})