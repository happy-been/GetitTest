export const getProducts = (req, res) => {
  const { category, sort } = req.query;
  res.json({
    message: "Product List",
    filters: { category, sort },
  });
};

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({
    message: "Product Created",
    data: { name, price },
  });
};
