import { Image, Picture } from "@astrojs/image/components";
import Footer from "@layouts/Footer";
import type { ReactNode } from "react";
import { FaDatabase, FaProjectDiagram } from "react-icons/fa/index";
import Header from "./Header";
import Countries from "./Countries";
import FirstView from "./FirstView";
import Service from "./Service";
import Merits from "./Merits";
import LastMessage from "./LastMessage";
import Technologies from "./Technologies";
import Integrations from "./Integrations";
import ChatFirst from "./ChatFirst";
import Framework from "./Framework";
import CostMerit from "./CostMerit";

const Top = () => {
  return (
    <div>
      <FirstView />
      <Countries />
      <Service />
      <Integrations />
      <ChatFirst />
      <Framework />
      <CostMerit />
      <Merits />
      <Technologies />
      <LastMessage />
    </div>
  );
};

export default Top;
