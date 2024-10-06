import React from "react";
import { Landing } from "../components/service/Landing";
import { Offering } from "../components/service/Offering";
import { Carrer } from "../components/service/Carrer";

function Services() {
  return (
    <div className='px-20'>
      <Landing />
      <Offering />
      <Carrer />
    </div>
  );
}

export default Services;
