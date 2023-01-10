import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={22}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#93762D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M.75 1.25h20.167M.75 8.563h14.258M.75 15.875h9.333"
    />
  </svg>
)

export default SvgComponent
