const Pagination = (req, max, div) => {
  const page = parseInt(req.query.page);
  // const limit = parseInt(req.query.limit);
  const limit = Math.floor(max / div);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
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
