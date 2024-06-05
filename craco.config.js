module.exports = {
  devServer: {
    proxy: {
      "/api/feisuzyapi": {
        target: "https://www.feisuzyapi.com/api.php/provide/vod",
        changeOrigin: true,
        pathRewrite: {
          "^/api/feisuzyapi": "",
        },
      },
    },
  },
};
