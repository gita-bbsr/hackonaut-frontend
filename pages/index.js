import Image from "next/image";
import rocketPic from "../public/rocket.png";
import hero from "../public/svg/hero.svg";
import friends from "../public/svg/friends.svg";
import rocketEntry from "../public/svg/rocket-entrie.svg";
import learn from "../public/svg/learn.svg";
import grow from "../public/svg/grow.svg";
import build from "../public/svg/build.svg";

import useSize from "../lib/hooks.js";

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

export default function Home() {
    const size = useSize();
    console.log(size);
    const featureMoblieList = check.map((obj) => <FeatureMoblie key={obj.id.toString()} valueObj={obj} />);
    const featureWebList = check.map((obj) => <FeatureWeb key={obj.id.toString()} valueObj={obj} />);
    return (
        <>
            <div className="h-32"></div>
            <main className="text-center p-4 overflow-hidden">
                <h1 className="lg:text-9xl sm:text-7xl text-5xl font-extrabold tracking-wider">HACK'O'NOUT</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p className="lg:text-5xl sm:text-2xl text-xl font-extrabold">DRIVE WITH INOVATION</p>
                    <span className="lg:w-auto w-8">
                        <Image src={rocketPic} />
                    </span>
                </div>
                <div className="mx-auto max-w-7xl lg:scale-125 md:scale-100 scale-110">
                    <Image src={hero} />
                </div>

                <div>
                    <h2 className="lg:text-6xl text-3xl text-justify font-extrabold my-10">
                        The year 2022 is unlike any other; therefore, this edition of Hack‘O’naut should be unlike any others. Get out of your tight
                        denims and hoodies, hop into SOMETHING COMFY; let’s #BUILD-SOMETHING-NEW
                    </h2>
                </div>
                {/* feature */}
                <div className="lg:block flex flex-col space-y-8">{size.width < 1024 ? featureMoblieList : featureWebList}</div>
            </main>
        </>
    );
}

function FeatureMoblie(props) {
    const value = props.valueObj;
    return (
        <div className="text-center">
            <div className="w-72 md:w-96 mx-auto">
                <Image src={value.img} />
            </div>
            <div>
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className="font-extrabold mx-auto mt-4 text-justify sm:px-20">{value.main}</p>
            </div>
        </div>
    );
}

function FeatureWeb(props) {
    const value = props.valueObj;
    const leftComponent = (
        <div className="text-left grid grid-cols-2 gap-4">
            <div>
                <Image src={value.img} />
            </div>
            <div>
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className=" text-3xl font-extrabold mx-auto mt-4 text-justify ">{value.main}</p>
            </div>
        </div>
    );
    const rightComponent = (
        <div className="text-left grid grid-cols-2 gap-4">
            <div>
                <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
                <p className=" text-3xl font-extrabold mx-auto mt-4 text-justify ">{value.main}</p>
            </div>
            <div>
                <Image src={value.img} />
            </div>
        </div>
    );
    return value.id % 2 == 0 ? rightComponent : leftComponent;
}
