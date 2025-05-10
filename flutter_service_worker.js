'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b92ad145cd8517dfbb1b56edb6c9104a",
".git/config": "b4d5c3144484fe242f0d9ace24b670ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "003b38bd726cf019dff6e4a0efc11d07",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41ac40fe6a7fd53b621be4e3f8488de2",
".git/logs/refs/heads/main": "41ac40fe6a7fd53b621be4e3f8488de2",
".git/logs/refs/remotes/origin/main": "94f6798623f0a2c50d545122c987eb9f",
".git/objects/03/be80174bcc3ae1e4a6cf367e403f7f15522c43": "55db9dba7d7a596830b238b40f27e590",
".git/objects/0e/92c9b38995f7bc32154873faff47950e7a2e03": "8dd047c9bc88f10fdb197c8d2f7c9cd7",
".git/objects/14/b4765fc518b30fd59dbd19478c4c11a8c77881": "8bb09f38c1b00e286b93205613e81779",
".git/objects/15/b7d8849954f7fc5f5eb9589336f471487903d9": "a553e1ccbdd875deebdec3a04766af97",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/23/e4dd5946a06794a8a7280b79182a62833cf246": "355d612d3e0efa91cc80f9245733745d",
".git/objects/2e/fb71ce5778eb9d969e742bd5ff885de1d09281": "0e03ec595d6604f1bb5fb6bb93104791",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/3e125a9ea0e3f904fd3de10045307625def87d": "c68f3a748578cf06f4a12a3c9d8ac0bd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/8703f3eae4a2f090ffa23ae6335f1bdf636e32": "86d701fcb60f960af587531db7b604be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/e0bcce5c482b465a8b439cde2ab863fc589fa4": "5639ef5bb03d3535e67455b83d79df6b",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/55/2cd8429ab29d440235d8ff20195b2851a66c6f": "87371475d58b88538634f9d7eb9a5a51",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/b36487eaa4eb3d70bfdaa5133120f2731dc9fa": "1759690a4f7c330abb5a49cdb93d02fc",
".git/objects/7d/cacabdb184dc308b227ab182a3ec9df6dd8a24": "6ce4009b88175ac37b42118d2b9b0e3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/71ef7b3a63083f64d5ebaa378fffd797243a24": "59329c74fdc3955fe64a800efd49d5e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e8afdf24165fbfedd06ce35999d31b478d506c": "69e02904fef78c49894761d330f18864",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/5863c31a3fa13c754aa17e6281492a866c0678": "c0b20ce00eb42c1b5910138acb9691d1",
".git/objects/99/cd57def63d5909f17d87d3cd642cce3b4946c2": "6039f0e911a6d6cfe8153bc5fa890583",
".git/objects/9f/764fc3b746f67027a8109b57d77bb6a685536a": "d3288fca665c0102f818a3e83b8079b9",
".git/objects/a2/9b901818245641e46f6ce17fd649e9c62bd442": "32f3b3a1b407610fe1f65bc752cf3e59",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ad/833c48357029b7b6edff0be88f86d27760361d": "a081a1d2bff4ba244222e6a64a463837",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/7aa80bae54cd229e99c5564e752c21dc1d751c": "9dc42311b9bcad56a93c0828a0dd83e5",
".git/objects/c4/66a19093d83ddd551cd0ba4051d44ca6221cde": "99d2fcb223c206a85557a4e86021b20f",
".git/objects/c6/6ad9e37769c5525526468ba75de7523b17cc4c": "25c16adbb881c708a979c8e978321670",
".git/objects/cd/50552b1a1eeec1f89a6b8898afc85931e1a30e": "d7e8c370c7189558cb3e581deae7a728",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/723c731a1267516a1fa095152bb31add8052ca": "d2c1707ef7122e34ac9d02dcf7d00cc0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/bba7d2c241ae6986107c02b27d36b36bbf5299": "e4e9bbc49ce0dcb370a952f99ef071e6",
".git/objects/e8/c05a58eb791150c06175181c0d89c8a7e25437": "ae59950a490bd64f3651a5e7d30c32fb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/94161be08158dc549b698b21c6a95f05f93892": "9dd15f8fb765d0c86b03d0a1155f0f29",
".git/objects/ee/0f774c1dde75adc7dc530d8efc205eac5da7f4": "02a904b92f7cc945cefbe8c321ddc57a",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/500e884b1e76783882e7726c383227e3b2946d": "c4080a3394fc6e3a2d2ad818890cf78b",
".git/objects/f2/b39c31f2d44d01aab272a0a9257bef8f4c1765": "5b4a1a6d709adf9d3b5dde340857b4fa",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/8d21fa7fbf12c1681b6dbbdc6bc4f6db16838d": "6903d389af2835db212c57a903c7130c",
".git/refs/heads/main": "2ee99bd45dd7b36f055e5f154549a96f",
".git/refs/remotes/origin/main": "2ee99bd45dd7b36f055e5f154549a96f",
"assets/AssetManifest.bin": "070f12726bd4ed4174b5263fcf68b53a",
"assets/AssetManifest.bin.json": "e38a81720e0c98852cc4b323afda0e4c",
"assets/AssetManifest.json": "8fefa462b4bc965fc3968958e218fbcc",
"assets/assets/3236910.png": "32e37cde9a262cbb80311976e77a307b",
"assets/assets/36788.png": "1aead2b5ce73e8e573eb07994fd3c114",
"assets/assets/bird.jpg": "0adc44c0f9042d65ca05d02caf7e9648",
"assets/assets/chair.jpg": "260b3ccc2762a9a062fe4628ca6c9c6d",
"assets/assets/forest.jpg": "709874b238ded35898dfe82caf34b6de",
"assets/assets/nature.jpg": "054cb821f93741ef9c90388cdde0e5da",
"assets/assets/Screenshot%25202025-03-21%2520020059.jpg": "9f9f27c436a014c53570974781cc63ff",
"assets/assets/Screenshot_2025_02_03_155300.jpg": "cfda977bebe94bde0a5739e2311d9136",
"assets/assets/Screenshot_2025_02_21_204633.jpg": "58c5eeda2954e9ce2f9a58f63cf085f6",
"assets/assets/Screenshot_2025_02_21_231040.jpg": "dcca587371985ba4143042ed286aec8e",
"assets/assets/sunset.jpg": "2d2396235046a94b8b28f94f6b6dce92",
"assets/assets/TIGER.jpg": "8b50b49022de77807df6eba8a45ae766",
"assets/assets/town.jpg": "49ab05777c7b8dab4aa9cf0d0a3e73f6",
"assets/assets/tree.jpg": "7f0d21b7b5ee442dc908fef6be700a9e",
"assets/assets/underwater.jpg": "b6f696556677373600971772d5389c10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dd40f753ef26e6e75b62a0fa607ba520",
"assets/NOTICES": "9c2d29803709b981ad3b8d05463a7ca2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "efe9ee8caac2d5d231be86e49ac4b4d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2386fbf84d247c695bcf975b07983321",
"/": "2386fbf84d247c695bcf975b07983321",
"main.dart.js": "d947b26953f95eb6bd68cc313e94cb1c",
"manifest.json": "af39c4321bacda28d917b43a76b4c175",
"version.json": "9744ef4532add25d9b52651591197ba2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
