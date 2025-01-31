import React from "react";
import renderer from "react-test-renderer";
import ErrorModal from "../src/components/ErrorModal";

describe("Snapshot testing of ErrorModal", () => {
  it("ErrorModal snapshot", () => {
    const ErrorModalT = renderer
      .create(
        <ErrorModal
          show={true}
          onHide={()=>{}}
        />
      )
      .toJSON();
    expect(ErrorModalT).toMatchSnapshot();
  });
});