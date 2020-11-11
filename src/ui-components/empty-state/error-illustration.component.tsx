import React from "react";

const ErrorIllustration = ({ width = "106", height = "48" }) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 106 44">
      <g fill="none" fillRule="evenodd">
        <title>Error illustration</title>
        <ellipse cx={53.064} cy={39.931} fill="#F4F4F4" rx={52.75} ry={3.492} />
        <path d="M51.043 1.701c-8.595 0-14.766 5.514-14.766 18.38 0 14.581 6.171 18.44 14.766 18.44 8.594 0 15.132-4.227 15.132-18.44 0-15.194-6.538-18.38-15.132-18.38zm.056 31.98c-5.953 0-9.063-3.491-9.063-13.59 0-8.912 3.238-13.611 9.19-13.611 5.953 0 9.19 3.086 9.19 13.61 0 9.845-3.364 13.592-9.317 13.592z" />
        <path
          fill="#C6C6C6"
          d="M31.131 28.352h-3.553V17.888a2.096 2.096 0 00-2.096-2.096h-.833a2.096 2.096 0 00-2.095 2.096v10.464H12.53a1.196 1.196 0 01-1.058-1.756L22.081 6.518a2.095 2.095 0 00-.958-2.873l-.626-.296a2.096 2.096 0 00-2.743.907L4.816 28.459a2.842 2.842 0 002.506 4.181h15.232v6.617a2.512 2.512 0 005.024 0V32.64h3.553a2.144 2.144 0 000-4.288zm62.246 0V17.888a2.095 2.095 0 00-2.095-2.096h-.833a2.092 2.092 0 00-2.095 2.096v10.464H78.33a1.195 1.195 0 01-1.058-1.756L87.88 6.518a2.095 2.095 0 00-.958-2.873l-.626-.296a2.095 2.095 0 00-2.743.907L70.616 28.459a2.84 2.84 0 002.506 4.181h15.232v6.617a2.512 2.512 0 105.023 0V32.64h3.554a2.144 2.144 0 000-4.288h-3.554z"
        />
        <path
          stroke="#8D8D8D"
          strokeWidth={0.5}
          d="M32.111 27.126h-3.553V16.662a2.096 2.096 0 00-2.096-2.095h-.832a2.095 2.095 0 00-2.096 2.095v10.464H13.511c-.42 0-.808-.22-1.025-.578a1.199 1.199 0 01-.033-1.177L23.062 5.293a2.097 2.097 0 00-.958-2.874l-.627-.295a2.096 2.096 0 00-2.743.907L5.796 27.234c-.22.412-.335.872-.335 1.34h0a2.841 2.841 0 002.841 2.841h15.232v6.617a2.512 2.512 0 002.512 2.512h0a2.512 2.512 0 002.512-2.512v-6.617h3.553a2.144 2.144 0 002.145-2.144h0a2.148 2.148 0 00-2.145-2.145h0zm66.658 0h-3.554V16.662a2.095 2.095 0 00-2.095-2.095h-.833a2.092 2.092 0 00-2.095 2.095v10.464H80.169a1.197 1.197 0 01-1.058-1.755L89.719 5.293a2.097 2.097 0 00-.958-2.874l-.626-.295a2.095 2.095 0 00-2.743.907L72.454 27.234c-.22.412-.336.872-.336 1.34h0a2.841 2.841 0 002.842 2.841h15.232v6.617a2.512 2.512 0 002.511 2.512h0a2.512 2.512 0 002.512-2.512v-6.617h3.554a2.145 2.145 0 002.144-2.144h0c0-1.185-.96-2.145-2.144-2.145zM53.003.598c-8.594 0-14.765 5.514-14.765 18.38 0 14.581 6.17 18.441 14.765 18.441 8.594 0 15.133-4.227 15.133-18.441 0-15.194-6.539-18.38-15.133-18.38zm.057 31.981c-5.953 0-9.063-3.492-9.063-13.592 0-8.91 3.237-13.61 9.19-13.61 5.953 0 9.19 3.087 9.19 13.61 0 9.845-3.365 13.592-9.317 13.592h0z"
        />
        <circle cx={47.495} cy={15.812} r={1} fill="#FFF" fillRule="nonzero" />
        <circle cx={56.795} cy={15.812} r={1} fill="#FFF" fillRule="nonzero" />
      </g>
    </svg>
  );
};

export default ErrorIllustration;