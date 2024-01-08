import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M368 368 144 144m224 0L144 368"
    />
  </svg>
);
export default CloseIcon;
