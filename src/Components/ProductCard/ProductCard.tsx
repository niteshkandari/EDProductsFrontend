import * as React from "react";
import { Card } from "antd";
import moment from "moment";
type ProductCardProps = {
  data: Array<any>;
};

const ProductCard: React.FC<any> = (props: ProductCardProps) => {
  const { data } = props;

  return (
    <>
      {data &&
        data?.map((item, key) => {
          return (
            <Card
              key={key}
              style={{
                borderRadius: "4px",
                width: 210,
                height: "150px",
                backgroundColor: "#292929",
                position:'relative',
              }}
            >
              <div className="absolute h-full w-full top-0 left-0 bottom-0 flex flex-col p-2">
                <div className="flex justify-center space-x-6">
                  <div className="bg-white rounded-md h-16 w-16 flex flex-shrink-0 justify-center items-center">
                    <img
                      src={item.image}
                      style={{ objectFit: "cover" }}
                      width={"100%"}
                      height={"100%"}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white">{item.product_name}</span>
                    <span className="text-gray-300">{item.brand_name}</span>
                    <span className="text-white">$ {item.price}</span>
                  </div>
                </div>
                <div className="flex h-full w-full break-words space-x-6">
                  <span className="text-gray-300">{item.address.city}</span>
                  <span className="text-gray-300">
                    {moment(item.date).subtract(10, "days").calendar()}
                  </span>
                </div>
                <span className="text-gray-300">{item.discription}</span>
              </div>
            </Card>
          );
        })}
    </>
  );
};

export default ProductCard;
