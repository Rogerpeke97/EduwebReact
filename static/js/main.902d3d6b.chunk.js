(this.webpackJsonpeduweb=this.webpackJsonpeduweb||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(4),i=n.n(a),l=(n(11),n(12),n(0)),c=n(5),s=n(2),d=n(14)(l);var u=function(){return Object(o.useEffect)((function(){var e=document.getElementById("CanvasContainer"),t=new l.Scene,n=new l.PerspectiveCamera(75,e.clientWidth/e.clientHeight,.1,1e3),o=new l.WebGLRenderer({antialias:!0});n.position.set(0,0,10);var r={Vector1x:0,Vector1y:0,Vector1z:0,AddVector2:!1,Vector2x:0,Vector2y:0,Vector2z:0},a=new c.a({autoPlace:!1});a.domElement.id="gui",e.appendChild(a.domElement),a.add(r,"Vector1x").name("Vector1x"),a.add(r,"Vector1y").name("Vector1y"),a.add(r,"Vector1z").name("Vector1z"),a.add(r,"AddVector2").name("AddVector2"),a.add(r,"Vector2x").name("Vector2x"),a.add(r,"Vector2y").name("Vector2y"),a.add(r,"Vector1z").name("Vector2z"),t.add(new l.AmbientLight(2236962));var i=new l.PointLight("whitesmoke",3,200);i.position.set(0,5,10),t.add(i),document.getElementById("CanvasContainer").appendChild(o.domElement),new d(n,o.domElement).target.set(0,0,0);var u=new l.GridHelper(20,20);t.add(u);var m=new l.GridHelper(20,20),h=new l.Vector3(1,0,0);m.rotateOnAxis(h,1.5708),t.add(m);var v=[];v.push(new l.Vector3(-10,0,0)),v.push(new l.Vector3(10,0,0));var w=[];w.push(new l.Vector3(0,10,0)),w.push(new l.Vector3(0,-10,0));for(var g=new l.LineBasicMaterial,f=new l.SphereGeometry(.05,32,32),p=new l.MeshPhongMaterial({color:"red"}),y=(new l.BufferGeometry).setFromPoints(v),V=(new l.BufferGeometry).setFromPoints(w),E=new l.Line(y,g),b=new l.Line(V,g),_=-10;_<=10;_++){var M=new l.Mesh(f,p);M.position.set(_,0,0),E.add(M)}for(var B=-10;B<=10;B++){var z=new l.Mesh(f,p);z.position.set(0,B,0),b.add(z)}E.position.set(0,0,0),b.position.set(0,0,0),t.add(E),t.add(b),(new l.FontLoader).load("fonts/helvetiker_regular.typeface.json",(function(e){for(var t=new l.MeshPhongMaterial({color:16777215}),n=-10;n<=10;n++){var o=new l.TextGeometry("".concat(n),{font:e,size:.1,height:.05,curveSegments:12,bevelEnabled:!1,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:3}),r=new l.Mesh(o,t);r.position.set(n,-.2,-.025),E.add(r)}for(var a=-10;a<=10;a++){var i=new l.TextGeometry("".concat(a),{font:e,size:.1,height:.05,curveSegments:12,bevelEnabled:!1,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:3}),c=new l.Mesh(i,t);c.position.set(-.2,a,-.025),b.add(c)}}));var A=new l.MeshBasicMaterial({color:"green"}),S=[];S.push(new l.Vector3(0,0,0)),S.push(new l.Vector3(0,0,0)),S.push(new l.Vector3(0,0,0));var C=(new l.BufferGeometry).setFromPoints(S),x=[];x.push(new l.Vector3(0,0,0)),x.push(new l.Vector3(0,0,0)),x.push(new l.Vector3(0,0,0));for(var L=(new l.BufferGeometry).setFromPoints(x),P=new l.SphereGeometry(.1,32,64),G=new l.MeshPhongMaterial({color:"green"}),I=new l.MeshPhongMaterial({color:"blue"}),k=4;k<=6;k++){document.querySelectorAll(".cr")[k].id="vector2Div"+k,document.getElementById("vector2Div"+k).style.display="none"}document.querySelectorAll(".cr")[3].id="AddVector2Bool",document.getElementById("AddVector2Bool").addEventListener("change",(function(){!function(){if("none"===document.getElementById("vector2Div4").style.display)for(var e=4;e<=6;e++){var t=document.querySelectorAll(".c")[e];console.log(t),t.id="slider-fg"+e,document.getElementById("slider-fg"+e).addEventListener("change",(function(){}))}}();for(var e=4;e<=6;e++)document.getElementById("vector2Div"+e).style.display="grid",document.getElementById("AddVector2Bool").style.display="none"}));var F=new l.MeshBasicMaterial({color:"blue"}),T=new l.Line(L,F);T.position.set(0,0,0);var q=new l.Mesh(P,I);T.add(q),T.frustumCulled=!1,t.add(T);var N=new l.Line(C,A);N.position.set(0,0,0);var W=new l.Mesh(P,G);N.add(W),N.frustumCulled=!1,t.add(N);for(var H=0;H<7;H++){var D=document.querySelectorAll(".c")[H];console.log(D),D.id="slider-fg"+H,document.getElementById("slider-fg"+H).addEventListener("change",(function(){var e=N.geometry.attributes.position.array,t=[0,0,0,0,0,0,a.__controllers[0].getValue(),a.__controllers[1].getValue(),a.__controllers[2].getValue()];t=new Float32Array(t);var n=T.geometry.attributes.position.array,o=[0,0,0,0,0,0,a.__controllers[4].getValue(),a.__controllers[5].getValue(),a.__controllers[6].getValue()];o=new Float32Array(o),new s.a.Tween(e).to(t).onStart((function(){new s.a.Tween(W.position).to({x:a.__controllers[0].getValue(),y:a.__controllers[1].getValue(),z:a.__controllers[2].getValue(),isVector3:!0}).start()})).start(),new s.a.Tween(n).to(o).onStart((function(){new s.a.Tween(q.position).to({x:a.__controllers[4].getValue(),y:a.__controllers[5].getValue(),z:a.__controllers[6].getValue(),isVector3:!0}).start()})).start(),requestAnimationFrame((function e(t){s.a.update(t),requestAnimationFrame(e),T.geometry.attributes.position.needsUpdate=!0,N.geometry.attributes.position.needsUpdate=!0}))}))}n.position.z=5,window.addEventListener("resize",(function(){o.setSize(e.clientWidth,e.clientHeight),n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}),!1),o.setSize(e.clientWidth,e.clientHeight);!function e(){requestAnimationFrame(e),o.render(t,n)}()})),r.a.createElement("div",{id:"CanvasContainer"})};var m=function(){return r.a.createElement("div",{className:"PhysicsContainer"},r.a.createElement("h1",null,"Vector calculator! ",r.a.createElement("i",{className:"fi-cwldxl-arrow-solid"})),r.a.createElement("div",{className:"VectorAddition"},r.a.createElement("h2",null,"Vectors and vectors addition"),r.a.createElement("h4",null,"The intention behind this tool is creating an angle and vector resultant calculator, where you input the values of the vectors (I will only support 2 for now), and the different desired values are displayed in the canvas.")),r.a.createElement("div",{className:"ComponentMethod"},r.a.createElement("h4",null,"- Click inside the canvas to rotate the camera and right click to move it horizontally.",r.a.createElement("br",null),"- Use the wheel to zoom in or out of the scene."),r.a.createElement("h3",null,"Do not use the slider to change the vector values, it only accepts input!."),r.a.createElement(u,null)))};var h=function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(){return r.a.createElement("div",{className:"Navbar"})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null),r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.902d3d6b.chunk.js.map