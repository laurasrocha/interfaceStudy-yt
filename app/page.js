import React from "react";
import Header from "./componentes/header";
import Lateral from "./componentes/lateral";
import Fileira from "./componentes/fileira";
import Videos from "./componentes/videos";
import Videos2 from "./componentes/videos2";
import Videos3 from "./componentes/videos3";

export default function Home() {
  return (
    <div className="bg-[#121212] w-screen h-screen">
      <Header />
      <div className="flex space-x-5">
        <Lateral />
        <div className="flex-col">
          <Fileira />
          <Videos />
          <Videos2/>
          <Videos3/>
        </div>
      </div>
    </div>
  );
}
