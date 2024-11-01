import React from "react";
import { homepage, homesectiondescription } from "../../images";
import { Layout } from "../../../components";

const Home = () => {
  return (
    <div>
      <img src={homepage.src} className="mb-0" alt="" />
      <Layout>
        <div style={{ backgroundColor: "rgba(250, 250, 250, 0.85)" }}>
          <div className="p-10 flex flex-col lg:flex-row">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">
                ระบบล้างตู้แอร์รถยนต์ NWP
                เทคโนโลยีล้างแอร์รถยนต์แบบส่องกล้องที่ทันสมัยและปลอดภัยที่สุด
              </h1>
              <h1 className="text-2xl mt-3">ทำไมต้องระบบล้างแอร์รถยนต์ NWP</h1>
              <div className="border-t border-black mt-3"></div>
            </div>
            <img
              src={homesectiondescription.src}
              alt=""
              className="lg:ml-10 w-4/5 mx-auto lg:w-2/5 mt-5 lg:mt-0"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
