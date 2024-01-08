import * as React from "react"
import { SVGProps } from "react"
const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#999"
      d="M14.167 5.833H15v.834a.833.833 0 1 0 1.667 0v-.834h.833a.833.833 0 0 0 0-1.666h-.833v-.834a.833.833 0 1 0-1.667 0v.834h-.833a.833.833 0 0 0 0 1.666ZM17.5 9.167a.833.833 0 0 0-.833.833v5a.833.833 0 0 1-.834.833H4.167A.834.834 0 0 1 3.333 15V7.008l4.9 4.909a2.5 2.5 0 0 0 3.534 0l2.058-2.059a.837.837 0 0 0-1.183-1.183l-2.059 2.058a.834.834 0 0 1-1.166 0l-4.909-4.9h6.325a.833.833 0 0 0 0-1.666H4.167a2.5 2.5 0 0 0-2.5 2.5V15a2.5 2.5 0 0 0 2.5 2.5h11.666a2.5 2.5 0 0 0 2.5-2.5v-5a.833.833 0 0 0-.833-.833Z"
    />
  </svg>
)
export default Mail
