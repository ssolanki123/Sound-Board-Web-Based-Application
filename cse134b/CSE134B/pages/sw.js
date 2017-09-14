var cacheName = 'ver4';
var cacheFiles = [
	"../img/Futurama/Bender.jpg",
	"../img/Futurama/Fry.ico",
    "../img/Futurama/Leo%20Wong.ico",
    "../img/Futurama/Roberto.ico",
    "../img/Futurama/Robot_Devil.png",
    "../img/Futurama/Scruffy.png",
    "../img/Futurama/Yivo.ico",
    "../img/Futurama/alien.jpg",
    "../img/Futurama/gunther.ico",
    "../img/Futurama/kiff.ico",
    "../img/Futurama/leela.png",
    "../img/Futurama/robot.jpg",
	"../sound/Futurama/Bring%20it%20on.mp3",
	"../sound/Futurama/Cold%20mechanical%20heart.mp3",
  	"../sound/Futurama/Crippling%20pain.mp3",
  	"../sound/Futurama/Everybodys%20a%20jerk.mp3",
    "../sound/Futurama/Gonna%20be%20fun.mp3",
    "../sound/Futurama/Im%20tired.mp3",
    "../sound/Futurama/Kill%20me%20already.mp3",
    "../sound/Futurama/Nerds.mp3",
    "../sound/Futurama/Roadtrip%20to%20Tijuana.mp3",
    "../sound/Futurama/Shiny%20metal%20ass.mp3",
    "../sound/Futurama/So%20excited.mp3",
    "../sound/Futurama/Sober%20and%20crazy.mp3",
    "../img/Simpsons/Bart.png",
    "../img/Simpsons/Bartman.jpg",
  	"../img/Simpsons/BeerHomer.ico",
  	"../img/Simpsons/Homer.ico",
  	"../img/Simpsons/Homer2.ico",
  	"../img/Simpsons/HomerDonut.jpg",
  	"../img/Simpsons/Lisa.png",
  	"../img/Simpsons/Maggie.png",
  	"../img/Simpsons/Maggie2.ico",
  	"../img/Simpsons/Marge.ico",
  	"../img/Simpsons/Millhouse.png",
  	"../img/Simpsons/Simpson.jpeg",
    "../sound/Simpsons/And%20the%20lesson%20is.mp3",
    "../sound/Simpsons/Between%20breakfast%20and%20lunch.mp3",
    "../sound/Simpsons/GREAT%20DISHONOR.mp3",
    "../sound/Simpsons/Homer%20plays%20blackjack.mp3",
    "../sound/Simpsons/I%20didnt%20do%20it.mp3",
    "../sound/Simpsons/I%20do%20not%20speak%20English.mp3",
    "../sound/Simpsons/I%20was%20wrestling%20wolves.mp3",
    "../sound/Simpsons/If%20its%20brown%20drink%20it%20down.mp3",
    "../sound/Simpsons/Kick%20your%20butt.mp3",
    "../sound/Simpsons/Krusty%20Hey%20kids.mp3",
    "../sound/Simpsons/The%20Metric%20System.mp3",
    "../sound/Simpsons/raccoon.mp3",
    "https://fonts.googleapis.com/css?family=Oswald",
    "manifest.json",
    "../style/ic_play_circle_outline_black_24dp/web/ic_play_circle_outline_black_24dp_2x.png",
    "https://cdn.trackjs.com/releases/current/tracker.js",
    "../img/home-512.gif"
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Installed');

	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log("ServiceWorker caching cachefiles");
			return cache.addAll(cacheFiles);
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');

	e.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(cacheNames.map(function(thisCacheName){
				if(thisCacheName !== cacheName){
					console.log('[ServiceWorker] removing cache files');
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
});

// From Google's short tutorial
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
        .catch(() => {
        if (event.request.mode == 'navigate') {
        return caches.match(cacheFiles);
    }
})
    )
});