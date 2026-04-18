import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { Slide } from "./Slide";
import screens from "../../screens.json";

const SECONDS_PER_SLIDE = screens.secondsPerSlide;

export const MyComposition: React.FC = () => {
  const { fps } = useVideoConfig();
  const framesPerSlide = SECONDS_PER_SLIDE * fps;

  return (
    <AbsoluteFill style={{ background: "#1a1614" }}>
      {screens.screens.map((screen, i) => (
        <Sequence
          key={screen.file}
          from={i * framesPerSlide}
          durationInFrames={framesPerSlide}
        >
          <Slide
            file={screen.file}
            title={screen.title}
            section={screen.section}
            description={screen.description}
            durationFrames={framesPerSlide}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
