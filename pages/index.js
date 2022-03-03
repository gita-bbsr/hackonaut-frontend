import Image from "next/image";
import rocketPic from "../public/rocket.png";
import hero from "../public/hero.svg";
export default function Home() {
    return (
        <>
            <div className="text-center p-4">
                <h1 className="lg:text-9xl sm:text-7xl text-5xl font-extrabold">HACK'O'NOUT</h1>
                <div className="flex items-center justify-center space-x-2 ">
                    <p className="lg:text-4xl sm:text-2xl text-xl font-extrabold">DRIVE WITH INOVATION</p>
                    <span className="lg:w-24 w-8">
                        <Image src={rocketPic} />
                    </span>
                </div>
                <div className="my-20 mx-auto">
                    <Image src={hero} />
                </div>

                <div>
                    <p className="lg:text-6xl text-3xl text-justify font-extrabold">
                        The year 2022 is unlike any other; therefore, this edition of Hack‘O’naut should be unlike any others. Get out of your tight
                        denims and hoodies, hop into SOMETHING COMFY; let’s #BUILD-SOMETHING-NEW
                    </p>
                </div>
            </div>
        </>
    );
}
