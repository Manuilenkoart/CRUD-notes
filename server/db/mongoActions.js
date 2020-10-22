const createProduct = () => {
  const product = new Product({
    name: null,
  });

  product.save(function (err) {
    if (err) return console.log(err);
    console.log("Сохранен объект", product);
  });
};
