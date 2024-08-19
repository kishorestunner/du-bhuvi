import { Button } from "@/components/Button";
import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";


export default function Birthday() {
  const [showText, setShowText] = useState(false);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 45,
      origin: { x: 0.5, y: 0.9 },
      shapes: ["circle"], // Simulate hearts using circles and rotation
      colors: ["#ff0000", "#ff69b4"], // Heart-like colors
    });

    // Reset and play the video when the button is pressed
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the start
      videoRef.current.play(); // Play the video
    }

    // Reset showText and then set it to true
    setShowText(false);
    setTimeout(() => {
      setShowText(true);
    }, 300); // Match the timeout with the duration of the confetti animation
  };

  return (
    <div className="relative flex flex-col items-center h-screen text-center bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full z-0"
        loop
        muted
      >
        <source src="/Video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showText && (
        <div className="flex flex-col top-32 relative z-10">
          <h1 className="text-8xl text-success-500 mb-3 font-bold animate-fade-in-1">
            Happy Birthday
          </h1>
          <h1 className="text-4xl text-warning-400 font-bold animate-fade-in-2">
            To
          </h1>
          <h1 className="text-8xl text-danger-500 font-bold animate-fade-in-3">
            My Dear Pondatti!
          </h1>
        </div>
      )}
      <Button
        ref={buttonRef}
        disableRipple
        className="absolute overflow-visible bottom-20 rounded-full bg-white text-primary-500 font-bold px-8 py-4 shadow-lg hover:bg-primary-500 hover:text-white transition-all duration-300 z-10"
        size="lg"
        onPress={handleConfetti}
      >
        Suprise
      </Button>
    </div>

  );
}




