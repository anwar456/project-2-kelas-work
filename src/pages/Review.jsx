import React from "react";
import { Container } from "reactstrap";
import CardReview from "../components/CardReview";
import Layout from "../Layout";

export default function Review() {
  return (
    <Layout>
      <Container className="height-list-product">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                Review <span className="text-primary"> Client's</span>
              </h2>
            </div>
          </div>
        </div>
        <CardReview />
      </Container>
    </Layout>
  );
}
