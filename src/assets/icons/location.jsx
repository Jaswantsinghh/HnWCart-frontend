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
      clipRule="evenodd"
      d="M3.18 7.793a5.759 5.759 0 0 1 11.517.04v.065c-.04 2.067-1.194 3.978-2.609 5.472-.81.84-1.713 1.584-2.693 2.217a.698.698 0 0 1-.913 0 14.862 14.862 0 0 1-3.79-3.548A7.37 7.37 0 0 1 3.18 7.813v-.02Z"
      stroke="#93762D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.938 9.75a1.846 1.846 0 1 0 0-3.691 1.846 1.846 0 0 0 0 3.691Z"
      stroke="#93762D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent