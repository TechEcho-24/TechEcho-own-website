import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Courses } from "../components/career/Courses";

function Career() {
  // useGSAP(() => {
  //   gsap.from("h1", {
  //     opacity: 0,
  //     duration: 2,
  //     scale: 4,
  //   });
  // });
  return (
    <>
      <Courses />
    </>
  );
}

export default Career;
