"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Lightbox() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: {
        display: {
          left: [],
          middle: ["counter"],
          right: ["zoom", "slideshow", "fullscreen", "close"],
        },
      },
    });

    return () => Fancybox.destroy();
  }, []);

  return null;
}
