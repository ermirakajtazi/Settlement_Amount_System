import { Inter } from "next/font/google";

import { useState } from "react";
import PartyAComponent from "./components/PartyAComponent/PartyAComponent";
import PartyBComponent from "./components/PartyBComponent/PartyBComponent";
import useAmountData from "../hooks/useAmountData";
import Head from "next/head";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isObjection, setIsObjection] = useState("");
  const [amount, setAmount] = useState(0);
  const { data, loading } = useAmountData({ isObjection, amount });

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Head>
        <title>Settlement amount agreement page</title>
        <meta
          name="description"
          content="This is a page system between two parties A and B"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 lg:p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <PartyAComponent
              isObjection={data?.isObjection}
              setAmount={setAmount}
              setIsObjection={setIsObjection}
              amount={data?.amount}
            />
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <PartyBComponent
              isObjection={data?.isObjection}
              amount={data?.amount}
              setIsObjection={setIsObjection}
            />
          </div>
        </div>
      </main>
    </>
  );
}
