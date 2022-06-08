/**
 * Essa função irá retornar um modelo padrão de paginação
 * 
 * @param   {req} req   Esse parametro irá receber o requirement
 * @param   {max} max   Esse parâmetro (type: number) irá receber o tamanho do banco de dados da requisição
 * @param   {div} div   Esse parâmetro (type: number) irá definir quantos dados queremos ter por página
 * 
 * Essa função retorna os seguintes dados abaixo:
 * @example
 * "nextPage": 1,
    "maxPages": 1,
    "page": 0,
 */

const Pagination = (req, max, div) => {
  // busca em qual page a requisição foi feita
  const page = parseInt(req.query.page);

  // determina um limite de páginas pegando a quantidade máxima de objetos e a permitida por página, exemplo 30(objetos)/15(maximo por página) = 2 paginas
  const limit = Math.floor(max / div);

  // determina como máximo de paginas -1 para padronizar a pagina 0
  const startIndex = (page - 1) * limit;
  const pagination = {};
  if (limit < max) {
    if (page === limit || page > limit) {
      pagination.nextPage = {
        nextPage: null,
        maxPages: Math.floor(max / div),
        page: page,
      };
    } else {
      pagination.nextPage = {
        nextPage: page + 1,
        maxPages: Math.floor(max / div),
        page: page,
      };
    }
  }
  if (startIndex > 0) {
    pagination.previousPage = {
      previousPage: page - 1,
      nextPage: page + 1,
      maxPages: Math.floor(max / div),
      page: page,
    };
  }
  return pagination;
};

module.exports = Pagination;
