import React from "react";
import Button from "./Button";

import { mount, render, shallow } from "enzyme";

describe("Button", () => {

    test("renders properly into dom with color and label", () => {
        const component = shallow(<Button label="asd"/>);

        expect(component.find("button").text()).toBe("asd");
    });
});
