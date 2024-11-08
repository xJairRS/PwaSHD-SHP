import './polyfills.server.mjs';
import{A as s,B as o,C as p,D as a,F as G,G as $,K as J,N,O as Q,R as X,X as D,a as U,b as E,c as W,d as f,e as F,f as _,g as S,h as A,i as v,j as g,k as h,l as V,m as B,n as w,o as L,p as k,q as m,r as Y,s as I,t as K,u,v as z,w as q,x as T,y as Z,z as H}from"./chunk-J2VNGHFU.mjs";import{a as j}from"./chunk-VVCT4QZE.mjs";var ae=[],ee=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=u({type:t})}static{this.\u0275inj=m({imports:[D.forRoot(ae),D]})}}return t})();var O="Service workers are disabled or not supported by this browser";function ce(t){return _(()=>W(new Error(t)))}var M=class{constructor(r){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=ce(O);else{let n=S(r,"controllerchange").pipe(f(()=>r.controller)),i=_(()=>E(r.controller)),l=F(i,n);this.worker=l.pipe(g(b=>!!b)),this.registration=this.worker.pipe(w(()=>r.getRegistration()));let R=S(r,"message").pipe(f(b=>b.data)).pipe(g(b=>b&&b.type)).pipe(B());R.connect(),this.events=R}}postMessage(r,e){return this.worker.pipe(h(1),L(n=>{n.postMessage(j({action:r},e))})).toPromise().then(()=>{})}postMessageWithOperation(r,e,n){let i=this.waitForOperationCompleted(n),l=this.postMessage(r,e);return Promise.all([l,i]).then(([,c])=>c)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(r){let e;return typeof r=="string"?e=n=>n.type===r:e=n=>r.includes(n.type),this.events.pipe(g(e))}nextEventOfType(r){return this.eventsOfType(r).pipe(h(1))}waitForOperationCompleted(r){return this.eventsOfType("OPERATION_COMPLETED").pipe(g(e=>e.nonce===r),h(1),f(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},ie=(()=>{class t{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,this.pushManager=null,this.subscriptionChanges=new U,!e.isEnabled){this.messages=v,this.notificationClicks=v,this.subscription=v;return}this.messages=this.sw.eventsOfType("PUSH").pipe(f(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(f(i=>i.data)),this.pushManager=this.sw.registration.pipe(f(i=>i.pushManager));let n=this.pushManager.pipe(w(i=>i.getSubscription()));this.subscription=A(n,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(O));let n={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),l=new Uint8Array(new ArrayBuffer(i.length));for(let c=0;c<i.length;c++)l[c]=i.charCodeAt(c);return n.applicationServerKey=l,this.pushManager.pipe(w(c=>c.subscribe(n)),h(1)).toPromise().then(c=>(this.subscriptionChanges.next(c),c))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=n=>{if(n===null)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(h(1),w(e)).toPromise()}decodeBase64(e){return atob(e)}static{this.\u0275fac=function(n){return new(n||t)(I(M))}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac})}}return t})(),x=(()=>{class t{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=v,this.unrecoverable=v;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(O));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static{this.\u0275fac=function(n){return new(n||t)(I(M))}}static{this.\u0275prov=k({token:t,factory:t.\u0275fac})}}return t})();var te=new Y("");function le(t,r,e,n){return()=>{if(!(N(n)&&"serviceWorker"in navigator&&e.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let i;if(typeof e.registrationStrategy=="function")i=e.registrationStrategy();else{let[c,...d]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":i=E(null);break;case"registerWithDelay":i=ne(+d[0]||0);break;case"registerWhenStable":i=d[0]?A(re(t),ne(+d[0])):re(t);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}t.get(H).runOutsideAngular(()=>i.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(r,{scope:e.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function ne(t){return E(null).pipe(V(t))}function re(t){return t.get($).isStable.pipe(g(e=>e))}function pe(t,r){return new M(N(r)&&t.enabled!==!1?navigator.serviceWorker:void 0)}var C=class{};function de(t,r={}){return z([ie,x,{provide:te,useValue:t},{provide:C,useValue:r},{provide:M,useFactory:pe,deps:[C,T]},{provide:G,useFactory:le,deps:[q,te,C,T],multi:!0}])}var oe=(()=>{class t{static register(e,n={}){return{ngModule:t,providers:[de(e,n)]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=u({type:t})}static{this.\u0275inj=m({providers:[ie,x]})}}return t})();var y=(()=>{class t{constructor(e){this.swUpdate=e}ngOnInit(){this.isBrowser()&&(this.registrarServiceWorker(),this.verificarActualizaciones(),this.configurarPushNotifications())}isBrowser(){return typeof window<"u"&&typeof navigator<"u"}registrarServiceWorker(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/ngsw-worker.js").then(e=>console.log("Service Worker registrado:",e)).catch(e=>console.error("Error al registrar el Service Worker:",e))}verificarActualizaciones(){this.swUpdate.isEnabled&&this.swUpdate.versionUpdates.pipe(g(e=>e.type==="VERSION_READY")).subscribe(()=>{confirm("Hay una nueva versi\xF3n disponible. \xBFDesea cargarla?")&&window.location.reload()})}configurarPushNotifications(){"PushManager"in window&&navigator.serviceWorker.ready.then(e=>{e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array("YOUR_PUBLIC_VAPID_KEY")}).then(n=>{console.log("Suscrito a notificaciones push:",n)}).catch(n=>{console.error("Error al suscribirse a notificaciones push:",n)})})}urlBase64ToUint8Array(e){let n="=".repeat((4-e.length%4)%4),i=(e+n).replace(/\-/g,"+").replace(/_/g,"/"),l=window.atob(i),c=new Uint8Array(l.length);for(let d=0;d<l.length;++d)c[d]=l.charCodeAt(d);return c}static{this.\u0275fac=function(n){return new(n||t)(Z(x))}}static{this.\u0275cmp=K({type:t,selectors:[["app-root"]],decls:65,vars:0,consts:[[1,"container"],["href","#inicio"],["href","#acerca"],["href","#servicios"],["href","#contacto"],["id","inicio",1,"inicio"],["src","../assets/img/descarga.png","alt","Imagen de bienvenida"],["id","acerca",1,"acerca"],[1,"highlight"],["src","../assets/img/servicios.png","alt","Nuestro equipo"],["id","servicios"],["src","../assets/img/Aplicaciones m\xF3viles_ definici\xF3n, para qu\xE9 sirven, ejemplos y c\xF3mo desarrollar apps para dispositivos m\xF3viles.png","alt","Servicio 1",1,"img-thumbnail"],["src","../assets/img/C\xF3mo ser desarrollador web.png","alt","Servicio 2",1,"img-thumbnail"],["src","../assets/img/Ceasinci.png","alt","Servicio 3",1,"img-thumbnail"],["id","contacto",1,"contacto"],["for","nombre"],["type","text","id","nombre","name","nombre","required",""],["for","email"],["type","email","id","email","name","email","required",""],["for","mensaje"],["id","mensaje","name","mensaje","required",""],["type","submit"],["src","../assets/img/contact.png","alt","Cont\xE1ctanos",1,"img-responsive"]],template:function(n,i){n&1&&(s(0,"div",0)(1,"header")(2,"h1"),a(3,"DDTANK COMPANY"),o(),s(4,"nav")(5,"ul")(6,"li")(7,"a",1),a(8,"Inicio"),o()(),s(9,"li")(10,"a",2),a(11,"Acerca de"),o()(),s(12,"li")(13,"a",3),a(14,"Servicios"),o()(),s(15,"li")(16,"a",4),a(17,"Contacto"),o()()()()(),s(18,"main")(19,"section",5),p(20,"img",6),o(),s(21,"section",7)(22,"h2"),a(23,"Acerca de nosotros"),o(),s(24,"p"),a(25,"Somos una empresa dedicada a proporcionar "),s(26,"span",8),a(27,"soluciones innovadoras"),o(),a(28,"."),o(),p(29,"img",9),o(),s(30,"section",10)(31,"h2"),a(32,"Nuestros servicios"),o(),s(33,"ul")(34,"li"),p(35,"img",11)(36,"br"),a(37," Desarrollo Movil "),o(),s(38,"li"),p(39,"img",12)(40,"br"),a(41," Desarrollo web "),o(),s(42,"li"),p(43,"img",13)(44,"br"),a(45," Asesorias de programcion "),o()()(),s(46,"section",14)(47,"h2"),a(48,"Contacto"),o(),s(49,"form")(50,"label",15),a(51,"Nombre:"),o(),p(52,"input",16),s(53,"label",17),a(54,"Email:"),o(),p(55,"input",18),s(56,"label",19),a(57,"Mensaje:"),o(),p(58,"textarea",20),s(59,"button",21),a(60,"Enviar"),o()(),p(61,"img",22),o()(),s(62,"footer")(63,"p"),a(64,"\xA9 2024 Mi P\xE1gina Web. Todos los derechos reservados."),o()()())},styles:["body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;line-height:1.8;margin:0;padding:0;background-color:#f8f9fa;color:#333}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 20px}header[_ngcontent-%COMP%]{background-color:#0c85ff;color:#fff;padding:1.5rem 0;box-shadow:0 2px 10px #0000001a}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem;font-size:2.5rem}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;justify-content:center}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;transition:all .3s ease;font-weight:700;padding:8px 15px;border-radius:25px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#495057;color:#17a2b8}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{padding:4rem 0;background-color:#fff;margin:30px 0;border-radius:15px;box-shadow:0 0 20px #0000001a}h2[_ngcontent-%COMP%]{color:#343a40;text-align:center;margin-bottom:2.5rem;font-size:2.2rem}p[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem;font-size:1.2rem}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:600px;margin:0 auto}label[_ngcontent-%COMP%]{margin-top:1.2rem;color:#343a40;font-weight:700}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{padding:1rem;margin-top:.7rem;border:2px solid #ced4da;border-radius:8px;transition:all .3s ease}button[_ngcontent-%COMP%]{background-color:#17a2b8;color:#fff;padding:1rem 2rem;border:none;border-radius:25px;cursor:pointer;margin-top:2rem;margin-bottom:2rem;transition:all .3s ease;font-weight:700;font-size:1.1rem}button[_ngcontent-%COMP%]:hover{background-color:#138496;transform:translateY(-3px);box-shadow:0 4px 8px #0003}footer[_ngcontent-%COMP%]{background-color:#0080ff;color:#fff;text-align:center;padding:2rem 0;margin-top:3rem}@media (max-width: 768px){nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column;align-items:center}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px}.container[_ngcontent-%COMP%]{padding:0 20px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{padding:3rem 1.5rem}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1.2s ease-in-out}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 10px #17a2b899;border:2px solid #17a2b8}button[_ngcontent-%COMP%]:active{transform:scale(.97)}img[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:10px;box-shadow:0 4px 20px #00000070;transition:transform .3s ease}img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.inicio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .acerca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto}.contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto;width:80%}.highlight[_ngcontent-%COMP%]{background-color:#ffd166;color:#343a40;padding:3px 7px;border-radius:5px;font-weight:700}#servicios[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;justify-content:space-around}#servicios[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px;padding:20px;background-color:#e9ecef;border-radius:10px;width:calc(33.33% - 20px);text-align:center;transition:all .3s ease}#servicios[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 5px 15px #09d0fc}"]})}}return t})();var se=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=u({type:t,bootstrap:[y]})}static{this.\u0275inj=m({imports:[Q,ee,oe.register("ngsw-worker.js",{enabled:!J(),registrationStrategy:"registerWhenStable:30000"})]})}}return t})();var me=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=u({type:t,bootstrap:[y]})}static{this.\u0275inj=m({imports:[se,X]})}}return t})();export{me as a};