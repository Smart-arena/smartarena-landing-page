import * as React from "react";
import { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.167 1.5c-3.221 0-5.834 2.585-5.834 5.775 0 2.575 1.021 8.686 11.07 14.863a1.148 1.148 0 0 0 1.194 0c10.049-6.177 11.07-12.288 11.07-14.863 0-3.19-2.613-5.775-5.834-5.775C15.613 1.5 13 5 13 5s-2.612-3.5-5.833-3.5Z"
    />
  </svg>
);
export default Heart;
