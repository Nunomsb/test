$(document).ready(function(){
	$.fn.exists = function(){return this.length>0;}

	if (window.PIE) {
        $('.ie-fix, .btn, .btn-default, .btn-info, .info-link, .info-block .btn-group a, .step-tabs .subtitle .num, .info-holder .ico span, .subscribe-form .txt, .student-box .btn-group a, .step-tabs .btn-list li a .btn-more, .fact-slider .slides .ico').each(function() {
			PIE.attach(this);
		});
	}

	$(".main-nav>li").has("ul").addClass("has-child");

	if ($('.tabs-01').exists()) {
		$('.tabs-01').tabs({
			create: function(){
				$('.tabs-01 .nav-tabs li').addClass('none-bg');
			},
			activate:function(){
				$('.tabs-01 .nav-tabs li').removeClass('none-bg');
			}
		});
	}

	$(".tabs-01 .ui-tabs-nav").appendTo( ".tabset" );

	if ( $('.tabs-01 .nav-tabs').exists()) {
		$('.tabs-01 .tabarea').hide();
		$('.tabs-01 .nav-tabs a').click (function(){
				$('.tabs-01 .tabarea').slideDown();
				$('.tabs-01 .nav-tabs li').removeClass('none-bg');
				return false;
		});
	}

	if ( $('.tabs-01 .close').exists()) {
		$('.tabs-01 .close').click (function(){
			$('.tabs-01 .tabarea').slideToggle();
			$('.tabs-01 .nav-tabs li').addClass('none-bg');
			return false;
		})
	}

	if ($(window).width() <= 767) {
		$(".tabs-01").tabs( "disable" );
	}
	$('.move-btn').click(function(){

		var pos = $(this).hasClass('next') ? $(window).scrollTop() + $(window).height() : 0;
		$('html, body').animate({
			scrollTop: pos
		}, 1000);
		return false;
	});
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('#page > .move-btn').removeClass('next');
		}
		else {
			$('#page > .move-btn').addClass('next');
		}
		//
		if ($(this).scrollTop() > 702) {
            $('#page > .move-btn').fadeOut();
        } else {
            $('#page > .move-btn').fadeIn();
        }
	});
	$(window).resize(function(){
		if ($(window).width() <= 767) {
			$(".tabs-01").tabs( "disable" );
		}
	});
