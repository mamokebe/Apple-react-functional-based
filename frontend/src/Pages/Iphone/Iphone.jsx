import React, { useEffect, useState } from "react";
import "./Iphone.css";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [data, setData] = useState([]);

  const baseURL = import.meta.env.VITE_BASE_URL;
  console.log(baseURL);

  //fetch data from backend function
  const fetchData = async () => {
    const url = `${baseURL}/get-product`;
    try {
      let res = await fetch(url);
      // console.log(res);
      let data = await res.json();
      // console.log(data);
      setData(data.products);
    } catch (error) {
      console.log("Error: unable to fetch!!");
    }
    // await fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const products = data.products;
    //     setData(products);
    //   })
    // .catch(() => console.log("Error: unable to fetch!!"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wrapper font-weight-bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {data?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            // let productPage = "get-product/" + product.product_id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`${product.product_id}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;
