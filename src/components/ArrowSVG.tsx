import React from "react";

const ArrowSVG: React.FC<{ className: string; onClick: VoidFunction }> = (
  props
) => (
  <svg
    width="167"
    height="291"
    viewBox="0 0 167 291"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.768555"
      y="145.725"
      width="205"
      height="29"
      rx="14.5"
      transform="rotate(-45 0.768555 145.725)"
      fill="white"
    />
    <rect
      x="21.5061"
      y="125"
      width="205"
      height="29"
      rx="14.5"
      transform="rotate(45 21.5061 125)"
      fill="white"
    />
  </svg>
);

export default ArrowSVG;
