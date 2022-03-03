import Image from "next/image";
import rocketPic from "../public/rocket.png";
import hero from "../public/svg-file/hero.svg";
import friends from "../public/svg-file/friends.svg";
import rocketEntry from "../public/svg-file/rocket-entrie.svg";
import learn from "../public/svg-file/learn.svg";

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
];

export default function Home() {
    const featureList = check.map((obj) => <Feature key={obj.id.toString()} valueObj={obj} />);
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
                    <h2 className="lg:text-6xl text-3xl text-justify font-extrabold">
                        The year 2022 is unlike any other; therefore, this edition of Hack‘O’naut should be unlike any others. Get out of your tight
                        denims and hoodies, hop into SOMETHING COMFY; let’s #BUILD-SOMETHING-NEW
                    </h2>
                </div>
                {/* feature */}
                <div className="text-center ">{featureList}</div>
            </main>
        </>
    );
}

function Feature(props) {
    const value = props.valueObj;
    return (
        <div>
            <div className="md:w-auto w-80 mx-auto">
                <Image src={value.img} />
            </div>
            <h2 className="lg:text-6xl text-3xl font-extrabold">{value.head}</h2>
            <p className="font-extrabold">{value.main}</p>
        </div>
    );
}
