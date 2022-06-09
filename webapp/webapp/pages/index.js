import Head from "next/head";
import Image from "next/image";

import Navbar  from "../components/navbar/Navbar";
import Example from "../components/navbar/a";

import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'
import React, { useState } from "react";


const SLIDE_COUNT = 5;
// const slides = ;


export default function Home() {
 
  return (
    <>
      <Example />
      <EmblaCarousel slides={Array.from(Array(SLIDE_COUNT).keys())} />
    </>
  );
}
