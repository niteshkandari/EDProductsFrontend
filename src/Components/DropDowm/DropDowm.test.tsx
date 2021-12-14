import * as React from "react";
import { shallow } from "enzyme";
import DropDowm from "./DropDowm";

describe("DropDowm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DropDowm />);
    expect(wrapper).toMatchSnapshot();
  });
});
