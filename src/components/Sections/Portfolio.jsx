import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "../Layout/Container";
import AppMockup from "../../assets/images/nft2.png";
import GradientButton from "../ui/GradientButton";
import Modal from "../Modal/Modal";
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <img src={AppMockup} alt="app mockup" width="50%" height="50%"/>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
          <h1 className="bg-gradient-two bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
            NFTs
          </h1>
          <p className="max-w-xl text-center md:text-left">
          DAILY isn't just for digital money. Anything you own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your images / artwork and get royalties automatically every time it's re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time and are endless.
          </p>
          <GradientButton className="max-w-44" onClick={() => navigate('/about')}>
            Get Started
          </GradientButton>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            onClick={handleModal}
            handleClose={handleModal}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Portfolio;
