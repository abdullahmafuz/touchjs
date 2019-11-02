
var i=0
var divs = document.getElementById("maindiv")
 window.addEventListener("wheel", event => {



	if(event.deltaY > 1){
		divs.children[i].id='hide';
		i++;
		
		if(i > divs.children.length -1){
				i=0;
			}
			if(i < 1){
				i=0;
			}	
			
			divs.children[i].id='show';
	 }

	 if(event.deltaY < 1){
		
	
		divs.children[i].id='hide';
		i--;
		if(i > divs.children.length -1){
			i=0;
		}
		if(i < 0){
			i= divs.children.length -1 ;
		}
		divs.children[i].id='show';
		
		
	 }
	
 });



window.addEventListener('keydown' , e =>{

	


	if(event.key === 'ArrowDown'){
		divs.children[i].id='hide';
		i++;
		
		if(i > divs.children.length -1){
				i=0;
			}
			if(i < 1){
				i=0;
			}	
			
			divs.children[i].id='show';
	 }

	 if(event.key === 'ArrowUp'){
		
	
		
		divs.children[i].id='hide';
		i--;
		if(i > divs.children.length -1){
			i=0;
		}
		if(i < 0){
			i= divs.children.length -1 ;
		}
		divs.children[i].id='show';
		
		
	 }
})
var start;
var end ;

window.addEventListener('touchstart' , event=>{
	start = event.changedTouches[0].screenY
})

window.addEventListener('touchend' , event=>{
	end = event.changedTouches[0].screenY
	   
	   

	   if(start < end){
		divs.children[i].id='hide';
		i++;
		
		if(i > divs.children.length -1){
				i=0;
			}
			if(i < 1){
				i=0;
			}	
			
			divs.children[i].id='show';
	 }

	 if(start > end){
		
	
		divs.children[i].id='hide';
		i--;
		if(i > divs.children.length -1){
			i=0;
		}
		if(i < 0){
			i= divs.children.length -1 ;
		}
		divs.children[i].id='show';
		
		
	 }
})