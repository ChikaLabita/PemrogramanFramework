import React from "react";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ita from "../../assets/ita.webp";

const About = () => {
  return (
    <>
      <Row>
        <Col className="text-left">
          <h3>About Me</h3>
          <Row>
            <Col md={4}>
              <Image src={ita} className="img-thumbnail w-100" />
            </Col>
            <Col md={8} className="text-start">
              <ListGroup>
                <ListGroupItem>
                  <p className="fw-bold m-0">NIM</p>
                  <p className="m-0">1941720018</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Nama</p>
                  <p className="m-0">Chika Labita</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Tempat, Tanggal Lahir</p>
                  <p className="m-0">Tasikmalaya, 12 January 2000</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Jurusan</p>
                  <p className="m-0">D-IV Teknik Informatika</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Angkatan</p>
                  <p className="m-0">2019</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
