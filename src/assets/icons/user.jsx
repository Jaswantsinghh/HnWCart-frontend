import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12.5} cy={8} r={4.75} stroke="#fff" strokeWidth={1.5} />
    <path
      d="M6.5 21v-2.5c0-1.25 2.25-2.5 6-2.5s6 1.25 6 2.5V21"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
