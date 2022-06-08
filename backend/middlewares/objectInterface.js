/**
 * Essa função irá retornar um modelo padrão de objeto
 * com finalidade de padronizar os retornos da api ao fazer uma requisição
 * 
 * 
 * @param   {pagination} pagination   Esse parametro irá receber um objeto com dois estados, previousPage e nextPage deverá ser o retorno da função "Pagination"
 * @param   {data} data   Esse parâmetro irá receber o objeto data vindo do banco de dados
 * @param   {uniq} uniq   Esse parâmetro booleano irá definir se o retorno é para vários objetos (models) ou apenas um objeto (model)
 * 
 * Essa função retorna o seguinte objeto abaixo:
 * @example
 * "nextPage": 1,
    "maxPages": 1,
    "page": 0,
    "models": {
        "data": []
      }
 */
const ObjectInterface = (pagination, data, uniq) => {
  const { previousPage, nextPage } = pagination;
  let modelsReturn = {
    ...previousPage,
    ...nextPage,
    models: {
      data: data,
    },
  };
  let modelReturn = {
    ...previousPage,
    ...nextPage,
    model: {
      data: data,
    },
  };
  if (uniq === true) {
    return modelReturn;
  }
  return modelsReturn;
};

module.exports = ObjectInterface;
