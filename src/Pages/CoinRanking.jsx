import { useEffect } from "react";

import Container from "../components/Layout/Container";
import Faq from "../components/Sections/Faq";
import AboutImage from "../assets/images/about.jpg";
import MissionImage from "../assets/images/mission.jpg";
import { Missions } from "../data/data";

import MarketUpdate from "../components/Sections/MarketUpdate";

const CoinRanking = () => {
  useEffect(() => {
    document.title = "Coin Ranking | Daily";
  });

  return (
    <main>
      <MarketUpdate/>
      {/*
      <Container>
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-one bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
              About Us
            </h1>
            <p className="text-center">
              Want to know more about us? <br />
              Here you have it
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center md:order-last">
              <img src={AboutImage} alt="about us" className="rounded-xl" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="bg-gradient-two bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl">
                Founding and early days
              </h1>
              <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="max-w-lg text-center md:max-w-2xl md:text-left">
                  Daily was founded in 2010 by four people, two of them are
                  crypto-enthusiasts and the other two are software developer.
                </p>
                <p className="max-w-lg text-center md:max-w-2xl md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis consectetur, a tempora earum aliquid.
                </p>
                <p className="max-w-lg text-center md:max-w-2xl md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis consectetur, a tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      */}
    </main>
  );
};

export default CoinRanking;
