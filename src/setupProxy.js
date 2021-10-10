const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/giphy",
    createProxyMiddleware({
      target: "https://www.metaweather.com/api",
      changeOrigin: true,
    }),
  );
  app.use(
    "/ip",
    createProxyMiddleware({
      target: "https://extreme-ip-lookup.com/json",
      changeOrigin: true,
    }),
  );
};


