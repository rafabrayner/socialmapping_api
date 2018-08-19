/**
 * Alertas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

   tableName: 'alertas',

   attributes: {
      cpf: { type: 'string', columnName: 'cpf' },
      descricao: { type: 'string', columnName: 'descricao' },
      tipo_alerta: { model: 'tiposAlertas' },
      tipo_politica_publica: { model: 'tiposPoliticasPublicas' },
      createdAt: { type: 'ref', columnName: 'createdAt' }
   },
};

