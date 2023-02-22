import React, { useEffect } from "react";

export const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMacth() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMacth();
    window.addEventListener("resize", changeMacth);
    return () => {
      window.removeEventListener("resize", changeMacth);
    };
  }, [media]);

  return match;
};
