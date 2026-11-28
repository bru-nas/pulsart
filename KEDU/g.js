// Gesto escondido da administradora: 5 toques seguidos no logo abrem o painel.
(function(){var n=0,t=0;function go(){var a=Date.now();n=(a-t>2500)?1:n+1;t=a;if(n>=5){n=0;location.href='/KEDU/admin/'}}
document.addEventListener('click',function(e){var i=e.target.closest&&e.target.closest('.nav img, header.nav img, .top img.lg');if(i)go()});})();
