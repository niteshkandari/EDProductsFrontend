import React from "react";
import "./App.less";
import DropDown from "./Components/DropDowm";
import ProductCard from "./Components/ProductCard";
import { useFacade } from "./Facade/facade";
import Loader from "react-loader-spinner";

const App = () => {
  const [apiData, setApiData]: Array<any> = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [productData, setProductData] = React.useState([]);
  const facade = useFacade();

  React.useEffect(() => {
    setLoading((prevState) => !prevState);
    facade
      .getApiData()
      .then((success: any) => {
        let response = success.data;
        response.length = 4;
        let dropDownData: any = {
          product: [],
          state: [],
          city: [],
        };
        Array.from(response, (item: any) => {
          dropDownData.product.push(item.product_name);
          dropDownData.state.push(item.address.state);
          dropDownData.city.push(item.address.city);
        });
        setProductData(dropDownData);
        setApiData(response);
        setLoading((prevState) => !prevState);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App flex h-screen ed-bg">
      <div className="relative h-full w-1/3">
        <div className="absolute p-2 top-12 left-24 h-96 rounded-lg bg-black w-64">
          <h3 className="text-lg text-gray-300 border border-gray-300 border-t-0 border-l-0 border-r-0">
            Filters
          </h3>
          <div className="absolute h-full w-full left-0 overflow-y-scroll overflow-hidden">
            <DropDown productDetails={productData} />
          </div>
        </div>
      </div>
      <div className="h-full w-4/6 relative flex flex-col gap-8">
        <div className="w-40 h-40 flex flex-col justify-center items-start mt-8">
          <h1 className=" text-white text-4xl font-bold">Edvora</h1>
          <h2 className=" text-gray-300 text-2xl">Products</h2>
        </div>
        <div className="h-full w-full relative">
          {loading ? (
            <div className="absolute top-12 left-72">
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            </div>
          ) : (
            <>
              <h3 className="text-white text-lg border border-gray-300 border-t-0 border-l-0 border-r-0">
                Product Name
              </h3>
              <div className="bg-black flex p-4 space-x-4 rounded-md ">
                <ProductCard data={apiData} />
              </div>
              <h3 className="text-white text-lg border border-gray-300 border-t-0 border-l-0 border-r-0">
                Product Name
              </h3>
              <div className="bg-black flex p-4 space-x-4 rounded-md">
                <ProductCard data={apiData} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
