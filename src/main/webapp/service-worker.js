if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-5490a1bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"aa8c24174601354a22e5d5244275cc42"},{url:"js/extensions.min.js",revision:"1d10176ba644b98ab90174cb6eaf7adb"},{url:"js/stencils.min.js",revision:"84e0252b03a11966710aaebcccf98151"},{url:"js/shapes-14-6-5.min.js",revision:"e7064eae84696b8f0e8d43a130ae1b70"},{url:"js/math-print.js",revision:"0611491c663261a732ff18224906184d"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4f2c07c4585347249c95cd9158872fb2"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"2d48da4dc6cd364083c07259b558885e"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6d5a85e70c7b82ba685782ca6df2b9d5"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"aaa60d5e806db5308c2a73fd5126598b"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"de33ae077ab92824bec7eda723bc76fd"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"2bd677096ebffd3aa5cab0c347851e3f"},{url:"connect/confluence/viewer.js",revision:"a9d84488d17425d28e5d85d464e0a8f8"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4c58f3a1a4c99b1c4264593b6e05100b"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"352d2782274de07617d117926b68c205"},{url:"connect/confluence/includeDiagram.html",revision:"5cefef0227d058cf716d1f51f2cf202f"},{url:"connect/confluence/macro-editor.js",revision:"412bc4b87e630b697a40f247c579d398"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"9aa260d3af918cb745fee246b78b2b35"},{url:"resources/dia_am.txt",revision:"4290d19ae685c5dd2f6b9282385a5041"},{url:"resources/dia_ar.txt",revision:"70cc364cedbbf4e13afd3f43dd01c3b9"},{url:"resources/dia_bg.txt",revision:"d15f24586fad8ba351312e1a63bded28"},{url:"resources/dia_bn.txt",revision:"273140a770c6abd36bf966110bcc0d8d"},{url:"resources/dia_bs.txt",revision:"fe5f0718f86d927bebb1675ffab8a17a"},{url:"resources/dia_ca.txt",revision:"6131a47b70f6300ebcd20ea571e5c032"},{url:"resources/dia_cs.txt",revision:"6a11a0523e58a4056204cf258d1f57a2"},{url:"resources/dia_da.txt",revision:"7bf860af46c95ae92034ccf20a98e0ee"},{url:"resources/dia_de.txt",revision:"b0e22372923625eaf1473e9979025fd6"},{url:"resources/dia_el.txt",revision:"e56568c1f5b707e1f27be39453406930"},{url:"resources/dia_eo.txt",revision:"962aeade0d7a3e8e8d5b2bc0ac7227f9"},{url:"resources/dia_es.txt",revision:"5fc145654d971f61c986705629f9ab89"},{url:"resources/dia_et.txt",revision:"ee3f6dbc8a692efc65f33109a3293959"},{url:"resources/dia_eu.txt",revision:"8ab5a8f899e19d938fdb6d256ce5ab97"},{url:"resources/dia_fa.txt",revision:"524d23303ed7d66f36cedb2e4f23f767"},{url:"resources/dia_fi.txt",revision:"a1fc57f90abd424f70a5ad915b78a8bb"},{url:"resources/dia_fil.txt",revision:"715cffa679eb8923881a1bc47b73ba32"},{url:"resources/dia_fr.txt",revision:"4a2d685d635c461293a9d437e7a4d556"},{url:"resources/dia_gl.txt",revision:"68350f3fedfe1fded0508785fc2f3f7b"},{url:"resources/dia_gu.txt",revision:"29b89be9d6a1e2bf9ac0ad36f0877832"},{url:"resources/dia_he.txt",revision:"92fd189461b14f20870dacda85ef3a38"},{url:"resources/dia_hi.txt",revision:"15fb785ebf0898fb3e3e78d44ded9b9f"},{url:"resources/dia_hr.txt",revision:"bbb472a98a68ffb8c27071522c8360c9"},{url:"resources/dia_hu.txt",revision:"8403206104c40b56da0b9cd8dbd85469"},{url:"resources/dia_id.txt",revision:"be7398d99a17f7b73a4dcc61610de8ff"},{url:"resources/dia_it.txt",revision:"5d745687e17e1f5a2ea9a588aeba8c0a"},{url:"resources/dia_ja.txt",revision:"b4c41d2d5903a86fe5eba3566dd11508"},{url:"resources/dia_kn.txt",revision:"e158d7a35880d4434d9a303a3a426557"},{url:"resources/dia_ko.txt",revision:"2fb54cfda30e2ef59722f5307de9d4fe"},{url:"resources/dia_lt.txt",revision:"5bcee3bf3c2bedbf1e31a1debd361c23"},{url:"resources/dia_lv.txt",revision:"e09b42f09e43dff00d6f6fedfd3b6945"},{url:"resources/dia_ml.txt",revision:"72d06ff08d7d6075e0f3700167e35254"},{url:"resources/dia_mr.txt",revision:"383a0d4df3416521dcae3af36a2b67f5"},{url:"resources/dia_ms.txt",revision:"44cefe93a6e0e041d9399fd721353823"},{url:"resources/dia_my.txt",revision:"9aa260d3af918cb745fee246b78b2b35"},{url:"resources/dia_nl.txt",revision:"9cf1764d58f428776525a5ae28621138"},{url:"resources/dia_no.txt",revision:"8e4da99507fb86663381f1fd904df6e4"},{url:"resources/dia_pl.txt",revision:"84ecb618b6d573224be06347e3ea53bd"},{url:"resources/dia_pt-br.txt",revision:"b99cc8f82607359477b7144542062b4b"},{url:"resources/dia_pt.txt",revision:"a6bc623efe1f1c1f97458808d737b4bd"},{url:"resources/dia_ro.txt",revision:"7fef19412a4961de87591fce29d3661d"},{url:"resources/dia_ru.txt",revision:"9a25e80507e4850e731d532343a74b9f"},{url:"resources/dia_si.txt",revision:"9aa260d3af918cb745fee246b78b2b35"},{url:"resources/dia_sk.txt",revision:"ea4cfe448f4eec054e70573a50293e38"},{url:"resources/dia_sl.txt",revision:"a07725269965464aeb21c1cf76427d78"},{url:"resources/dia_sr.txt",revision:"85a7a80f02a97ebfe4204f2bdab2addc"},{url:"resources/dia_sv.txt",revision:"a459b4edf140072a2dc73bf7f881188d"},{url:"resources/dia_sw.txt",revision:"0fd5d25c6b19e8a4dcb500635086feba"},{url:"resources/dia_ta.txt",revision:"b4adbf13675b5b4d0c584c29d85458f8"},{url:"resources/dia_te.txt",revision:"585df3380398652b9e8f9e3561f1c4e2"},{url:"resources/dia_th.txt",revision:"3edf62aa0ef3b2dc82985d9b7bf67d64"},{url:"resources/dia_tr.txt",revision:"ff4baa43ac853fba31cc8c0445f95668"},{url:"resources/dia_uk.txt",revision:"6bed249ab68aa8be3765b1d3a6d59f75"},{url:"resources/dia_vi.txt",revision:"d4b5ee0a5ea1574d651bf12d626ee290"},{url:"resources/dia_zh-tw.txt",revision:"ac29a76bce6f340e98598fb43ea56ba3"},{url:"resources/dia_zh.txt",revision:"cbf045899e60bd680e3b6030605bd216"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
