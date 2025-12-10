import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "../module.css/adminpage.module.css";
import { useContext } from "react";
import { DataContext } from "../pages/AdminProduct";

const ProductList = () => {
  const { producttabel } = useContext(DataContext);


   if (!producttabel || producttabel.length === 0)
 return <p>هیچ محصولی ثبت نشده است</p>;

  return (
    <>
      <div className={styles.tabel}>
        <table>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {producttabel.map((p, i) => (
              <tr key={p.id || i}>
                <td>{p.productname}</td>
                <td>{p.inventory}</td>
                <td>{p.price}</td>
                <td>{p.id}</td>
                <td>delet</td>
              </tr>
           ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
