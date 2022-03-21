import React from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function Index() {

  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
    </div>
  );
}
