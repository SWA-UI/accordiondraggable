$.widget("ui.acordion", {
	  options: {
	           accordion: true,
		   draggable : true,
		   droppable: true,
		   element_accordion: ".accordion",
		   element_draggable: ".draggable",
		   element_droppable: ".droppable"
	    },
	    _create: function() {
	    	this._isAcordion();
	    	this._isDraggable();
	    	this._isDroppable();
		    
	    },
	    
	    _isAcordion: function(){
	        if(this.options.accordion == true){
				 $(this.options.element_accordion).accordion();
			}
	        return this.options.accordion;
	    },
	    
	    _isDraggable: function(){
		   	if(this.options.draggable == true){
				  $(this.options.element_draggable).draggable({					  					
				  revert: "invalid", 			
				  helper: "clone"
			  });		 	 
		    }
		   	return this.options.draggable;
	    },
	    
	    _isDroppable: function(){
			 if(this.options.droppable == true){
				   $(this.options.element_droppable).droppable({     
						  drop: function( event, ui ) {
					      var elemento_dragg = ui.draggable.clone();
					      $(this).append(elemento_dragg);
						  $(elemento_dragg).removeAttr("style").removeClass('draggable');				
					      }		
					});
			 }
			 return this.options.droppable;
	    }
 
});

