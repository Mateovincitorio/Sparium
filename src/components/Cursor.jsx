import { useEffect, useRef, useState } from "react";

const TextType = ({
  text = [],
  typingSpeed = 90,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
  shouldAnimate = false,
  onComplete = () => {},
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef(null);

  const typeWriter = async (fullText) => {
    setIsAnimating(true);
    for (let i = 0; i <= fullText.length; i++) {
      setDisplayText(fullText.substring(0, i));
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
    setIsAnimating(false);
    onComplete();
  };

  useEffect(() => {
    if (shouldAnimate && !isAnimating && displayText === "") {
      typeWriter(text[0] || "");
    }
  }, [shouldAnimate, text, typingSpeed, isAnimating, displayText, onComplete]);

  return (
    <span ref={elementRef} style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
      {displayText}
      {showCursor && !isAnimating && displayText === (text[0] || "") && (
        <span
          style={{
            animation: `blink ${cursorBlinkDuration}s infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
};

export default TextType;
     

