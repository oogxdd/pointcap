import React from 'react'

export default () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 120 120"
    style={{
      enableBackground: 'new 0 0 120 120',
      width: 400,
      height: 400,
      display: 'block',
      visibility: 'hidden'
    }}
    xmlSpace="preserve"
  >
    <rect id="square" x={33} y={37} className="st0" width={54} height={54} />
    <polygon id="star" className="st0" points="43,37 77,64 43,91 	" />
    {/*
    <polygon id="star" className="st0" points="33,37 87,64 33,91 	" />
    <polygon id="star" className="st0" points="60,37 87,91 33,91 	" />
    */}
    <circle id="circle" className="st0" cx={60} cy="64.5" r="17.1" />
  </svg>
)
