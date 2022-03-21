import React, { useState, useEffect } from "react";

import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";

import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/owl.carousel";
import Script from "next/script";

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Categories() {
  const [movie, setMovie] = useState({
    movies: [],
  });

  const [search, setSearch] = useState({
    item: "",
  });

  function initialiseMovies() {
    axios({
      method: "get",
      url: `https://www.omdbapi.com/?apikey=b6069a22&s=ant`,
    })
      .then((result) => {
        setMovie({
          movies: result.data.Search,
        });
        //   const movieRes = result.data.Search;
        console.log(movie.movies);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    initialiseMovies();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearch((prevval) => ({
      ...prevval,
      [name]: value,
    }));

    console.log(search.item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `https://www.omdbapi.com/?apikey=b6069a22&s=${search.item}`,
    })
      .then((result) => {
        setMovie({
          movies: result.data.Search,
        });
        // console.log(result.data);
      })
      .catch((error) => console.error(error));
  };

  const Responsive = {
    0: {
      items: 1.2,
      margin: 5,
    },
    1200: {
      items: 3.5,
      margin: 5,
    },
  };
  return (
    <div className="d-flex flex-column">
      <Script type="text/javascript" src="owl.carousel/dist/owl.carousel" />
      <div className="search">
        <Form>
          <Form.Group className="mb-3" as={Col} controlId="username">
            <Form.Label className={`form-label`}>
              <p>Search</p>
            </Form.Label>
            <Form.Control
              size="lg"
              name="item"
              value={search.item}
              onChange={handleChange}
            />
          </Form.Group>
          <Button onClick={handleSubmit}>Search</Button>
        </Form>
      </div>
      <div className="categories">
        <div className="categories__box mb-5 col-12">
          <div className="form-label">Category Name</div>
          <OwlCarousel
            loop
            nav={false}
            responsive={Responsive}
            dots={false}
            autoplayTimeout={2000}
            autoplaySpeed={2000}
          >
            {movie.movies.map((ans, i) => {
              return (
                <div
                  key={i}
                  className="d-flex align-items-center justify-content-center slider movie-poster mb-4 me-4"
                >
                  <p>{ans.Title}</p>
                </div>
              );
            })}
          </OwlCarousel>
          {/*

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
          */}
        </div>
      </div>
    </div>
  );
}
