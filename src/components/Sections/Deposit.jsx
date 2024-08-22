import Container from "../Layout/Container";
import DepositImage from "../../assets/images/smartcontract.png";

const Deposit = () => {
  return (
    <Container>
      {/*
      <h1 className="bg-gradient-one bg-cover bg-clip-text pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
        Open Development
      </h1>
      */}
      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="bg-gradient-two bg-cover bg-clip-text pb-1 text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
            EVM Compatible
          </h1>
          <p className="max-w-xl text-center md:text-left">
            DAILY Network and apps that can be developed on the network are transparent and open source.
            You can fork code and re-use functionality others have already built as it's completely EVM 
            Compatible. Allowing you to use existing services for smart contact development
          </p>
        </div>
        <div className="max-w-lg">
          <img src={DepositImage} alt="image of a crypto coin chart" />
        </div>
      </div>
    </Container>
  );
};

export default Deposit;
