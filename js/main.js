$(function(){
	function setBoxWidth(x,L){
		var box = $("#box")
		boxWidth = x
		box.css({
			width: boxWidth,
			height: 0,
			left:L
		});
	}

	$(window).load(function(){
		navgo()
		if($(window).width() < 1000){
			box100 = $(window).width()
			offsetLeft = $('#start').width()
			setBoxWidth(box100,-offsetLeft)
			changePadding(0)
			$("#blood").css('display','none')
		}else {
			setBoxWidth($(".Acontainer").width(),0)
			changePadding(100)
			$("#blood").css('display','block')
		}
	})


	// if($(window).width() < 1000){
	// 		box100 = $(window).width()
	// 		offsetLeft = $('#start').width()
	// 		setBoxWidth(box100,-offsetLeft)
	// 		changePadding(0)
	// 	}else {
	// 		setBoxWidth($(".Acontainer").width(),0)
	// 		changePadding(100)
	// 	}
	

	var flow1 = $("#flow1"),
		flow2 = $("#flow2"),
		flow3 = $("#flow3"),
		flow4 = $("#flow4");
	
	
	$(".flowli h5").css('display','none')

	function changePadding(x){
		$('#navC1').css({paddingLeft:x + 'px',
							  paddingRight:x + 'px'
							})
		$('.Acontainer').css({paddingLeft:x + 'px',
							  paddingRight:x + 'px'
							})
	}

	$(window).resize(function(){
		// navback()
		if($(window).width() < 1000){
			box100 = $(window).width()
			offsetLeft = $('#start').width()
			setBoxWidth(box100,-offsetLeft)
			changePadding(0)
		}else {
			setBoxWidth($(".Acontainer").width(),0)
			changePadding(100)
		}
		
	})	

	

	$("#start").hover(function(event) {
		$("#startP").css('animation-play-state','paused')
		$(".flowli").stop(true)
		// $("#oriContent").css('transform','translateY(200px)')
		$(".flowli a").css('display','block')
		$("#oriContent").animate({
			height:'0'
		},500,'easeInOutExpo')
		 navgo()
		 
	},function(){

		$("#startP").css('animation-play-state','running')
		$(".boxContent").css('display','none');
		$(".flowli").stop(true)
		$(".flowli a").css('display','none')
		// paopao.selectAll('circle').remove()
		$("#blood").css('height',0)
		// $("#box").stop(true, true).animate({
		// 	height:0
		// }, 1500)

		 navback()
		 $('html, body').animate({scrollTop:50}, 'middle');
	});//开始hover事件

	



	$(".flowli").hover(function() {
		
		contentN = $(this).attr('id');
		Num = contentN.replace(/[^0-9]/ig,"")-1;

		$(".boxContent").css('display','none');
		thisBox = $(".boxContent").eq(Num)
		thiscolor = thisBox.find('.row1').css('background-color');
		thisBox.css('display','block').delay(1000)
		$("#blood").css('background-color',thiscolor)
		// $("#box").stop(true, false).animate({
		// 	height:'1000px'
		// }, 1500)
		
		// console.log(navHeight[Num])
	}, function() {
		
	});//流块hover事件




	if($(window).width() < 1200){
		$(window).load(function(){
			navgo()
			$("#flow1c").css('display','block')
		})
		
		$("#start").click(function(event) {
						navgo()
		});

		$("#flow2").click(function(){
			var oncepaopao = setInterval(function(){
						
						var ranColorN = Math.floor(Math.random()*ranColorG.length)
			   			var lineNum = Math.floor(Math.random()*5)
			   			var ranSize = Math.floor(Math.random()*20+1)
			   			var ranSpeed = Math.floor(Math.random()*10+1)
			   			
			   			var lengthLine = Snap.path.getTotalLength(pathGroup[lineNum])
			   			var cir = paopao.circle(-10,0,ranSize).attr({fill:'none'})
			   			Snap.animate(1,0,function(size){
			   				cir.attr({
			   					transform:"scale(" + size + ")",
			   					fill:ranColorG[ranColorN]
			   				})
			   			})
			   			Snap.animate(0, lengthLine, function(val) {
			   			    var point = Snap.path.getPointAtLength(pathGroup[lineNum], val); // 根据path长度变化获取坐标
			   			    var m = new Snap.Matrix();
			   			    m.translate(point.x, point.y);
			   			    m.rotate(point.alpha-90); // 使飞机总是朝着曲线方向。point.alpha：点的切线和水平线形成的夹角
			   			    cir.transform(m);
			   			}, ranSpeed*200, mina.easeout(), function() {
			   			    console.log('animation end');
			   			});        
			   			    
			   			
			   			    },200); 
			function movePaopao(){
				clearInterval(oncepaopao)
			}
			setTimeout(movePaopao,5000)

		})

		

	}//移动设备点击事件

	$(window).scroll(function(){
		height = $("#pot").offset().top;
		
	
		// if(height > 0 & height < 1500){
		// 	$("#blood").css('height',height+100)
		// }
	})// 卷屏函数，左侧高度动画	

			
			function navgo(){
				width1 = $(".Acontainer").width()
				stop(true, true)
				flow4.animate({
					width:width1
				},1000,'easeInOutExpo')
				flow3.animate({
					width:width1*0.75
				},1200,'easeInOutExpo')
				flow2.animate({
					width:width1*0.5
				},1400,'easeInOutExpo')
				flow1.animate({
					width:width1*0.25
				},1600,'easeInOutExpo')
				$("#blood").css('height','250px')

				
			}


			function navback(){
				
				stop(true, true)

				flow4.delay(10).animate({
					width:0
				},1200,'easeInOutExpo')
				flow3.delay(100).animate({
					width:0
				},900,'easeInOutExpo')
				flow2.delay(250).animate({
					width:0
				},700,'easeInOutExpo')
				flow1.delay(350).animate({
					width:0
				},500,'easeInOutExpo')
				
				$("#blood").css('backgroun-color','#CE3005')
			}

	
	// var T = $("#type")
	// $("#start").mouseover(function(){
	// 	T
	// 	.typetype('OPEN THE NAVIGATION TO VIEW THE ENTIRE WEB, PLEASE.')
	// 	.delay(1000)
	// 	.backspace(100)
  
	// })

	$("#slogen p").typetype(
		'DON’T FEAR',
			{
				callback:function(){
					$("#slogen span")
					.typetype('PAINLESS')
					.delay(1000)
					.backspace(24)
					.typetype('TO TRUST OTHERS')
					.delay(1000)
					.backspace(24)
					.typetype('RUMOUR')
				}
			}
		)

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
		
		var r = "text" + Math.floor(Math.random()*10+1)
		var rSenten = Math.floor(Math.random()*ArrayLength+1)
		var rSize = Math.floor(Math.random()*3+1)
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


$("#flow4c a").hover(function(){

	makeText(100)
},function(){

	$("#textArea p").each(function(){
		$(this).fadeOut(2000)
		$(this).delay(3000,function(){$("#textArea p").remove()})

	})
	
})	

var paopao = Snap("#svgPaopao")
	xian = Snap("#xian")

var pathGroup = paopao.selectAll('path')
	pathGroup.attr({
		fill:'none',
		stroke:'none'
	})

var ranColorG = [
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#RED)',
   				'url(#PLATELET)',
   				'url(#WHITE)',
   				'url(#WHITE)',
   				'url(#RED)'
   				]


 paopaobutton = $("#paopaoButton")
 paopaobutton.mousemove(function(e) { 
      
          var target = e.target || e.srcElement,
          rect = target.getBoundingClientRect(),
          btWidth = rect.right - rect.left,
          offsetX = e.clientX -  rect.left;
          
          
          var cenX = btWidth / 2;
            
            
          var goX = [cenX - offsetX];
           
          
          var mouseX =  Math.abs(Math.floor(goX-cenX)); //0-400的
          
          	var dySpeed = mouseX/40,
          		dySize = mouseX/6;
          
   			var lineNum = Math.floor(Math.random()*5)
   			var ranSize = Math.floor(Math.random()*dySize+1)
   			var ranSpeed = Math.floor(Math.random()*dySpeed+2)
   			var ranColorN = Math.floor(Math.random()*ranColorG.length)
   			var lengthLine = Snap.path.getTotalLength(pathGroup[lineNum])
   			var cir = paopao.circle(-10,0,ranSize).attr({fill:'none'})
   			// Snap.animate(1,0.3,function(size){
   			// 	cir.attr({
   			// 		transform:"scale(" + size + ")"
   					
   			// 	},1000)
   			// })
   			Snap.animate(0, lengthLine, function(val) {
   			    var point = Snap.path.getPointAtLength(pathGroup[lineNum], val); // 根据path长度变化获取坐标
   			    var m = new Snap.Matrix();
   			    m.translate(point.x, point.y);
   			    m.rotate(point.alpha-90); 
   			    m.scale(0.5);
   			    cir.transform(m).attr({
   					fill:ranColorG[ranColorN]
   				})

   			}, ranSpeed*250, mina.easeout(), function() {
   			    cir.remove()
   			});        
   			       
   			  
        
 		  
      })

 paopaobutton.mouseout(function() {
 	// var s0 = new Snap.Matrix();
 	// 	s0.scale(0.3)
 	// paopao.selectAll('circle').animate({
 	// 	'transform':s0
 	// },2000,mina.easein,function(){
 	// 	paopao.selectAll('circle').remove()
 	// })
 		
 	
 })//移出后清除泡泡

	

	
			







})//结束··