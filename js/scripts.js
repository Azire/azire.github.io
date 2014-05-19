$(function($){
				
		$.supersized({
		
			// Functionality
			slide_interval          :   6000,		// Length between transitions
			transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed		:	700,		// Speed of transition
													   
			// Components							
			slide_links		:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			slides 			:  	[			// Slideshow Images
					{image : 'img/bg/bgh4.jpg', title : 'Image Credit: Cody Schroeder', thumb : 'img/bg/bgh4.jpg', url : '../index.html'},  
					{image : 'img/bg/bgh.jpg', title : 'Image Credit: Cody Schroeder', thumb : 'img/bg/bgh.jpg', url : '../index.html'},  
					{image : 'img/bg/bgh2.jpg', title : 'Image Credit: Cody Schroeder', thumb : 'img/bg/bgh2.jpg', url : '../index.html'},  
					{image : 'img/bg/bgh3.jpg', title : 'Image Credit: Cody Schroeder', thumb : 'img/bg/bgh3.jpg', url : '../index.html'},  
					{image : 'img/bg/bgh5.jpg', title : 'Image Credit: Cody Schroeder', thumb : 'img/bg/bgh5.jpg', url : '../index.html'},  
					]
			
		});
    });