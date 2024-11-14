"use client";

import {useEffect} from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tiny-slider");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const AOS = require("../../public/js/aos.js");
    if (typeof window !== "undefined") {
      AOS.init();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("../../public/js/navbar.js");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("../../public/js/counter.js");
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("../../public/js/custom.js");
      }, 100);
    }
  }, []);

  return null;
};

export default BootstrapClient;
