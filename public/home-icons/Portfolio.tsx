import * as React from "react";
import { SVGProps } from "react";
const Portfolio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={60}
    fill="none"
    {...props}
  >
    <rect width={59} height={59} x={1.25} y={0.5} stroke="url(#a)" rx={29.5} />
    <rect width={59} height={59} x={1.25} y={0.5} stroke="url(#b)" rx={29.5} />
    <rect width={43} height={43} x={9.25} y={8.5} stroke="url(#c)" rx={21.5} />
    <rect width={43} height={43} x={9.25} y={8.5} stroke="url(#d)" rx={21.5} />
    <path
      fill="#50ADE2"
      fillRule="evenodd"
      d="M19.95 21.3a.9.9 0 0 1 .9-.9h12.6a.9.9 0 1 1 0 1.8h-.3v16.5a.9.9 0 0 1-.9.9h-1.8a.9.9 0 0 1-.9-.9v-3a.9.9 0 0 0-.9-.9h-3a.9.9 0 0 0-.9.9v3a.9.9 0 0 1-.9.9h-3a.9.9 0 0 1 0-1.8h.3V22.2h-.3a.9.9 0 0 1-.9-.9Zm3.6 3.3a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Zm4.2-4.2a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2ZM35.85 25.2a.9.9 0 0 0-.9.9v12.3a1.2 1.2 0 0 0 1.2 1.2h4.5a.9.9 0 1 0 0-1.8h-.3V27h.3a.9.9 0 1 0 0-1.8h-4.8Zm.6 4.2a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6v1.2a.6.6 0 0 1-.6.6h-1.2a.6.6 0 0 1-.6-.6v-1.2Zm.6 4.2a.6.6 0 0 0-.6.6v1.2a.6.6 0 0 0 .6.6h1.2a.6.6 0 0 0 .6-.6v-1.2a.6.6 0 0 0-.6-.6h-1.2Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5.689}
        x2={63.494}
        y1={63.293}
        y2={-4.024}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.324} stopColor="#3EA2E0" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={60.567}
        x2={5.689}
        y1={-7.683}
        y2={60}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.577} stopColor="#3EA4E3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={3.96}
        x2={52.573}
        y1={10.484}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.324} stopColor="#3DA8EA" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={61.444}
        x2={10.347}
        y1={61.935}
        y2={25.742}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50ADE2" />
        <stop offset={0.577} stopColor="#3CA6E8" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default Portfolio;
