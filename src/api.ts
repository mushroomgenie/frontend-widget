import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-v2.dhedge.org/graphql",
});

export const fetchTokenPriceHistory = async (
  fundAddress: string,
  period: string
) => {
  const payload = `
    query{
        tokenPriceHistory(address:"${fundAddress}",period:"${period}"){
          history{
            timestamp
            adjustedTokenPrice
          }
        }
      }
    `;
  const { data } = await axiosClient.post("", { query: payload });
  return data;
};
