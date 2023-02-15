import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CardProduct from "../../components/CardProduct";
import { getJewelery } from "./jewelerySlice";

export default function Jewelery() {
  const { status, data } = useSelector((state) => state.jewelery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getJewelery());
    }
  }, [status, dispatch]);
  if (status === "loading") {
    return (
      <div class="row justify-content-center my-5">
        <div class="w-auto">
          <div class="text-center">
            <h4 class="fw-normal">Loading...</h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} md="6" lg="3">
            <CardProduct item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
