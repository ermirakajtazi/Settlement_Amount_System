import { useEffect, useState } from "react";

type UseAmountDataProps = {
  isObjection: string;
  amount: number;
};

const useAmountData = ({ isObjection, amount }: UseAmountDataProps) => {
  const [data, setData] = useState<{ amount: number; isObjection: string }>({
    amount: 0,
    isObjection: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/getAmountData`
        );
        if (response.ok) {
          const responseData = await response.json();
          if (responseData && responseData.length > 0) {
            setData({
              amount: responseData[0].amount,
              isObjection: responseData[0].isObjection,
            });
          }
        } else {
          console.error("Failed to fetch amount data");
        }
      } catch (error) {
        console.error("Error fetching amount data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isObjection, amount]);

  return { data, loading };
};

export default useAmountData;
