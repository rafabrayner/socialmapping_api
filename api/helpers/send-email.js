'use strict';
const nodemailer = require('nodemailer');
require('dotenv').load();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
   host: '74.125.28.108', // Usa-se o IP, pois estava tendo problema com o DNS para resolver a URL
   port: 465,
   secure: true, // use TLS,
   auth: {
      user: process.env.EMAIL_ACCOUNT,
      pass: process.env.EMAIL_PASSWORD
   },
   tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
   }
});

module.exports = {


   friendlyName: 'Send Email helper',


   description: "It's send email based to the id_tipo_politica_publica",


   inputs: {

      id_tipo_politica_publica: {
         type: 'number',
         example: 1,
         description: 'Integer for the ID of tipo_politica_publica',
         required: true
      },
      id_tipo_alerta: {
         type: 'number',
         example: 1,
         description: 'Integer for the ID of tipo_alerta',
         required: true
      },
      message: {
         type: 'string',
         example: 'Meu bairro tem muita violência',
         description: 'It is the complement for the alert message',
         required: true
      }
   },


   exits: {

   },


   fn: async function (inputs, exits) {

      let to_address = ``;
      let addresses = await EmailsParaAlertas.find().where({tipo_politica_publica: inputs.id_tipo_politica_publica});
      let tipo_alerta = await TiposAlertas.findOne({id: inputs.id_tipo_alerta});

      // Emails de destino
      for (let i = 0; i < addresses.length; i++) {
         let address = addresses[i];
         to_address += `"${address["nome"]}" <${address["email"]}>, `;
      }

      // setup email data with unicode symbols
      let mailOptions = {
         from: `"Focaqui" <${process.env.EMAIL_ACCOUNT}>`, // sender address
         to: to_address, // list of receivers
         subject: tipo_alerta.nome, // Subject line
         text:  inputs.message// plain text body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            return Promise.reject(error);
         } else {
            return exits.success();
         }
      });
   }


};

