import React from "react";

type SettlementStateProps = {
  state: string;
};

const SettlementState: React.FC<SettlementStateProps> = ({ state }) => (
  <p className="mt-10 text-base">
    Settlement State:
    <span className="border border-green bg-white text-green font-bold rounded-md p-2 ml-2 capitalize">
      {state}
    </span>
  </p>
);

export default SettlementState;
