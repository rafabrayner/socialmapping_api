/**
 * AlertasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

   send: async function(req, res) {

      try {
         
         await sails.helpers.sendEmail.with(req.body);

         return res.send({message: 'Seu alerta foi emitido com sucesso!'});

      } catch(error) {
         console.log(error)
         return res.status(500).send('Desculpe, mas não foi possível enviar o alerta!');
      }
   }

};

