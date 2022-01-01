import Link from "next/link";

export default function registor() {
  return (
    <>
      <section id="registor" className="h-full w-full">
        <div className="grid grid-cols-2  h-full">
          <div className="col-span-1 bg-blue-300">{/* Art */}</div>
          <div className="col-span-1 bg-green-500 flex justify-center items-center w-full">
            <div className="w-full ">
              <form className="max-w-sm mx-auto">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" id="email" placeholder="Enter Email to Register Free" className="w-full p-2 my-2" /> <br />
                <button className="w-full p-2 bg-purple-700">Submit</button>
                <Link href="/about">
                  <a>Learn on Hack'O'naut</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <h1>registor</h1>
      </section>
    </>
  );
}
