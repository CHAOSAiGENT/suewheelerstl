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

  // Subtitle bar slides up from below on entry (starts at frame 20)
  const subtitleSpring = spring({
    frame,
    fps,
    config: { damping: 26, stiffness: 180 },
    delay: 20,
  });
  const subtitleY = interpolate(subtitleSpring, [0, 1], [80, 0]);

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

      {/* Subtitle bar — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.78)",
          padding: "18px 48px",
          transform: `translateY(${subtitleY}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 21,
            color: "#fff",
            lineHeight: 1.45,
            textAlign: "center",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </div>
      </div>
    </AbsoluteFill>
  );
};
