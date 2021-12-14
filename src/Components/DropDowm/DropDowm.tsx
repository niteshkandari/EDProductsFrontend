import * as React from "react";
import { Menu } from "antd";
import "./DropDown.less";
type DropDowmProps = {
  productDetails:any;
};
const { SubMenu } = Menu;
const DropDowm: React.FC<any> = ({productDetails}:DropDowmProps) => {
  const handleClick = (e:any) => {
    console.log(e,"click")
  };
  const { product,state,city } = productDetails;
  console.log(productDetails)
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      mode="inline"
    >
      <SubMenu key="sub1" title="Products">
          {product && product.map((productName:string,key:number) => {
            return <Menu.Item key={key}>{productName}</Menu.Item>
          })}
      </SubMenu>
      <SubMenu key="sub2" title="States">
      {state && state.map((state:string,key:number) => {
            return <Menu.Item key={key}>{state}</Menu.Item>
          })}
      </SubMenu>
      <SubMenu key="sub3" title="City">
      {city && city.map((city:string,key:number) => {
            return <Menu.Item key={key}>{city}</Menu.Item>
          })}
      </SubMenu>
    </Menu>
  );
};

export default DropDowm;
