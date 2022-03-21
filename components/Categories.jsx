import React from "react";

import { Form, Col } from "react-bootstrap";
import movieItem from "../public/movie.png";
import Image from "next/image";
import axios from "axios";

export default function Categories() {
  return (
    <div className="d-flex flex-column">
      <div className="search">
        <Form>
          <Form.Group className="mb-3" as={Col} controlId="username">
            <Form.Label className={`form-label`}>
              <p>Search</p>
            </Form.Label>
            <Form.Control size="lg" name="username" />
          </Form.Group>
        </Form>
      </div>
      <div className="categories">
        <div className="categories__box mb-5 col-12">
          <div className="form-label">Category Name</div>
          <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
            <div className="slider col-lg-3 col-md-5 col-sm-6 col-12">
              <Image src={movieItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
