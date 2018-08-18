/**
 * EscolasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

   getAll: async function(req, res) {

      try {
         let escolas = await Escolas.find();

         return res.send({escolas: escolas});
      } catch(error) {
         console.log(error)
         return res.status(500).send('Error no servidor');
      }
   }

};

