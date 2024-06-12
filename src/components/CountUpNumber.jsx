import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUpNumber = ({ value, duration, prefix = "", ...props }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });
  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          // prefix={prefix}
          formattingFn={(value) => `${value}${prefix}`}
          {...props}
        />
      ) : (
        0
      )}
    </div>
  );
};

export default CountUpNumber;
