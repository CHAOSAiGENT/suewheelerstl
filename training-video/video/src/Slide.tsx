import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type SlideData = {
  file: string;
  title: string;
  section: string;
  description: string;
};

type Props = SlideData & {
  durationFrames: number;
};

export const Slide: React.FC<Props> = ({
  file,
  title,
  section,
  description,
  durationFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in over first 18 frames, fade out over last 18 frames
  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationFrames - 18, durationFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
    },
  );
  const opacity = Math.min(fadeIn, fadeOut);

  // Slight scale/zoom: 1.00 → 1.04 over the slide duration
  const scale = interpolate(frame, [0, durationFrames], [1.0, 1.04], {
    extrapolateRight: "clamp",
  });

  // Title springs up from below on entry
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 26, stiffness: 180 },
    delay: 8,
  });
  const titleY = interpolate(titleSpring, [0, 1], [20, 0]);

  // Description fades in slightly later
  const descOpacity = interpolate(frame, [22, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#1a1614", opacity }}>
      {/* Screenshot with zoom */}
      <AbsoluteFill>
        <Img
          src={staticFile(file)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
        {/* Overlay gradient so text reads on any background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,15,12,0.72) 0%, transparent 22%, transparent 72%, rgba(20,15,12,0.82) 100%)",
          }}
        />
      </AbsoluteFill>

      {/* Section pill + title — top */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 48,
          right: 48,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#11B2E8",
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 2,
            marginBottom: 10,
          }}
        >
          {section}
        </div>
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 38,
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.15,
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </div>
      </div>

      {/* Description — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 48,
          right: 48,
          opacity: descOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 19,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.55,
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            maxWidth: 860,
          }}
        >
          {description}
        </div>
      </div>
    </AbsoluteFill>
  );
};
