/**
 * EmailsParaAlertas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

   tableName: 'emails_para_alertas',

   attributes: {

      nome: { type: 'string', columnName: 'nome' },
      email: { type: 'string', columnName: 'email', unique: true },
      tipo_politica_publica: { model: 'tiposPoliticasPublicas', columnName: 'id_tipo_politica_publica'}

   },

};

