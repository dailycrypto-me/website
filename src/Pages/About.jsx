import { useEffect } from "react";

import Container from "../components/Layout/Container";
import AboutImage from "../assets/images/daily_words.png";
import MissionImage from "../assets/images/mission.jpg";
import { Missions } from "../data/data";

const About = () => {
  useEffect(() => {
    document.title = "About | Daily";
  });

  return (
    <main>
      <Container>
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-one bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
              About Us
            </h1>
            <p className="text-center">
              Welcome to Daily
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center md:order-last">
              <img src={AboutImage} alt="about us" className="rounded-xl" height="250" width="250"/>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="bg-gradient-two bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl">
                A little about us
              </h1>
              <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="max-w-lg text-center md:max-w-2xl md:text-left">
                DAILY is the community-run technology powering the cryptocurrency DAILY (DLY) and millions of decentralized applications that can be developed and run on our network. We are backward compatible to EVM based DAPPS and Tokens (DRC). Based on a Quantum resilient network using DAG having Proof of stake concept and the latest dedicated security BLS IBFT 2.0 network for financial transactions and DAPP’s, we pride ourselves to be the best in the industry. A network that never sleeps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-2">
            <h1 className="bg-gradient-one bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
              Our Mission
            </h1>
            <p className="text-center md:max-w-md">
              What we stand for
            </p>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={MissionImage}
                alt="our mission"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              {Missions.map((mission, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 md:items-start"
                >
                  <h3 className="text-center text-lg font-medium text-app-100 md:text-left">
                    {mission.title}
                  </h3>
                  <p className="max-w-lg text-center md:text-left">
                    {mission.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default About;
