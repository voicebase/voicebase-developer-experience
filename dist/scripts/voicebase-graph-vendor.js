var DagreFlow=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";!function(){var e=r(1),n=r(2),o=r(3),a=function(t){e.init(t),n.init()},i=function(){n.render()},l=function(t,e){n.setNodeStatus(t,e)},s=function(t,e){n.setNodeLabel(t,e)},u=function(){return o.getNodes()};t.exports={init:a,render:i,setNodeStatus:l,setNodeLabel:s,getFlow:u}}()},function(t,e){"use strict";!function(){var e={shortLabels:!1,shortLabelLength:4,statuses:["SUCCESS","FAILED","PENDING","RUNNING"]},r=function(t){e=_.extend(e,t)},n=function(t){return e[t]};t.exports={init:r,get:n}}()},function(t,e,r){"use strict";!function(){var e,n,o,a,i=r(1),l=r(3),s=r(4),u=r(5),c=function(){e=i.get("svg"),n=e.select("g"),o=i.get("graph"),a=new dagreD3.render,l.create(o)},f=function(){p();var t=400;o.graph().transition=function(e){return e.transition().duration(t)},a(n,o),setTimeout(function(){b(),d()},t+100),v(),u.setZoom(e,n,o)},d=function(){var t=i.get("shortLabels");if(!t)return!1;var r=function(t,e){return"<div class='description'>"+e+"</div>"};e.selectAll("g.node").attr("title",function(t){var e=o.node(t).description;return e?r(t,e):""}).each(function(t){var e=o.node(t).description;e&&jQuery(this).tipsy({gravity:"n",opacity:1,html:!0})})},v=function(){var t=l.getNodes(),e=!0,r=!1,n=void 0;try{for(var o,a=Object.keys(t)[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var i=o.value,s=t[i];s.properties.status&&y(i,s.properties.status)}}catch(u){r=!0,n=u}finally{try{!e&&a["return"]&&a["return"]()}finally{if(r)throw n}}},y=function(t,e){l.setNodeStatus(t,e);var r=x(t),n=i.get("statuses"),o=!0,a=!1,s=void 0;try{for(var u,c=n[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var f=u.value;r.classed(f,!1)}}catch(d){a=!0,s=d}finally{try{!o&&c["return"]&&c["return"]()}finally{if(a)throw s}}r.classed(e,!0)},h=function(t,e){var r=x(t);r.select("tspan").text(e)},p=function(){var t=!0,e=!1,r=void 0;try{for(var n,a=Object.keys(o._edgeLabels)[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var i=n.value,l=o._edgeLabels[i];l.lineInterpolate="bundle"}}catch(s){e=!0,r=s}finally{try{!t&&a["return"]&&a["return"]()}finally{if(e)throw r}}},b=function(){var t=l.getClusters();t.forEach(function(t){g(t)})},g=function(t){var e=x(t.id);if(0===e[0].length)return!1;var r=s.icons,n=e.select("rect"),o=e.select(".label g");if(!n[0][0]||!e[0][0])return!1;var a=n.attr("width"),i=n.attr("height");if(!a||!i)return!1;t.cluster.isExpanded?o.attr("transform","translate("+-a/2+","+-i/2+")").classed("toggle-link expanded",!0):(o.attr("transform","translate("+-a/2+","+-i/4+")").classed("toggle-link collapsed",!0),n.attr("width",parseFloat(a)+10)),t.cluster.isExpanded&&(o.selectAll("*").remove(),o.append("text").append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(t.properties.flowLabel)),o.select("text").transition().attr("transform","translate(25, 0)").duration(300);var l=o.insert("path",":first-child");l.attr("d",function(e){return t.cluster.isExpanded?r.minus:r.plus}).attr("transform","translate(0, -4) scale(0.8)"),o.on("click",function(e){t.cluster.isExpanded?w(e):m(e)})},x=function(t){var r=e.selectAll(".cluster,.node");return r.filter(function(e){return e===t})},w=function(t){l.collapseCluster(t);var e=l.getNodes(),r=e[t];if(r.isCluster){var n=r.cluster.contents,a=r.cluster.edges,i=!0,s=!1,u=void 0;try{for(var c,d=Object.keys(n)[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var v=c.value;o.removeNode(v)}}catch(y){s=!0,u=y}finally{try{!i&&d["return"]&&d["return"]()}finally{if(s)throw u}}a.outer.input.forEach(function(r){var n=r.v;r.linkToCluster&&!e[r.linkToCluster].cluster.isExpanded&&(n=r.linkToCluster),o.setEdge(n,t)}),a.outer.output.forEach(function(r){var n=r.w;r.linkToCluster&&!e[r.linkToCluster].cluster.isExpanded&&(n=r.linkToCluster),o.setEdge(t,n)}),o._nodes[t].label=o._nodes[t].flowLabel}f()},m=function(t){l.expandCluster(t);var e=l.getNodes(),r=e[t];if(r.isCluster){var n,a,i,s,u,c,d,v,y,h,p,b,g,x,w;!function(){o.removeNode(t),o.setNode(t,r.properties);var f=r.cluster.contents,m=r.cluster.edges,k=[],C=[];Object.keys(f).forEach(function(t){e[t].isCluster?C.push(t):k.push(t)}),n=!0,a=!1,i=void 0;try{for(s=k[Symbol.iterator]();!(n=(u=s.next()).done);n=!0){var S=u.value;o.setNode(S,e[S].properties),o.setParent(S,t)}}catch(E){a=!0,i=E}finally{try{!n&&s["return"]&&s["return"]()}finally{if(a)throw i}}c=!0,d=!1,v=void 0;try{for(y=C[Symbol.iterator]();!(c=(h=y.next()).done);c=!0){var S=h.value;o.setNode(S,e[S].properties),o.setParent(S,t),l.expandCluster(S);for(var N in e[S].cluster.contents)o.setParent(N,S)}}catch(E){d=!0,v=E}finally{try{!c&&y["return"]&&y["return"]()}finally{if(d)throw v}}p=!0,b=!1,g=void 0;try{for(x=Object.keys(r.parents)[Symbol.iterator]();!(p=(w=x.next()).done);p=!0){var L=w.value;o.setParent(t,L)}}catch(E){b=!0,g=E}finally{try{!p&&x["return"]&&x["return"]()}finally{if(b)throw g}}m.inner.forEach(function(t){o.setEdge(t.v,t.w)}),m.outer.input.forEach(function(t){var r=t.v;t.linkToCluster&&!e[t.linkToCluster].cluster.isExpanded&&(r=t.linkToCluster),o.setEdge(r,t.w)}),m.outer.output.forEach(function(t){var r=t.w;t.linkToCluster&&!e[t.linkToCluster].cluster.isExpanded&&(r=t.linkToCluster),o.setEdge(t.v,r)}),o._nodes[t].label=""}()}f()};t.exports={init:c,render:f,setNodeLabel:h,setNodeStatus:y}}()},function(t,e,r){"use strict";!function(){var e=r(1),n={},o=function(){return n},a=function(){return n.nodes},i=function(){var t=[];return Object.keys(n.nodes).forEach(function(e){n.nodes[e].isCluster&&t.push(n.nodes[e])}),t},l=function(t){n.nodes={};var e=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(t._nodes)[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var l=a.value;n.nodes[l]={};var d=n.nodes[l];d.id=l,d.properties=s(t,l),d.children=u(t,l),d.parents=c(t,l),d.isCluster=b(t,l),d.isCluster&&(d.cluster=f(t,l))}}catch(v){r=!0,o=v}finally{try{!e&&i["return"]&&i["return"]()}finally{if(r)throw o}}y(),h(t),t._flow=n},s=function(t,r){var n=t._nodes[r];if(b(t,r)){var o=n.label;n.label="",n.flowLabel=o}else{var a=e.get("shortLabels");if(a&&n.shortLabel){var i=e.get("shortLabelLength");n.label.length>i&&(n.description=n.label,n.label=n.label.substring(0,i)+"...")}}return n},u=function(t,e){var r=t._out[e],n={},o=!0,a=!1,i=void 0;try{for(var l,s=Object.keys(r)[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){var u=l.value;n[r[u].w]=!0}}catch(c){a=!0,i=c}finally{try{!o&&s["return"]&&s["return"]()}finally{if(a)throw i}}return n},c=function(t,e){var r={},n=t._in[e],o=!0,a=!1,i=void 0;try{for(var l,s=Object.keys(n)[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){var u=l.value;r[n[u].v]=!0}}catch(c){a=!0,i=c}finally{try{!o&&s["return"]&&s["return"]()}finally{if(a)throw i}}return r},f=function(t,e){var r={isExpanded:!0,contents:{}},n=t._children[e];return r.contents=d(t,n),r.edges=v(t,Object.keys(r.contents)),r},d=function m(t,e){var r={},n=!0,o=!1,a=void 0;try{for(var i,l=Object.keys(e)[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var s=i.value;if(r[s]=!0,b(t,s)){var u=m(t,t._children[s]);Object.assign(r,u)}}}catch(c){o=!0,a=c}finally{try{!n&&l["return"]&&l["return"]()}finally{if(o)throw a}}return r},v=function(t,e){var r={inner:[],outer:{input:[],output:[]}},n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var s=i.value,u=t._out[s],c=!0,f=!1,d=void 0;try{for(var v,y=function(){var t=v.value,n=u[t],o=e.filter(function(t){return t===n.w});o.length>0?r.inner.push({v:n.v,w:n.w}):r.outer.output.push({v:n.v,w:n.w})},h=Object.keys(u)[Symbol.iterator]();!(c=(v=h.next()).done);c=!0)y()}catch(p){f=!0,d=p}finally{try{!c&&h["return"]&&h["return"]()}finally{if(f)throw d}}var b=t._in[s],g=!0,x=!1,w=void 0;try{for(var m,k=function(){var t=m.value,n=b[t],o=e.filter(function(t){return t===n.v});0===o.length&&r.outer.input.push({v:n.v,w:n.w})},C=Object.keys(b)[Symbol.iterator]();!(g=(m=C.next()).done);g=!0)k()}catch(p){x=!0,w=p}finally{try{!g&&C["return"]&&C["return"]()}finally{if(x)throw w}}}}catch(p){o=!0,a=p}finally{try{!n&&l["return"]&&l["return"]()}finally{if(o)throw a}}return r},y=function(){var t=i(),e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var l=o.value,s=l.cluster.edges.outer.output,u=!0,c=!1,f=void 0;try{for(var d,v=s[Symbol.iterator]();!(u=(d=v.next()).done);u=!0){var y=d.value,h=p(y,l.id);h&&(y.linkToCluster=h.id)}}catch(b){c=!0,f=b}finally{try{!u&&v["return"]&&v["return"]()}finally{if(c)throw f}}}}catch(b){r=!0,n=b}finally{try{!e&&a["return"]&&a["return"]()}finally{if(r)throw n}}},h=function(t){var e=i(),r=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=a.value,u=s.id,c=!0,f=!1,d=void 0;try{for(var v,y=e[Symbol.iterator]();!(c=(v=y.next()).done);c=!0){var h=v.value;t._children[h.id][u]&&(s.parents[h.id]=!0)}}catch(p){f=!0,d=p}finally{try{!c&&y["return"]&&y["return"]()}finally{if(f)throw d}}}}catch(p){n=!0,o=p}finally{try{!r&&l["return"]&&l["return"]()}finally{if(n)throw o}}},p=function(t,e){var r=i(),n=null,o=!0,a=!1,l=void 0;try{for(var s,u=r[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value,f=c.cluster.edges.outer.input,d=f.filter(function(e){return JSON.stringify(t)===JSON.stringify(e)});if(d.length>0){d[0].linkToCluster=e,n=c;break}}}catch(v){a=!0,l=v}finally{try{!o&&u["return"]&&u["return"]()}finally{if(a)throw l}}return n},b=function(t,e){return Object.keys(t._children[e]).length>0},g=function(t){n.nodes[t]&&n.nodes[t].cluster&&(n.nodes[t].cluster.isExpanded=!0)},x=function(t){n.nodes[t]&&n.nodes[t].cluster&&(n.nodes[t].cluster.isExpanded=!1)},w=function(t,e){n.nodes[t].properties.status=e};t.exports={create:l,getFlow:o,getNodes:a,getClusters:i,expandCluster:g,collapseCluster:x,setNodeStatus:w}}()},function(t,e){"use strict";!function(){var e={plus:"M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z",minus:"M25.979,12.896,5.979,12.896,5.979,19.562,25.979,19.562z"};t.exports={icons:e}}()},function(t,e){"use strict";!function(){var e=1,r=function(t,r,o){var a=d3.behavior.zoom().on("zoom",function(){e=d3.event.scale,r.attr("transform","translate("+d3.event.translate+")scale("+e+")")});t.call(a),n(t,o,a)},n=function(t,r,n){n.translate([(parseInt(t.attr("width"))-r.graph().width*e)/2,20]).scale(e).event(t),t.attr("height",r.graph().height*e+40)};t.exports={setZoom:r}}()}]);
//# sourceMappingURL=dagre-flow.map

