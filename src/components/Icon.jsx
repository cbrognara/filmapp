import React from 'react'

export function Icon(props) {
  switch (props.name) {
    case 'home':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={props.color}
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></rect>
          <line
            x1="128"
            y1="48"
            x2="128"
            y2="208"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="32"
            y1="80"
            x2="224"
            y2="80"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="32"
            y1="176"
            x2="224"
            y2="176"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="80"
            y1="48"
            x2="80"
            y2="80"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="176"
            y1="48"
            x2="176"
            y2="80"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="80"
            y1="176"
            x2="80"
            y2="208"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="176"
            y1="176"
            x2="176"
            y2="208"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      )

    case 'favoritos':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={props.color}
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
            fill="none"
            stroke={props.color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
      )
    default:
  }
}
