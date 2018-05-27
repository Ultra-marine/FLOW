$(function(){

		

  var s = Snap("#svg")
      



   function lS1(x){
   		$("#lS1 g rect").animate({height:x},500)
   }

   function bS2(x){
   	$("#bS2 rect").animate({height:x},500)
   }

   function tP1(x,x2){
   	$("#leftS1 rect").animate({height:x},500)
   	$("#many rect").animate({width:x2},500)
   	$("#littleS2 rect").animate({height:x},500)
   	$("#tV1 rect").animate({width:x},500)
   	$("#littleS3 rect").animate({height:x},500)
   }

   function bB(x,x2,x3,x4,x5){
   	bottle = s.select('#bottleBlock')
   	bottle.animate({
   		transform: "translate(" +0 + "," + x + ")"
   	},800, mina.bounce)
   	s.select("#per3C").animate({
   			transform:"translate(" + 0 + "," + x2 + ")"
   		},1000,mina.bounce)
   	s.select("#per4C").animate({
   			transform:"translate(" + 0 + "," + x2 + ")"
   		},1000,mina.bounce)
   	s.select("#per5").animate({
   			transform:"translate(" + 0 + "," + x3 + ")"
   		},1000,mina.bounce)
   	s.select("#lifering").animate({
   			transform:"translate(" + x4 + "," + 0 + ")"
   		},1000,mina.bounce)
   	s.select("#light").animate({
   			transform:"translate(" + x5 + "," + 0 + ")"
   		},1000,mina.bounce)
   }

   function rS1(x){
   	 road = s.select("#rS1")
   	 $("#rS1 rect").each(function(i=0){
   	 	i++;
   	 	$(this).animate({height:x},200 + i*50)
   	 })
   }

   function tizi(x){
   		$("#tizi rect").each(function(i=0){
   			i++;
   			$(this).animate({
   				height:x
   		},i*200)
   		})
   }

   function lightFlash(){
   		leftRed = setInterval(function(){
   			s.select('#lOne ellipse').attr({
   				fill: "#CE3005"
   			})
   		},700)

   		leftWhi = setInterval(function(){
   			s.select('#lOne ellipse').attr({
   				fill: "white"
   			})
   		},500)
   		rightRed = setInterval(function(){
   			s.select('#rOne ellipse').attr({
   				fill: "#CE3005"
   			})
   		},500)

   		rightWhi = setInterval(function(){
   			s.select('#rOne ellipse').attr({
   				fill: "white"
   			})
   		},700)
   		
   }

   function textShow(){
   			var text = ["Every time you giving blood","is a chance belong others","to survive."]
   			    t1Show = document.getElementById('t1Show'),
   			    i = 0,
   			    timer = setInterval(function(){
   			        t1Show.textContent = text[0].substring(0, i);
   			        t2Show.textContent = text[1].substring(0, i);
   			        t3Show.textContent = text[2].substring(0, i);
   			        i++;
   			       
   			    },60); 
   			}

  

  
  

   //  $("#bigblood").hover(function(){
   // 		$("#bigblood rect").animate({width:800},500)
   // 		lS1(875)
   // 		bS2(875)
   // 		tP1(875,856)
   // 		bB(0,0,-2000,0,-1000)
   // 		rS1(875)
   // 		tizi(856)
   // 		lightFlash()
   // 		textShow()
   		
   // 		},function(){
   // 		$("#bigblood rect").animate({width:3500},500)
   // 		lS1(0)
   // 		bS2(0)
   // 		tP1(0,0)
   // 		bB(5000,-7000,1000,-1800,1500)
   // 		rS1(0)
   // 		tizi(0)
   // 		 clearInterval(timer,leftRed,rightRed,leftWhi,rightWhi);
   // 		textHide()
   		
   // })


    function luelueshow(){
    	$("#bigblood rect").animate({width:350},500)
   		lS1(875)
   		bS2(875)
   		tP1(875,856)
   		bB(0,0,-2000,0,-1000)
   		rS1(875)
   		tizi(856)
   		lightFlash()
   		textShow()
    }

   
    	
    	luelueshow()

    	
     
    	
    $("#navButton").hover(function(){
    		
    		stop(true,true)
    		$("#logo").animate({width:"80%"},5000)
    		$("#bigblood rect").animate({width:"3500px"},5000)
    		lS1(0)
   			bS2(0)
   			tP1(0,0)
   			bB(5000,-7000,1000,-1800,1500)
   			rS1(0)
   			tizi(0)
   			

    	},function(){
    		
    		$("#logo").stop(true,false).animate({width:"100%"},1000)
    		var getHeight = $("#bigblood rect").width()
    		console.log(getHeight)
    		if(getHeight > 1700){
    			luelueshow()
    		}
    		$("#bigblood rect").stop(true,false).animate({width:"350px"},1000)
    	    		
    	})
   
  

    // $("#logo").click(function(){
    // 	luelueshow()
    	
    // })


    

    var per2Hand = anime({
	   targets: '#per2Hand',
	   d:'M788.886,748.594C786.099,778.334 762.164,959.933 549.53,964.407C358.692,968.423 195.856,941.825 160.601,859.218C151.296,837.416 105.324,838.981 77.71,850.419C51.572,861.245 40.939,881.459 37.56,904.474C32.985,935.635 97.653,876.793 115.27,929.827C162.172,1071.02 428.325,1078.24 541.486,1078.24C663.279,1078.24 810.902,1061.8 868.712,939.403C886.945,900.799 890.713,857.154 893.407,814.546C894.794,792.598 895.782,797.154 895.267,775.19L788.886,748.594Z',
	   duration: 1200,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
    var per3eye1 = anime({
	   targets: '#per3E1',
	   d:'M312.613,245.702C293.458,243.14 268.927,237.107 251.192,224.1C261.597,216.77 254.978,216.949 263.252,214.168C266.14,213.198 286.025,208.018 289.027,207.5C291.846,207.014 294.717,206.937 297.576,206.861C305.297,206.655 313.018,206.448 320.738,206.242C335.283,205.853 351.209,205.909 362.486,215.104C364.634,216.855 366.556,218.917 367.93,221.324C369.8,224.598 368.725,235.964 366.12,239.471C361.854,245.214 331.213,248.19 312.613,245.702Z',
	   duration: 800,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });

     var per3eye2 = anime({
	   targets: '#per3E2',
	   d:'M482.185,237.248C502.981,235.849 528.78,231.788 545.606,220.553C537.332,217.773 520.108,212.742 511.833,209.962C508.946,208.991 506.044,208.018 503.041,207.5C500.223,207.014 497.352,206.937 494.492,206.86C486.772,206.654 479.051,206.447 471.33,206.241C456.785,205.853 440.86,205.909 429.583,215.104C427.435,216.855 425.512,218.917 424.138,221.323C422.269,224.598 419.059,233.741 421.664,237.248C421.664,237.248 455.202,239.063 482.185,237.248Z',
	   duration: 800,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
	var per3H1 = anime({
	   targets: '#per3H1C',
	   skewX:'1.6',
	   rotate:'3.5',
	   duration: 800,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
	var per3H2 = anime({
	   targets: '#per3H2C',
	   skewX:'-1.6',
	   rotate:'-2',
	   duration: 1200,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
	var per1eye1 = anime({
	   targets: '#per1E1 path',
	   d:'M116.535,236.763C126.222,237.628 141.616,239.121 146.066,234.67C147.33,233.407 148.341,231.596 147.435,230.05C145.746,227.168 132.374,217.043 114.349,217.099C105.488,217.126 96.529,218.569 88.434,222.17C87.126,222.752 72.142,227.857 72.818,229.878C73.121,230.787 85.919,229.264 86.68,229.366C94.021,230.347 106.637,235.879 116.535,236.763Z',
	   duration: 800,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
    var per1eye2 = anime({
	   targets: '#per1E2 path',
	   d:'M233.061,236.763C216.149,237.741 213.153,236.896 208.532,235.355C206.836,234.79 199.069,231.596 199.975,230.051C201.664,227.169 215.035,217.044 233.061,217.099C241.921,217.127 250.881,218.569 258.976,222.171C260.284,222.753 275.267,227.857 274.592,229.879C274.289,230.787 261.49,229.264 260.729,229.366C253.389,230.347 241.803,236.258 233.061,236.763Z',
	   duration: 800,
	   loop: true,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
    var per1m = anime({
	   targets: '#per1M path',
	   d:'M157.018,357.036C167.108,357.989 161.633,357.144 171.736,356.351C180.464,355.667 179.78,357.55 195.182,355.496C203.946,354.327 212.114,343.993 216.378,336.248C210.566,337.152 204.591,337 198.832,335.801C192.488,334.479 186.002,331.893 179.737,333.551C177.504,334.141 175.427,335.254 173.169,335.744C167.16,337.05 160.716,331.981 154.913,334.018C139.562,339.409 125.528,334.103 125.528,334.103C125.528,334.103 135.797,355.032 157.018,357.036',
	   duration: 800,
	   loop: false,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });
    var per1mBack = anime({
	   targets: '#per1M path',
	   d:'M157.018,357.036C167.108,357.989 161.633,357.144 171.736,356.351C180.464,355.667 179.78,357.55 195.182,355.496C203.946,354.327 216.539,358.415 220.803,350.67C214.991,351.574 204.591,337 198.832,335.801C192.488,334.479 186.002,331.893 179.737,333.551C177.504,334.141 175.427,335.254 173.169,335.744C167.16,337.05 159.84,330.336 154.913,334.018C138.584,346.222 132.307,346.289 132.307,346.289C132.307,346.289 135.797,355.032 157.018,357.036',
	   duration: 800,
	   loop: false,
	   direction: 'alternate',
	   easing: 'easeInCubic',
	   autoplay:false
	 });

$("#per1Group").hover(function(){
	per1eye1.restart()
	per1eye2.restart()
	per1m.restart()
},function(){
	per1eye2.pause()
	per1eye1.pause()
	per1mBack.restart()
})

$("#per2Group").hover(function(){
	per2Hand.play()
	},function(){
	per2Hand.pause()
})

$("#per3Group").hover(function(){
	per3H1.play()
	per3H2.play()
	per3eye1.play()
	per3eye2.play()
},function(){
	per3H1.pause()
	per3H2.pause()
	per3eye1.pause()
	per3eye2.pause()
})

//pOne1











})