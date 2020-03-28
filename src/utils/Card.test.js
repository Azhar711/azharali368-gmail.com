import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { OutlinedCard } from "./Card";
import Card from "@material-ui/core/Card";

configure({ adapter: new Adapter() });

describe("renders Block Num", () => {
  it("should render Outline upon received dataArray", () => {
    const wrapper = shallow(<OutlinedCard />);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
