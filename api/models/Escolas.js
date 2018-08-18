/**
 * Escolas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'escolas',

  attributes: {

    nome : { type: 'string', columnName: 'nome' },
    dependencia_administrativa : { type: 'string', columnName: 'dependencia_administrativa' },
    localizacao : { type: 'string', columnName: 'localizacao' },
    endereco : { type: 'string', columnName: 'endereco' },
    bairro : { columnName: 'id_bairro', model: 'bairros' },
    matriculas : { type: 'number', columnName: 'matriculas' },
    matriculas_tempo_integral : { type: 'number', columnName: 'matriculas_tempo_integral' },
    turmas : { type: 'number', columnName: 'turmas' },
    turnos_funcionamentos : { type: 'number', columnName: 'turnos_funcionamentos' },
    salas_de_aulas : { type: 'number', columnName: 'salas_de_aulas' },
    total_docentes : { type: 'number', columnName: 'total_docentes' },
    total_monitores_libras : { type: 'number', columnName: 'total_monitores_libras' },
    total_funcionarios : { type: 'number', columnName: 'total_funcionarios' },
    modalidades : { type: 'string', columnName: 'modalidades' },
    latitude : { type: 'number', columnName: 'latitude', allowNull: true },
    longitude: { type: 'number', columnName: 'longitude', allowNull: true }

  },

};

