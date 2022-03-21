import React from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
// Here is your key: b6069a22
export default function Index() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
    </div>
  );
}
