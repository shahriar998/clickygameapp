(this.webpackJsonpclickygameapp=this.webpackJsonpclickygameapp||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(14),a(4)),s=a(5),l=a(7),g=a(6),m=a(8),u=(a(15),a(16),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),p=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.pictures)}),d=a(1),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={friends:d,clickedArray:[],topScore:0,score:0,message:""},a.clickPicture=function(e){var t=a.manupulateArray(d);a.setState({friends:t}),a.state.clickedArray.includes(e)?a.setState({score:0,clickedArray:[],message:"Incorrect!! You Failed!"}):a.setState({clickedArray:a.state.clickedArray.concat([e]),score:a.state.score+1,message:"Correct!! \ud83d\ude42",shakeit:"false"}),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.manupulateArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"card-header bg-primary text-white"},"Click an Image to begin! You lose if you click on an image twice",i.a.createElement("p",{className:"score"},i.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)),i.a.createElement("p",{className:"message"},i.a.createElement("strong",null,this.state.message))),i.a.createElement(p,{pictures:this.state.friends.map((function(t){return i.a.createElement(u,{clickPicture:e.clickPicture,id:t.id,key:t.id,name:t.name,image:t.image})}))}),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"text-muted"},"\xa9SBE Alright Reserved"))))}}]),t}(n.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clickygameapp",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/clickygameapp","/service-worker.js");f?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.74a90d6c.chunk.js.map