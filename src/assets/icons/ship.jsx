import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 14.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3v0Zm7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3v0Z"
      stroke="#93762D"
      strokeMiterlimit={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.537 12.75h3.713v-7.8a.45.45 0 0 0-.45-.45H.75m3.487 8.25H2.7a.448.448 0 0 1-.45-.45V8.625"
      stroke="#93762D"
      strokeLinecap="round"
    />
    <path
      d="M1.5 6.75h3"
      stroke="#93762D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 6.75h4.207a.45.45 0 0 1 .411.267l1.343 3.021c.026.057.039.12.039.182v2.08a.448.448 0 0 1-.45.45h-1.425m-4.125 0H12"
      stroke="#93762D"
      strokeLinecap="round"
    />
  </svg>
)

export default SvgComponent
