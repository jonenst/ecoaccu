(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},23:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(23),a(24),a(9)),s=a(10),i=a(15),u=a(11),m=a(16),h=a(42),d=a(43),E=a(44),f=(a(25),a(26),a(27),a(12)),p=a.n(f),g=a(13),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[],dates:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://le-simplex.mooo.com:54321/").then(function(e){return e.json()}).then(function(t){console.log(t.forecast.map(function(e){return e.marginalCarbonIntensity})),e.setState({isLoaded:!0,items:t.forecast.map(function(e){return e.marginalCarbonIntensity}),dates:t.forecast.map(function(e){return new Date(e.datetime).getHours()+"h"})})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){for(var e,t,a=[],n=0;n<24;n++)a.push((18+n)%24+"h");this.state.isLoaded&&!this.state.error?(e=this.state.items,t=this.state.dates):(e=[80,70,60,58,55,53,50,48,37,35,35,34,34,34,40,46,50,55,60,63,69,72,83,85],t=a);var l,o=1e9;for(n=2;n<22;n++){var c=0;if("8h"==t[n+2])break;for(var s=-2;s<2;s++)c+=e[n+s];o>c&&(o=c,l=n)}var i=l-2,u=[],m=[];for(n=0;n<24;n++)n<i||n>i+5?(u.push("rgba(151,187,205,0.2)"),m.push("rgba(151,187,205,1)")):(u.push("rgba(0,200,0),0.2)"),m.push("rgba(0,200,0,1)"));var f={labels:t,datasets:[{fillColor:u,strokeColor:m,data:e}]};return r.a.createElement(h.a,{className:"text-center"},r.a.createElement(d.a,null,r.a.createElement(E.a,null,"Charge")),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"mx-auto",style:{width:"100px"}},r.a.createElement(p.a,{percentage:73,text:"73%"})))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,"Chargee dans")),r.a.createElement(d.a,null,r.a.createElement(E.a,null,"4h42"))),r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,"CO2 restant")),r.a.createElement(d.a,null,r.a.createElement(E.a,null,"20g (-60g)"))),r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,"Cout restant")),r.a.createElement(d.a,null,r.a.createElement(E.a,null,"2.35e")))),r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(g.Bar,{data:f,options:{barValueSpacing:0,barDatasetSpacing:1,scaleShowGridLines:!1},width:"600",height:"250"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.dc431418.chunk.js.map