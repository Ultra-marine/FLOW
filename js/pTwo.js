$(function(){
  
  $("#picPlay2").height($("#cellLeft").height())
  $(window).resize(function(){
      var infoHeight = $("#cellLeft").height()
      console.log(infoHeight)
      $("#picPlay2").height(infoHeight)
  })
	

  var s = Snap("#cellSvg")
      
  var button = $('#cellNav li:eq(0)')
  var button2 = $('#cellNav li:eq(1)')
  var button3 = $('#cellNav li:eq(2)')


 
  

  function makeCell(X1,X2,X3){

    var cellA = new Array()
    var cellB = new Array()
    var cellC = new Array()
    for(var i=0;i<X1;i++){
      cellA[i] = s.paper.use("#cell1")
    }

    for(var i=0;i<X2;i++){
      cellB[i] = s.paper.use("#cell2")
    }

    for(var i=0;i<X3;i++){
      cellC[i] = s.paper.use("#cell3")
    }

     function go(tar,x,y,xT,yT,scale,canX,canY){
            tar.animate({
              transform:"t" +  parseInt([-x*xT]-canX) + "," + parseInt([-y*yT]-canY) + "s" + scale + "," + scale
            },700,mina.easein);
            // console.log(parseInt([-x*xT]-canX))
      }
  

      button.mousemove(function(e) { 
      
          var target = e.target || e.srcElement,
          rect = target.getBoundingClientRect(),
          btWidth = rect.right - rect.left,
          btHeight = rect.top - rect.bottom,
          offsetX = e.clientX -  rect.left,
          offsetY = e.clientY - rect.top;
          
          var cenX = btWidth / 2,
            cenY = btHeight / 2;
            
          var goX = [cenX - offsetX] / 0.5,
            goY = [cenY - offsetY] / 1 ;
 
          go(cellA[0],goX, goY,1,1,1,0,0)
          go(cellA[1],goX, goY,-1,1.3,0.8,0,0)
          go(cellA[2],goX, goY,6,2,0.5,0,0)
          go(cellA[3],goX, goY,4,1.3,0.7,50,120)
          go(cellA[4],goX, goY,2.5,1,1.1,-50,-150)
      })  
      button2.mousemove(function(e) { 
        
        var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect(),
            btWidth = rect.right - rect.left,
            btHeight = rect.top - rect.bottom,
            offsetX = e.clientX -  rect.left,
            offsetY = e.clientY - rect.top;
            
            var cenX = btWidth / 2,
              cenY = btHeight / 2;
              
            var goX = [cenX - offsetX] / 0.2,
              goY = [cenY - offsetY] / 0.4 ;
            
            
          go(cellB[0],goX, goY,2,0.5,0.8,20,50)
          go(cellB[1],goX, goY,0.8,0.8,1,0,0)
      })
      button3.mousemove(function(e) { 
        
        var target = e.target || e.srcElement,
        rect = target.getBoundingClientRect(),
            btWidth = rect.right - rect.left,
            btHeight = rect.top - rect.bottom,
            offsetX = e.clientX -  rect.left,
            offsetY = e.clientY - rect.top;
            
            var cenX = btWidth / 2,
              cenY = btHeight / 2;
              
            var goX = [cenX - offsetX] / 0.5,
              goY = [cenY - offsetY] / 0.8 ;
            
            function goC(x,y){
              c1.animate({
                transform:"t" + -x*3 + "," + -y
              },2500,mina.easein);
        }

    go(cellC[0],goX, goY,1,1,1,0,0)
    go(cellC[1],goX, goY,1.2,0.8,0.8,120,100)
    go(cellC[2],goX, goY,2,1.3,0.9,-250,150)
    go(cellC[3],goX, goY,3,1.7,1,210,10)
    go(cellC[4],goX, goY,5,4,0.9,70,-50)
    go(cellC[5],goX, goY,3,4,1.2,-50,50)
    go(cellC[6],goX, goY,7,2,0.7,20,250)
    go(cellC[7],goX, goY,5,3,0.9,120,50)

    })  


  }

  makeCell(5,2,8)
 
 
  
  

        

      

   
    
    
    
    
   
    var cp1 = $("#cp1"),
        cp2 = $("#cp2"),
        cp3 = $("#cp3"),
        show = $("#picPlay2 img");

        function rePic(x){
          show.attr('src','img/cell' + x + '.svg')
        }
        cp1.hover(function(){
          rePic(4)
        })
        cp2.hover(function(){
          rePic(5)
        })
        cp3.hover(function(){
          rePic(6)
        })


})