/* moved to scripts_top.js 
	if ($('.gallery-01').exists()) {
		$(".gallery-01").flexslider ({
			animation: "slide",
			slideshow: false,
			useCSS: false,
			controlNav: false
		});
	}

	$('.gallery .slides li').each(function(e) {
		var bg_ = 'url(' + $(this).find('img').attr('src') + ')';
		$(this).css('background-image', bg_);
	})

	if ($('.gallery-04').exists()) {
		$(".gallery-04").flexslider ({
			animation: "fade",
			smoothHeight: true,
			slideshow: false,
			useCSS: false,
			selector: ".slideset > .slide",
			manualControls: ".sub-nav li",
			directionNav: false
		});
		$(".gallery-controls .sub-nav li").click(function(){
			if ($(window).width()<768){
				$('.gallery-04').flexslider("next")
			}
		})
	};
*/

	function getGridSize() {
		return (window.innerWidth < 767) ? 1 :
			(window.innerWidth < 1204) ? 4 : 4;
	}
	if ($('.gallery-02').exists()) {
		$('.gallery-02').flexslider({
			animation: "slide",
			itemWidth: 301,
			itemMargin: 0,
			slideshow: false,
			useCSS: false,
			controlNav: false,
			minItems: getGridSize(),
			maxItems: getGridSize()
		});
	}

    if ($('.gallery-05').exists()) {
        $('.gallery-05').flexslider({
            animation: "slide",
            itemWidth: 0,
            itemMargin: 0,
            animationLoop: false,
            slideshow: false,
            useCSS: false,
            controlNav: false,
            minItems: 1,
            maxItems: 0
        });
    }
    	
	if ($('.gallery-02').exists()) {
		$(window).resize(function(){
			var gridSize = getGridSize();
			$('.gallery-02').data('flexslider').setOpts({
				minItems: gridSize,
				maxItems: gridSize
			});
		});
	}
	function getGridSize2() {
		return (window.innerWidth < 767) ? 1 :
			(window.innerWidth < 1024) ? 3 : 5;
	}


	if ($('.fancybox-01').exists()) {
		$(".fancybox-01").fancybox({
			padding: 0,
			arrows: true
		});
	}

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			});
		},
		play: function() {
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../swf/jplayer.swf",
		supplied: "webmv, ogv, m4v",
		size: {
			width: "434px",
			height: "236px",
			cssClass: "jp-video-236p"
		},
		smoothPlayBar: true,
		keyEnabled: true
	});

	if ($(window).width() <= 1024) {
		$("#jquery_jplayer_1").jPlayer ({
			size: {
				width: "391px",
				height:"212px"
			}
		})
	}

	$(window).resize(function(){
		if ($(window).width() <= 1024 && $.jPlayer) {
			$("#jquery_jplayer_1").jPlayer ({
				size: {
					width: "391px",
					height:"212px"
				}
			})
		}
	});

	$("#footer .to-top").click(function() {
		$.scrollTo($($(this).attr("href")), {
			duration: 750
		});
		return false;
	});

	$('#footer').waypoint(function(direction) {
		if(direction == "down") {
			$('.to-top').addClass("fadeIn");
			//alert('add fadeIn fired');
		}
		else if (direction == "up") {
			$('.to-top').removeClass("fadeIn");
			//alert('remove fadeIn fired');
		}
	},{offset: function() {
			//return $.waypoints('viewportHeight') - $(this).height();
			return $.waypoints('viewportHeight');

		}
	});/*'bottom-in-view'*/

	$(window).scroll(function(e) {
        $.waypoints('refresh');
    });

	//$('.apply-box').mouseenter(function(){
