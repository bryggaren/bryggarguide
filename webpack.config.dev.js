'use strict';

const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');

baseConfig.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000
};

module.exports = baseConfig;
