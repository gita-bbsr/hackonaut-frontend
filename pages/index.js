import Image from "next/image";
import Link from "next/link";
import rocketPic from "../public/rocket.png";
import msg from "../public/msg.png";
import idea from "../public/idea.png";
import write from "../public/write.png";

import hero from "../public/svg/hero.svg";
import friends from "../public/svg/friends.svg";
import rocketEntry from "../public/svg/rocket-entrie.svg";
import learn from "../public/svg/learn.svg";
import grow from "../public/svg/grow.svg";
import build from "../public/svg/build.svg";

import useSize from "../lib/hooks.js";

import { motion } from "framer-motion";
const check = [
    {
        id: 1,
        head: "Everyone is welcome",
        main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda dolorem voluptatibus in iusto suscipit deserunt delectus consectetur beatae, iure perferendis, maiores enim. In, eum corrupti? Magnam architecto tempora illum.",
        img: rocketEntry,
    },
    {
        id: 2,
        head: "Make New Friends",
        main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda dolorem voluptatibus in iusto suscipit deserunt delectus consectetur beatae, iure perferendis, maiores enim. In, eum corrupti? Magnam architecto tempora illum.",
        img: friends,
    },
    {
        id: 3,
        head: "Learn",
        main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda dolorem voluptatibus in iusto suscipit deserunt delectus consectetur beatae, iure perferendis, maiores enim. In, eum corrupti? Magnam architecto tempora illum.",
        img: learn,
    },
    {
        id: 4,
        head: "Build",
        main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda dolorem voluptatibus in iusto suscipit deserunt delectus consectetur beatae, iure perferendis, maiores enim. In, eum corrupti? Magnam architecto tempora illum.",
        img: build,
    },
    {
        id: 5,
        head: "Grow",
        main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda dolorem voluptatibus in iusto suscipit deserunt delectus consectetur beatae, iure perferendis, maiores enim. In, eum corrupti? Magnam architecto tempora illum.",
        img: grow,
    },
];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    const size = useSize();
    console.log(size);
    const featureMoblieList = check.map((obj) => <FeatureMoblie key={obj.id.toString()} valueObj={obj} />);
    const featureWebList = check.map((obj) => <FeatureWeb key={obj.id.toString()} valueObj={obj} />);
    return (
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <div className="container mx-auto align-middle p-10">
                <Link href="register">
                    <a className="font-extrabold text-xl">Register</a>
                </Link>
            </div>
            <motion.div variants={stagger}>
                <section className="container mx-auto text-center p-4 overflow-hidden">
                    <h1 className="lg:text-9xl sm:text-7xl text-5xl font-extrabold tracking-wider">HACK‘O’NOUT</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p className="lg:text-5xl sm:text-2xl text-xl font-extrabold">DRIVE WITH INOVATION</p>
                        <motion.span
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            exit={{ y: 60, opacity: 0 }}
                            className="lg:w-auto w-8"
                        >
                            <Image src={rocketPic} alt="rocket.png" />
                        </motion.span>
                    </div>
                    <div className="mx-auto max-w-7xl relative">
                        <motion.span
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 50, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            exit={{ y: 0, opacity: 0 }}
                            className="absolute left-0 top-[10%] xl:w-40 xl:h-40 sm:w-20 sm:h-20 w-10 h-10"
                        >
                            <Image src={msg} alt="msg" />
                        </motion.span>
                        <motion.span
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 50, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            exit={{ y: 0, opacity: 0 }}
                            className="absolute left-[9%] top-[18%] xl:w-40 xl:h-40 sm:w-20 sm:h-20 w-10 h-10"
                        >
                            <Image src={idea} alt="idea" />
                        </motion.span>
                        <motion.span
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 50, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            exit={{ y: 0, opacity: 0 }}
                            className="absolute right-0 top-[12%] xl:w-40 xl:h-40 sm:w-20 sm:h-20 w-10 h-10"
                        >
                            <Image src={write} alt="write" />
                        </motion.span>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} exit={{ opacity: 0 }}>
                            <Image src={hero} alt="hero-img" />
                        </motion.span>
                    </div>

                    <div>
                        <h2 className="lg:text-6xl text-3xl text-justify font-extrabold my-10">
                            The year 2022 is unlike any other; therefore, this edition of Hack‘O’naut should be unlike any others. Get out of your
                            tight denims and hoodies, hop into SOMETHING COMFY; let’s #BUILD-SOMETHING-NEW
                        </h2>
                    </div>
                </section>
            </motion.div>
            {/* feature */}
            <section className="relative">
                <div className="container mx-auto z-20">
                    <div className="lg:block flex flex-col space-y-8">{size.width < 1024 ? featureMoblieList : featureWebList}</div>
                </div>
                <div id="background" className="absolute top-0 right-0 bg-blue-200 w-1/2 h-full -z-10 lg:visible invisible"></div>
            </section>
        </motion.div>
    );
}

function FeatureMoblie(props) {
    const value = props.valueObj;
    return (
        <div className="text-center">
            <div className="w-72 md:w-96 mx-auto">
                <Image src={value.img} alt={value.head} />
            </div>
            <div className="p-5">
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className="font-extrabold mx-auto mt-4 text-justify sm:px-20">{value.main}</p>
            </div>
        </div>
    );
}

function FeatureWeb(props) {
    const value = props.valueObj;
    const leftComponent = (
        <div className="text-left grid grid-cols-2 gap-4 ">
            <div>
                <Image src={value.img} alt={value.head} />
            </div>
            <div>
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className=" text-3xl font-extrabold mx-auto mt-4 text-justify ">{value.main}</p>
            </div>
        </div>
    );
    const rightComponent = (
        <div className="text-left grid grid-cols-2 gap-4">
            <div className="">
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className=" text-3xl font-extrabold mx-auto mt-4 text-justify ">{value.main}</p>
            </div>
            <div>
                <Image src={value.img} alt={value.head} />
            </div>
        </div>
    );
    return value.id % 2 == 0 ? rightComponent : leftComponent;
}
