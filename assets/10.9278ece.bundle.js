"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{66(b,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var c=[];(a=String(a).replace(/[^0-9a-f]/gi,"")).length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);for(var b=0;b<3;b++)c.push(parseInt(a.substr(2*b,2),16));return c},b.exports=a.default},67(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});var d=c(49);a.default=function(b,c){var a="rgba(";return a+=(0,d.hexToDec)(b).join(","),a+=","+c+")"},b.exports=a.default},49(i,a,b){Object.defineProperty(a,"__esModule",{value:!0}),a.lightenColor=a.hexToRgba=a.hexToDec=void 0;var c=b(66),d=j(c),e=b(67),f=j(e),g=b(68),h=j(g);function j(a){return a&&a.__esModule?a:{default:a}}a.hexToDec=d.default,a.hexToRgba=f.default,a.lightenColor=h.default},68(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});var d=c(49);a.default=function(e,a,b){var f="#";a=a||0;var c=(0,d.hexToDec)(e);if("undefined"!==b){var g=0;c.forEach(function(a){g+=a}),g>b&&(a=0-a)}return c.forEach(function(b){(b+=a)<0&&(b=0),b>255&&(b=255),f+=("00"+(b=b.toString(16))).substr(b.length)}),f},b.exports=a.default},119(i,c,a){a.r(c),a.d(c,{default:()=>aw});var j,d={};a.r(d),a.d(d,{arc:()=>M,colors:()=>O,curve:()=>J,d3DnD:()=>R,d3Select:()=>V,d3Zoom:()=>S,getPointsCenter:()=>H,getZoom:()=>T,hArea:()=>K,handleGetD3:()=>D,line:()=>I,pie:()=>L,scaleBand:()=>P,scaleLinear:()=>Q,stack:()=>N,toZoomTransform:()=>U});var k=a(1),l=a(122),m=a(123),n=a(133),o=a(10),p=a(11),q=a(120),r=a(7),b=a(2),s=a(3),t=a(125),u=a(4),v=a(25),w=a(8),x=a(14),y=a(6),e=a(121),z=a(5),A=Array.isArray;let B=function a(){var b=this;(0,l.Z)(this,a),(0,q.Z)(this,"max",null),(0,q.Z)(this,"min",null),(0,q.Z)(this,"process",function(a){return function(c){if(!A(c)||!c.length)return b;"function"!=typeof a&&(a=function(a){return a});var d=c.concat([]);if(!b.max&&!b.min){var e=a(d.shift());b.max=e,b.min=e}return d.forEach(function(c){!isNaN(c=a(c))&&(c>b.max?b.max=c:c<b.min&&(b.min=c))}),b}}),(0,q.Z)(this,"toArray",function(){return[b.min,b.max].filter(function(a){return null!==a})})};var C={curveCatmullRom:null,curveBasis:null,curveMonotoneX:null,line:null,pie:null,arc:null,area:null,stack:null,scaleLinear:null,scaleBand:null,scaleOrdinal:null,stackOrderNone:null,stackOffsetNone:null,drag:null,select:null,zoom:null,zoomTransform:null,zoomIdentity:null,schemeAccent:null,schemeBlues:null,schemeBrBG:null,schemeBuGn:null,schemeBuPu:null,schemeCategory10:null,schemeDark2:null,schemeGnBu:null,schemeGreens:null,schemeGreys:null,schemeOrRd:null,schemeOranges:null,schemePRGn:null,schemePaired:null,schemePastel1:null,schemePastel2:null,schemePiYG:null,schemePuBu:null,schemePuBuGn:null,schemePuOr:null,schemePuRd:null,schemePurples:null,schemeRdBu:null,schemeRdGy:null,schemeRdPu:null,schemeRdYlBu:null,schemeRdYlGn:null,schemeReds:null,schemeSet1:null,schemeSet2:null,schemeSet3:null,schemeSpectral:null,schemeTableau10:null,schemeYlGn:null,schemeYlGnBu:null,schemeYlOrBr:null,schemeYlOrRd:null},D=function(d){for(var a=(0,u.tW)(C),b=a.length;b--;){var c=a[b];C[c]=d[c]}},E=function(a,b){return a&&a.type?a.type:b||C.curveCatmullRom.alpha(.5)},F=function(a){return(a||{}).x},G=function(a){return(a||{}).y},H=function(e,a,b){a=a||F,b=b||G;var c=new B().process(a)(e),d=new B().process(b)(e);return{x:(c.max-c.min)/2+c.min,y:(d.max-d.min)/2+d.min}},I=(0,e.Z)(function(e,h,f,a,b){a=a||F,b=b||G;var c,d=[e,h],g=C.line().x(a).y(b);return f?(g=g.curve(E(f,C.curveBasis)),c=f.center||{x:H(d,a,b).x,y:e.y},d=[e,c,h]):c=H(d,a,b),{center:c,d:g(d)}}),J=function(c,a,b,d,e){return a=a||F,b=b||G,C.line().curve(E()).x(function(c){var b=d.scaler(a(c));return d.length&&(b+=d.length),b}).y(function(c){var a=e.scaler(b(c));return e.length&&(a+=e.length),a})(c)},K=(0,e.Z)(function(f,a,b,c,e){a=a||F,b||(b=function(a){return a.y0}),c||(c=function(a){return a.y1});var d=C.area().x(a).y0(b).y1(c);return e&&(d=d.curve(E(e,C.curveMonotoneX))),d(f)}),L=function(b,c,d,a){a||(a=function(a){return a.value});var e=C.pie().value(a)(b);return M(e,c,d)},M=function(c,a,b,f){var g=C.arc();a||(a=0),b||(b=a?2*a:50);var h=O(),d={outerRadius:b,innerRadius:a},e=c.map(function(a){var b=(0,k.Z)((0,k.Z)({},a),d);return f&&(g=g.cornerRadius(f)),a.path=g(b),a.centroid=g.centroid(b),a.color=h(a.index),a});return(0,k.Z)({items:e},d)},N=function(b,a){return a||(a=(0,u.tW)(b[0])),C.stack().keys(a).order(C.stackOrderNone).offset(C.stackOffsetNone)(b)},O=function(a){var b="schemeCategory10";return a||(a=b),C.scaleOrdinal((0,z.ZP)(C,[a],b))},P=function(j,k,l,f){var d=arguments.length>4&& void 0!==arguments[4]?arguments[4]:10;f||(f=function(a){return a.label});var e={},b=C.scaleBand().range([k,l]).paddingInner(.05).align(.1).domain(j.map(function(b){var a=f(b);return e[a]=null,a})),g=b.bandwidth(),p=Math.round(g/2),m=(0,u.tW)(e),a=m;if(d&&a.length>d){for(var n,h=[],i=Math.round(a.length/d),c=0,o=a.length;c<o;c+=i)h.push((n=a.slice(c,c+i)).pop());a=h,e={}}return a.forEach(function(a){var c=b(a);e[a]={start:c,value:c+p}}),b.invertIndex=function(a){var c;return Math.floor(a/b.step())},b.invert=function(a){return m[b.invertIndex(a)]},{scaler:b,list:e,length:g}},Q=function(c,d,e,f,g,h){var a=new B;a.process(f)(c),a.process()(h);var b=C.scaleLinear().rangeRound([d,e]).domain(a.toArray()).nice(),i=b.ticks(g),j={};return i.forEach(function(a){return j[a]={value:b(a)}}),{scaler:b,list:j}},R=function(b){var i=b.el,c=b.container,d=b.touchable,e=b.start,f=b.end,g=b.drag,h=b.subject,a=C.drag();c&&(a=a.container(c)),d&&(a=a.touchable(d)),e&&(a=a.on("start",e)),f&&(a=a.on("end",f)),g&&(a=a.on("drag",g)),h&&(a=a.subject(h)),V(i).call(a)},S=function(a){var d=a.el,e=a.scaleExtent,b=a.callback,c=C.zoom().scaleExtent(e).on("zoom",null==b?null:b);return V(d).call(c),c},T=function(a){return C.zoomTransform(V(a).node())},U=function(a){var b=a.x,c=a.y,d=a.k;return C.zoomIdentity.translate(b,c).scale(d)},V=function(a){return C.select(a)},W=["handleGetD3"],X=[];let Y=function(i){var a,k,c,h,e,f=function(a){if(Array.isArray(a))return a}(a=(0,b.useState)(!!j))||(c=a,h=2,e=[],(0,u.tW)(c).some(function(a,b){if(e.push(c[a]),h===b+1)return!0}),e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),g=f[0],l=f[1],m=(0,x.s4)();return(0,b.useEffect)(function(){g&&(0,y.ZP)(i)},[g]),(0,b.useEffect)(function(){var a=function(){j=(0,t.Z)(d,W),D((0,w.p_)().d3);for(var a=X.length;a--;)X[a]&&X[a]();X.splice(0,X.length)};(0,w.p_)().__null||g||(X.push(function(){m()&&l(!0)}),(0,w.p_)().d3?a():!1!==(0,w.p_)().d3&&((0,w.p_)().d3=!1,(0,v.js)()(a)("https://cdn.jsdelivr.net/npm/d3@6.7.0/dist/d3.min.js")))},[]),[g,j]};var Z=a(49),$=a(0),f=function(a){return(0,$.jsx)(s.iX,(0,k.Z)({},a))};f.defaultProps={atom:"g",ui:!1};let _=f;(function(a){return(0,$.jsx)(s.iX,(0,k.Z)({},a))}).defaultProps={ui:!1,atom:"path"},b.PureComponent;var g=function(a){return(0,$.jsx)(s.iX,(0,k.Z)({},a))};g.defaultProps={ui:!1,atom:"svg",width:"100%"};let aa=g;var ab=["start","end","svgLine","curve","onD3Load"];(0,b.forwardRef)(function(c,i){var j=(0,b.useRef)(),u={getCenter:function(){return j.current}};(0,b.useImperativeHandle)(i,function(){return u},[]);var d=c.start,e=c.end,f=c.svgLine,l=c.curve,m=c.onD3Load,n=(0,r.Z)(c,ab),g=Y(m),o=g[0],p=g[1],a={};if(d&&e){if(f)a.x1=d.x,a.y1=d.y,a.x2=e.x,a.y2=e.y;else{if(!o)return null;var h=p.line(d,e,l),q=h.center,t=h.d;a.d=t,j.current=q}}return a.atom=f?"line":"path",(0,$.jsx)(s.iX,(0,k.Z)((0,k.Z)({ui:!1},n),a))}).displayName="Line",b.PureComponent,b.PureComponent;var ac,ad=["parentWidth","alignCenter","x","y"],ae=Object.keys;b.PureComponent;var af=a(16),ag=["keepLastAbsXY","component","style","zoom","refCb","onDragStart","onDrag","onDragEnd","onD3Load"],ah=function(a){var d=Y(a.onD3Load),c=d[0],i=d[1],j=(0,b.useRef)(),k=(0,b.useRef)({}),e=(0,b.useRef)({}),l=(0,b.useRef)(),f=(0,b.useState)(!1),h=f[0],m=f[1];e.current!==a&&(e.current=a);var g={getEl:function(){return l.current},setXY:function(a,b){k.current.absX=a,k.current.absY=b}};if(!c)return{isLoad:c,expose:g};var n=function(c){var d,f,g,h,i=e.current,q=i.keepLastAbsXY,r=i.zoom,s=i.onDragStart,t=null!==(d=null===(f=(0,y.ZP)(r))|| void 0===f?void 0:f.k)&& void 0!==d?d:1,u=c.x,v=c.y,w=c.sourceEvent,a=(0,af.lA)(w),n=(0,af.ZP)(l.current),b=n||{},x=b.x,z=b.y;b.w,b.h;var o=0,p=0;q&&(o=(null===(g=k.current)|| void 0===g?void 0:g.absX)||0,p=(null===(h=k.current)|| void 0===h?void 0:h.absY)||0),a.start={absX:o,absY:p,offset:n,fromX:u,fromY:v,elStartX:x,elStartY:z,zoomK:t,offsetX:a.offsetX,offsetY:a.offsetY},j.current=a.start,k.current=a.start,m(!0),(0,y.ZP)(s,[a])},o=function(b){b.x,b.y;var c,d,f=b.dx,g=b.dy,h=b.sourceEvent;if(f||g){var n,o,p,i=e.current,q=i.zoom,r=i.onDrag,l=k.current,s=l.absX,t=l.absY,a=(0,af.lA)(h),m=null!==(c=null===(d=(0,y.ZP)(q))|| void 0===d?void 0:d.k)&& void 0!==c?c:1;a.start=j.current,a.getPointerXY=(n=a,function(){return[n.clientX-n.start.offsetX,n.clientY-n.start.offsetY]}),a.getPointerTarget=(o=a,function(b){var c=null!=b?b:o.getPointerXY(),a=(0,y.ZP)((0,w.JU)().elementFromPoint,c,(0,w.JU)());if(a)return a.pointXY=c,a}),a.getClientPointerTarget=(p=a,function(a){void 0===a&&(a={});var b,c,d=[null!==(b=a.x)&& void 0!==b?b:p.clientX,null!==(c=a.y)&& void 0!==c?c:p.clientY];return p.getPointerTarget(d)}),a.sourceEvent=h,a.absX=s+f/m,a.absY=t+g/m,k.current=a,(0,y.ZP)(r,[a])}},p=function(c){var b=c.sourceEvent,a=(0,af.lA)(b);k.current.offset=(0,af.ZP)(l.current),a.sourceEvent=b,a.last=k.current,a.start=j.current,m(!1),(0,y.ZP)(e.current.onDragEnd,[a])};return{isLoad:c,handleElChange:function(a){return!a||l.current&&l.current.isSameNode(a)||(l.current=a,i.d3DnD({el:a,start:n,drag:o,end:p})),l.current},isDraging:h,expose:g}};(0,b.forwardRef)(function(c,d){var a=ah(c),e=a.isLoad,g=a.handleElChange,f=a.isDraging,h=a.expose;return(0,b.useImperativeHandle)(d,function(){return h},[]),(0,b.useMemo)(function(){if(!e)return null;c.keepLastAbsXY;var b=c.component,h=c.style,i=(c.zoom,c.refCb),a=(c.onDragStart,c.onDrag,c.onDragEnd,c.onD3Load,(0,r.Z)(c,ag)),d=(null==b?void 0:b.props)||{},j=d.style,l=d.refCb;return a.style=(0,k.Z)((0,k.Z)((0,k.Z)((0,k.Z)({},ai.container),f?ai.drag:{}),h),j),i||l?a.refCb=function(a){g(a),(0,y.ZP)(i,[a]),(0,y.ZP)(l,[a])}:a.onGetEl=g,(0,s.J_)(b)(a)},[e,c,f])}).displayName="DragAndDrop";var ai={container:{cursor:"grab",pointerEvents:"all"},drag:{cursor:"grabbing"}},aj=["onGetEl","onZoom","onD3Load","scaleExtent"],ak=function(a){var k=a.onGetEl,l=a.onZoom,i=a.onD3Load,e=a.scaleExtent,m=void 0===e?[-1,8]:e,j=(0,r.Z)(a,aj),f=Y(i),c=f[0],n=f[1],g=(0,b.useState)(null),d=g[0],o=g[1],p=(0,b.useRef)(),q=(0,b.useRef)(),s=(0,b.useRef)(),t=(0,b.useRef)();(0,b.useEffect)(function(){q.current=d,p.current&&(0,y.ZP)(l,[p.current])},[d]),(0,b.useEffect)(function(){c&&h.enable()},[c]);var h={getTransform:function(){return q.current},setTransform:function(a){return v(a)},getXYK:u,setXYK:function(a){var b,c,d,e,f,g,h=a.x,i=a.y,j=a.k,k=u(),l=k.x,m=k.y,o=k.k;return h=null!==(b=null!==(c=h)&& void 0!==c?c:l)&& void 0!==b?b:0,i=null!==(d=null!==(e=i)&& void 0!==e?e:m)&& void 0!==d?d:0,j=null!==(f=null!==(g=j)&& void 0!==g?g:o)&& void 0!==f?f:1,v(n.toZoomTransform({x:h,y:i,k:j}))},getD3Zoom:function(){return s.current},enable:function(){if(!t.current){var a=(0,y.ZP)(k);s.current=n.d3Zoom({el:a,scaleExtent:m,callback:function(a){return v(a.transform,a)}})}t.current=!0},disable:function(){if(t.current){var a=(0,y.ZP)(k);s.current=n.d3Zoom({el:a,scaleExtent:m,callback:null})}t.current=!1},getEnabled:function(){return t.current}};if(!c)return{isLoad:c,expose:h};var u=function(){var a=q.current||{},b=a.x,c=a.y,d=a.k;return{x:b,y:c,k:d}},v=function(b,a){if(!a){a={transform:b};var c=s.current,d=n.d3Select((0,y.ZP)(k));c&&d&&c.transform(d,b)}a.zoom=h,p.current=a,o(b)};return{isLoad:c,expose:h,others:j,transform:d?d+"":d}};(0,b.forwardRef)(function(c,d){var a=ak(c),e=a.isLoad,h=a.expose,f=a.others,g=a.transform;return((0,b.useImperativeHandle)(d,function(){return h},[]),e)?(0,$.jsx)(_,(0,k.Z)((0,k.Z)({name:"zoom"},f),{},{transform:g})):null}).displayName="Zoom",a(30);var al=["value","unit","valueTextFill","centroid","groupIndex"],am=["startAngle","endAngle","outerRadius","label","labelTextFill","distance","groupIndex"],an=["groupIndex","outerRadius","labelTextFill","startAngle","endAngle","start","length"],ao=["groupIndex","color","path","sectorBorderColor"],ap=["data","groupIndex"],aq=["data","outerRadius","innerRadius","labelTextFill","valueTextFill","sectorBorderColor","showOuterLabels","showInnerLabels","unit"],ar=function(a){var b=a.value,c=a.unit,d=a.valueTextFill,e=a.centroid,f=a.groupIndex;return(0,r.Z)(a,al),(0,$.jsxs)(s.iX,{atom:"text",transform:"translate("+e.join(",")+")",dy:".35em",style:{shapeRendering:"crispEdges",textAnchor:"middle",fill:d,fontSize:8},children:[b,c]},f+"-value")},as=function(a){var d=a.startAngle,e=a.endAngle,f=a.outerRadius,g=a.label,h=a.labelTextFill,i=a.distance,j=a.groupIndex;(0,r.Z)(a,am);var b=(d+e)/2,c=f+i;return(0,$.jsx)(s.iX,{atom:"text",transform:"translate("+c*(1.2*Math.sin(b))+","+ -c*Math.cos(b)+")",dy:".35em",style:{fill:h,textAnchor:"middle",shapeRendering:"crispEdges",fontSize:8},children:g},j+"-name")},at=function(a){var d=a.groupIndex,b=a.outerRadius,c=a.labelTextFill,e=a.startAngle,f=a.endAngle,g=a.start,h=a.length;return(0,r.Z)(a,an),(0,$.jsx)(s.iX,{atom:"line",x1:"0",x2:"0",y1:-b-g,y2:-b-h,stroke:c,transform:"rotate("+(e+f)/2*(180/Math.PI)+")",style:{fill:c,strokeWidth:1}},d+"-line")},au=function(b){(0,o.Z)(a,b);var c=(0,p.Z)(a);function a(){var b;(0,l.Z)(this,a);for(var e=arguments.length,f=new Array(e),d=0;d<e;d++)f[d]=arguments[d];return b=c.call.apply(c,[this].concat(f)),(0,q.Z)((0,n.Z)(b),"handleMouseEnter",function(a){b.setState({fill:(0,Z.lightenColor)(b.props.color,20)})}),(0,q.Z)((0,n.Z)(b),"handleMouseLeave",function(a){b.setState({fill:b.props.color})}),b}return(0,m.Z)(a,[{key:"render",value:function(){var a=this.props,b=a.groupIndex,c=a.color,d=a.path,e=a.sectorBorderColor,f=(0,r.Z)(a,ao),g=(0,z.ZP)(this,["state","fill"],c);return(0,$.jsxs)(s.iX,{atom:"g",className:"arc",ui:!1,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:[(0,$.jsx)(s.iX,{d:d,fill:g,atom:"path",stroke:e}),(0,$.jsx)(ar,(0,k.Z)({},f))]},b+"-arc")}}]),a}(b.Component),av=function(a){var d=a.data,b=a.groupIndex,c=(0,r.Z)(a,ap);return[(0,$.jsx)(au,(0,k.Z)({groupIndex:b},c)),(0,$.jsx)(at,(0,k.Z)((0,k.Z)({},c),{},{groupIndex:b,start:1,length:10})),(0,$.jsx)(as,(0,k.Z)((0,k.Z)({},c),{},{groupIndex:b,label:(0,z.ZP)(d,["label"]),distance:14}))]},h=function(a){var f=a.data,g=a.outerRadius,h=a.innerRadius,n=a.labelTextFill,o=a.valueTextFill,p=a.sectorBorderColor,i=a.showOuterLabels,q=(a.showInnerLabels,a.unit),j=(0,r.Z)(a,aq),e=Y(),l=e[0],m=e[1];if(!l)return null;var b=m.pie(f,h,g),c=2*b.outerRadius,d=2*b.outerRadius;return i&&(c=4*b.outerRadius,d=3.5*b.outerRadius),(0,$.jsx)(aa,(0,k.Z)((0,k.Z)({},j),{},{viewBox:"0 0 "+c+" "+d,children:(0,$.jsx)(s.iX,{atom:"g",transform:"translate("+c/2+","+d/2+")",children:b.items.map(function(a,c){return av((0,k.Z)((0,k.Z)({},a),{},{groupIndex:c,outerRadius:b.outerRadius,labelTextFill:n,valueTextFill:o,sectorBorderColor:p,unit:q}))})})}))};h.defaultProps={innerRadius:20,labelTextFill:"#000",valueTextFill:"#000",width:"100%",data:[],showInnerLabels:!0,showOuterLabels:!0,sectorBorderColor:"#000",unit:"%"};let aw=h}}])