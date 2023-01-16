import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.912 14.25V.75h3.21v13.5h-3.21ZM.602 9V6h13.83v3H.602Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
