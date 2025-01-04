import React from "react";
import Heading from "../heading";
import Image from "next/image";
import {clients} from "../assets";

const Clients = () => {
  return (
    <div className="bg-cgreen w-full sections pt-40 rounded-b-3xl">
      {/* Heading Section */}
      <Heading value="Our Clients" color="white" />
      {/* Logos Section */}
      <div className="w-full flex justify-center pt-2 flex-wrap gap-4">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client}
            alt={`Client Logo ${index + 1}`}
            width={200}
            height={200}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;