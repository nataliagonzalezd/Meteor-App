import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ProductsCollection } from "../../api/ProductsCollection.js";
import { Product } from "../components/Product.jsx";

const ProductsView = () => {
  const { products, isLoading } = useTracker(() => {
    const handle = Meteor.subscribe("products");
    const isLoading = !handle.ready();
    const products = ProductsCollection.find().fetch();

    return { isLoading, products };
  });

  return (
    <>
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Products</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {isLoading ? (
              <div>Loading products...</div>
            ) : (
              <div className="row">
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsView;
