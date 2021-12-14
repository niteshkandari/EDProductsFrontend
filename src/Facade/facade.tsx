import { createContext, useContext } from "react";
import { API_URL } from "./Api.enum";
import axios from "axios";

let operation: any = {};
const FacadeContext = createContext(operation);

export const FacadeProvider = (props: any) => {
  const config: any = {
    method: "GET",
    url: API_URL.GET_DATA,
  };
  const getApiData = () => {
    return axios(config);
  };
  operation = {
    getApiData,
  };
  return (
    <FacadeContext.Provider value={operation}>
      {props.children}
    </FacadeContext.Provider>
  );
};

export const useFacade = () => {
  return useContext(FacadeContext);
};
