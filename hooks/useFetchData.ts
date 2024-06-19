

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FetchDataResponse<Data> = {
  data: Data;
};

const useFetchData = () => {
  const fetchData = async <Data>(
    route: string,
    method: HttpMethod,
    body: Record<string, any> 
  ): Promise<FetchDataResponse<Data>> => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${route}`;
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        return { data };
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Error fetching data');
    }
  };

  return { fetchData };
};

export default useFetchData;
