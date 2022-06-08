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
