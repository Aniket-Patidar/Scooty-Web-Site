import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <>
        <div
          id="about"
          className=" flex items-center justify-center md:flex-row flex-col dark:bg-black dark:text-white overflow-hidden mt-16"
        >
          <div className="max-w-7xl ">
            <div className="  pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-1" />
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold dark:text-white text-black sm:text-3xl md:text-4xl">
                    About me
                  </h2>
                  <p className="">
                    Donec porttitor, enim ut dapibus lobortis, lectus sem
                    tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus
                    diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel
                    viverra lorem volutpat sodales. In ornare porttitor odio sit
                    amet laoreet. Sed laoreet, nulla a posuere ultrices, purus
                    nulla tristique turpis, hendrerit rutrum augue quam ut est.
                    Fusce malesuada posuere libero, vitae dapibus eros facilisis
                    euismod. Sed sed lobortis justo, ut tincidunt velit. Mauris
                    in maximus eros.
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="">
            <img
              className="w-[340px] md:w-[400px] md:h-[300px] rounded-lg"
              src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
