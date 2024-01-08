import * as React from "react";
import { SVGProps } from "react";
const Services = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={60}
    fill="none"
    {...props}
  >
    <rect width={59} height={59} x={0.75} y={0.5} stroke="url(#a)" rx={29.5} />
    <rect width={59} height={59} x={0.75} y={0.5} stroke="url(#b)" rx={29.5} />
    <rect width={43} height={43} x={8.75} y={8.5} stroke="url(#c)" rx={21.5} />
    <rect width={43} height={43} x={8.75} y={8.5} stroke="url(#d)" rx={21.5} />
    <path
      fill="#50ADE2"
      d="M30.25 25.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
    />
    <path
      fill="#50ADE2"
      fillRule="evenodd"
      d="M19.75 22.875c0-1.035.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.035-.84 1.875-1.875 1.875h-17.25a1.875 1.875 0 0 1-1.875-1.875v-9.75Zm6.75 4.875a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM37 27a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H37Zm-14.25.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H23.5a.75.75 0 0 1-.75-.75v-.008Z"
      clipRule="evenodd"
    />
    <path
      fill="#50ADE2"
      d="M20.5 36a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V36.75a.75.75 0 0 0-.75-.75H20.5Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5.189}
        x2={62.994}
        y1={63.293}
        y2={-4.024}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.324} stopColor="#40A4E2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={60.067}
        x2={5.189}
        y1={-7.683}
        y2={60}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.577} stopColor="#3AA1E1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={3.46}
        x2={52.073}
        y1={10.484}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.324} stopColor="#3EA1DE" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={60.944}
        x2={9.847}
        y1={61.935}
        y2={25.742}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.577} stopColor="#3DA4E3" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default Services;
