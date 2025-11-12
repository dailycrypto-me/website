import { mergeClasses } from "../../lib/utils";

import Container from "../Layout/Container";
import Button from "../ui/Button";
import PlayStoreLogo from "../../assets/images/play-store.svg";
import AppleLogo from "../../assets/images/apple.svg";
import AppImage from "../../assets/images/download-app.png";
import Logo from "../../assets/images/daily.png";

const DownloadApp = () => {
  return (
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative flex justify-center md:order-last">
          {/*
          <p
            className={mergeClasses(
              "absolute left-8 top-16 rounded-[2.5rem] border-2 border-app-100/80 px-3 py-1 text-sm text-app-50/80 md:-left-4 md:top-2 lg:left-2 lg:top-6 xl:top-12",
            )}
          >
            Scan QR Code
          </p>
          */}
          <img src={Logo} className="xl:max-w-xl" alt="download app" />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 lg:pl-6">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
            <h1 className="bg-gradient-two bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-4xl">
              Storing Daily
            </h1>
            <p className="max-w-lg text-center md:text-left xl:max-w-xl">
              We have an easy to use Browser wallet - No need to install any 
              browser extensions or any other advanced software , It’s just 
              like plug and play , or you can say open the browser - type 
              your website address for the wallet and - press enter to use 
              it, as easy as 1 - 2 - 3. (You’ll just need to create and save 
              your memorable key / download your private key and store it 
              securely or upload your private key or type in the memorable 
              key to log in).

            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            {/*
            <Button href="/" className="min-w-[170px]">
              <img src={PlayStoreLogo} width={24} height={24} alt="" />{" "}
              <p>Google Play</p>
            </Button>
            <Button href="/" className="min-w-[170px]">
              <img src={AppleLogo} width={24} height={24} alt="" />{" "}
              <p>App Store</p>
            </Button>
            */}
            <Button href="https://wallet.dailycrypto.net/" className="min-w-[170px]" target="_blank">
              {/*<img src={Logo} width={24} height={24} alt="" />{" "}*/}
              <p>Go to Webwallet</p>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DownloadApp;
