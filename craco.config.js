module.exports = {
  devServer: {
    proxy: {
      "/api/videosourceapi": {
        target: "https://api.wujinapi.me/api.php/provide/vod",
        changeOrigin: true,
        pathRewrite: {
          "^/api/videosourceapi": "",
        },
      },
    },
  },
};
