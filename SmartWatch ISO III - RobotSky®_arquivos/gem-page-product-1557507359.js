

        jQuery(function() {
            var $hero = jQuery('#m-1557538728679');
            var $module = jQuery('#m-1557538728679').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            var height = $.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    console.log('>> background image: ' + backgroundImage);

                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392937').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $hero = jQuery('#m-1557546907461');
            var $module = jQuery('#m-1557546907461').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $heroLink = $hero.children('.hero-link');
            if(mode == 'dev' && $heroLink.length > 0) {
                 $hero.children('.hero-link').hide();
            }
            if (mode == 'production' && $heroLink.length > 0) {
                $module.off('click.openLink').on('click.openLink', function(e) {
                    var $target = jQuery(e.target);
                    if ($target.length > 0){
                        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                        if (linkTarget == "") {
                            var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                            var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                            if (link != "") {
                                if (newTab == "") {
                                    window.location.href = link;
                                } else {
                                    window.open(link, newTab);
                                }
                            }
                        }
                    };
                })
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1542942401645').children('.module');   
            var navspeed = $module.data('navspeed'),
                autoplaytimeout = $module.data('autoplaytimeout'),
                autoplayhoverpause = $module.data('autoplayhoverpause'),
                navlg = $module.data('navlg'),
                navmd = $module.data('navmd'),
                navsm = $module.data('navsm'),
                navxs = $module.data('navxs'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs'),
                dotslg = $module.data('dotslg'),
                dotsmd = $module.data('dotsmd'),
                dotssm = $module.data('dotssm'),
                dotsxs = $module.data('dotsxs'),
                marginlg = parseInt($module.data('marginlg')),
                marginmd = parseInt($module.data('marginmd')),
                marginsm = parseInt($module.data('marginsm')),
                marginxs = parseInt($module.data('marginxs'));

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') {
                var autoplay = $module.data('autoplay'), 
                    loop = $module.data('loop');
            } else {
                var autoplay = 0, 
                    loop = 0;
            }
        
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:colxs,
                        nav: navxs,
                        dots:dotsxs,
                        margin: marginxs
                    },
                    768:{
                        items:colsm,
                        nav: navsm,
                        dots:dotssm,
                        margin: marginsm
                    },
                    992:{
                        items:colmd,
                        nav: navmd,
                        dots:dotsmd,
                        margin: marginmd
                    },
                    1200:{
                        items:collg,
                        nav: navlg,
                        dots:dotslg,
                        margin: marginlg
                    }
                }
            }); 
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560056025944').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557508686832').children('.module');
            $module.gfV1Countdown({
                id: "1557508686832",
                idSlug: "1557508686832"
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392937-1').children('.module');
        }); 
    
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1560741052668').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1560741052668').attr('data-name', '');
                jQuery('#m-1560741052668').css('background-image', 'none');
                jQuery('#m-1560741052668').css('min-height', '50px');
                jQuery('#m-1560741052668').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1560741052668');
                if ($bkLiquid && $bkLiquid.length > 0) {
                    var $settings = $bkLiquid.find('.settings');
                    try {
                        var name = '';
                        var imageUrl = '';
                        settings = JSON.parse($settings.html());
                        for (var i = 0; i < settings.length; i++) {
                            if (settings[i].name == 'name') {
                                name = settings[i].default_value
                            }
                            if (settings[i].name == 'image') {
                                imageUrl = settings[i].default_value
                            }
                        }
                        if (imageUrl != '') {
                            flag = false;
                            jQuery('#m-1560741052668').css('background-image', 'url(' + imageUrl + ')');
                            jQuery('#m-1560741052668').css('min-height', '100px');
                            jQuery('#m-1560741052668').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1560741052668').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1560741052668').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }

        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392937-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392919').children('.module');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            var blankOption = $module.attr('data-blankoption');
            var blankOptionText = $module.attr('data-blankoptiontext');
            var style = $module.attr('data-style');

            $module.gfV3ProductVariants({
                mode: mode,
                blankOption: blankOption,
                blankOptionText: blankOptionText,
                style: style,
                onVariantSelected: function(variant, $select) {}
            });
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392937-3').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557509100824').children('.module');
            $module.gfV1StockCounter();
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557507392942').children('.module');
            var style = $module.attr('data-style');
            var updatePrice = $module.attr('data-updateprice');

            $module.gfV3ProductQuantity({
                'style': style,
                'updatePrice': updatePrice
            });
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1560049758304').children('.module');
            $module.gfV1Countdown({
                id: "1560049758304",
                idSlug: "1560049758304"
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557521231415');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            $module.css({
                'height': 'auto'
            });
            jQuery(window).resize(function(){
                $module.css('height', 'auto');
            });
            $module.children('.module').removeClass('full-height');

            var image = $module.children('.module').data('image') || '';
            if ($module.children('.module').data('speed') || $module.children('.module').data('speed') == 0) {
                var speed = parseFloat($module.children('.module').data('speed'));
            } else {
                var speed = 0.2;
            }
            if($module.data('gfv3parallax') != undefined) {
                $module.removeData('gfv3parallax');
            }
            $module.gfV3Parallax({
                'image': image,
                'speed': speed,
                'mode': mode
            });
            if(mode == 'dev') {
                var moduleId = "1557521231415";
                var moduleIdSlug = moduleId.toString().replace(/-/g, '');
                if (moduleIdSlug == "1557521231415") {
                    window.getParallax1557521231415 = function() {
                        return $module.data('gfv3parallax');
                    }
                }
            }
        }); 
    
        jQuery(function() {
            try {
                var $module = jQuery('#m-1557521284164').children('.module');   
                var navspeed = $module.data('navspeed'),
                    autoplaytimeout = $module.data('autoplaytimeout'),
                    autoplayhoverpause = $module.data('autoplayhoverpause'),
                    navlg = $module.data('navlg'),
                    navmd = $module.data('navmd'),
                    navsm = $module.data('navsm'),
                    navxs = $module.data('navxs'),
                    collg = $module.data('collg'),
                    colmd = $module.data('colmd'),
                    colsm = $module.data('colsm'),
                    colxs = $module.data('colxs'),
                    dotslg = $module.data('dotslg'),
                    dotsmd = $module.data('dotsmd'),
                    dotssm = $module.data('dotssm'),
                    dotsxs = $module.data('dotsxs'),
                    marginlg = parseInt($module.data('marginlg')),
                    marginmd = parseInt($module.data('marginmd')),
                    marginsm = parseInt($module.data('marginsm')),
                    marginxs = parseInt($module.data('marginxs'));
    
                var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
                if(mode == 'production') {
                    var autoplay = $module.data('autoplay'), 
                        loop = $module.data('loop');
                } else {
                    var autoplay = 0, 
                        loop = 0;
                }
            
                $module.owlCarousel({
                    mouseDrag: false,
                    autoplayHoverPause: autoplayhoverpause,
                    autoplay: autoplay,
                    autoplayTimeout: autoplaytimeout,
                    loop: loop,
                    navSpeed: navspeed,
                    autoWidth: !1,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:colxs,
                            nav: navxs,
                            dots:dotsxs,
                            margin: marginxs
                        },
                        768:{
                            items:colsm,
                            nav: navsm,
                            dots:dotssm,
                            margin: marginsm
                        },
                        992:{
                            items:colmd,
                            nav: navmd,
                            dots:dotsmd,
                            margin: marginmd
                        },
                        1200:{
                            items:collg,
                            nav: navlg,
                            dots:dotslg,
                            margin: marginlg
                        }
                    }
                }); 
            } catch(err) {}

        }); 
    
        jQuery(function() {
            var $hero = jQuery('#m-1560052912481');
            var $module = jQuery('#m-1560052912481').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $heroLink = $hero.children('.hero-link');
            if(mode == 'dev' && $heroLink.length > 0) {
                 $hero.children('.hero-link').hide();
            }
            if (mode == 'production' && $heroLink.length > 0) {
                $module.off('click.openLink').on('click.openLink', function(e) {
                    var $target = jQuery(e.target);
                    if ($target.length > 0){
                        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                        if (linkTarget == "") {
                            var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                            var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                            if (link != "") {
                                if (newTab == "") {
                                    window.location.href = link;
                                } else {
                                    window.open(link, newTab);
                                }
                            }
                        }
                    };
                })
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557522439927');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            $module.css({
                'height': 'auto'
            });
            jQuery(window).resize(function(){
                $module.css('height', 'auto');
            });
            $module.children('.module').removeClass('full-height');

            var image = $module.children('.module').data('image') || '';
            if ($module.children('.module').data('speed') || $module.children('.module').data('speed') == 0) {
                var speed = parseFloat($module.children('.module').data('speed'));
            } else {
                var speed = 0.2;
            }
            if($module.data('gfv3parallax') != undefined) {
                $module.removeData('gfv3parallax');
            }
            $module.gfV3Parallax({
                'image': image,
                'speed': speed,
                'mode': mode
            });
            if(mode == 'dev') {
                var moduleId = "1557522439927";
                var moduleIdSlug = moduleId.toString().replace(/-/g, '');
                if (moduleIdSlug == "1557522439927") {
                    window.getParallax1557522439927 = function() {
                        return $module.data('gfv3parallax');
                    }
                }
            }
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557710883143').children('.module');
            if(jQuery().gfYoutube) {
                $module.gfYoutube();
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1557544739329');
            var $module = jQuery('#m-1557544739329').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $heroLink = $hero.children('.hero-link');
            if(mode == 'dev' && $heroLink.length > 0) {
                 $hero.children('.hero-link').hide();
            }
            if (mode == 'production' && $heroLink.length > 0) {
                $module.off('click.openLink').on('click.openLink', function(e) {
                    var $target = jQuery(e.target);
                    if ($target.length > 0){
                        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                        if (linkTarget == "") {
                            var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                            var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                            if (link != "") {
                                if (newTab == "") {
                                    window.location.href = link;
                                } else {
                                    window.open(link, newTab);
                                }
                            }
                        }
                    };
                })
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            try {
                var $module = jQuery('#m-1557543167869').children('.module');
                var single   = $module.attr('data-single');
                var openDefault  = $module.attr('data-openDefault');
                var openTab  = $module.attr('data-openTab');
                var mode     = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
                if(openDefault == 0 || openDefault == '0') {
                    openTab = '0';
                }
    
                $module.gfAccordion({
                    single: single,
                    openTab: openTab,
                    mode: mode
                });
    
                var borderColor = $module.attr('data-borderColor');
                var borderSize = $module.attr('data-borderSize');
    
                $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
                $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
                
            } catch(err) {}
        });
    
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1560055001258').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1560055001258').attr('data-name', '');
                jQuery('#m-1560055001258').css('background-image', 'none');
                jQuery('#m-1560055001258').css('min-height', '50px');
                jQuery('#m-1560055001258').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1560055001258');
                if ($bkLiquid && $bkLiquid.length > 0) {
                    var $settings = $bkLiquid.find('.settings');
                    try {
                        var name = '';
                        var imageUrl = '';
                        settings = JSON.parse($settings.html());
                        for (var i = 0; i < settings.length; i++) {
                            if (settings[i].name == 'name') {
                                name = settings[i].default_value
                            }
                            if (settings[i].name == 'image') {
                                imageUrl = settings[i].default_value
                            }
                        }
                        if (imageUrl != '') {
                            flag = false;
                            jQuery('#m-1560055001258').css('background-image', 'url(' + imageUrl + ')');
                            jQuery('#m-1560055001258').css('min-height', '100px');
                            jQuery('#m-1560055001258').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1560055001258').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1560055001258').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }

        }); 
    
        jQuery(function() {
            var $hero = jQuery('#m-1557529307893');
            var $module = jQuery('#m-1557529307893').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $heroLink = $hero.children('.hero-link');
            if(mode == 'dev' && $heroLink.length > 0) {
                 $hero.children('.hero-link').hide();
            }
            if (mode == 'production' && $heroLink.length > 0) {
                $module.off('click.openLink').on('click.openLink', function(e) {
                    var $target = jQuery(e.target);
                    if ($target.length > 0){
                        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                        if (linkTarget == "") {
                            var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                            var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                            if (link != "") {
                                if (newTab == "") {
                                    window.location.href = link;
                                } else {
                                    window.open(link, newTab);
                                }
                            }
                        }
                    };
                })
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557547009547').children('.module');
            $module.gfV1Countdown({
                id: "1557547009547",
                idSlug: "1557547009547"
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1557544136272').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557544136272-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557544492029').children('.module');
            $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557544136272-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557544136272-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1557528892191').children('.module');
            var btnLabel = $module.attr('data-btnlabel');
            $module.gfSocialShare({
                btnLabel: btnLabel
            });
        });
    
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}