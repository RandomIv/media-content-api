/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f4f0fd1e09e63e42c9af57459cf56998"
  },
  {
    "url": "assets/css/0.styles.9956f3bb.css",
    "revision": "c4e6613fef9ee993146c1c5e8670b3d6"
  },
  {
    "url": "assets/img/create-user.0ca02b9a.png",
    "revision": "0ca02b9a523a82189695ca13b33aac8e"
  },
  {
    "url": "assets/img/delete-user.211b2e2c.png",
    "revision": "211b2e2c1302e9ad0e21f91632304707"
  },
  {
    "url": "assets/img/error-user-not-found.f52b592a.png",
    "revision": "f52b592a95265fa2b8431f957eee1409"
  },
  {
    "url": "assets/img/error-validation-field-absent.a5e5a1e6.png",
    "revision": "a5e5a1e6ad59084421b1942e85b54806"
  },
  {
    "url": "assets/img/error-validation-field-must-be-unique.7cd6ccb0.png",
    "revision": "7cd6ccb0c1448d1816efe94f70f11c89"
  },
  {
    "url": "assets/img/error-wrong-id-type.07bd6591.png",
    "revision": "07bd6591e124725a3cef09300f79b347"
  },
  {
    "url": "assets/img/get-all-users.98c4b817.png",
    "revision": "98c4b817816e926cf047512c847f8974"
  },
  {
    "url": "assets/img/get-one-user.38241635.png",
    "revision": "38241635cc72b721276a3925a266168f"
  },
  {
    "url": "assets/img/relational_schema.ce95178e.png",
    "revision": "ce95178e03036cd4d2d2ffe1a92aaba3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-user.f8699d1d.png",
    "revision": "f8699d1db756405f8f709f3a00aab68b"
  },
  {
    "url": "assets/js/1.dc5e9aa0.js",
    "revision": "57e29741a9039f35e3fa081d41375158"
  },
  {
    "url": "assets/js/10.e71d5abf.js",
    "revision": "417c6816961af578d18ba0ed50f7884c"
  },
  {
    "url": "assets/js/13.83362fb1.js",
    "revision": "37cbcc6125f06ec2749e435b48240fb6"
  },
  {
    "url": "assets/js/14.1482bc59.js",
    "revision": "0aacb590409c8f5ad22486904ebe65e2"
  },
  {
    "url": "assets/js/15.37174f57.js",
    "revision": "0a05a17a50e7a5867e81256b091bd552"
  },
  {
    "url": "assets/js/16.297eb83a.js",
    "revision": "df18c2ffcf66c5585d71a1b7d63f8d56"
  },
  {
    "url": "assets/js/17.93daa0a4.js",
    "revision": "df469838023f4976ee8d4c8bff88acff"
  },
  {
    "url": "assets/js/18.b24cc82c.js",
    "revision": "90f8299eb49a27b8aa396d609fbba85d"
  },
  {
    "url": "assets/js/19.da6e89ab.js",
    "revision": "8c66ceb39e765ea06c5b32f88e172245"
  },
  {
    "url": "assets/js/2.3776350a.js",
    "revision": "088d86f0b18764ac4c3c394319f5ca0b"
  },
  {
    "url": "assets/js/20.44e63f1f.js",
    "revision": "46ee77b5474275acdca51b7aba023081"
  },
  {
    "url": "assets/js/21.2d2c75df.js",
    "revision": "42cc22e3bb260828aed894bf3f06ad17"
  },
  {
    "url": "assets/js/22.beed8756.js",
    "revision": "524265471ef1e791f51002233edcb7b4"
  },
  {
    "url": "assets/js/23.f442853b.js",
    "revision": "d33b8ced611e13454f516b5ad47862f9"
  },
  {
    "url": "assets/js/24.08e9dc89.js",
    "revision": "c11ea35b25cebe5cd831150aa3b78e7e"
  },
  {
    "url": "assets/js/25.ec76d149.js",
    "revision": "311af35267b01bb887ca9b9d1e17fdaf"
  },
  {
    "url": "assets/js/26.86ec7267.js",
    "revision": "93a93b718b8a0635302f46e4126ae9be"
  },
  {
    "url": "assets/js/27.90846725.js",
    "revision": "23b178339550ef2bae4e83cb2fbe586c"
  },
  {
    "url": "assets/js/28.279c9c63.js",
    "revision": "acc95c189a7a064abbf0fd39a8a61966"
  },
  {
    "url": "assets/js/29.b5e4c636.js",
    "revision": "8923fa61a95365c0df4f3105ee48be60"
  },
  {
    "url": "assets/js/3.1b0ecbec.js",
    "revision": "50aec8abe01b14d767874f9fb59abfde"
  },
  {
    "url": "assets/js/30.d72b84be.js",
    "revision": "5d21dccae72075ddae3acbac59eb437b"
  },
  {
    "url": "assets/js/31.611cd2e5.js",
    "revision": "c64415155021a079d10c66bd5718f0a0"
  },
  {
    "url": "assets/js/32.8c674d62.js",
    "revision": "642058a2915b788918674a3b8a58e55a"
  },
  {
    "url": "assets/js/33.99ec497b.js",
    "revision": "fcc5059ca81a979ead1e88f119ca6b29"
  },
  {
    "url": "assets/js/34.b406707b.js",
    "revision": "f14e4af394a61ecc1fa78d36b03fff9d"
  },
  {
    "url": "assets/js/35.72959282.js",
    "revision": "57236395151e6a387a905801c49f9b91"
  },
  {
    "url": "assets/js/36.516a9b0e.js",
    "revision": "e2917cde069f48d28d7510d0d8789485"
  },
  {
    "url": "assets/js/37.3e281631.js",
    "revision": "38cb50081cf04767b5830fe80272996f"
  },
  {
    "url": "assets/js/38.71e93554.js",
    "revision": "bd3671e99113f340364ddcb683c107e5"
  },
  {
    "url": "assets/js/39.503246dd.js",
    "revision": "4f6651956a41e104066b855f0d8bfbfc"
  },
  {
    "url": "assets/js/4.91602b88.js",
    "revision": "a088a97c4c7dfbc413f539b034de09fa"
  },
  {
    "url": "assets/js/41.91036749.js",
    "revision": "78fded09e78b02ad8f61fa572e06b27a"
  },
  {
    "url": "assets/js/5.e6797ec5.js",
    "revision": "40759354c154190ae05db1b28cc8f8f8"
  },
  {
    "url": "assets/js/6.c35551bc.js",
    "revision": "dcb4774899ad0dce1e5650ba08a8a41d"
  },
  {
    "url": "assets/js/7.083c35b5.js",
    "revision": "c8df3257be1db85861d2920fadfa1bd3"
  },
  {
    "url": "assets/js/8.d9349209.js",
    "revision": "a8690815a84dfbfa9ebfe949c0b972bf"
  },
  {
    "url": "assets/js/9.876cfea8.js",
    "revision": "8f5bf7f0d980a9bc0d4863fef2bfff84"
  },
  {
    "url": "assets/js/app.dd8af241.js",
    "revision": "a7f05100d5f54e50e604c4b29c1c4df6"
  },
  {
    "url": "assets/js/vendors~docsearch.fc549769.js",
    "revision": "8206d275f7d339b29c10070293f44605"
  },
  {
    "url": "conclusion/index.html",
    "revision": "27897ae755369c464b35539ed6246bc6"
  },
  {
    "url": "design/index.html",
    "revision": "3da68cb5d1b60f745188be1643db2c3b"
  },
  {
    "url": "index.html",
    "revision": "69f36abda114119c48461a91b2bba3c6"
  },
  {
    "url": "intro/index.html",
    "revision": "01e16fc8096c5619cba94653fbc19f4d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f761992f9e587a129d6150572dcf083c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bdeeb56da9ddffa7ba0992705487ca29"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ad6fea15efe19dce4caf7541e795300a"
  },
  {
    "url": "software/index.html",
    "revision": "940f120c18a363172279580808a81e42"
  },
  {
    "url": "test/index.html",
    "revision": "a7010e8dcf2b4caa4fe72c8f6d171960"
  },
  {
    "url": "use cases/index.html",
    "revision": "6846456656172a28b3c2781260b66b50"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
