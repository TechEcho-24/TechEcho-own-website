import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Career() {
  useGSAP(() => {
    gsap.from("h1", {
      opacity: 0,
      duration: 2,
      scale: 4,
    });
  });
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-8xl text-white">Coming Soon...</h1>
    </div>
  );
}

export default Career;
