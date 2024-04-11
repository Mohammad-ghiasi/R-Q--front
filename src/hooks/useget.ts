import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { cardInfo } from "../types/cardinfo";

type arguments = {
  type?: null | "buy" | "sell";
  pagenumber: number;
  search?: string | null;
};
export const useGet = (url: string, infos?: arguments) => {
  let all: number = 0;
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts", infos],
    queryFn: async (): Promise<any> => {
      let address: string = url + infos?.pagenumber;

      if (infos?.type) {
        address = address += `&ad_type=${infos?.type}`;
      }

      if (infos?.search) {
        address = `http://localhost:8000/ads/advertises/paged/?search=${infos?.search}`;
        console.log(address);
      }

      const datas: cardInfo[] = await axios
        .get(address)
        .then((res: AxiosResponse) => {
          return res.data;
        });
      return datas;
    },
    // impoertant part... (chnaging data type)
    select: (datas) => {
      all = datas.count;
      return datas.results;
    },
  });
  return { data, isPending, error, isError, all };
};
