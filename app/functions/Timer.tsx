"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useTimer = (timeLimit: unknown) => {
  const router = useRouter();

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        router.push("/");
      }, timeLimit as number);
    };

    const handleMouseMove = () => {
      resetTimer();
    };

    const handleKeyDown = () => {
      resetTimer();
    };

    // Initial setup of the timer
    resetTimer();

    // Event listeners to reset the timer on user activity
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, timeLimit]);
};

export default useTimer;
