import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ShieldHalf,
  BarChart2,
  Server,
  BrainCircuit,
} from "lucide-react";

import {
  Discord,
  Slack,
  Binance,
  WalletConnect,
  Notion,
  Figma,
} from "../SvgComponents/SvgComponents";

export const NavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Coin Ranking",
    url: "/coinranking",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const SocialLinks = [
  {
    icon: <Facebook/>,
    url: "https://www.facebook.com/DailyCrypto24x7",
  },
  {
    icon: <Instagram/>,
    url: "https://t.me/DailyCrypto24x7",
  },
  {
    icon: <Twitter/>,
    url: "https://x.com/dailycrypto24x7",
  },
  {
    icon: <Linkedin/>,
    url: "https://discord.gg/DAILY9098",
  },
];

export const ServiceLinks = [
  {
    title: "Webwallet",
    url: "https://wallet.dailycrypto.net/",
  },
  {
    title: "DEX",
    url: "https://dex.dailycrypto.net/",
  },
  {
    title: "Mainnet Explorer",
    url: "https://explorer.mainnet.dailycrypto.net/",
  },
  {
    title: "Testnet Explorer",
    url: "https://explorer.testnet.dailycrypto.net/",
  },
];

export const CompanyLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Coin Ranking",
    url: "/coinranking",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const FeaturesData = [
  {
    name: "Public and Decentralized Structure",
    description: "Open sourced and maintained by the community",
    icon: <ShieldHalf />,
  },
  {
    name: "Streamlined Development",
    description:
      "Tools and documentation that speed dev work and reduce time to market",
    icon: <BarChart2 />,
  },
  {
    name: "High Performance Blockchain",
    description:
      "Capable of settling thousands of transactions in a second",
    icon: <Server />,
  },
  {
    name: "Very Low Cost Transactions",
    description:
      "At fractions of a penny per transaction, costs are very inexpensive",
    icon: <BrainCircuit />,
  },
];

export const RoadmapData = [
  {
    name: " Completed Nov 2020 - Jan 2025",
    description: "Initial Development of our Quantum proof resilient network",
  },
  {
    name: "Completed Dec 2023 – August 2025",
    description:
      "DEX development",
  },
  {
    name: " Completed Jan 2023 - Feb 2023",
    description:
      "Blockchain explorer development",
  },
  {
    name: "Completed Jan 2023 - October 2025",
    description:
      "Development of Browser wallet",
  },
  {
    name: "Initiated Nov 2025",
    description:
      "Soft Launch Daily Network",
  },
  {
    name: "March 2023 - November 2026",
    description:
      "Testing of network",
  },
  {
    name: " Estimated December 2025 - May 2026",
    description:
      "Daily Crypto ICO",
  },
  {
    name: "Estimated June 2025 - July 2026",
    description:
      "Development of mobile wallets",
  },
  {
    name: " Estimated Aug 2026 - Oct 2028",
    description:
      "Testing for banking layers integration to bank network",
  },
  {
    name: " Estimated Nov 2028 - Jan 2030",
    description:
      "Re-develop and redesign wallets",
  },
  {
    name: " Estimated Feb 2027 - Oct 2032",
    description:
      "Re-structure of complete code to V2 for complete Quantum Architecture resilient Network",
  },
  {
    name: " Estimated Nov 2026 - April 2028",
    description:
      "Investing into future product development for energy efficient algorithms / Cryptographic signatures and stress testing of network",
  },
  {
    name: " Estimated May 2028 Oct 2033",
    description:
      "Worldwide integration for complete Banking transformation for easy transfer between our Network to any FIAT account in the world with Stress testing",
  },
  {
    name: " Estimated September 2025 -  November 2025 ",
    description:
      " Launch of Testnet Faucet ",
  },
];

export const FaqData = [
  {
    ques: "Is Daily Mineable?",
    ans: "No, Daily is proof-of-stake and is not mineable. Users can stake or delegate their $DLY to earn interest.",
  },
  {
    ques: "What is Daily's consensus",
    ans: "Daily utilizes a dual DAG/PBFT consensus. Allowing for lightning fast and secure transactions.",
  },
  {
    ques: "Is Daily EVM compatible",
    ans: "Yes! Daily's DVM is fully EVM compatible allowing for the creation of tokens, NFTs, and more.",
  },
  {
    ques: "How many transactions can Daily handle?",
    ans: "Daily can handle more than 5k TPS with sub-4 second transaction finality.",
  },
  {
    ques: "Is Daily Decentralized?",
    ans: "Yes! Daily is fully decentralized. Anyone can contribute and run a validator.",
  },
];

export const PricingData = [
  {
    label: "Basic",
    priceMonth: 49,
    priceAnnual: 29,
    desc: "Suitable for personal use",
    features: [
      "Realtime trading data",
      "3-months standard support",
      "Trading up to $50k",
      "10GB Disk space",
      "Up to 5 team members",
      "Free Portfolio",
    ],
  },
  {
    label: "Premium",
    priceMonth: 79,
    priceAnnual: 49,
    desc: "Suitable for small business",
    features: [
      "Benefits of Basic tier",
      "6-month standard support",
      "Trading up to $150k",
      "25GB Disk space",
      "Up to 20 team members",
      "Free custom domain",
    ],
  },
  {
    label: "Ultimate",
    priceMonth: 129,
    priceAnnual: 99,
    desc: "Suitable for large business",
    features: [
      "Benefits of Premium tier",
      "1-year premium support",
      "Trading up to $500k",
      "50GB Disk space",
      "Up to 50 team members",
      "No trading fee",
    ],
  },
];

export const Missions = [
  {
    title: "Secure Crypto Solutions",
    desc: "Today, billions of people can’t open bank accounts, others have their payments blocked. DAILY's decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can receive and send funds anywhere in the world. Our future Goal is to integrate payments from Cryptocurrency to Bank accounts anywhere in the world in a matter of a few moments.",
  },
];

export const IntegrationsApp = [
  {
    name: "Discord",
    icon: <Discord />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Slack",
    icon: <Slack />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Binance",
    icon: <Binance />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "WalletConnect",
    icon: <WalletConnect />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Notion",
    icon: <Notion />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
  {
    name: "Figma",
    icon: <Figma />,
    desc: "Lorem ipsum dolor site amet, consectetur adipiscing elit",
  },
];
