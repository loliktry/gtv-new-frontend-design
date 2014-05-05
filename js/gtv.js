// GTV Singleton (Only need one class to control this thing)
$(document).ready(function(){
	
		var GTV = {
				 				 
				 init: function() {					 	
																	
						this.mobileLeftHamburgerMenuSlideInOut();
															
						this.loadTooltips();
						
						this.loadMainTopHomePageCarousel();
							
						this.loadTouchSwipeGrabCarousels();// All other carousels except the home page main one.																																							
						 
						this.loadAdTagsFromBottom();
						
						this.loadVideoPlayer();																 						 						
				},	
				
								
				/************************************************************************************
				*	For Mobile Only *
				* 	Slide out functionality for hamburger menu, using third party library -> 
				*	bigSlide() -> http://ascott1.github.io/bigSlide.js/
				*************************************************************************************/
				mobileLeftHamburgerMenuSlideInOut: function() {						
						$('.menu-link').bigSlide();
						
						// browse menu slide up/down toggle 
						$('.browse i , .browse a.slide').on('touchstart click', function(e){
							e.stopPropagation(); e.preventDefault();
								
							 $('.browse-menu').toggleClass('browse-open');				 
						});			
				},
				
							
				/****************************************************************************************************				
				*	Bootstrap tooltip Opt-in functionality must have a initializer. -> (http://getbootstrap.com/javascript/)
				*****************************************************************************************************/
				loadTooltips: function() {
						$("[data-toggle=tooltip]").tooltip();					
				},
				
				
				/************************************************************************************
				* 	Using third party library -> bxSlider -> (http://bxslider.com/)
				*************************************************************************************/
				loadMainTopHomePageCarousel: function() {						
						$('.bxslider').show().bxSlider({			  
							  useCSS: false,
							  preventDefaultSwipeY: false,			  
							  auto: true,
							  pause: 10000,
							  adaptiveHeight: true			  
						});	
				},
				
				
				/************************************************************************************
				* 	Using third party library -> Owl Carousels -> (http://owlgraphic.com/owlcarousel/)
				*************************************************************************************/
				loadTouchSwipeGrabCarousels: function() {						
						$(".video-entry-row").owlCarousel({															    											
							itemsDesktopSmall : [900,3],
							itemsTablet: [600,2], //2 items between 600 and 0
							itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option				      			
							lazyLoad : true,
							navigation : true,
							navigation: true,
							navigationText: [
							  "<i class='fa fa-chevron-left fa-lg'></i>",
							  "<i class='fa fa-chevron-right fa-lg'></i>"
							 ],
							 scrollPerPage: true
						  }); 
						  
						  $(".channel-entry-row").owlCarousel({										    				
							items: 8,
							itemsDesktop : [1199,6],
							itemsDesktopSmall : [979,4],
							itemsTablet: [600,3], //2 items between 600 and 0				
							itemsMobile : [400,2], // itemsMobile disabled - inherit from itemsTablet option				      			
							lazyLoad : true,
							navigation : true,
							navigation: true,
							itemsScaleUp:true,
							navigationText: [
							  "<i class='fa fa-chevron-left fa-lg'></i>",
							  "<i class='fa fa-chevron-right fa-lg'></i>"
							]
						  }); 	
						  
						  //$(".big").parent().parent().addClass("big-video");
						  //$(".big").css("height","auto");							  					 						 
				},
				
				
				/************************************************************************************
				* 	Pull ad tags loaded at bottom and throw them in there proper place in the DOM
				*************************************************************************************/
				loadAdTagsFromBottom: function() {						
						$("#ads-hidden").children("script").remove();			
						$('.ad-tag').html($("#ads-hidden").html());
				},
				
				
				/*****************************************************************************************************************
				* 	Load Video Player Media Element.js (HTML5 Video player with Flash Fallback --> (http://mediaelementjs.com/)
				******************************************************************************************************************/
				loadVideoPlayer: function() {
						// jQuery method
						$('video').mediaelementplayer();					
				}
		};
		
		// Start it up		
		GTV.init();		
});