import * as React from "react"
import { SVGProps } from "react"
const Sprinkles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#54B1E5"
        d="M12 24.013c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Z"
      />
      <path
        fill="#F6F6F6 "
        d="M0 36c6.627 0 12-5.373 12-12S6.627 12 0 12s-12 5.373-12 12 5.373 12 12 12ZM24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12ZM0 12c6.627 0 12-5.373 12-12S6.627-12 0-12-12-6.627-12 0s5.373 12 12 12ZM24 12c6.627 0 12-5.373 12-12s-5.373-12-12-12S12-6.627 12 0s5.373 12 12 12Z"
      />
    </g>
    <g clipPath="url(#b)">
      <path
        fill="#54B1E5"
        d="M36 19.208a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
      />
      <path
        fill="#F6F6F6"
        d="M28.8 26.4a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
      />
      <path
        fill="#F6F6F6"
        d="M43.2 26.4a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4ZM28.8 12a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
      />
      <path
        fill="#F6F6F6"
        d="M43.2 12a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
      />
    </g>
    <g clipPath="url(#c)">
      <path
        fill="#54B1E5"
        d="M51.36 15.364a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72Z"
      />
      <path
        fill="#F6F6F6"
        d="M48 18.72A3.36 3.36 0 1 0 48 12a3.36 3.36 0 0 0 0 6.72Z"
      />
      <path
        fill="#F6F6F6"
        d="M54.72 18.72a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM48 12a3.36 3.36 0 1 0 0-6.72A3.36 3.36 0 0 0 48 12Z"
      />
      <path
        fill="#F6F6F6"
        d="M54.72 12a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M28.8 4.8h14.4v14.4H28.8z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M48 8.64h6.72v6.72H48z" />
      </clipPath>
    </defs>
  </svg>
)
export default Sprinkles
