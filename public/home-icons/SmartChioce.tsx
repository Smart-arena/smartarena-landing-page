import * as React from "react"
import { SVGProps } from "react"
const SmartChoice = (props: SVGProps<SVGSVGElement>) => (
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
      d="M30.25 20.25A.75.75 0 0 1 31 21v2.25a.75.75 0 0 1-1.5 0V21a.75.75 0 0 1 .75-.75ZM25.75 30a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM37.144 24.166a.75.75 0 1 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM40 30a.75.75 0 0 1-.75.75H37a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 40 30ZM36.084 36.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM30.25 36a.75.75 0 0 1 .75.75V39a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM26.008 35.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM24.25 30a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75ZM24.947 25.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
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
        <stop offset={0.324} stopColor="#59B6EF" stopOpacity={0} />
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
        <stop offset={0.577} stopColor="#4BA9E3" stopOpacity={0} />
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
        <stop offset={0.324} stopColor="#56ADE3" stopOpacity={0} />
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
        <stop offset={0.577} stopColor="#50ACE4" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default SmartChoice