//		$('.apply-box .btn-expand').addClass('active').closest('.apply-box').addClass('expanded').stop().animate({
//			right: '0'
//		})
//	});
	$('.apply-box .btn-expand').on('click', function(){
		if ($(this).hasClass('active')) {
			$('.apply-box .btn-expand').removeClass('active').closest('.apply-box').removeClass('expanded').stop().animate({
				right: '-190px'
			});
		} else {
			$('.apply-box .btn-expand').addClass('active').closest('.apply-box').addClass('expanded').stop().animate({
				right: '0'
			});
		}
		return false;
	})

	if ($('form').exists()) {
		customForm.lib.domReady(function(){
			customForm.customForms.replaceAll();
		});
	}

	if ( $('.mobile-search').exists()) {
		$('.mobile-search').click (function(){
			$('.mobile-search').toggleClass('opened');
			$('.search-form').slideToggle();
			return false
		});
	}

	if ( $('.allert-box').exists()) {
		$('.allert-box .close').click (function(){
			$('.allert-box').slideToggle();
			return false
		});
	}

	$(".sec-nav ul>li").has("ul").addClass("has-child");

	$(".sec-nav>li").has("ul").addClass("opened");


	if ($('.accordion-01').exists()) {
		$(".accordion-01").accordion({
			header: ".title-accordion",
			collapsible: true,
			heightStyle: "content",
			active: false
		});
	}

	//tab link click
	$( ".js-do-tab-redirect" ).click(function(event) {
		event.stopPropagation();
	    var link = $('.js-tab-nav-selector').find(":selected").val();
	    $(".right-tab-form").attr("action", link);
	    window.location.href = link;
	});


	// ----------------------------------------------------------
	// MOD : JWHEAT : DC Additions

    if ($('.step-tabs').exists()) {
        $('.step-tabs').tabs({
            show: {
                duration: 500
            }
        });
    }

    if ($('.clock').exists()) {
        $(".clock").countdown("2015/08/27", function(event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="time"><span>%D<span class="divider">.</span></span> days </div> '
                + '<div class="time"><span>%H<span class="divider">:</span></span> hours </div>'
                + '<div class="time"><span>%M<span class="divider">:</span></span> minutes </div>'
                + '<div class="time"><span>%S</span> seconds </div>'));
        });
    }


	if ($('.info-table').exists()) {
          //$('.info-table tr:odd').addClass('even');
          $('.info-table tr:last').addClass('last');
          $('.info-table').stickyTableHeaders();
     }

	var padd = parseInt($('#footer').css('padding-top'));
	if ($('.bottom-search').exists()) {
	    $(window).on('scroll', function () {
	        var top_ = $(window).scrollTop();
	        var scroll_pos_test = $('.table-holder').offset().top;
	        var footer_top = $('#footer').offset().top;
	        if (top_ > scroll_pos_test) {
	            $('.table-holder').addClass('top');
	        } else {
	            $('.table-holder').removeClass('top');
	        //} if (top_ > 500) {
	        } if (top_ > 1300) {
	            $('.bottom-search').fadeIn();
	        } else {
	            $('.bottom-search').fadeOut();
	        } if (top_ + $(window).height() > footer_top) {
	            $('.bottom-search').addClass('bottom');
	            $('.bottom-search .frame').addClass('container');
	            $('#footer').css({
	                'padding-top': 0
	            })
	        } else {
	            $('.bottom-search').removeClass('bottom');
	            $('.bottom-search .frame').removeClass('container');
	            $('#footer').css({
	                'padding-top': padd
	            })
	        }
	    });
	}
	if ($('.info-link').exists()) {
	    $(".info-link").tooltip({
	        position: {
	            my: "right+20 top-94",
	            at: "left top",
	            collision: "none"
	        }
	    });
	}
	$(".bottom-search .btn-top").click(function () {
	    $.scrollTo($($(this).attr("href")), {
	        duration: 750
	    });
	    return false;
	});

    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
    }

    $('.scroll_anchor').click(function() {
        var anchor_id = $(this).attr('id');
        scrollToAnchor(anchor_id);
    });


	var $window = $(window), flexslider;
	$window.load(function () {
	    if ($('.gallery-03').exists()) {
	        $('.gallery-03').flexslider({
	            animation: "slide",
	            itemWidth: 223,
	            itemMargin: 0,
	            animationLoop: true,
	            slideshow: false,
	            useCSS: false,
	            controlNav: false,
	            startAt: 1,
	            minItems: getGridSize2(),
	            maxItems: getGridSize2()
	        });
	    }
	    if ($('.gallery-03').exists()) {
	        $(window).resize(function () {
	            var gridSize = getGridSize2();
	            $('.gallery-03').data('flexslider').setOpts({
	                minItems: gridSize,
	                maxItems: gridSize
	            });
	        });
	    }
	});


	if ($('.fact-slider').exists()) {
		$('.fact-slider').flexslider({
			animation: "slide",
			slideshow: false,
			useCSS: false,
			controlNav: false
		});
	}

	if ($('.counter').exists()) {
		$('.fact-slider').appear(function(){
			$('.counter').addClass('counter-analog').counter({
				initial: '0:00.0',
				direction: 'up',
				interval: '25',
				format: '99',
				stop: '95'
			});
		});
	}

	if ($('.story-slider').exists()) {
		$('.story-slider').flexslider({
			animation: "slide",
			slideshow: false,
			useCSS: false,
			controlNav: false
		});
	}

	if ($('.info-tabs').exists()) {
		$('.info-tabs').tabs({
			show: {
				duration: 200,
				effect: "fadeIn"
			},
			activate: function( event, ui ) {
				var tab_height = ui.newPanel.height();
				$('.info-tabs .tabarea').css({
					'min-height': tab_height
				})
			}
		});
		$(window).resize(function(){
			var tab_height = $('.info-tabs .tab').height();
			$('.info-tabs .tabarea').css({
				'min-height': tab_height
			})
		});
	}

	$('.fact-slider .slides li').each(function(e) {
		var bg_ = 'url(' + $(this).find('.bg').attr('src') + ')';
		$(this).css('background-image', bg_);
	});

	$('.info-tabs .info-img').mouseenter(function(){
		$(this).addClass('hover');
	});

	$('.info-tabs .info-img').mouseleave(function(){
		$(this).removeClass('hover');
	});

	/* video and instagram */
	function isiPhone(){
	    return (
	        (navigator.platform.indexOf("iPhone") != -1) ||
	        (navigator.platform.indexOf("iPod") != -1)
	    );
	}

	var width_1 = $(window).width();
