import * as React from "react"
import { SVGProps } from "react"
const Phone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#203239"
      d="M10 19.721a36.932 36.932 0 0 0 19.132 18.583l1.36.605a7 7 0 0 0 8.661-2.494l1.776-2.647a2 2 0 0 0-.405-2.671l-6.023-4.86a2 2 0 0 0-2.863.366l-1.863 2.515a24.28 24.28 0 0 1-11.023-11.023l2.515-1.863a2 2 0 0 0 .366-2.863l-4.86-6.024a2 2 0 0 0-2.67-.405l-2.666 1.787a7 7 0 0 0-2.474 8.711l1.036 2.28.001.003Z"
    />
  </svg>
)
export default Phone
