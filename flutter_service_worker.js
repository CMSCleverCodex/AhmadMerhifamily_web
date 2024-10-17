'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "563924b7b96dd8ca0e49135f3fbbf11c",
".git/config": "971e67cda0e1d5e2aa346667d6cf80d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1435cd34fe8caae6966674734e47f4bb",
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
".git/index": "481ce00b45c7db8da92083b7d2f2030a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9579eeaaa86cdc7b8f0b60c3c0230374",
".git/logs/refs/heads/main": "8a7cf324db154ce73b821c047979dda1",
".git/logs/refs/remotes/origin/main": "b033cd6e906851cd327140527de3efc8",
".git/objects/00/fc1d71dab52a706a9fb710672efd508d718970": "2ca5d76bacaa4113ec2ac794f56fb443",
".git/objects/01/eeb4fed3952a18f066a61d2f3793be48f8fbcc": "361367046f9a572acc25a4df5daa0a83",
".git/objects/05/889db74a916a62a1acf6ff4b12b2073615caf4": "3718549dff62ea285c9ae57a34c370d6",
".git/objects/06/6ad9534f38f53f2f5d7df439539dc81c8063e8": "20fa290ee0c2062c60b313aa13bbeefc",
".git/objects/06/c98688816451137b805cfea945db2d159db328": "b38282642b00baed8d0fa1fe145f4657",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/131640e5da6a23f62283b4ea2f3ec5b9e14fb0": "19cb7f91dd419197b6e12297dff191d7",
".git/objects/0e/047e559a2eaf2d00da4d8eeb9b7ee1d5b86443": "1b932a6e8f76d41baa59078b1cf66cf8",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/0cc1623d158b4980cb123b2225f18f7678b1d7": "d2def888e6eaefde0fad1b7a501326ec",
".git/objects/14/9552feacdcffb0af7ca7028e2f18c0647f78c7": "cb53eec2f1c5c4b1dbbe4714accdc696",
".git/objects/17/6543ebee1456f2b4a4cbfc6fad7a5f2a41c073": "352d964b919302eab7927a42acde0a55",
".git/objects/17/d1d0696d25eab0b852d8a274ab3fb12bdabe06": "dfb523383c6744c0005f329742ca9c60",
".git/objects/18/0d0b100cabd783d136d80a6cea7ba1a4b39876": "be81178dfa0ee32bf6c4550957642be3",
".git/objects/18/6593f1075ef4f4abb32a1d1806ef55801a43a1": "2f3967196aef2aa3a0b673166ed37336",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/6a0b9958a6c8ed55afa0d4f892601f7ff1b749": "7a88956d2b16c1b45ebecd783f1e736e",
".git/objects/1c/53820477170568dabafb309d77f8a240e20da0": "a5b164dbdc394031d0cdc8e58265d647",
".git/objects/1e/49e6dad129dbabc252df974f49ddae89c5bee5": "9219eceea8c3b1a404e6354ff49fa4b4",
".git/objects/1f/e44e902d75ed890f829be61c8d2bd51aea9f20": "ddeebd81c5abbe0114ad9b4079545a3d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/a26d598b7525337bb84f61947fbe9e9be5affb": "86689d7a20a8ce14dd483698ca6b9746",
".git/objects/29/1693ab25581371256ccd6fad7f252712dc655a": "14280c4896b26d22a2416f79414c8c8f",
".git/objects/29/9c69e995661e39450225d81cdc5558979443eb": "21600de55de92f18db4c0b40a386b7e5",
".git/objects/2a/923f59e8bf1499d0a64e01df8df1dafccb4c5f": "9314aee609d28ddb113eed6be77a96af",
".git/objects/2c/81ef291d01d35a954ad1ca1931114cc07a78f0": "353352a2a70365f90f4b700e94c83e17",
".git/objects/2e/06ebf82cf6cc176da1fdcd83f57966497aa148": "2d58edc9567e892b24ce6df30275a02b",
".git/objects/32/e9295043da63504df6790306b7e73fe0834f23": "0b3dcb2160a95b30b393666a9acd598d",
".git/objects/33/170d149786ee23d19c3deffa404ec5990de8eb": "b3b393f96a8e14e4055cdd7433b0f31c",
".git/objects/34/46852ec519db5ccc60eef08bea4b817cec5942": "c7e47d0c36bcdccc8da075bf745a9bb1",
".git/objects/35/4246850a35717402c9caf2826f434c24e8e8ff": "e755ee1448e48596acca6cd3a6f2f552",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/e3b0a68491732ad8a2b7952301dbf15da38406": "05425d9fa3ff0fbb3031079b74f9289b",
".git/objects/3b/1bee92d807ada8386e83077a6afcc96c943c0c": "3a9c494f96b1aa08a6282c08b1842fe1",
".git/objects/3e/e856ac78a71a488500267870e0d5074992b96d": "817566ba98c4a1b87a248222bbf9280d",
".git/objects/3f/fb181965a2d2ada8c32d2d1abb221d370b2a59": "14b1e54562a3f28c61ebdfb8f19bb18d",
".git/objects/46/97d17f13cafadf306c810b2c6e1f1bb217c29e": "433130d7a96c28700e247496883e8914",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/3af708eefffacbf1a4c37543bdcdaf77284378": "084fe71a59c4b5e0af540ecd4d333e10",
".git/objects/4e/cca629c3e1723e75c71494de8ffc08ca779f08": "ed74cf75d1833101fd51665e8c4d7a57",
".git/objects/52/7bdf97f3ae9c034ee76760f9e22c7552a17178": "d62a137a683996ce9d147725eba9342a",
".git/objects/55/ef9efad6ab6ab3129dc48831dbf8147981c13e": "291add675ac1457e7b3bcf133baf7006",
".git/objects/56/214802d6bdefaaccf20b6b653a961d5d450ab6": "da1ad2720fb6b87cfd1334292f2db92d",
".git/objects/58/14d0d44bedea089813cd709b72ce8d4965b5a5": "f0cfd03083ba88705a2437721ebb5d0c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/25ff3cadde7c72344bdb001b76b3735571dc64": "95cd384fcc098820ac84217ac54c4faa",
".git/objects/5d/53d109cbdb4b9c2c8bdef941450e821b73e46f": "d55301d76c9b4ab70ee0e741543211a2",
".git/objects/5d/c8a2a149bedc09b1f9a0fabe0e6cffe7c9ea65": "a225f421256e5db245debbd8e108b809",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/8db7ef6b8b55a8bb15c7923554cc908b01c96c": "44dd14d30781088ac26fa4fdb3b13f63",
".git/objects/68/8eae396be75573ee816d2d8b6c6b123734d803": "2b459eab6659cda85d40e3ef779a7125",
".git/objects/68/af819501adfbe31f69cca5e52cf6a7c02a4e73": "dc28e1cd6ebe387bfb20195ccb4569aa",
".git/objects/69/dcb93c7ebbdc958e61a0c77f61a1b056b5b854": "2bfdb3a0fede15ca51c8d7c3c97fab2e",
".git/objects/70/d31658ce57524710d6aa9509433b944a30b86a": "dcdd708e729957fc138c7a1d7cc5fb4f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7d/3cb6680f8dc98323ee37babda7680ce576be82": "ef6452169740e66880a04eb5a4d84922",
".git/objects/7f/1857a144af99e13797e714b9261338ade8d82e": "9100d27fae06cc4fdf596d09285f1583",
".git/objects/86/0786875fab469cf12b67fd12aca0151b2c1e7c": "999a099dc5dfde00924a9cb3c79e2943",
".git/objects/87/9f45356c61a71651ecb66e39ab0e77b8f41b75": "c9eedc45a1b757d1db1e8c8795242cbd",
".git/objects/88/438470228155be295966ae2edf0ed51edcd37c": "5fed6db7aa5de6841c846fe051c519b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/748a80a8b859c762b6b71a184d5d98c6764dc8": "ccc0b096ffc388e6c2d7bc5f84dc897b",
".git/objects/9e/68efeda754bc2f86eccb5ed221e65c1769e44f": "0764011243b89ed4efe04873a41c8d10",
".git/objects/9e/b9473d2f935d82f610937519f5910eab8c0453": "1f7c2da9262c6fb36bc2b591d1d69862",
".git/objects/a7/e2acdeff6542be019025a0ebd5a108ffe4edea": "a0275326283c0451700fc26c945da9d3",
".git/objects/a8/fc4996942d9daf82c0cd038052af5438a3b615": "395a46453b8db665faab00709c48cbec",
".git/objects/aa/902f739e88ad75b282ee043481c68175d85c76": "6d429bfba290f9217bf59962ee822c3f",
".git/objects/ac/0aa6c8a1a706b520c6ba70c4e95703a7395476": "1cc2a0046b0ec10a3608c06741444644",
".git/objects/b2/f4b3798a17f663d775b2cafc375fd9b3cbf91c": "86ae685788461ccecf35ca7973362b33",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/b23ccadc7b4d22cb45cf79798daf8e23328472": "a9a4cca7b1c1fc3bc54ade5ff9ca8ee1",
".git/objects/b5/ff4259b1adb84c8723e759d84ecd93470d1000": "63a82438aa0fd09de5d87225ca76a444",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/eea5de28e6b0c0afcb123df17bf3fa38bf11a2": "5ad4a6b835de5fb97bd7769f22bee6e2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/5845a08cdb806b2d8c1f69c63f2db1f05caddc": "2bd27d5caf77a9061c3d2b9daf9e9835",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/3208e0dc39b3642b136ea5adb7dbe9b86125ef": "8e4a4cd498ee9d9e99d041948d09dc6e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ae901f32d5717b9b8016219b16db13025747e3": "532a37ed34ba816db820f7a9b44e6074",
".git/objects/d4/e69f827ae14c88e02eee8286b2fdf74caae259": "4fc8ec965b6933a99836c24485f6273b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/019e74dd9bab9cce1b4a36d50e4a5292aecfa2": "5e4da68ebc7d0110cdfc726395e3699f",
".git/objects/db/d41feb499e8244f1cfe6e1bb85c87d66eb5475": "1dd092a95aafb6023046ec7f4d146ef4",
".git/objects/dc/060e8444c25592104b004421f4c46895f48984": "5fb304eaf250467a64b5340defb7dae9",
".git/objects/e4/d8cefe663d43e4f4328e6695b9057a6e53bf56": "6e0250725317b78399b7d7660f8029c5",
".git/objects/e8/5f275833adf911aa5307b68f9a955104a5efb2": "dc08ad566920420c709e1572e99599c2",
".git/objects/e9/12776044919984c40a2caf40d53a7b1b65789d": "a2e91b00285f0e3c6e34eb27e7f6354e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f3957a74ba2b52f7bb99cf7d6717f5a669225d": "ede0b0e85c6e75ba2e3a96fd8fdaaae5",
".git/objects/ee/01c9b42f73d63e0fb9156c99d57c371ba4f4f2": "bd14fae43a09638b4355fafcba0ed9ee",
".git/objects/ee/7dee5e9551f16d115fa3969c0676feab338f8c": "721b71dc5215bb9397df8958bacaabfb",
".git/objects/ef/6e523d094fb147cbd44cdff18242687aead959": "b8dad5fa258c1d2c53336df98a064dd6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5af33b3fc75094f7c4206a85faf908b4f8292b": "79beb5e3df73051ab5ccf9209bca2dbe",
".git/objects/f4/0c510f2260fa7644b03f3f245a9bddefda4b4e": "3e5eda6c59ab585929172c1e9fa3dba0",
".git/objects/f5/1073916961055d85e28f0598d972263943282e": "50827cd87dd5b649efa05fcf48a3bc29",
".git/objects/fd/cb60142f338790527cbd4fcedbfa0af1dd202e": "812bc6de8658a5e477b47c91c8cac7cc",
".git/ORIG_HEAD": "333ba5bb5ee479629f72f9b030112330",
".git/refs/heads/main": "9ab082318eb7f2122da2c1e5bb0377f9",
".git/refs/remotes/origin/main": "9ab082318eb7f2122da2c1e5bb0377f9",
"assets/AssetManifest.bin": "af278fe5ec4dd6cdeff28a5044d92b99",
"assets/AssetManifest.bin.json": "f561f22b41c8955216b83f6abb6e2f16",
"assets/AssetManifest.json": "d38e6760f403e24b8932cb79a6b6201d",
"assets/assets/icon/icon.png": "71b64c397d4d796b8b8d2cfc0057e490",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ccf94beafd09619a535c4429b418413a",
"assets/NOTICES": "05ff958063e5ba2305f293374fc960ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "54048de81ec2deec73c9b4ca10b4003a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a3ddf6bd39a85cd2dc30e762e709b07",
"/": "4a3ddf6bd39a85cd2dc30e762e709b07",
"main.dart.js": "54efc80a02572985eb9a60ba04afa1b9",
"manifest.json": "c066c67d6053e406b3b7fd37c9329a19",
"version.json": "e09552c0f2d1b50668cf139eefc1951b"};
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
