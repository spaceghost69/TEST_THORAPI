import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import React from "react";
import renderer from "react-test-renderer";
import AcceptCookies from "../src/components/AcceptCookies";


describe("Snapshot testing of AcceptCookies", () => {
  it("AcceptCookies snapshot", () => {
    const AcceptCookiesT = renderer
      .create(
        <AcceptCookies
          show={true}
          onHide={() => { }}
        />
      )
      .toJSON();
    expect(AcceptCookiesT).toMatchSnapshot();
  });
});