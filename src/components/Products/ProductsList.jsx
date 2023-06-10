import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "../Products/ProductCard";
import ProductsPagination from "./ProductsPagination";

const ProductsList = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundImage:
            "url(http://risovach.ru/upload/2017/03/generator/ochen-zloy-king-krimson_140794445_orig_.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {products &&
          currentData().map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
      <div style={{width: '100%', height: '5vh', margin: '10px auto'}}>
        <ProductsPagination page={page} setPage={setPage} count={count} />
      </div>
    </div>
  );
};

export default ProductsList;
