/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.2.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){k.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=b;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;k.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=h.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(k,function(f,k){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.10
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*angular-modal-service v0.6.9 - https://github.com/dwmkerr/angular-modal-service */
!function(){"use strict";var e=angular.module("angularModalService",[]);e.factory("ModalService",["$animate","$document","$compile","$controller","$http","$rootScope","$q","$templateRequest","$timeout",function(e,n,r,t,l,o,c,u,a){function i(){var n=this,l=function(e,n){var r=c.defer();return e?r.resolve(e):n?u(n,!0).then(function(e){r.resolve(e)},function(e){r.reject(e)}):r.reject("No template or templateUrl has been specified."),r.promise},i=function(n,r){var t=n.children();return t.length>0?e.enter(r,n,t[t.length-1]):e.enter(r,n)};n.showModal=function(n){var u=c.defer(),p=n.controller;return p?(l(n.template,n.templateUrl).then(function(l){var p=(n.scope||o).$new(),d=c.defer(),f=c.defer(),m={$scope:p,close:function(n,r){(void 0===r||null===r)&&(r=0),a(function(){d.resolve(n),e.leave($).then(function(){f.resolve(n),p.$destroy(),m.close=null,u=null,d=null,j=null,m=null,$=null,p=null})},r)}};n.inputs&&angular.extend(m,n.inputs);var v=r(l),$=v(p);m.$element=$;var h=p[n.controllerAs],g=t(n.controller,m,!1,n.controllerAs);n.controllerAs&&h&&angular.extend(g,h),n.appendElement?i(n.appendElement,$):i(s,$);var j={controller:g,scope:p,element:$,close:d.promise,closed:f.promise};u.resolve(j)}).then(null,function(e){u.reject(e)}),u.promise):(u.reject("No controller has been specified."),u.promise)}}var s=n.find("body");return new i}])}();
//# sourceMappingURL=angular-modal-service.min.js.map
/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function() {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    var module;
    try {
        module = angular.module(moduleName);
    } catch(err) {
        // named module does not exist, so create one
        module = angular.module(moduleName, []);
    }

    module
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache',dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return  {
            terminal: true,
            multiElement: true,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs){

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:[^|]*/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs){

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled =  $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            paginationService.setCollectionLength(paginationId, collection.length);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:[^|]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function(el) {
                if (el.nodeType === Node.ELEMENT_NODE) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function(el) {
                if (el.nodeType === Node.ELEMENT_NODE) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // if the current-page attribute was not set, we'll make our own
                var defaultCurrentPage = paginationId + '__currentPage';
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        return {
            restrict: 'AE',
            templateUrl: function(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            },
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId ||  DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId ||  DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                throw 'pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive.';
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch(function() {
                return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                return (paginationService.getItemsPerPage(paginationId));
            }, function(current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function() {
                return paginationService.getCurrentPage(paginationId);
            }, function(currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function(num) {
                if (isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            function goToPage(num) {
                if (isValidPageNumber(num)) {
                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as an argument
                    if (scope.onPageChange) {
                        scope.onPageChange({ newPageNumber : num });
                    }
                }
            }

            function generatePagination() {
                var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;

                scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                scope.pagination.current = page;
                scope.pagination.last = scope.pages[scope.pages.length - 1];
                if (scope.pagination.last < scope.pagination.current) {
                    scope.setCurrent(scope.pagination.last);
                } else {
                    updateRangeValues();
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                var currentPage = paginationService.getCurrentPage(paginationId),
                    itemsPerPage = paginationService.getItemsPerPage(paginationId),
                    totalItems = paginationService.getCollectionLength(paginationId);

                scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                scope.range.total = totalItems;
            }

            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (collection instanceof Array) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                return collection.slice(start, end);
            } else {
                return collection;
            }
        };
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';

        this.setPath = function(path) {
            templatePath = path;
        };

        this.$get = function() {
            return {
                getPath: function() {
                    return templatePath;
                }
            };
        };
    }
})();

/* ========================================================================
 * bootstrap-switch - v3.3.2
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,i){null==i&&(i={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},i),this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?""+t.options.baseClass+"-on":""+t.options.baseClass+"-off"),null!=t.options.size&&e.push(""+t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(""+t.options.baseClass+"-disabled"),t.options.readonly&&e.push(""+t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(""+t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(""+t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(""+t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":""+this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":""+this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":""+this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":""+this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(e){return function(){return e.options.onSwitchChange.apply(t,arguments)}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch")}return t.prototype._constructor=t,t.prototype.state=function(t,e){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",e),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(""+this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(""+this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(""+this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(""+this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(""+this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(""+this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(""+this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(""+this.options.baseClass+"-"+e),this.$on.addClass(""+this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(""+this.options.baseClass+"-"+e),this.$off.addClass(""+this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._init=function(){var t,e;return t=function(t){return function(){return t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(""+t.options.baseClass+"-animate"):void 0})}}(this),this.$wrapper.is(":visible")?t():e=i.setInterval(function(n){return function(){return n.$wrapper.is(":visible")?(t(),i.clearInterval(e)):void 0}}(this),50)},t.prototype._elementHandlers=function(){return this.$element.on({"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(""+t.options.baseClass+"-off").toggleClass(""+t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(""+t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(""+t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(""+t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",""+t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(""+t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[""+this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(""+this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);
/**
 * angular-bootstrap-switch
 * @version v0.4.1 - 2015-06-15
 * @author Francesco Pontillo (francescopontillo@gmail.com)
 * @link https://github.com/frapontillo/angular-bootstrap-switch
 * @license Apache License 2.0(http://www.apache.org/licenses/LICENSE-2.0.html)
**/

!function(){"use strict";angular.module("frapontillo.bootstrap-switch",[]),angular.module("frapontillo.bootstrap-switch").directive("bsSwitch",["$parse","$timeout",function(a,b){return{restrict:"A",require:"ngModel",link:function(c,d,e,f){var g=!1,h=function(){if("radio"===e.type)return e.value||a(e.ngValue)(c)||!0;var b=a(e.ngTrueValue)(c);return angular.isUndefined(b)&&(b=!0),b},i=function(a){return c.$eval(a)===!0},j=function(a){return a===!0||"true"===a||!a},k=function(a){return a?a:void 0},l=function(a){var b={switchRadioOff:j,switchActive:function(a){return!j(a)},switchAnimate:j,switchLabel:function(a){return a?a:"&nbsp;"},switchIcon:function(a){return a?"<span class='"+a+"'></span>":void 0},switchWrapper:function(a){return a||"wrapper"},switchInverse:i,switchReadonly:i},c=b[a]||k;return c(e[a])},m=function(a,b,c){if(g){var d=l(c);a.bootstrapSwitch(b,d)}},n=function(){m(d,"disabled","switchActive")},o=function(){if(!g){var a=f.$modelValue===h();g=!g,d.bootstrapSwitch({radioAllOff:l("switchRadioOff"),disabled:l("switchActive"),state:a,onText:l("switchOnText"),offText:l("switchOffText"),onColor:l("switchOnColor"),offColor:l("switchOffColor"),animate:l("switchAnimate"),size:l("switchSize"),labelText:l(e.switchLabel?"switchLabel":"switchIcon"),wrapperClass:l("switchWrapper"),handleWidth:l("switchHandleWidth"),labelWidth:l("switchLabelWidth"),inverse:l("switchInverse"),readonly:l("switchReadonly")}),f.$setViewValue("radio"===e.type?f.$modelValue:a)}},p=function(){function a(){return f.$modelValue}e.$observe("switchActive",function(a){var c=j(a);c?n(c):b(function(){n(c)})}),c.$watch(a,function(a){o(),void 0!==a?d.bootstrapSwitch("state",a===h(),!1):d.bootstrapSwitch("toggleIndeterminate",!0,!1)},!0);var g={switchRadioOff:"radioAllOff",switchOnText:"onText",switchOffText:"offText",switchOnColor:"onColor",switchOffColor:"offColor",switchAnimate:"animate",switchSize:"size",switchLabel:"labelText",switchIcon:"labelText",switchWrapper:"wrapperClass",switchHandleWidth:"handleWidth",switchLabelWidth:"labelWidth",switchInverse:"inverse",switchReadonly:"readonly"},i=function(a,b){return function(){e.$observe(a,function(){m(d,b[a],a)})}};for(var k in g)e.$observe(k,i(k,g))},q=function(){"radio"===e.type?d.on("change.bootstrapSwitch",function(a){f.$modelValue===f.$viewValue&&a.target.checked!==$(a.target).bootstrapSwitch("state")&&(a.target.checked?f.$setViewValue(h()):h()===f.$viewValue&&f.$setViewValue(void 0))}):d.on("switchChange.bootstrapSwitch",function(a){f.$setViewValue(a.target.checked)})};q(),p(),c.$on("$destroy",function(){d.bootstrapSwitch("destroy")})}}}]).directive("bsSwitch",function(){return{restrict:"E",require:"ngModel",template:"<input bs-switch>",replace:!0}})}();
/*! 5.0.9 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="5.0.9",ngFileUpload.service("Upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{};var e=b.defer(),f=e.promise;return d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)}))},!1))}},a(d).then(function(a){e.resolve(a)},function(a){e.reject(a)},function(a){e.notify(a)}),f.success=function(a){return f.then(function(b){a(b.data,b.status,b.headers,d)}),f},f.error=function(a){return f.then(null,function(b){a(b.data,b.status,b.headers,d)}),f},f.progress=function(a){return f.progressFunc=a,f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(a){function b(c,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))c.append(e,d);else if("form"===a.sendFieldsAs)if(angular.isObject(d))for(var f in d)d.hasOwnProperty(f)&&b(c,d[f],e+"["+f+"]");else c.append(e,d);else d=angular.isString(d)?d:JSON.stringify(d),"json-blob"===a.sendFieldsAs?c.append(e,new Blob([d],{type:"application/json"})):c.append(e,d)}return a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(c){var d,e=new FormData,f={};for(d in a.fields)a.fields.hasOwnProperty(d)&&(f[d]=a.fields[d]);c&&(f.data=c);for(d in f)if(f.hasOwnProperty(d)){var g=f[d];a.formDataAppender?a.formDataAppender(e,d,g):b(e,g,d)}if(null!=a.file){var h=a.fileFormDataName||"file";if(angular.isArray(a.file))for(var i=angular.isString(h),j=0;j<a.file.length;j++)e.append(i?h:h[j],a.file[j],a.fileName&&a.fileName[j]||a.file[j].name);else e.append(h,a.file,a.fileName||a.file.name)}return e}),d(a)},this.http=function(b){return b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof Blob?b:a.defaults.transformRequest[0](arguments)},d(b)}}]),function(){function a(a,e,f,g,h,i,j){function k(){return"input"===e[0].tagName.toLowerCase()&&f.type&&"file"===f.type.toLowerCase()}function l(b){if(!r){r=!0;try{for(var e=b.__files_||b.target&&b.target.files,j=[],k=[],l=0;l<e.length;l++){var m=e.item(l);c(a,h,f,m,b)?j.push(m):k.push(m)}d(h,i,a,g,f,f.ngfChange||f.ngfSelect,j,k,b),0===j.length&&(b.target.value=j)}finally{r=!1}}}function m(b){f.ngfMultiple&&b.attr("multiple",h(f.ngfMultiple)(a)),f.ngfCapture&&b.attr("capture",h(f.ngfCapture)(a)),f.accept&&b.attr("accept",f.accept);for(var c=0;c<e[0].attributes.length;c++){var d=e[0].attributes[c];(k()&&"type"!==d.name||"type"!==d.name&&"class"!==d.name&&"id"!==d.name&&"style"!==d.name)&&b.attr(d.name,d.value)}}function n(b,c){if(!c&&(b||k()))return e.$$ngfRefElem||e;var d=angular.element('<input type="file">');return m(d),k()?(e.replaceWith(d),e=d,d.attr("__ngf_gen__",!0),j(e)(a)):(d.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("z-index","-100000").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),e.$$ngfRefElem&&e.$$ngfRefElem.remove(),e.$$ngfRefElem=d,document.body.appendChild(d[0])),d}function o(b){d(h,i,a,g,f,f.ngfChange||f.ngfSelect,[],[],b,!0)}function p(c){function d(a){a&&i[0].click(),(k()||!a)&&e.bind("click touchend",p)}if(e.attr("disabled")||q)return!1;null!=c&&(c.preventDefault(),c.stopPropagation());var g=h(f.ngfResetOnClick)(a)!==!1,i=n(c,g);return i&&((!c||g)&&i.bind("change",l),c&&g&&h(f.ngfResetModelOnClick)(a)!==!1&&o(c),b(navigator.userAgent)?setTimeout(function(){d(c)},0):d(c)),!1}if(!e.attr("__ngf_gen__")){a.$on("$destroy",function(){e.$$ngfRefElem&&e.$$ngfRefElem.remove()});var q=!1;-1===f.ngfSelect.search(/\W+$files\W+/)&&a.$watch(f.ngfSelect,function(a){q=a===!1});var r=!1;window.FileAPI&&window.FileAPI.ngfFixIE?window.FileAPI.ngfFixIE(e,n,m,l):p()}}function b(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);return b&&b.length>2?parseInt(b[1])<4||4===parseInt(b[1])&&parseInt(b[2])<4:/.*Windows.*Safari.*/.test(a)}ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.validate=function(a,b,c,d,e){function f(a){if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])return a.substring(1,a.length-1);var b=a.split(","),c="";if(b.length>1)for(var d=0;d<b.length;d++)c+="("+f(b[d])+")",d<b.length-1&&(c+="|");else 0===a.indexOf(".")&&(a="*"+a),c="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",c=c.replace(/\\\*/g,".*").replace(/\\\?/g,".");return c}var g=b(c.ngfAccept)(a,{$file:d,$event:e}),h=b(c.ngfMaxSize)(a,{$file:d,$event:e})||9007199254740991,i=b(c.ngfMinSize)(a,{$file:d,$event:e})||-1;if(null!=g&&angular.isString(g)){var j=new RegExp(f(g),"gi");g=null!=d.type&&j.test(d.type.toLowerCase())||null!=d.name&&j.test(d.name.toLowerCase())}return(null==g||g)&&(null==d.size||d.size<h&&d.size>i)},ngFileUpload.updateModel=function(a,b,c,d,e,f,g,h,i,j){function k(){if(a(e.ngfKeep)(c)===!0){var j=(d.$modelValue||[]).slice(0);if(g&&g.length)if(a(e.ngfKeepDistinct)(c)===!0){for(var k=j.length,l=0;l<g.length;l++){for(var m=0;k>m&&g[l].name!==j[m].name;m++);m===k&&j.push(g[l])}g=j}else g=j.concat(g);else g=j}d&&(a(e.ngModel).assign(c,g),b(function(){d&&d.$setViewValue(null!=g&&0===g.length?null:g)})),e.ngModelRejected&&a(e.ngModelRejected).assign(c,h),f&&a(f)(c,{$files:g,$rejectedFiles:h,$event:i})}j?k():b(function(){k()})};var c=ngFileUpload.validate,d=ngFileUpload.updateModel}(),function(){function a(a,e,f,g,h,i,j){function k(a,b,d){var e=!0,f=d.dataTransfer.items;if(null!=f)for(var g=0;g<f.length&&e;g++)e=e&&("file"===f[g].kind||""===f[g].kind)&&c(a,h,b,f[g],d);var i=h(b.ngfDragOverClass)(a,{$event:d});return i&&(i.delay&&(r=i.delay),i.accept&&(i=e?i.accept:i.reject)),i||b.ngfDragOverClass||"dragover"}function l(b,d,e,g){function k(d){c(a,h,f,d,b)?m.push(d):n.push(d)}function l(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;k({name:b.name,type:"directory",path:d});var e=b.createReader(),f=[];p++;var g=function(){e.readEntries(function(d){try{if(d.length)f=f.concat(Array.prototype.slice.call(d||[],0)),g();else{for(var e=0;e<f.length;e++)l(a,f[e],(c?c:"")+b.name+"/");p--}}catch(h){p--,console.error(h)}},function(){p--})};g()}else p++,b.file(function(a){try{p--,a.path=(c?c:"")+a.name,k(a)}catch(b){p--,console.error(b)}},function(){p--})}var m=[],n=[],o=b.dataTransfer.items,p=0;if(o&&o.length>0&&"file"!==j.protocol())for(var q=0;q<o.length;q++){if(o[q].webkitGetAsEntry&&o[q].webkitGetAsEntry()&&o[q].webkitGetAsEntry().isDirectory){var r=o[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&l(m,r)}else{var s=o[q].getAsFile();null!=s&&k(s)}if(!g&&m.length>0)break}else{var t=b.dataTransfer.files;if(null!=t)for(var u=0;u<t.length&&(k(t.item(u)),g||!(m.length>0));u++);}var v=0;!function w(a){i(function(){if(p)10*v++<2e4&&w(10);else{if(!g&&m.length>1){for(q=0;"directory"===m[q].type;)q++;m=[m[q]]}d(m,n)}},a||0)}()}var m=b();if(f.dropAvailable&&i(function(){a[f.dropAvailable]?a[f.dropAvailable].value=m:a[f.dropAvailable]=m}),!m)return void(h(f.ngfHideOnDropNotAvailable)(a)===!0&&e.css("display","none"));var n=!1;-1===f.ngfDrop.search(/\W+$files\W+/)&&a.$watch(f.ngfDrop,function(a){n=a===!1});var o,p=null,q=h(f.ngfStopPropagation),r=1;e[0].addEventListener("dragover",function(b){if(!e.attr("disabled")&&!n){if(b.preventDefault(),q(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var c=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===c||"linkMove"===c?"move":"copy"}i.cancel(p),a.actualDragOverClass||(o=k(a,f,b)),e.addClass(o)}},!1),e[0].addEventListener("dragenter",function(b){e.attr("disabled")||n||(b.preventDefault(),q(a)&&b.stopPropagation())},!1),e[0].addEventListener("dragleave",function(){e.attr("disabled")||n||(p=i(function(){e.removeClass(o),o=null},r||1))},!1),e[0].addEventListener("drop",function(b){e.attr("disabled")||n||(b.preventDefault(),q(a)&&b.stopPropagation(),e.removeClass(o),o=null,l(b,function(c,e){d(h,i,a,g,f,f.ngfChange||f.ngfDrop,c,e,b)},h(f.ngfAllowDir)(a)!==!1,f.multiple||h(f.ngfMultiple)(a)))},!1)}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a}var c=ngFileUpload.validate,d=ngFileUpload.updateModel;ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout",function(a,c){return function(d,e,f){if(b()){var g=a(f.ngfDropAvailable);c(function(){g(d),g.assign&&g.assign(d,!0)})}}}]),ngFileUpload.directive("ngfSrc",["$parse","$timeout",function(a,b){return{restrict:"AE",link:function(d,e,f){window.FileReader&&d.$watch(f.ngfSrc,function(g){g&&c(d,a,f,g,null)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||g.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||g.size<4e6)?b(function(){var a=window.URL||window.webkitURL;if(a&&a.createObjectURL)e.attr("src",a.createObjectURL(g));else{var c=new FileReader;c.readAsDataURL(g),c.onload=function(a){b(function(){e.attr("src",a.target.result)})}}}):e.attr("src",f.ngfDefaultSrc||"")})}}}])}();
/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.12.1 - 2015-07-28T03:50:59.076Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var c=t.which;switch(c){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return t.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],c=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(c.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,c=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),c=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(c)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,c,i,l){l(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,c){return c&&t?t.replace(new RegExp(e(c),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(c){var i=c[0].getBoundingClientRect();return{width:i.width||c.prop("offsetWidth"),height:i.height||c.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);c.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile",function(e,t,c,i){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var c=t.parent().attr("theme")||e.theme;return c+"/choices.tpl.html"},compile:function(l,s){if(!s.repeat)throw c("repeat","Expected 'repeat' expression.");return function(l,s,n,a,r){var o=n.groupBy,u=n.groupFilter;if(a.parseRepeatAttr(n.repeat,o,u),a.disableChoiceExpression=n.uiDisableChoice,a.onHighlightCallback=n.onHighlight,o){var d=s.querySelectorAll(".ui-select-choices-group");if(1!==d.length)throw c("rows","Expected 1 .ui-select-choices-group but got '{0}'.",d.length);d.attr("ng-repeat",t.getGroupNgRepeatExpression())}var p=s.querySelectorAll(".ui-select-choices-row");if(1!==p.length)throw c("rows","Expected 1 .ui-select-choices-row but got '{0}'.",p.length);p.attr("ng-repeat",t.getNgRepeatExpression(a.parserResult.itemName,"$select.items",a.parserResult.trackByExp,o)).attr("ng-if","$select.open").attr("ng-mouseenter","$select.setActiveItem("+a.parserResult.itemName+")").attr("ng-click","$select.select("+a.parserResult.itemName+",false,$event)");var g=s.querySelectorAll(".ui-select-choices-row-inner");if(1!==g.length)throw c("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",g.length);g.attr("uis-transclude-append",""),i(s,r)(l),l.$watch("$select.search",function(e){e&&!a.open&&a.multiple&&a.activate(!1,!0),a.activeIndex=a.tagging.isActivated?-1:0,a.refresh(n.refresh)}),n.$observe("refreshDelay",function(){var t=l.$eval(n.refreshDelay);a.refreshDelay=void 0!==t?t:e.refreshDelay})}}}}]),c.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig",function(t,c,i,l,s,n,a){function r(){(p.resetSearchInput||void 0===p.resetSearchInput&&a.resetSearchInput)&&(p.search=g,p.selected&&p.items.length&&!p.multiple&&(p.activeIndex=p.items.indexOf(p.selected)))}function o(e,t){var c,i,l=[];for(c=0;c<t.length;c++)for(i=0;i<e.length;i++)e[i].name==[t[c]]&&l.push(e[i]);return l}function u(t){var c=!0;switch(t){case e.DOWN:!p.open&&p.multiple?p.activate(!1,!0):p.activeIndex<p.items.length-1&&p.activeIndex++;break;case e.UP:!p.open&&p.multiple?p.activate(!1,!0):(p.activeIndex>0||0===p.search.length&&p.tagging.isActivated&&p.activeIndex>-1)&&p.activeIndex--;break;case e.TAB:(!p.multiple||p.open)&&p.select(p.items[p.activeIndex],!0);break;case e.ENTER:p.open&&(p.tagging.isActivated||p.activeIndex>=0)?p.select(p.items[p.activeIndex]):p.activate(!1,!0);break;case e.ESC:p.close();break;default:c=!1}return c}function d(){var e=c.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw n("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(p.activeIndex<0)){var i=t[p.activeIndex],l=i.offsetTop+i.clientHeight-e[0].scrollTop,s=e[0].offsetHeight;l>s?e[0].scrollTop+=l-s:l<i.clientHeight&&(p.isGrouped&&0===p.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=i.clientHeight-l)}}var p=this,g="";if(p.placeholder=a.placeholder,p.searchEnabled=a.searchEnabled,p.sortable=a.sortable,p.refreshDelay=a.refreshDelay,p.removeSelected=!1,p.closeOnSelect=!0,p.search=g,p.activeIndex=0,p.items=[],p.open=!1,p.focus=!1,p.disabled=!1,p.selected=void 0,p.focusser=void 0,p.resetSearchInput=!0,p.multiple=void 0,p.disableChoiceExpression=void 0,p.tagging={isActivated:!1,fct:void 0},p.taggingTokens={isActivated:!1,tokens:void 0},p.lockChoiceExpression=void 0,p.clickTriggeredSelect=!1,p.$filter=l,p.searchInput=c.querySelectorAll("input.ui-select-search"),1!==p.searchInput.length)throw n("searchInput","Expected 1 input.ui-select-search but got '{0}'.",p.searchInput.length);p.isEmpty=function(){return angular.isUndefined(p.selected)||null===p.selected||""===p.selected},p.activate=function(e,c){p.disabled||p.open||(c||r(),t.$broadcast("uis:activate"),p.open=!0,p.activeIndex=p.activeIndex>=p.items.length?0:p.activeIndex,-1===p.activeIndex&&p.taggingLabel!==!1&&(p.activeIndex=0),i(function(){p.search=e||p.search,p.searchInput[0].focus()}))},p.findGroupByName=function(e){return p.groups&&p.groups.filter(function(t){return t.name===e})[0]},p.parseRepeatAttr=function(e,c,i){function l(e){var l=t.$eval(c);if(p.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(l)?l(e):e[l],c=p.findGroupByName(t);c?c.items.push(e):p.groups.push({name:t,items:[e]})}),i){var s=t.$eval(i);angular.isFunction(s)?p.groups=s(p.groups):angular.isArray(s)&&(p.groups=o(p.groups,s))}p.items=[],p.groups.forEach(function(e){p.items=p.items.concat(e.items)})}function a(e){p.items=e}p.setItemsFn=c?l:a,p.parserResult=s.parse(e),p.isGrouped=!!c,p.itemProperty=p.parserResult.itemName,p.refreshItems=function(e){e=e||p.parserResult.source(t);var c=p.selected;if(angular.isArray(c)&&!c.length||!p.removeSelected)p.setItemsFn(e);else if(void 0!==e){var i=e.filter(function(e){return c.indexOf(e)<0});p.setItemsFn(i)}},t.$watchCollection(p.parserResult.source,function(e){if(void 0===e||null===e)p.items=[];else{if(!angular.isArray(e))throw n("items","Expected an array but got '{0}'.",e);p.refreshItems(e),p.ngModel.$modelValue=null}})};var h;p.refresh=function(e){void 0!==e&&(h&&i.cancel(h),h=i(function(){t.$eval(e)},p.refreshDelay))},p.setActiveItem=function(e){p.activeIndex=p.items.indexOf(e)},p.isActive=function(e){if(!p.open)return!1;var t=p.items.indexOf(e[p.itemProperty]),c=t===p.activeIndex;return!c||0>t&&p.taggingLabel!==!1||0>t&&p.taggingLabel===!1?!1:(c&&!angular.isUndefined(p.onHighlightCallback)&&e.$eval(p.onHighlightCallback),c)},p.isDisabled=function(e){if(p.open){var t,c=p.items.indexOf(e[p.itemProperty]),i=!1;return c>=0&&!angular.isUndefined(p.disableChoiceExpression)&&(t=p.items[c],i=!!e.$eval(p.disableChoiceExpression),t._uiSelectChoiceDisabled=i),i}},p.select=function(e,c,l){if(void 0===e||!e._uiSelectChoiceDisabled){if(!p.items&&!p.search)return;if(!e||!e._uiSelectChoiceDisabled){if(p.tagging.isActivated){if(p.taggingLabel===!1)if(p.activeIndex<0){if(e=void 0!==p.tagging.fct?p.tagging.fct(p.search):p.search,!e||angular.equals(p.items[0],e))return}else e=p.items[p.activeIndex];else if(0===p.activeIndex){if(void 0===e)return;if(void 0!==p.tagging.fct&&"string"==typeof e){if(e=p.tagging.fct(p.search),!e)return}else"string"==typeof e&&(e=e.replace(p.taggingLabel,"").trim())}if(p.selected&&angular.isArray(p.selected)&&p.selected.filter(function(t){return angular.equals(t,e)}).length>0)return p.close(c),void 0}t.$broadcast("uis:select",e);var s={};s[p.parserResult.itemName]=e,i(function(){p.onSelectCallback(t,{$item:e,$model:p.parserResult.modelMapper(t,s)})}),p.closeOnSelect&&p.close(c),l&&"click"===l.type&&(p.clickTriggeredSelect=!0)}}},p.close=function(e){p.open&&(p.ngModel&&p.ngModel.$setTouched&&p.ngModel.$setTouched(),r(),p.open=!1,t.$broadcast("uis:close",e))},p.setFocus=function(){p.focus||p.focusInput[0].focus()},p.clear=function(e){p.select(void 0),e.stopPropagation(),i(function(){p.focusser[0].focus()},0,!1)},p.toggle=function(e){p.open?(p.close(),e.preventDefault(),e.stopPropagation()):p.activate()},p.isLocked=function(e,t){var c,i=p.selected[t];return i&&!angular.isUndefined(p.lockChoiceExpression)&&(c=!!e.$eval(p.lockChoiceExpression),i._uiSelectChoiceLocked=c),c};var f=null;p.sizeSearchInput=function(){var e=p.searchInput[0],c=p.searchInput.parent().parent()[0],l=function(){return c.clientWidth*!!e.offsetParent},s=function(t){if(0===t)return!1;var c=t-e.offsetLeft-10;return 50>c&&(c=t),p.searchInput.css("width",c+"px"),!0};p.searchInput.css("width","10px"),i(function(){null!==f||s(l())||(f=t.$watch(l,function(e){s(e)&&(f(),f=null)}))})},p.searchInput.on("keydown",function(c){var l=c.which;t.$apply(function(){var t=!1;if((p.items.length>0||p.tagging.isActivated)&&(u(l),p.taggingTokens.isActivated)){for(var s=0;s<p.taggingTokens.tokens.length;s++)p.taggingTokens.tokens[s]===e.MAP[c.keyCode]&&p.search.length>0&&(t=!0);t&&i(function(){p.searchInput.triggerHandler("tagged");var t=p.search.replace(e.MAP[c.keyCode],"").trim();p.tagging.fct&&(t=p.tagging.fct(t)),t&&p.select(t,!0)})}}),e.isVerticalMovement(l)&&p.items.length>0&&d(),(l===e.ENTER||l===e.ESC)&&(c.preventDefault(),c.stopPropagation())}),p.searchInput.on("paste",function(e){var t=e.originalEvent.clipboardData.getData("text/plain");if(t&&t.length>0&&p.taggingTokens.isActivated&&p.tagging.fct){var c=t.split(p.taggingTokens.tokens[0]);c&&c.length>0&&(angular.forEach(c,function(e){var t=p.tagging.fct(e);t&&p.select(t,!0)}),e.preventDefault(),e.stopPropagation())}}),p.searchInput.on("tagged",function(){i(function(){r()})}),t.$on("$destroy",function(){p.searchInput.off("keyup keydown tagged blur paste")})}]),c.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,c,i,l,s,n){return{restrict:"EA",templateUrl:function(e,c){var i=c.theme||t.theme;return i+(angular.isDefined(c.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(l,a){return angular.isDefined(a.multiple)?l.append("<ui-select-multiple/>").removeAttr("multiple"):l.append("<ui-select-single/>"),function(l,a,r,o,u){function d(e){if(h.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!h.clickTriggeredSelect){var c=["input","button","textarea"],i=angular.element(e.target).scope(),s=i&&i.$select&&i.$select!==h;s||(s=~c.indexOf(e.target.tagName.toLowerCase())),h.close(s),l.$digest()}h.clickTriggeredSelect=!1}}function p(){var t=i(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function g(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$)}var h=o[0],f=o[1];h.generatedId=t.generateId(),h.baseTitle=r.title||"Select box",h.focusserTitle=h.baseTitle+" focus",h.focusserId="focusser-"+h.generatedId,h.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?s(r.closeOnSelect)():t.closeOnSelect}(),h.onSelectCallback=s(r.onSelect),h.onRemoveCallback=s(r.onRemove),h.ngModel=f,h.choiceGrouped=function(e){return h.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){h.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),l.$watch("searchEnabled",function(){var e=l.$eval(r.searchEnabled);h.searchEnabled=void 0!==e?e:t.searchEnabled}),l.$watch("sortable",function(){var e=l.$eval(r.sortable);h.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){h.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=l.$eval(r.resetSearchInput);h.resetSearchInput=void 0!==e?e:!0}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=l.$eval(r.tagging);h.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else h.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&(h.taggingLabel="false"===r.taggingLabel?!1:void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];h.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){h.setFocus()}),angular.isDefined(r.focusOn)&&l.$on(r.focusOn,function(){n(function(){h.setFocus()})}),e.on("click",d),l.$on("$destroy",function(){e.off("click",d)}),u(l,function(e){var t=angular.element("<div>").append(e),i=t.querySelectorAll(".ui-select-match");if(i.removeAttr("ui-select-match"),i.removeAttr("data-ui-select-match"),1!==i.length)throw c("transcluded","Expected 1 .ui-select-match but got '{0}'.",i.length);a.querySelectorAll(".ui-select-match").replaceWith(i);var l=t.querySelectorAll(".ui-select-choices");if(l.removeAttr("ui-select-choices"),l.removeAttr("data-ui-select-choices"),1!==l.length)throw c("transcluded","Expected 1 .ui-select-choices but got '{0}'.",l.length);a.querySelectorAll(".ui-select-choices").replaceWith(l)});var v=l.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(l.$watch("$select.open",function(e){e?p():g()}),l.$on("$destroy",function(){g()}));var m=null,$="",b=null,x="direction-up";l.$watch("$select.open",function(t){if(t){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),null===b)return;b[0].style.opacity=0,n(function(){var t=i(a),c=i(b);t.top+t.height+c.height>e[0].documentElement.scrollTop+e[0].documentElement.clientHeight&&(b[0].style.position="absolute",b[0].style.top=-1*c.height+"px",a.addClass(x)),b[0].style.opacity=1})}else{if(null===b)return;b[0].style.position="",b[0].style.top="",a.removeClass(x)}})}}}}]),c.directive("uiSelectMatch",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){var c=t.parent().attr("theme")||e.theme,i=t.parent().attr("multiple");return c+(i?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,c,i,l){function s(e){l.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}l.lockChoiceExpression=i.uiLockChoice,i.$observe("placeholder",function(t){l.placeholder=void 0!==t?t:e.placeholder}),i.$observe("allowClear",s),s(i.allowClear),l.multiple&&l.sizeSearchInput()}}}]),c.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,c){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var c,i=this,l=e.$select;e.$evalAsync(function(){c=e.ngModel}),i.activeMatchIndex=-1,i.updateModel=function(){c.$setViewValue(Date.now()),i.refreshComponent()},i.refreshComponent=function(){l.refreshItems(),l.sizeSearchInput()},i.removeChoice=function(c){var s=l.selected[c];if(!s._uiSelectChoiceLocked){var n={};n[l.parserResult.itemName]=s,l.selected.splice(c,1),i.activeMatchIndex=-1,l.sizeSearchInput(),t(function(){l.onRemoveCallback(e,{$item:s,$model:l.parserResult.modelMapper(e,n)})}),i.updateModel()}},i.getPlaceholder=function(){return l.selected.length?void 0:l.placeholder}}],controllerAs:"$selectMultiple",link:function(i,l,s,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function c(){switch(t){case e.LEFT:return~g.activeMatchIndex?u:n;case e.RIGHT:return~g.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~g.activeMatchIndex?(g.removeChoice(r),u):n;case e.DELETE:return~g.activeMatchIndex?(g.removeChoice(g.activeMatchIndex),r):!1}}var i=a(d.searchInput[0]),l=d.selected.length,s=0,n=l-1,r=g.activeMatchIndex,o=g.activeMatchIndex+1,u=g.activeMatchIndex-1,p=r;return i>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=c(),g.activeMatchIndex=d.selected.length&&p!==!1?Math.min(n,Math.max(s,p)):-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var c=-1;if(angular.isArray(e))for(var i=angular.copy(e),l=0;l<i.length;l++)if(void 0===d.tagging.fct)i[l]+" "+d.taggingLabel===t&&(c=l);else{var s=i[l];s.isTag=!0,angular.equals(s,t)&&(c=l)}return c}var d=n[0],p=i.ngModel=n[1],g=i.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$parsers.unshift(function(){for(var e,t={},c=[],l=d.selected.length-1;l>=0;l--)t={},t[d.parserResult.itemName]=d.selected[l],e=d.parserResult.modelMapper(i,t),c.unshift(e);return c}),p.$formatters.unshift(function(e){var t,c=d.parserResult.source(i,{$select:{search:""}}),l={};if(!c)return e;var s=[],n=function(e,c){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(l[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(i,l),d.parserResult.trackByExp){var a=/\.(.+)/.exec(d.parserResult.trackByExp);if(a.length>0&&t[a[1]]==c[a[1]])return s.unshift(e[n]),!0}if(angular.equals(t,c))return s.unshift(e[n]),!0}return!1}};if(!e)return s;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(c,e[a])||s.unshift(e[a]);return s}),i.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(p.$modelValue=null,g.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,i.$evalAsync()},i.$on("uis:select",function(e,t){d.selected.push(t),g.updateModel()}),i.$on("uis:activate",function(){g.activeMatchIndex=-1}),i.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var c=t.which;i.$apply(function(){var i=!1;e.isHorizontalMovement(c)&&(i=r(c)),i&&c!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||i.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var c,l,s,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,g=-1;if(void 0!==d.tagging.fct){if(s=d.$filter("filter")(a,{isTag:!0}),s.length>0&&(n=s[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),c=d.tagging.fct(d.search),c.isTag=!0,r.filter(function(e){return angular.equals(e,d.tagging.fct(d.search))}).length>0)return;c.isTag=!0}else{if(s=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),s.length>0&&(n=s[0]),l=a[0],void 0!==l&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),c=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return p&&(a=r,i.$evalAsync(function(){d.activeIndex=0,d.items=a})),void 0;if(o(r))return p&&(d.items=r.slice(1,r.length)),void 0}p&&(g=u(d.selected,c)),g>-1?a=a.slice(g+1,a.length-1):(a=[],a.push(c),a=a.concat(r)),i.$evalAsync(function(){d.activeIndex=0,d.items=a})}}),d.searchInput.on("blur",function(){c(function(){g.activeMatchIndex=-1})})}}}]),c.directive("uiSelectSingle",["$timeout","$compile",function(t,c){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(i,l,s,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,c={};return c[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(i,c)}),r.$formatters.unshift(function(e){var t,c=a.parserResult.source(i,{$select:{search:""}}),l={};if(c){var s=function(c){return l[a.parserResult.itemName]=c,t=a.parserResult.modelMapper(i,l),t==e};if(a.selected&&s(a.selected))return a.selected;for(var n=c.length-1;n>=0;n--)if(s(c[n]))return c[n]}return e}),i.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},i.$on("uis:select",function(e,t){a.selected=t}),i.$on("uis:close",function(e,c){t(function(){a.focusser.prop("disabled",!1),c||a.focusser[0].focus()},0,!1)}),i.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");c(o)(i),a.focusser=o,a.focusInput=o,l.parent().append(o),o.bind("focus",function(){i.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){i.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),i.$apply(),void 0):(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||((t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER||t.which==e.SPACE)&&(t.preventDefault(),t.stopPropagation(),a.activate()),i.$digest()),void 0)}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),i.$digest())})}}}]),c.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,c){return{require:"^uiSelect",link:function(t,i,l,s){if(null===t[l.uiSelectSort])throw c("sort","Expected a list to sort");var n=angular.extend({axis:"horizontal"},t.$eval(l.uiSelectSortOptions)),a=n.axis,r="dragging",o="dropping",u="dropping-before",d="dropping-after";t.$watch(function(){return s.sortable},function(e){e?i.attr("draggable",!0):i.removeAttr("draggable")}),i.on("dragstart",function(e){i.addClass(r),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text/plain",t.$index)}),i.on("dragend",function(){i.removeClass(r)});var p,g=function(e,t){this.splice(t,0,this.splice(e,1)[0])},h=function(e){e.preventDefault();var t="vertical"===a?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===a?"offsetHeight":"offsetWidth"]/2?(i.removeClass(d),i.addClass(u)):(i.removeClass(u),i.addClass(d))},f=function(t){t.preventDefault();var c=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text/plain"),10);e.cancel(p),p=e(function(){v(c)},20)},v=function(e){var c=t.$eval(l.uiSelectSort),s=c[e],n=null;n=i.hasClass(u)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,g.apply(c,[e,n]),t.$apply(function(){t.$emit("uiSelectSort:change",{array:c,item:s,from:e,to:n})}),i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("drop",f)};i.on("dragenter",function(){i.hasClass(r)||(i.addClass(o),i.on("dragover",h),i.on("drop",f))}),i.on("dragleave",function(e){e.target==i&&(i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("dragover",h),i.off("drop",f))})}}}]),c.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var c=this;c.parse=function(c){var i=c.match(/^\s*(?:([\s\S]+?)\s+as\s+)?([\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!i)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",c);return{itemName:i[2],source:t(i[3]),trackByExp:i[4],modelMapper:t(i[1]||i[2])}},c.getGroupNgRepeatExpression=function(){return"$group in $select.groups"},c.getNgRepeatExpression=function(e,t,c,i){var l=e+" in "+(i?"$group.items":t);return c&&(l+=" track by "+c),l}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="javascript:void(0)" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'),e.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')
}]);
(function (root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('angular'));
    } else {
        root.angularClipboard = factory(root.angular);
  }
}(this, function (angular) {

return angular.module('angular-clipboard', [])
    .factory('clipboard', ['$document', function ($document) {
        function createNode(text) {
            var node = $document[0].createElement('textarea');
            node.style.position = 'absolute';
            node.style.left = '-10000px';
            node.textContent = text;
            return node;
        }

        function copyNode(node) {
            try {
                // Set inline style to override css styles
                $document[0].body.style.webkitUserSelect = 'initial';

                var selection = $document[0].getSelection();
                selection.removeAllRanges();
                node.select();

                if(!$document[0].execCommand('copy')) {
                    throw('failure copy');
                }
                selection.removeAllRanges();
            } finally {
                // Reset inline style
                $document[0].body.style.webkitUserSelect = '';
            }
        }

        function copyText(text) {
            var node = createNode(text);
            $document[0].body.appendChild(node);
            copyNode(node);
            $document[0].body.removeChild(node);
        }

        return {
            copyText: copyText
        };
    }])
    .directive('clipboard', ['clipboard', function (clipboard) {
        return {
            restrict: 'A',
            scope: {
                onCopied: '&',
                onError: '&',
                text: '='
            },
            link: function (scope, element) {
                element.on('click', function (event) {
                    try {
                        clipboard.copyText(scope.text);
                        if (angular.isFunction(scope.onCopied)) {
                            scope.$evalAsync(scope.onCopied());
                        }
                    } catch (err) {
                        if (angular.isFunction(scope.onError)) {
                            scope.$evalAsync(scope.onError({err: err}));
                        }
                    }
                });
            }
        };
    }]);

}));