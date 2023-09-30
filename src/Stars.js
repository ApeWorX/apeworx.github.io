import { useEffect, useRef } from "react";

const Stars = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const ctxRef = useRef(null);

  const makeStar = (props) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    width: Math.ceil(2 * Math.random()),
    height: Math.ceil(3 * Math.random()),
    ...props
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctxRef.current.fillStyle = "#FFFFFF";

    starsRef.current = Array(400)
      .fill()
      .map(() => makeStar());

    function animate() {
      ctxRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);

      starsRef.current.forEach((star, i) => {
        star.y -= 0.12;
        if (star.y < 0) {
          starsRef.current[i] = makeStar({ y: window.innerHeight });
        }
        ctxRef.current.fillRect(star.x, star.y, star.width, star.height);
      });

      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current.forEach((star, i) => {
        starsRef.current[i] = makeStar();
      });
      ctxRef.current = canvas.getContext("2d");
      ctxRef.current.fillStyle = "#FFFFFF";
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
};

export default Stars;
