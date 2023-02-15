import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import picOne from "../img/pic-1.png";
import picTwo from "../img/pic-2.png";
import picThree from "../img/pic-3.png";
import picFour from "../img/pic-4.png";
import picFive from "../img/pic-5.png";
import picSix from "../img/pic-6.png";
import startPlus from "../img/start-plus.png";
import startMin from "../img/start-min.png";

export default function CardReview() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picOne}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picTwo}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startMin} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picThree}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startMin} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picFour}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startMin} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picFive}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="container-product mb-2">
            <div className="container-image">
              <img
                alt="Sample"
                width="100"
                src={picSix}
                className="img-borderradius"
              />
            </div>
            <CardBody>
              <CardText className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                et minus in vitae ducimus ad porro praesentium nemo officia
                laborum!
              </CardText>
              <CardTitle tag="h5" className="text-center">
                John Doe
              </CardTitle>
              <div className="start-review d-flex justify-content-center align-items-center">
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startPlus} alt="" />
                <img src={startMin} alt="" />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
