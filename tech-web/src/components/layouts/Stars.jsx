import { useEffect, useRef } from "react";

export const Stars = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  // Function to initialize stars
  function createStars(canvas, numStars) {
    const starsArray = [];
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      starsArray.push({ x, y, radius });
    }
    return starsArray;
  }

  // Function to draw and animate the stars with more movement
  function drawStars(ctx, starsArray) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas

    starsArray.forEach((star) => {
      // Increase the movement speed of stars
      star.x += (Math.random() - 0.3) * 0.5; // Adjust this value for faster horizontal movement
      star.y += (Math.random() - 0.1) * 0.5; // Adjust this value for faster vertical movement

      // If a star moves out of bounds, reposition it
      if (star.x < 0) star.x = ctx.canvas.width;
      if (star.x > ctx.canvas.width) star.x = 0;
      if (star.y < 0) star.y = ctx.canvas.height;
      if (star.y > ctx.canvas.height) star.y = 0;

      // Draw each star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    });

    requestAnimationFrame(() => drawStars(ctx, starsArray)); // Keep animating
  }

  // useEffect hook to initialize the canvas and stars
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize stars
    stars.current = createStars(canvas, 300); // Create 300 stars
    drawStars(ctx, stars.current); // Start drawing and animating stars
  }, []);

  return (
    <canvas ref={canvasRef} className='fixed inset-0 w-full h-full'></canvas>
  );
};
