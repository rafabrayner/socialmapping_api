/**
 * Bairros.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'bairros',

  attributes: {

    nome : { type: 'string', columnName: 'nome' },

    // Add a reference to Escolas
    escolas: {
      collection: 'escolas',
      via: 'bairro'
    }

  },

};

