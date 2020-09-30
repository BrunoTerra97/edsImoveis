exports.up = function (knex) {
  return knex.schema.createTable('imoveis', function (table) {
    table.string('id').primary();
    table.string('tipoImovel');
    table.string('quartos');
    table.string('suites');
    table.string('salasEstar');
    table.string('salasJantar');
    table.string('area');
    table.string('vagas');
    table.string('bairro');
    table.string('armario');
    table.string('andar');
    table.string('valorCondominio');
    table.string('portaria');
    table.string('descricao');
    table.string('aluguel');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('imoveis');
};
