import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import screens from "../../screens.json";

const FPS = screens.fps;
const SECONDS_PER_SLIDE = screens.secondsPerSlide;
const TOTAL_FRAMES = screens.screens.length * SECONDS_PER_SLIDE * FPS;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SueWheelerWalkthrough"
        component={MyComposition}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1440}
        height={900}
      />
    </>
  );
};
