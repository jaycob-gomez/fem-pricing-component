import { useState } from "react";
import bgBottom from "./images/bg-bottom.svg";
import bgTop from "./images/bg-top.svg";

function App() {
  const [annually, setAnnually] = useState(false); //by default we want to show the monthly pricing
  return (
    <>
      <div className="absolute sm:top-0 sm:right-0 -z-10 background-image-top">
        <img src={bgTop} alt="" className="w-full max-w-full" />
      </div>
      <section className="p-5 items-center justify-center lg:h-screen ">
        <h1 className="text-center text-slate-500 mb-8 text-3xl mt-12">
          Our Pricing
        </h1>
        <div className="toggle lg:mb-10">
          <label className="name">Annually</label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />

          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>

          <label className="name">Monthly</label>
        </div>
        <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap mt-14">
          <article className="p-8 rounded-lg bg-white shadow lg:w-full">
            <h2 className="text-slate-500 text-xl mb-5">Basic</h2>
            {annually && (
              <h3 className="flex items-center text-slate-600 text-5xl justify-center">
                <span className="text-3xl mr-3">$</span>19.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center text-slate-600 text-5xl justify-center">
                {" "}
                <span className="text-3xl mr-3">$</span>199.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-500">
                500 GB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-500">
                2 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-500">
                Send up to 3 GB
              </li>
            </ul>
            <button className="bg-linear-gradient uppercase text-white py-3 w-full rounded-lg shadow cursor-pointer border-2 hover:border-2 btn tracking-widest ">
              Learn More
            </button>
          </article>

          <article className="bg-linear-gradient p-8 rounded-lg shadow lg:w-full lg:scale-110">
            <h2 className="text-xl mb-5 text-white">Professional</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-5xl text-white">
                {" "}
                <span className="text-3xl mr-3">$</span>24.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-5xl text-white">
                {" "}
                <span className="text-3xl mr-3">$</span>249.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-white text-white py-3">
                1 TB Storage
              </li>
              <li className="border-t border-white text-white py-3">
                5 Users Allowed
              </li>
              <li className="border-y border-white text-white py-3">
                Send up to 10 GB
              </li>
            </ul>
            <button className="bg-white uppercase text-slate-800 py-2 w-full rounded-lg shadow border-2 border-white cursor-pointer hover:bg-transparent hover:text-white duration-500 btn-2 tracking-widest ">
              Learn More
            </button>
          </article>

          <article className="p-8 rounded-lg bg-white shadow lg:w-full">
            <h2 className="text-slate-500 text-xl mb-5">Master</h2>
            {annually && (
              <h3 className="flex items-center text-slate-600 text-5xl justify-center">
                <span className="text-3xl mr-3">$</span>39.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center text-slate-600 text-5xl justify-center">
                {" "}
                <span className="text-3xl mr-3">$</span>399.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-500">
                2 TB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-500">
                10 Users Allowed
              </li>
              <li className="border-y border-slate-300 py-3 text-slate-500">
                Send up to 20 GB
              </li>
            </ul>
            <button className="bg-linear-gradient text-white py-3 w-full rounded-lg shadow cursor-pointer border-2 hover:border-2 btn uppercase tracking-widest ">
              Learn More
            </button>
          </article>
        </div>

        <div className="attribution mt-14">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Jaycob Gomez</a>.
        </div>
      </section>
      <div className="absolute left-0 bottom-0 -z-10 background-image-bottom">
        <img src={bgBottom} alt="" className="w-full max-w-full" />
      </div>
    </>
  );
}

export default App;
