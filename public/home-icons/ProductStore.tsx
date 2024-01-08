import * as React from "react"
import { SVGProps } from "react"
const ProductStore = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#13AEE6"
      d="M22.204 26.545a3.6 3.6 0 0 0 5.546-.554 3.597 3.597 0 0 0 3 1.609c1.252 0 2.355-.64 3-1.61a3.6 3.6 0 1 0 5.546-4.536l-.351-.351a2.4 2.4 0 0 0-1.697-.703H24.253a2.4 2.4 0 0 0-1.697.703l-.352.351a3.6 3.6 0 0 0 0 5.091ZM22.35 28.839a5.41 5.41 0 0 0 5.4-.349c.858.574 1.89.91 3 .91s2.142-.336 3-.91a5.409 5.409 0 0 0 5.4.349v8.96h.3a.9.9 0 0 1 0 1.8h-5.4a.9.9 0 0 1-.9-.9v-4.2a.9.9 0 0 0-.9-.9h-3a.9.9 0 0 0-.9.9v4.2a.9.9 0 0 1-.9.9h-5.4a.9.9 0 1 1 0-1.8h.3v-8.96Z"
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
        <stop offset={0.324} stopColor="#85CDFA" stopOpacity={0} />
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
        <stop offset={0.585} stopColor="#85CDFA" stopOpacity={0} />
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
        <stop offset={0.324} stopColor="#85CDFA" stopOpacity={0} />
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
        <stop offset={0.577} stopColor="#85CDFA" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default ProductStore
