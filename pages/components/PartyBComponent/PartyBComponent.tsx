import React from "react";
import Button from "../Button/Button";
import { ComponentsProps } from "@/types/ComponentsProps";
import SettlementState from "../SettlementState/SettlementState ";
import useFetchData from "../../../hooks/useFetchData";

const PartyBComponent: React.FC<ComponentsProps> = ({
  amount,
  setIsObjection = () => {},
  isObjection,
}) => {
  const { fetchData } = useFetchData();

  const respondToAmount = async (isObjectionValue: string) => {
      try {
          const data = await fetchData('/respondToAmount', 'POST', { isObjection: isObjectionValue, amount });
          setIsObjection(isObjectionValue);
      } catch (error) {
          console.error('Error responding to amount:', error);
      }
  };

  const renderButtons = () => (
    <div className="md:flex">
      <Button
        type="button"
        color="red"
        onClick={() => respondToAmount("disputed")}
      >
        Raise Objection
      </Button>
      <div className="mt-4 md:ml-2 md:mt-0">
        <Button
          type="button"
          color="green"
          onClick={() => respondToAmount("settled")}
        >
          Agree to Amount
        </Button>
      </div>
    </div>
  );


  const renderSettlementStateB = () => <SettlementState state={isObjection} />;
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl font-semibold px-4 py-2 bg-gray-200">
        Party B Interface
      </h2>
      <div className="p-4">
        <p className="pb-10 text-base">
          <span className="font-semibold">
            The amount submitted by Party A:
          </span>
          <span className="font-extrabold"> ${amount}</span>
        </p>
        {renderButtons()}
        {renderSettlementStateB()}
      </div>
    </div>
  );
};

export default PartyBComponent;
