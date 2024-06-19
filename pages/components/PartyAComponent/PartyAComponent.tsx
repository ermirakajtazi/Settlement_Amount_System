import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import { ComponentsProps } from "@/types/ComponentsProps";
import SettlementState from "../SettlementState/SettlementState ";
import useFetchData from "../../../hooks/useFetchData";

const PartyAComponent: React.FC<ComponentsProps> = ({
  isObjection,
  setAmount = () => {},
  amount,
}) => {
  const [submittedAmount, setSubmittedAmount] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { fetchData } = useFetchData();

  const submitAmount = async () => {
    try {
      const amount = parseInt(inputValue);
      const response = await fetchData("/submitAmount", "POST", {
        amount,
        isObjection,
      });
      setAmount(amount);
      if (response.data) {
        setSubmittedAmount(amount);
        toast.success(`Amount $${amount} submitted successfully`);
      }
    } catch (error) {
      console.error("Error submitting amount:", error);
      toast.error("An error occurred while submitting the amount");
    }
  };

  useEffect(() => {
    isObjection === "disputed"
      ? toast.error("Party B has raised an objection to the amount.")
      : isObjection === "settled"
      ? toast.success("Party B has accepted the amount.")
      : null;
  }, [isObjection]);

  const renderSettlementStateA = () => <SettlementState state={isObjection} />;
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl font-semibold px-4 py-2 bg-gray-200">
        Party A Interface
      </h2>

      {isObjection === "settled" ? (
        <div className="p-4 justify-center text-center">
          <p className="py-5 font-semibold text-base">
            Congratulations, the settlement amount of ${amount} has been
            accepted from Party B.
          </p>
        </div>
      ) : (
        <div className="p-4">
          <p className="py-5 font-semibold text-base">
            Submit a settlement amount to Party B
          </p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded-md p-2 w-full mb-4 font-lg"
            placeholder="0"
          />

          <Button
            data-testid="submit-button"
            type="button"
            color="blue"
            onClick={submitAmount}
            disabled={!inputValue}
          >
            Submit
          </Button>

          {submittedAmount && (
            <p className="mt-4 text-base">
              Amount submitted:{" "}
              <span className="font-extrabold"> ${submittedAmount}</span>
            </p>
          )}

          {renderSettlementStateA()}
        </div>
      )}
    </div>
  );
};

export default PartyAComponent;
