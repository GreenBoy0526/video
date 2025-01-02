module.exports = {
  devServer: {
    proxy: {
      "/api/videosourceapi": {
        target: "http://localhost:3001/?url=https://api.wujinapi.me/api.php/provide/vod",
        changeOrigin: true,
        pathRewrite: {
          "^/api/videosourceapi": "",
        },
      },
    },
  },
};
