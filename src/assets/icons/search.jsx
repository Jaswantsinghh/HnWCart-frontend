import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.671 14.566a6.741 6.741 0 1 0 0-13.482 6.741 6.741 0 0 0 0 13.482ZM12.36 12.864l2.643 2.636"
      stroke="#93762D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent;
