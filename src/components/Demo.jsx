import React, { useEffect, useState } from "react";
import { productService } from "../services/productService";

const Demo = () => {
  //   const [dataPage, setDataPage] = useState([]);

  //   const getProducts = async (query) => {
  //     const res = await productService.getProducts(query);
  //     setDataPage(res.data.data.products);
  //   };

  //   const callApiHot = () => {
  //     getProducts("?featured=true");
  //   };

  //   const callApiTop = () => {
  //     getProducts("?topRated=true");
  //   };
  //   const callApiSale = () => {
  //     getProducts("?onSale=true");
  //   };

  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  const test = async () => {
    console.log("🚀1---->", 1);

    const promiseA = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("🚀2---->", 2);
        resolve(777);
      }, 2000);
    });
    const res = await promiseA;
    console.log("🚀3---->", 3);
  };
  test();

  return (
    <div className="demo">
      {/* <div className="tab">
        <button onClick={callApiHot}>Hot</button>
        <button onClick={callApiTop}>Toprate</button>
        <button onClick={callApiSale}>Sale</button>
      </div>
      <div className="content">
        {dataPage.map((item) => (
          <p key={item?.id}>{item?.name}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Demo;
