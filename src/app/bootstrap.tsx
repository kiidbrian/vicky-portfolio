"use client";

import {useEffect} from "react";

const BootstrapClient = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("tiny-slider");
    const AOS = require("../../public/js/aos.js");
    if (typeof window !== "undefined") {
      AOS.init();
      require("../../public/js/navbar.js");
      require("../../public/js/counter.js");
      setTimeout(() => {
        require("../../public/js/custom.js");
      }, 100);
    }
  }, []);

  return null;
};

export default BootstrapClient;
