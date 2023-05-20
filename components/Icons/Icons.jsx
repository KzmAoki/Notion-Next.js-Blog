import React, { SVGProps } from "react"

// interface IconProps extends SVGProps<SVGSVGElement> {
//   className?: string;
// }

// declare namespace JSX {
//   // JSX.Elementを定義
//   type Element = string;
//   interface IntrinsicElements {
//       'set': {
//         attributeName: string;
//         begin: string;
//         to: string;
//       }
//   }
// }

// : React.FC<IconProps>  

export const GithubIcon = ({ ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="1em"
    height="1em"
    {...rest}
    className={`w-full h-auto`}
  >
    <linearGradient
      id="a"
      x1={4}
      x2={44}
      y1={23.508}
      y2={23.508}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4c4c4c" />
      <stop offset={1} stopColor="#343434" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z"
    />
    <path
      d="M30.01 41.996 30 36.198c0-.939-.22-1.856-.642-2.687 5.641-1.133 8.386-4.468 8.386-10.177 0-2.255-.665-4.246-1.976-5.92.1-.317.174-.645.22-.981.188-1.369-.023-2.264-.193-2.984l-.027-.116c-.186-.796-.409-1.364-.418-1.388l-.111-.282-.111-.282-.302-.032-.303-.032s-.199-.021-.501-.021c-.419 0-1.04.042-1.627.241l-.196.066c-.74.249-1.439.485-2.417 1.069-.286.171-.599.366-.934.584A20.188 20.188 0 0 0 24 12.69c-1.722 0-3.365.192-4.889.571-.339-.22-.654-.417-.942-.589-.978-.584-1.677-.819-2.417-1.069l-.196-.066c-.585-.199-1.207-.241-1.626-.241-.302 0-.501.021-.501.021l-.302.032-.3.031-.112.281-.113.283c-.01.026-.233.594-.419 1.391l-.027.115c-.17.719-.381 1.615-.193 2.983.048.346.125.685.23 1.011-1.285 1.666-1.936 3.646-1.936 5.89 0 5.695 2.748 9.028 8.397 10.17a6.005 6.005 0 0 0-.452 1.224 3.248 3.248 0 0 1-.538.137 4.963 4.963 0 0 1-.739.054c-.686 0-1.225-.134-1.435-.259-.313-.186-.872-.727-1.414-1.518-.463-.675-1.185-1.558-1.992-1.927-.698-.319-1.437-.502-2.029-.502-.138 0-.265.01-.376.028-.517.082-.949.366-1.184.78a1.313 1.313 0 0 0-.088 1.141c.219.548.851.985 1.343 1.255.242.133.765.619 1.07 1.109.229.368.335.63.482.992.087.215.183.449.313.732.47 1.022 1.937 1.924 2.103 2.023.806.483 2.161.638 3.157.683l.123.003h.001c.24 0 .57-.023 1.004-.071v2.613c.002.529-.537.649-1.25.638l.547.184A19.85 19.85 0 0 0 24 44c2.355 0 4.605-.428 6.703-1.176l.703-.262c-.711-.024-1.39-.14-1.396-.566z"
      opacity={0.05}
    />
    <path
      d="M30.781 42.797c-.406.047-1.281-.109-1.281-.795v-5.804a5.445 5.445 0 0 0-.936-3.052c5.915-.957 8.679-4.093 8.679-9.812 0-2.237-.686-4.194-2.039-5.822.137-.365.233-.75.288-1.147.175-1.276-.016-2.086-.184-2.801l-.027-.116a10.279 10.279 0 0 0-.397-1.319l-.111-.282-.303-.032s-.178-.019-.449-.019c-.381 0-.944.037-1.466.215l-.196.066c-.714.241-1.389.468-2.321 1.024-.332.198-.702.431-1.101.694-1.533-.401-3.192-.605-4.937-.605-1.762 0-3.435.205-4.979.61a31.394 31.394 0 0 0-1.109-.699c-.932-.556-1.607-.784-2.321-1.024l-.196-.066c-.521-.177-1.085-.215-1.466-.215a4.68 4.68 0 0 0-.449.019l-.302.032-.113.283c-.009.022-.219.558-.397 1.319l-.027.116c-.169.715-.36 1.524-.184 2.8.056.407.156.801.298 1.174-1.327 1.62-1.999 3.567-1.999 5.795 0 5.703 2.766 8.838 8.686 9.806a5.445 5.445 0 0 0-.813 1.964 4.22 4.22 0 0 1-.891.256c-.263.04-.537.06-.814.06-.69 0-1.353-.129-1.69-.329-.44-.261-1.057-.914-1.572-1.665-.35-.51-1.047-1.417-1.788-1.755-.635-.29-1.298-.457-1.821-.457-.11 0-.21.008-.298.022-.366.058-.668.252-.828.534a.815.815 0 0 0-.059.708c.179.448.842.85 1.119 1.002.335.184.919.744 1.254 1.284.251.404.37.697.521 1.067.085.209.178.437.304.712.331.719 1.353 1.472 1.905 1.803.754.452 2.154.578 2.922.612l.111.002c.299 0 .8-.045 1.495-.135v3.177c0 .779-.991.81-1.234.81-.031 0 .503.184.503.184A19.946 19.946 0 0 0 24 44c2.178 0 4.269-.36 6.231-1.003 0 0 .581-.204.55-.2z"
      opacity={0.07}
    />
    <path
      fill="#fff"
      d="M36.744 23.334c0-2.31-.782-4.226-2.117-5.728.145-.325.296-.761.371-1.309.172-1.25-.031-2-.203-2.734s-.375-1.25-.375-1.25-.922-.094-1.703.172-1.453.469-2.422 1.047c-.453.27-.909.566-1.27.806-1.543-.428-3.24-.648-5.025-.648-1.801 0-3.513.221-5.067.652a31.422 31.422 0 0 0-1.277-.811c-.969-.578-1.641-.781-2.422-1.047s-1.703-.172-1.703-.172-.203.516-.375 1.25-.375 1.484-.203 2.734c.077.562.233 1.006.382 1.333-1.31 1.493-2.078 3.397-2.078 5.704 0 5.983 3.232 8.714 9.121 9.435a4.972 4.972 0 0 0-1.303 2.691c-.387.17-.833.33-1.262.394-1.104.167-2.271 0-2.833-.333s-1.229-1.083-1.729-1.813c-.422-.616-1.031-1.331-1.583-1.583-.729-.333-1.438-.458-1.833-.396-.396.063-.583.354-.5.563.083.208.479.521.896.75.417.229 1.063.854 1.438 1.458.418.674.5 1.063.854 1.833.249.542 1.101 1.219 1.708 1.583.521.313 1.562.491 2.688.542.389.018 1.308-.096 2.083-.206v3.75c0 .639-.585 1.125-1.191 1.013 1.945.654 4.022.986 6.189.986 2.166 0 4.243-.332 6.19-.984-.605.111-1.19-.375-1.19-1.014v-5.804a4.97 4.97 0 0 0-1.373-3.425c5.846-.702 9.117-3.368 9.117-9.439zm-25.505 9.393c-.154-.079-.237-.225-.185-.328.052-.103.22-.122.374-.043s.237.225.185.328-.22.122-.374.043zm1.212.755c-.081.088-.255.06-.389-.062s-.177-.293-.096-.381c.081-.088.255-.06.389.062s.177.293.096.381zm.754 1.25c-.102.072-.275.005-.386-.15s-.118-.34-.016-.412.275-.005.386.15c.11.155.118.34.016.412zm1.083.941c-.069.112-.265.117-.437.012s-.256-.281-.187-.393c.069-.112.265-.117.437-.012s.256.281.187.393zm1.024.921c-.213-.026-.371-.159-.353-.297.017-.138.204-.228.416-.202.213.026.371.159.353.297-.017.137-.203.228-.416.202zm1.651.239c-.227-.013-.404-.143-.395-.289.009-.146.2-.255.427-.242.227.013.404.143.395.289-.009.147-.2.255-.427.242zm1.558-.156c-.242 0-.438-.126-.438-.281s.196-.281.438-.281.438.126.438.281-.197.281-.438.281z"
    />
  </svg>
);

export const TwitterIcon = ({ ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...rest}
    className={`w-full h-auto`}
  >
    <path
      fill="#03A9F4"
      d="M42 12.429a14.978 14.978 0 0 1-4.247 1.162 7.38 7.38 0 0 0 3.251-4.058 14.829 14.829 0 0 1-4.693 1.776A7.377 7.377 0 0 0 30.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 0 1-15.224-7.654 7.23 7.23 0 0 0-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 0 1-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 0 1-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 0 1-9.174 3.134 14.61 14.61 0 0 1-1.761-.104A21.109 21.109 0 0 0 17.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0 0 42 12.429"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);