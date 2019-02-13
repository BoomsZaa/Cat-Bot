/**
 * @author Pamontep Panya
 * @email pamontep.p@gmail.com
 * @create date 2018-06-01 01:07:04
 * @modify date 2018-06-01 01:07:04
 * @desc This file used to be a Main file of NodeJS API
*/
const moment = require('moment');
const server = require('express');
const path = require('path');
const PORT = process.env.PORT || 9999;
const request = require('request');
const bodyParser = require('body-parser');
const status = require('../nodejs-express-api-init/src/classes/Status');

server()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Hi there! This is a nodejs-express-api-init running on PORT: ${ PORT }`))
    .post('/webhook', function (req, res) {
        let replyToken = req.body.events[0].replyToken;
        let msg = req.body.events[0].message.text;
        
        console.log(`Message token : ${ replyToken }`);
        console.log(`Message from chat : ${ msg }`);

        res.json({
            status: 200,
            message: `Webhook is working!`
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
