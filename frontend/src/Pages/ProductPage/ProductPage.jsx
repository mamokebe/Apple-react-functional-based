import { useEffect, useState } from "react";
import "./ProductPage.css";
import Four04 from "../Four04/Four04";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { productID } = useParams();
  // console.log(productID);
  const baseURL = import.meta.env.VITE_BASE_URL;
  //fetch data from backend function
  const fetchData = async () => {
    const url = `${baseURL}/get-product/${productID}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        setProducts(productList);
        console.log(productList);
        // const singleProduct = productList.filter(
        //   (product) => product.product_id == productID
        // );
        // setProducts(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  };

  useEffect(() => {
    fetchData();
  }, [productID]);

  // console.log(products);
  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {products?.map((product) => {
              let id = product.product_id;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              // let productPage = "get-product/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5">
                      <div className="title-wrapper font-weight-bold">
                        {title}
                      </div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="product-image">
                        <img src={img} alt="product" />
                      </div>
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
  } else {
    return <Four04 />;
  }
};

export default ProductPage;
