// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/page-2.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/src/pages/services.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/layout-index.json"),
  "post-two.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/post-two.json"),
  "post-three.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/post-three.json"),
  "post-one.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/post-one.json"),
  "dev-404-page.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/404.json"),
  "about.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/about.json"),
  "blog.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/blog.json"),
  "index.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/index.json"),
  "page-2.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/page-2.json"),
  "services.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/services.json"),
  "404-html.json": require("/Users/Uqutub/Documents/CLASSES/PIAIC/2020/gatsby/hello-world/.cache/json/404-html.json")
}