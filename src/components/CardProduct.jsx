import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export default function CardProduct({ item }) {
  return (
    <Card className="container-product mb-2">
      <div className="container-image">
        <img alt="Sample" width="100" src={item.image} />
      </div>
      <CardBody>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardText>$ {item.price}</CardText>
        <Button color="primary">Buy Now</Button>
      </CardBody>
    </Card>
  );
}