!function(t){function e(t,e){return"function"==typeof t?t.call(e):t}function i(e,i){this.$element=t(e),this.options=i,this.enabled=!0,this.fixTitle()}i.prototype={show:function(){var i=this.getTitle();if(i&&this.enabled){var n=this.tip();n.find(".tipsy-inner")[this.options.html?"html":"text"](i),n[0].className="tipsy",n.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var o=t.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||0,height:this.$element[0].offsetHeight||0});if("object"==typeof this.$element[0].nearestViewportElement){var s=this.$element[0],l=s.getBoundingClientRect();o.width=l.width,o.height=l.height}var a,h=n[0].offsetWidth,r=n[0].offsetHeight,f=e(this.options.gravity,this.$element[0]);switch(f.charAt(0)){case"n":a={top:o.top+o.height+this.options.offset,left:o.left+o.width/2-h/2};break;case"s":a={top:o.top-r-this.options.offset,left:o.left+o.width/2-h/2};break;case"e":a={top:o.top+o.height/2-r/2,left:o.left-h-this.options.offset};break;case"w":a={top:o.top+o.height/2-r/2,left:o.left+o.width+this.options.offset}}2==f.length&&("w"==f.charAt(1)?a.left=o.left+o.width/2-15:a.left=o.left+o.width/2-h+15),n.css(a).addClass("tipsy-"+f),n.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+f.charAt(0),this.options.className&&n.addClass(e(this.options.className,this.$element[0])),this.options.fade?n.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):n.css({visibility:"visible",opacity:this.options.opacity});var d=this,p=function(t){return function(){d.$tip.stop(),d.tipHovered=t,t||(0===d.options.delayOut?d.hide():setTimeout(function(){"out"==d.hoverState&&d.hide()},d.options.delayOut))}};n.hover(p(!0),p(!1))}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){t(this).remove()}):this.tip().remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("original-title"))&&t.attr("original-title",t.attr("title")||"").removeAttr("title"),"object"==typeof t.context.nearestViewportElement&&t.children("title").length&&t.append("<original-title>"+(t.children("title").text()||"")+"</original-title>").children("title").remove()},getTitle:function(){var t,e=this.$element,i=this.options;if(this.fixTitle(),"string"==typeof i.title){var n="title"==i.title?"original-title":i.title;t=e.children(n).length?e.children(n).html():e.attr(n)}else"function"==typeof i.title&&(t=i.title.call(e[0]));return t=(""+t).replace(/(^\s*|\s*$)/,""),t||i.fallback},tip:function(){return this.$tip||(this.$tip=t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},t.fn.tipsy=function(e){function n(n){var o=t.data(n,"tipsy");return o||(o=new i(n,t.fn.tipsy.elementOptions(n,e)),t.data(n,"tipsy",o)),o}function o(){var t=n(this);t.hoverState="in",0===e.delayIn?t.show():(t.fixTitle(),setTimeout(function(){"in"==t.hoverState&&t.show()},e.delayIn))}function s(){var t=n(this);if(t.hoverState="out",0===e.delayOut)t.hide();else{var i=function(){t.tipHovered&&e.hoverlock||"out"==t.hoverState&&t.hide()};setTimeout(i,e.delayOut)}}if(e===!0)return this.data("tipsy");if("string"==typeof e){var l=this.data("tipsy");return l&&l[e](),this}if(e=t.extend({},t.fn.tipsy.defaults,e),e.hoverlock&&0===e.delayOut&&(e.delayOut=100),"manual"!=e.trigger){var a=e.live?"live":"bind",h="hover"==e.trigger?"mouseenter":"focus",r="hover"==e.trigger?"mouseleave":"blur";this[a](h,o)[a](r,s)}return this},t.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover",hoverlock:!1},t.fn.tipsy.elementOptions=function(e,i){return t.metadata?t.extend({},i,t(e).metadata()):i},t.fn.tipsy.autoNS=function(){return t(this).offset().top>t(document).scrollTop()+t(window).height()/2?"s":"n"},t.fn.tipsy.autoWE=function(){return t(this).offset().left>t(document).scrollLeft()+t(window).width()/2?"e":"w"},t.fn.tipsy.autoBounds=function(e,i){return function(){var n={ns:i[0],ew:i.length>1?i[1]:!1},o=t(document).scrollTop()+e,s=t(document).scrollLeft()+e,l=t(this);return l.offset().top<o&&(n.ns="n"),l.offset().left<s&&(n.ew="w"),t(window).width()+t(document).scrollLeft()-l.offset().left<e&&(n.ew="e"),t(window).height()+t(document).scrollTop()-l.offset().top<e&&(n.ns="s"),n.ns+(n.ew?n.ew:"")}}}(jQuery);