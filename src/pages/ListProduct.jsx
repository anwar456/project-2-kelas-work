import React, { useState } from "react";
import { Container } from "reactstrap";
import Tabs from "../components/Tabs";
import Electronic from "../features/electronic/Electronic";
import Jewelery from "../features/jewerely/Jewelery";
import Men from "../features/men/Men";
import Product from "../features/product/Product";
import Women from "../features/women/Women";
import Layout from "../Layout";

export default function ListProduct() {
  const [tab, setTab] = useState(0);
  return (
    <Layout>
      <Container className="height-list-product">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                List <span className="text-primary"> Product</span>
              </h2>
            </div>
          </div>
        </div>
        <Tabs tab={tab} setTab={setTab} />
        {tab === 0 && <Product />}
        {tab === 1 && <Men />}
        {tab === 2 && <Jewelery />}
        {tab === 3 && <Electronic />}
        {tab === 4 && <Women />}
      </Container>
    </Layout>
  );
}
