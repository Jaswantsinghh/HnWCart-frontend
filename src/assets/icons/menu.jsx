import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={40}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.923 4.75a.75.75 0 0 1-.75.75H10.827a.75.75 0 0 1 0-1.5h24.346a.75.75 0 0 1 .75.75Zm0 7a.75.75 0 0 1-.75.75H10.827a.75.75 0 0 1 0-1.5h24.346a.75.75 0 0 1 .75.75Zm-.75 7.75a.75.75 0 0 0 0-1.5H10.827a.75.75 0 0 0 0 1.5h24.346Z"
      fill="#93762D"
    />
    <circle cx={3.385} cy={5} r={1} fill="#93762D" />
    <circle cx={3.385} cy={12} r={1} fill="#93762D" />
    <circle cx={3.385} cy={19} r={1} fill="#93762D" />
  </svg>
)

export default SvgComponent