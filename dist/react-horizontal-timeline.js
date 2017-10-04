module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("radium")},function(e,t,n){"use strict";e.exports={LEFT:"left",RIGHT:"right",LEFT_KEY:37,RIGHT_KEY:39,UP_KEY:38,DOWN_KEY:40,DAY:864e5,MIN_TIMELINE_WIDTH:750,MIN_EVENT_PADDING:20,MAX_EVENT_PADDING:120,DATE_WIDTH:85,TIMELINE_PADDING:100,KEYMAP:{37:"left",39:"right"}}},function(e,t){e.exports=require("react-motion")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t.daydiff=function(e,t){return Math.round(t-e)},i=t.zip=function(e){return e[0].map(function(t,n){return e.map(function(e){return e[n]})})},a=t.dateDistanceExtremes=function(e){var t=i([e.slice(0,-1),e.slice(1)]),n=t.map(function(e){var t=o(e,2),n=t[0],i=t[1];return r(n,i)});return{min:Math.min.apply(null,n),max:Math.max.apply(null,n)}};t.cummulativeSeperation=function(e,t,n,o,i){var l=new Array(e.length);l[0]=i;for(var s=a(e),u=s.max-s.min,d=o-n,c=1;c<l.length;c+=1){var p=r(e[c-1],e[c]),f=0===u?o:Math.round((p-s.min)*d/u+n);l[c]=l[c-1]+t+f}return l}},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),u=o(s),d=n(1),c=o(d),p=n(7),f=o(p),h=n(8),b=o(h),y=n(4),v=n(2),g=o(v),m=function(e,t){return e||t},E=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props;if(!e.containerWidth)return!1;var t=e.values.map(function(e,t){return new Date(t)}),n=(0,y.cummulativeSeperation)(t,e.labelWidth,e.minEventPadding,e.maxEventPadding,e.linePadding),o=n.map(function(t,n){var o=e.values[n].title?e.values[n].title:n;return e.getLabel&&(o=e.getLabel(o,n)),{distance:t,label:o,date:new Date(n).toISOString(),color:e.values[n].color?e.values[n].color:null}}),r=this.props.containerWidth-80,i=Math.max(o[o.length-1].distance+this.props.linePadding,r),a=0,l=0;return this.props.isOpenEnding||(a=i-o[o.length-1].distance),this.props.isOpenBeginning||(l=o[0].distance),u.default.createElement(b.default,{width:e.containerWidth,height:e.containerHeight,events:o,isTouchEnabled:e.isTouchEnabled,totalWidth:i,visibleWidth:r,index:e.index,styles:e.styles,indexClick:e.indexClick,labelWidth:e.labelWidth,fillingMotion:e.fillingMotion,barPaddingRight:a,barPaddingLeft:l})}}]),t}(u.default.Component);E.defaultProps={getLabel:m,minEventPadding:g.default.MIN_EVENT_PADDING,maxEventPadding:g.default.MAX_EVENT_PADDING,linePadding:g.default.TIMELINE_PADDING,labelWidth:g.default.DATE_WIDTH,styles:{outline:"#dfdfdf",background:"#f8f8f8",foreground:"#7b9d6f"},fillingMotion:{stiffness:150,damping:25},slidingMotion:{stiffness:150,damping:25},isOpenEnding:!0,isOpenBeginning:!0,isTouchEnabled:!0,isKeyboardEnabled:!0},t.default=(0,c.default)((0,f.default)({elementResize:!0})(E))},function(e,t){e.exports=require("react-dimensions")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),d=o(u),c=n(3),p=n(9),f=o(p),h=n(11),b=o(h),y=n(12),v=o(y),g=n(14),m=o(g),E=n(2),_=o(E),x=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return w.call(n),n.state={position:0,maxPosition:Math.min(e.visibleWidth-e.totalWidth,0)},n.touch={coors:{x:0,y:0},isSwiping:!1,started:!1,threshold:3},n}return a(t,e),s(t,[{key:"componentWillMount",value:function(){document.body.addEventListener("keydown",this.handleKeydown)}},{key:"componentDidMount",value:function(){var e=this.props.events[this.props.index];this.slideToPosition(-(e.distance-this.props.visibleWidth/2),this.props)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.handleKeydown)}},{key:"componentWillReceiveProps",value:function(e){var t=e.events[e.index],n=-this.state.position,o=n+e.visibleWidth;t.distance>n+this.props.labelWidth&&t.distance<o-this.props.labelWidth?this.slideToPosition(this.state.position,e):this.slideToPosition(-(t.distance-e.visibleWidth/2),e)}},{key:"render",value:function(){var e=this,t=this.props.isTouchEnabled?{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd}:{},n=this.props.events[this.props.index].distance-this.props.barPaddingLeft,o=this.props.totalWidth-this.props.barPaddingLeft-this.props.barPaddingRight;return d.default.createElement("div",l({style:{width:this.props.width+"px",height:this.props.height+"px"}},t),d.default.createElement("div",{className:"events-wrapper",style:{position:"relative",height:"100%",margin:"0 40px",overflow:"hidden"}},d.default.createElement(c.Motion,{style:{X:(0,c.spring)(this.state.position,this.slidingMotion)}},function(t){var r=t.X;return d.default.createElement("div",{className:"events",style:{position:"absolute",left:0,top:49,height:2,width:e.props.totalWidth,WebkitTransform:"translate3d("+r+", 0, 0)px",transform:"translate3d("+r+"px, 0, 0)"}},d.default.createElement(b.default,{left:e.props.barPaddingLeft,width:o,fillingMotion:e.props.fillingMotion,backgroundColor:e.props.styles.outline}),d.default.createElement(b.default,{left:e.props.barPaddingLeft,width:n,fillingMotion:e.props.fillingMotion,backgroundColor:e.props.styles.foreground}),d.default.createElement(f.default,{events:e.props.events,selectedIndex:e.props.index,styles:e.props.styles,handleDateClick:e.props.indexClick,labelWidth:e.props.labelWidth}))})),d.default.createElement(v.default,{styles:this.props.styles}),d.default.createElement(m.default,{maxPosition:this.state.maxPosition,position:this.state.position,styles:this.props.styles,updateSlide:this.updateSlide}))}}]),t}(d.default.Component),w=function(){var e=this;this.handleKeydown=function(t){e.props.isKeyboardEnabled&&(t.keyCode===_.default.LEFT_KEY||t.keyCode===_.default.RIGHT_KEY?e.updateSlide(_.default.KEYMAP[t.keyCode]):t.keyCode===_.default.UP_KEY?e.props.indexClick(Math.min(e.props.selectedIndex+1,e.props.events.length-1)):t.keyCode===_.default.DOWN_KEY&&e.props.indexClick(Math.max(e.props.selectedIndex-1,0)))},this.handleTouchStart=function(t){var n=t.touches[0];e.touch.coors.x=n.pageX,e.touch.coors.y=n.pageY,e.touch.isSwiping=!1,e.touch.started=!0},this.handleTouchMove=function(t){if(!e.touch.started)return void e.handleTouchStart(t);var n=t.touches[0],o=Math.abs(e.touch.coors.x-n.pageX),r=Math.abs(e.touch.coors.y-n.pageY),i=o>r&&o>e.touch.threshold;if(!0===i||o>e.touch.threshold||r>e.touch.threshold){e.touch.isSwiping=i;var a=e.touch.coors.x-n.pageX;e.touch.coors.x=n.pageX,e.setState({position:e.state.position-a})}!0===e.touch.isSwiping&&t.preventDefault()},this.handleTouchEnd=function(t){e.slideToPosition(e.state.position),e.touch.coors.x=0,e.touch.coors.y=0,e.touch.isSwiping=!1,e.touch.started=!1},this.slideToPosition=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props,o=Math.min(n.visibleWidth-n.totalWidth,0);e.setState({position:Math.max(Math.min(0,t),o),maxPosition:o})},this.updateSlide=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props;t===_.default.RIGHT?e.slideToPosition(e.state.position-n.visibleWidth+n.labelWidth,n):t===_.default.LEFT&&e.slideToPosition(e.state.position+n.visibleWidth-n.labelWidth,n)},this.centerEvent=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.props,o=n.events[t];e.slideToPosition(-o.distance)}};t.default=x},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),a=(n(4),n(10)),l=o(a),s=function(e){var t=e.events,n=e.selectedIndex,o=e.styles,r=e.handleDateClick,a=e.labelWidth;return i.default.createElement("ol",{className:"events-bar",style:{listStyle:"none"}},t.map(function(e,t){return i.default.createElement(l.default,{distanceFromOrigin:e.distance,label:e.label,date:e.date,color:e.color,index:t,key:t,onClick:r,selected:n,styles:o,labelWidth:a})}))};t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),u=o(s),d=n(1),c=o(d),p={links:{position:"absolute",bottom:0,textAlign:"center",paddingBottom:15},base:{position:"absolute",bottom:-5,height:12,width:12,borderRadius:"50%",transition:"background-color 0.3s, border-color 0.3s",":hover":{}},future:function(e){return{backgroundColor:e.background,border:"2px solid "+e.outline}},past:function(e){return{backgroundColor:e.background,border:"2px solid "+e.foreground}},present:function(e){return{backgroundColor:e.foreground,border:"2px solid "+e.foreground}}},f=function(e){function t(){var e,n,o,a;r(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.__getDotStyles__=function(e,t){var n=void 0,r={backgroundColor:o.props.styles.foreground,border:"2px solid "+o.props.styles.foreground};return o.props.color&&(n={border:"2px solid "+o.props.color},"present"===e&&(n.backgroundColor=o.props.color),r={backgroundColor:o.props.color,border:"2px solid "+o.props.color}),[p.base,{left:o.props.labelWidth/2-p.base.width/2},p[e](o.props.styles),c.default.getState(o.state,t,":hover")||c.default.getState(o.state,"dot-dot",":hover")?r:n]},a=n,i(o,a)}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t="future";return this.props.index<this.props.selected?t="past":this.props.index===this.props.selected&&(t="present"),u.default.createElement("li",{key:this.props.date,id:"timeline-dot-"+this.props.date,className:t+" dot-label",onClick:function(){return e.props.onClick(e.props.index)},style:[p.links,{left:this.props.distanceFromOrigin-this.props.labelWidth/2,cursor:"pointer",width:this.props.labelWidth,":hover":{}}]},this.props.label,u.default.createElement("span",{key:"dot-dot",onClick:function(){return e.props.onClick(e.props.index)},style:this.__getDotStyles__(t,this.props.date)}))}}]),t}(u.default.Component);t.default=(0,c.default)(f)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(3),a=function(e){var t=e.left,n=e.width,o=e.fillingMotion,a=e.backgroundColor;return r.default.createElement(i.Motion,{style:{tWidth:(0,i.spring)(n,o),tLeft:(0,i.spring)(t,o)}},function(e){var t=e.tWidth,n=e.tLeft;return r.default.createElement("span",{"aria-hidden":"true",className:"timeline-eventline",style:{position:"absolute",left:n+"px",top:0,height:"100%",width:t+"px",transformOrigin:"left center",backgroundColor:a}})})};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=o(i),l=n(1),s=o(l),u=n(13),d=o(u),c={base:{top:"50%",position:"absolute",bottom:"auto",transform:"translateY(-50%)",height:"100%",width:20,overflow:"hidden"},specific:function(e,t,n){var o;return o={},r(o,t,40),r(o,"backgroundImage","linear-gradient(to "+n+", "+e.background+", "+(0,d.default)(e.background).alpha(0).rgb()+")"),o}},p=function(e){return a.default.createElement("ul",{style:{listStyle:"none"}},a.default.createElement("li",{style:[c.base,c.specific(e.styles,"left","right")]}),a.default.createElement("li",{style:[c.base,c.specific(e.styles,"right","left")]}))};t.default=(0,s.default)(p)},function(e,t){e.exports=require("color")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=o(i),l=n(1),s=o(l),u=n(2),d=o(u),c=n(15),p=o(c),f=n(16),h=o(f),b={link:function(e){return{position:"absolute",top:"49px",bottom:"auto",transform:"translateY(-50%)",height:34,width:34,borderRadius:"50%",border:"2px solid "+e.outline,overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",transition:"border-color 0.3s"}},icon:function(e,t){return{position:"absolute",left:0,top:"50%",bottom:"auto",transform:"translateY(-50%)",height:20,width:29,overflow:"hidden",textIndent:"100%",whiteSpace:"nowrap",fill:t?e.foreground:e.outline}},inactive:function(e){return{color:e.outline,cursor:"not-allowed",":hover":{border:"2px solid "+e.outline}}},active:function(e){return{cursor:"pointer",":hover":{border:"2px solid "+e.foreground,color:e.foreground}}}},y=function(e){var t=Math.round(e.position)<0,n=Math.round(e.position)>Math.round(e.maxPosition);return a.default.createElement("ul",{className:"buttons"},a.default.createElement("li",{className:"button-back "+(t?"enabled":"disabled"),key:d.default.LEFT,onClick:function(){return e.updateSlide(d.default.LEFT)},style:[b.link(e.styles),t?b.active(e.styles):b.inactive(e.styles),r({},d.default.LEFT,0)]},a.default.createElement(p.default,{style:b.icon(e.styles,t)})),a.default.createElement("li",{className:"button-forward "+(n?"enabled":"disabled"),key:d.default.RIGHT,onClick:function(){return e.updateSlide(d.default.RIGHT)},style:[b.link(e.styles),n?b.active(e.styles):b.inactive(e.styles),r({},d.default.RIGHT,0)]},a.default.createElement(h.default,{style:b.icon(e.styles,n)})))};t.default=(0,s.default)(y)},function(e,t){e.exports=require("react-icons/lib/fa/angle-left")},function(e,t){e.exports=require("react-icons/lib/fa/angle-right")}]);