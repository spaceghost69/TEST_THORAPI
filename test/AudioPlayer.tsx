import React from "react";
import renderer from "react-test-renderer";
import { AudioPlayer } from "../src/components/AudioPlayer";

describe("Snapshot testing of AudioPlayer", () => {
  it("AudioPlayer snapshot", () => {
    const AudioPlayerT = renderer
      .create(<AudioPlayer show={true} onHide={() => {}} />)
      .toJSON();
    expect(AudioPlayerT).toMatchSnapshot();
  });
});
