import Image from "next/image";
import Link from "next/link";

import useSize from "../lib/hooks.js";
import Head from "../components/Head.js";
import About from "../components/About.js";
import Topic from "../components/Topic.js";
import Schedules from "../components/Schedules.js";
import Team from "../components/Team.js";
import Sponsors from "../components/Sponsors.js";
import Prices from "../components/Prices.js";
import FAQ from "../components/FAQ.js";

import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head />
      <About />
      <Topic />
      {/* <Schedules /> */}
      <Team />
      <Sponsors />
      <Prices />
      <FAQ />
    </>
  );
}
