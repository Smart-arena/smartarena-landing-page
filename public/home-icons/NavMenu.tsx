import * as React from "react"
import { SVGProps } from "react"
const NavMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M3.5 7.875c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H4.375a.875.875 0 0 1-.875-.875ZM3.5 14c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H4.375A.875.875 0 0 1 3.5 14Zm9.625 6.125c0-.483.392-.875.875-.875h9.625a.875.875 0 0 1 0 1.75H14a.875.875 0 0 1-.875-.875Z"
      clipRule="evenodd"
    />
  </svg>
)
export default NavMenu
