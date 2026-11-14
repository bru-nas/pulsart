// PULSART Manager | service worker: recebe os avisos e abre o painel ao tocar
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
self.addEventListener('push',function(e){
 var d={};try{d=e.data?e.data.json():{}}catch(_){}
 var t=d.t||'PULSART Manager',b=d.b||'Novo briefing recebido.';
 e.waitUntil(self.registration.showNotification(t,{body:b,icon:'icon-192.png',badge:'badge-96.png',tag:'b'+Date.now(),data:{u:d.u||'./'}})
  .then(function(){return self.clients.matchAll({type:'window',includeUncontrolled:true})})
  .then(function(cs){cs.forEach(function(c){c.postMessage({novo:1})})}));
});
self.addEventListener('notificationclick',function(e){
 e.notification.close();var u=(e.notification.data&&e.notification.data.u)||'./';
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(cs){
  for(var i=0;i<cs.length;i++){if(cs[i].url.indexOf('/MANAGER/')>-1&&'focus' in cs[i]){cs[i].postMessage({novo:1});return cs[i].focus()}}
  return self.clients.openWindow(u)}));
});
