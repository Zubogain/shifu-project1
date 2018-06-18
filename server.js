const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = 8080;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.devServer.publicPath
}));

app.listen(port, function () {
    console.log(`Example app listening on port ${port}\n`);
});