/*
	$(".video-bg").css ({
		'margin-left': - width_1 / 2
	});

	$(window).resize(function(){
		var width_1 = $(window).width();
		$(".video-bg").css ({
			'margin-left': - width_1 / 2
		});
	});
*/
	if(isiPhone()){
	  $('.video-bg').remove();
	}
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		if ( $('.instagram-area').exists()) {
			var scroll_pos_test = $('.instagram-area').offset().top;
		}

		if ( $('.video-bg').exists() ) {
			if(y_scroll_pos > scroll_pos_test) {
				$('.video-bg').get(0).play();
			}
		}
	});

	setTimeout(function(){
		var y_scroll_pos = window.pageYOffset;
		if ( $('.instagram-area').exists()) {
			var scroll_pos_test = $('.instagram-area').offset().top;
		}
		if ( $('.video-bg').exists() ) {
			if(y_scroll_pos > scroll_pos_test) {
				$('.video-bg').get(0).play();
			}
		}
	},500)

	$(document).bind('touchstart touchend touchcancel touchleave touchmove', function(e){
		var y_scroll_pos = window.pageYOffset;
		if ( $('.instagram-area').exists()) {
			var top_win = $('window').height() - $('.visit-area').outerHeight(),
				scroll_pos_test = $('.instagram-area').offset().top + top_win;
			}
		if ( $('.video-bg').exists() ) {
			if(y_scroll_pos > scroll_pos_test) {
				$('.video-bg').get(0).play();
			}
		}
	});

    if ($('html').hasClass('no-touch') || $('html').hasClass('touch') && matchMedia('(min-width: 1210px)').matches) {
    	$('.gallery').magnificPopup({
    		delegate: 'a',
    		type: 'image',
    		tLoading: 'Loading image #%curr%...',
    		mainClass: 'mfp-img-mobile',
    		gallery: {
    			enabled: true,
    			navigateByImgClick: true,
    			preload: [0,1]
    		},
    		image: {
    			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    			titleSrc: function(item) {
    				return item.el.attr('data-caption');
    			}
    		}
    	});
    }

	if (window.PIE) {
		$('.about .block .btn-group a').each(function() {
			PIE.attach(this);
		});
	}
	
	if ($('.about-tabs').exists()) {
		$('.about-tabs').tabs();
	}

	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media: true,
		},

	    // Do not use this because it tries to fit title text as well.
	    //fitToView: false,

	    // Prevent the introduction of black bars when resized for mobile.
	    //aspectRatio: true,

	    // Restrict content to the display dimensions.
	    //maxWidth: "100%",
	    maxHeight: "100%",

	    // Change the title keyword to 'caption' to avoid title text in tooltips.
	    //beforeLoad: function() {
	    //    this.title = $(this.element).attr('caption');
	    //},

	    // Override the default iframe dimensions with manually set dimensions.
	    afterLoad: function() {
	    //    this.width = $(this.element).data("width");
	    //    this.height = $(this.element).data("height");
	    }

	});

});

