'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
".git/refs/remotes/origin/main": "4b509dbbd885a5d47579cecba7011dee",
".git/refs/heads/main": "4b509dbbd885a5d47579cecba7011dee",
".git/COMMIT_EDITMSG": "9110b1fbdbee560205fb88d7dbbb5a7c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/config": "e76baef0b8c8601336f2dd8787be2b5a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "9d2bd3e7d219ab162f80d34125b66124",
".git/logs/refs/remotes/origin/main": "e27bfb8713bb263a90c7d1fa54d687e7",
".git/logs/refs/heads/main": "ea236e011652653b24f1e904e35fec04",
".git/logs/HEAD": "84eada03a36111a5ee5f0319e9f4642d",
".git/objects/86/d13bbcb62739964226a9ed07692cf354d4b58e": "34ebb4cba8d2bf8560a292c146fce77b",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "0b2a056a7bd5b13dfa022e44c24e2a83",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/06/a611dde13c041a784400fb2b6e13fbc9ba67f8": "224bfb42ce7a46df7bc1c0777764710c",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/ee/e9739842e8ea6788f048d5c66322832a66d984": "dfdbfac28d2af86a501a6457529350fd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/2f/a7bb7b8bc5835bb42452cf18182043629138a4": "6afc364fc4a243e490f8dcfcf474b2aa",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ca/15245e73b6d2f8182e2c1319b93b816b0db2b2": "1adda4900dfdb1133e6982244a49dbe1",
".git/objects/ca/4b7920dbcd2023dedb41b478f66cf0d9713ecc": "eeaf9834f15dcdf558589599a1160d6c",
".git/objects/f9/bd96e8b424d436ff4c82b3dd2c689a41281a63": "1ee65bf10110c1fafdbe768dfa3443bb",
".git/objects/f9/e17f37eed25de863a964e0cffa863f39a9c27c": "fdc1acac502cb762f45a6daa9d34fea2",
".git/objects/88/753b3e7731d1d4914fe5baa7714001b7a2c2b2": "13beef7f7b17b524d17de655aee3fc4a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/cf/3fc32f8e453c926d7919e8e9675dcc54cbb7b3": "472ceb885021ad0559243acafb954d64",
".git/objects/46/3777fe2284992d0f557b43ed019b7ca3f0d34a": "1f89605453821e002c7fd99b88b5e49c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/3f26f024a2d98ebba2d23caec8cb935425ad1a": "06e61a72c428bf38458115e9c2c55e89",
".git/objects/c3/4aea649101f936c71823a1d3ca7d66c7b47d66": "4d4f26a74641eac0dc0972b2395ecda8",
".git/objects/fe/c05246c4e65a9971c8dfcfb7c5977d35e39127": "76ce85b00f647ec4bc6976c29cf484d1",
".git/objects/43/b4af28dc4a9cb46de183349e70ede293ab06a3": "43909f5edcfc4d859b89da437b4809b8",
".git/objects/43/55a06ba9f9a64fee0fe157ec440898842fce44": "844c788ff439177a394ce1739439beff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/4a/f3f9a2cfc5be9ec41bde34b921b087da734ebd": "c29b72263873e375728dbcc1868fa8fd",
".git/objects/cd/b68a00d730effae1e9fcc16a1f1a03314e3fa9": "a6e7bcc4967702d5a3a28eae41b50cf5",
".git/objects/af/c1cd9d2dfc5babfcbba853488b0ddeea5599a2": "081dbbcd07e4219a3ecfceb4180f911b",
".git/objects/a2/267ba9ea61c4d2ceefde24fe468928fa69f54e": "209a43b73b9649780b005dfc4c805940",
".git/objects/44/275323e8294333524c96ca3a19b62b77c4783f": "69f5ea815e101782074d89b97e9d2ea0",
".git/objects/5a/6e78be17cbb207aa6051b59d4e044718a9f51e": "a7ca9e22173612b57f3f6d0a5599214c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e0/9651c2fe122ea2ddde173451f22de204acae67": "52385250319f8042e9b8c59597671473",
".git/objects/e0/6cb4ef7547a9f0cdd831896214fd8b13de5cbd": "dfa938311479bf3e73a4eb64331a201b",
".git/objects/71/0aa9e3f4098add3ba82779850f1017bbbc4e0f": "f6f42a3955fcdfe6095aa3c96852dd0b",
".git/objects/8b/00fc6d4bd101df74ee3beca8226cf88ccd6a03": "3707868bdb3f7de705cd6f293b4a24d9",
".git/objects/5b/be557eea5ac82047aa848593030619bd6fbebb": "d6c6523cd58b211debafa2f45419f0b1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/9f83222f5fe37836e963b374082f51130f0505": "b66c2f6d3b6a5127a35796a3608ba8c5",
".git/objects/69/69ea32fa41d43e721b8dfb4b4c29943b78c697": "23ae272db19a3e7a8a8141fc541bb554",
".git/objects/94/bd9b9cf1939f6804aa141008ef53bf8818199a": "d39eb096ded042f80dd63d8f3253ebe8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/4c/cd3fb64a26971c7c7470f1617592035630fa92": "01b3f470cafc11d4b025e833c21484e2",
".git/objects/4c/95b406eeef2878bbca6669d74ea11eb877020b": "f8d1c2b2da51cd6714043ddab429063c",
".git/objects/bd/f593d69b14a730f504b39afec6efde9329f2f0": "4edc02a3296c546548467544d39e7a94",
".git/objects/a3/fd3b604d604361a0759580f883f9c00cad341c": "b21e69cea63d92d3c728d4c9f44ce47f",
".git/objects/42/27e2acf4745b923c4289f323a665026c0d745e": "58814cf3aa78a42729062338480e8878",
".git/objects/67/fffe279ca1055a9a42e09922a005e1384ea30a": "67ba7dc6b36198e30bda0742f76ee225",
".git/objects/92/3a6801f109eb7572f265a87e823123fa450c16": "912d4cc49eb92177ba3747deff7cbe31",
".git/objects/9d/a14a5515d34fca8346676e2680181d1af2dca8": "e4e01bb6113b01785260d6a6e996d646",
".git/objects/5f/51363d81d5bf7643c4ec64cdde465a364492f4": "7419812c105922e443d2d33cd81c180d",
".git/objects/9e/611719a77b2cab79dc27b60fef637330fe873f": "e93e8706ba47b5d23068704dfaf2bcde",
".git/objects/a0/4654f310c75f5bbd313b8ddc135ff7bc5d1de1": "03fb303f519600211c95ffadda5377f5",
".git/objects/b4/660f2da4fc3b7db096e38f8faa425e3db14013": "cd040072e7de85672f534e627cda2f48",
".git/objects/87/a9fb848c5d5100e2f25b4d0297765c22675cd8": "d2c38ac13941369b3e9951dbb00b9d2a",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/bc/6981459c8528a77fe57261aef54af355a00d7d": "f288b4279e81cad403ad98b78844217e",
".git/objects/bc/32621d2ff526ac1eb486bc5dbfab14784cb1cf": "e11718a6a22ae85bfe545f99868b21bb",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/07/903bd6018b43630bcae59a20e61d9823400093": "8ce18cd9ed0a0aa799bc30da54cac516",
".git/objects/f6/44d745f9c0482b6556c49a24a16d1094c43d90": "573b45b8500f858e7a26a0d32da3cbb2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/fb/f043b240d13e2c95f52521636d3a8294c79416": "f48954a88d4b29d251ca39c028c08de1",
".git/objects/3b/8391695fe22edcd22d96e6780f1af0365a0e1c": "d4d67a52d1f11661e77d606d15198240",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/21/e89b4688f230c10f96f50c5a84717b6995ca08": "5ae0ba8b79ee78d24a166a63967adfe7",
".git/objects/21/2b6445f7a5455968d9cc188b8f6559de357817": "3da791ec3f8e72ae50d06fdc11689825",
".git/objects/f5/3ad65ad326ed012f5a33686998c4ff7247235a": "ab0f5236ef1e0e4c38b42cf9c9e602da",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/608ecc71d60c748b69ff4a8dceb933eac8ae68": "6b2a68a5fd8a4504b0f2351d86c3fffd",
".git/objects/51/0914eda542e31b9c59797fb8defe8236341336": "2d9bf012e5a71715e89ad83bca761416",
".git/objects/45/aa2bf5e874bf929f2b190ae1145aa07a94548c": "47d85c78237b67dd843b827c54224020",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/c7/9c773f1b8720b9f20fef6b49cafa0451f23e75": "4df3d4aee8c254fbe88eb9a3f2cc746c",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/19/2f1b2d589c94a31d8a3134387e80db5903a8ff": "e60f8a4b8bc1a8dd2354a00a9859b186",
".git/objects/76/8496f6038a2028fdf1267c4edcc06074796b2c": "a5a246f714a19122faa15f2a7a9b36e9",
".git/objects/a9/ba8bf3a036e85cb02f3aa82d02fe7e3905bfcb": "2ad8360c1c8ad2e06f7afecf10054536",
".git/objects/1d/c07a87fbe3582d0bcc46e47b1b89199cd40c06": "736438af9e672c9fcdc7cf5965192650",
".git/objects/d2/64016d807a2099f1c47b56b05a5c3dff2f1fcd": "e319853dbf9a2f3273fd0d19e722e377",
".git/objects/64/48de1091df7c2e1226fbbe46529207f172a283": "bcae6a7ed07c20ed2ffa115ea791da8c",
".git/objects/4d/1f1bab767ff66db178a0bc7af4f1294a111a7e": "b41f67087c5967b1ad0b75c6b7bd33d8",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/f0/23267d603c619a593b74bd17aaad1c9f5dd87a": "4416b79c836b93df6258440b39e10cd6",
".git/objects/a8/a78c9bbabfed33da4343f6387e226b6c7e50f8": "a92adf81db88857701be36db7601a49e",
".git/objects/28/7b91747caf728b53b0f913ee3cf6ca995a4385": "32a7941826dc938efcfec03800d9520d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/99/07b78c1c35f60853463f2764a58c5d22e25f53": "2fd63a19fe38c4d8e272c6a0033fd5f7",
".git/objects/36/771880ea063b039f5d0ad0c65bc23819d43239": "4ce3f105e116b553d007634c10fc2556",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"favicon.png": "a8abfaebb7a875b8c79d43cdcf1c44ec",
"main.dart.js": "4c979248a15090da29c37394b2243ac6",
"index.html": "537c4d7e2090aee8af32d390aac16fb2",
"/": "537c4d7e2090aee8af32d390aac16fb2",
"assets/AssetManifest.json": "f6b7589783d96b2c13010215fe83c5ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "c03c70e1ec31ca795738574e2e2db170",
"assets/FontManifest.json": "48d716ab12b97c6652c62fc5b4c954e4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/imgs/imgProfile.png": "458d646aedda2b7f7ddb8614ea2e75c4",
"assets/assets/imgs/Deli.png": "c461a017117bcf06e9036b5c89142311",
"assets/assets/imgs/TON_menu.png": "afe84230595e4afdce0cd57277d7c6bf",
"assets/assets/imgs/email.png": "f7656824dc2d0751e46ad4732104d8f6",
"assets/assets/imgs/whatsapp.png": "63557d1f50a2196d84e4ee310e1984bb",
"assets/assets/imgs/insta.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/imgs/github.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/imgs/placeHolder.png": "21fb9082192c36247402f88d260f1c24",
"assets/assets/imgs/TON_game.png": "109edf3569de2c74aaf81ecb07d80048",
"assets/assets/imgs/iconHeader.png": "750cc6411995576c256cc2a8deccf240",
"assets/assets/imgs/linkedin.png": "dda499d8edb884a5bab16b08c2a716cd",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"icons/Icon-512.png": "bf01cadf6bdcbe3450c317c47c30ed06",
"icons/Icon-192.png": "11b91ef23e5b663616bed2c868bb0622",
"version.json": "245fefb4a0cc0ef0eee8d25320227a84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
