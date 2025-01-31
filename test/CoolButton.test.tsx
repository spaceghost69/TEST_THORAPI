import React from "react";
import renderer from "react-test-renderer";
import CoolButton from "../src/components/CoolButton";

describe("Snapshot testing of CoolButton", () => { 
    it("CoolButton snapshot", () => { 
        const CoolButtonS = renderer.
        create(<CoolButton  variant={"info"} onClick={undefined} />).toJSON(); 
        expect(CoolButtonS).toMatchSnapshot(); 
    }); 
});