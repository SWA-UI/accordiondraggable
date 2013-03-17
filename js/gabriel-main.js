$.widget("ui.acordion", {
	  options: {
	       accordion: true,
		   draggable : true,
		   droppable: true
	    },
	    _create: function() {
		
                if(this.options.accordion == true){
					 $("article").accordion();
				}
				
				
				 if(this.options.draggable == true){

					  $(".draggable").draggable({					  					
					  revert: true 					
					  
					  });		 
						
					 
				}
				
				 if(this.options.droppable == true){
					   $( "aside" ).droppable({
					   
					       
							  drop: function( event, ui ) {
							  $('aside').append(ui.draggable);
							  $(ui.draggable).removeAttr("style").removeClass('draggable');
										
						}
				
						
						})

				}
					    
	    }
 
});

