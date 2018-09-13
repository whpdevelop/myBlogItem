
const express = require("express")
const Router = express.Router()
const {showIndex} = require('../../controls/home/index')

module.exports = Router

Router.get('/',showIndex)