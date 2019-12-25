import React from "react";

export const Logo = () => (
  <svg viewBox="0 0 606 239" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.323001585 0"
          in="shadowOffsetOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)" fill="#FFF" fillRule="evenodd">
      <path d="M292.595 40.128c4.368 0 10.08-.56 16.352-1.344-1.792 6.944-5.376 17.024-8.512 25.536-8.176 22.512-12.208 34.384-14.672 43.68 3.36 5.488 7.392 8.624 12.544 9.408 2.016-12.656 5.264-25.536 11.76-45.36 3.36-10.192 9.408-26.544 13.664-35.056 4.928-.56 9.856-.896 14.56-.896 2.688 0 6.832.224 10.64.56-1.232-6.832-3.248-11.312-8.736-11.312-3.92 0-29.568 3.136-44.912 3.136-5.04 0-9.072-.336-10.976-1.232-.56 1.12-1.008 3.136-1.008 4.256 0 4.816 3.36 8.624 9.296 8.624zm39.2862 65.968c.112 2.352 2.464 7.28 3.472 7.28.56 0 1.68-1.12 2.128-2.128 6.72-15.792 18.592-32.144 29.232-40.096 1.568-1.232 3.92-2.688 4.368-2.688.112 0 .448.336.448.448-7.28 14.672-12.656 28.784-12.656 33.152 0 3.472 3.024 7.056 6.048 7.056 2.352 0 10.864-4.032 10.864-5.152 0-.336-.112-.672-.784-1.792-.336 0-1.68.896-3.92.896-1.456 0-1.792-.448-1.792-1.904 0-6.048 11.76-26.88 20.944-36.96-3.36-4.256-8.288-7.056-12.208-7.056-6.832 0-17.696 9.296-31.92 27.44 2.688-10.752 6.16-19.04 11.872-30.24 5.264-10.304 14.56-22.512 25.76-33.936-2.576-2.8-9.408-5.376-14.112-5.376-10.192 11.648-20.384 28.784-26.432 44.576-6.832 17.584-11.312 35.952-11.312 46.48zm94.5022-43.344c-3.248 6.72-7.728 15.12-10.864 20.384-8.064 13.44-13.44 19.712-17.808 20.608-1.008-.336-1.568-1.12-1.568-2.688 0-13.776 14.672-33.6 26.656-35.504-.336-2.8-5.376-8.064-8.4-8.848-12.096.672-28.224 23.52-28.224 40.208 0 7.728 3.808 13.328 9.296 13.552 6.944-1.12 16.8-12.32 22.848-25.984-2.8 7.28-4.256 13.328-4.256 17.472 0 5.6 2.016 8.288 6.048 8.288 2.24 0 5.488-.896 7.28-2.016-2.016-1.12-2.912-4.032-2.912-8.176 0-7.616 4.144-20.832 10.192-33.376.112-1.456-5.152-3.92-8.288-3.92zm22.934 2.352c-5.712 13.776-9.856 28.896-9.856 36.176 0 5.264 8.512 11.648 15.904 11.872 2.464-.224 10.528-5.6 12.208-8.176-.112-.448-.448-1.12-.784-1.68-3.136 2.464-7.28 4.256-11.76 4.816-2.352-.336-3.696-2.128-3.696-5.488 0-9.184 4.48-23.744 11.872-38.08 5.152-.112 9.744-.896 13.328-2.24 0-1.232-.56-2.464-1.232-3.136-3.136.336-6.272.448-9.184.448 3.696-6.272 6.496-10.64 10.976-16.24-1.456-1.68-8.624-4.032-11.648-4.032-2.464 1.344-8.96 10.976-13.44 19.824-3.024-.112-6.608-.448-10.528-.672 0 2.016.784 5.712 1.456 6.608h6.384zm40.8543-13.888c8.624-5.6 13.776-16.016 16.24-29.456-1.904-3.696-8.624-6.608-15.68-7.056 1.008 4.256 1.344 8.176 1.344 11.872 0 8.288-1.904 15.232-3.696 20.384 0 1.568.896 3.472 1.792 4.256zm39.734 12.208c-.896-3.472-9.52-12.208-12.88-13.104-7.84 1.68-14.784 10.304-14.784 18.256 0 6.272 3.472 12.768 3.472 20.384-12.992.896-23.072 10.528-23.072 21.952 1.232 4.144 6.384 8.4 10.64 8.736 11.984-1.232 19.264-9.296 19.264-21.728 0-1.792-.112-2.912-.112-4.032 0-1.68.56-1.904 7.504-3.472.224-.224.448-.896.448-1.456 0-.56 0-.672-.112-.896-2.352 0-4.704.112-7.84.224-.112-.224-.112-.448-.112-1.344 0-14.336 3.248-22.064 9.184-22.064 1.568 0 2.688 1.568 2.688 3.696 0 1.792-1.792 5.152-1.792 6.048.112 1.008.56 1.568 1.456 1.68 2.352 0 5.712-7.168 6.048-12.88zm-36.96 51.072c-1.456-1.008-2.24-2.352-2.24-4.032 0-5.152 9.632-14.896 15.456-15.68 0 7.728-6.048 16.8-13.216 19.712zM76.6455 91.512c-.224-.896-.336-1.904-.336-5.04 0-17.808 11.872-58.352 20.384-71.904.896 25.872 3.024 46.928 9.184 71.904 1.568 3.136 7.504 4.928 14.336 4.928.448 0 1.008 0 1.456-.112-.112-.112-.112-.224-.112-.336.336-17.92 14.896-76.272 29.12-82.096-1.68-3.248-6.496-6.832-9.744-7.392-5.6.672-16.912 37.52-24.08 73.472-4.592-16.128-5.376-31.472-5.376-47.712 0-8.176.56-16.128 1.232-19.712-.672-2.016-13.328-6.944-17.472-6.944l.784 4.704c-9.856 14-30.24 64.288-30.24 77.84 0 4.032 2.352 5.824 10.864 8.4zm74.2302-4.592c17.92-3.808 30.8-19.824 30.8-38.528 0-7.168-1.904-10.528-5.936-10.528-.672 0-1.344.112-2.016.112-2.24-3.92-4.704-6.72-7.056-7.952-3.472 0-7.504 1.568-11.536 4.592-10.528 7.728-18.256 22.176-18.256 34.16 0 10.08 5.488 17.248 14 18.144zm5.712-35.28c3.696-4.816 8.96-9.632 15.456-11.536 1.008 1.568 1.456 3.696 1.456 7.504 0 17.472-9.744 31.808-23.072 34.72-1.456-.448-2.912-4.368-2.912-7.952 0-5.936 3.92-15.904 9.072-22.736zm29.318 26.768c0 4.368 1.904 7.392 6.608 8.848 4.704-6.384 6.832-10.304 12.544-17.92 2.8-3.584 8.736-10.976 11.088-12.096-.224 2.464-.672 4.368-2.352 10.976-.896 3.584-1.232 6.384-1.232 10.752 0 4.144 2.464 7.168 5.936 7.168 3.136 0 11.648-9.296 17.248-15.344 13.776-14.784 20.048-23.632 21.504-40.208-.448-.336-1.344-.56-2.464-.56-2.576 0-6.272.896-7.168 2.128-2.8 14.672-4.144 20.16-9.856 28.896-4.592 7.056-12.208 15.792-13.552 16.352 2.016-10.752 5.376-33.824 10.192-39.984-.336-1.792-4.704-2.464-7.616-2.464-.784 0-1.456 0-1.904.112-2.912 2.912-3.92 6.944-4.816 9.632-1.232 3.472-2.128 5.824-6.832 10.192-3.36 3.136-7.952 8.736-12.88 15.232 1.68-11.088 2.688-26.32 11.424-33.376-.56-1.68-4.48-2.8-7.728-2.8-6.048 0-10.304 4.032-12.208 10.976-2.912 10.528-5.936 27.552-5.936 33.488z" />
      <path d="M2.552 211.472c6.396 13.612 19.516 20.992 37.392 20.992 39.032 0 73.144-38.212 73.144-80.852 0-31.324-24.764-52.644-59.696-52.644-27.716 0-48.544 13.448-52.808 33.62 1.312 6.724 6.068 11.48 10.988 13.12 5.084-17.384 15.252-29.192 28.864-34.768-4.592 15.416-28.208 78.556-37.884 100.532zm57.892-104.304c23.78 0 38.868 13.12 38.868 35.588 0 40.344-29.684 75.44-65.272 75.44-5.084 0-9.676-.492-12.628-1.476 0-6.232 5.248-21.648 17.712-49.364 9.84-21.812 20.828-43.132 24.272-47.888-2.296-2.132-9.02-6.56-18.532-10.004 4.756-1.476 10.004-2.296 15.58-2.296zm111.768 44.936c-4.428-5.576-9.184-8.692-14.104-9.348-21.648 0-46.248 31.652-46.248 58.548 0 13.12 8.856 23.452 23.944 25.092 10.332-2.296 22.96-11.644 32.8-24.6-.82-.984-1.64-1.804-2.788-2.788-6.888 7.38-18.204 19.188-30.012 19.188-6.232 0-7.544-7.544-7.544-13.12 0-1.476.164-2.952.164-4.264 27.88-11.152 42.148-21.812 43.788-48.708zm-11.316 5.412c-.82 14.924-13.776 28.372-31.16 37.064 5.248-20.336 19.188-35.424 31.16-37.064zm11.968 53.14c0 6.278 1.314 11.826 3.066 12.994 1.314.876 3.504 3.212 3.942 4.234.584 1.314 2.774 2.482 5.402 2.774-.146-.73-.146-.876-.146-4.234 0-12.264 4.38-31.244 12.556-54.02 9.636-26.718 20.586-46.428 35.77-64.386-1.606-2.482-11.68-8.322-16.352-9.198-10.074 12.264-20.586 34.018-32.558 66.722-7.446 20.44-11.68 36.646-11.68 45.114zm34.2168-3.118c0 10.974 11.718 15.81 13.578 15.81 1.116 0 1.116-1.674 1.116-6.138.186-5.394 2.976-13.392 5.58-20.274 6.324-16.368 9.672-29.574 21.018-42.222-4.836-7.254-13.206-11.346-17.298-12.276-11.16 5.58-16.554 24.924-17.67 29.76-4.836 22.32-6.324 31.062-6.324 35.34zm35.526-80.724c0 2.046 2.604 4.464 5.58 5.022 1.86-4.092 15.438-20.646 21.018-25.854-3.72-5.58-16.74-13.02-22.506-13.02-3.162 7.998-5.766 20.088-5.766 24.366 0 2.046.93 4.836 2.232 6.138-.372 1.488-.558 2.604-.558 3.348zm1.041 64.322c0 17.22 11.644 32.308 26.076 33.62 7.38-1.312 20.828-10.66 28.044-19.68 0-.984-.82-2.624-1.64-3.28-10.168 7.544-21.976 13.284-28.372 14.104-3.936-1.804-5.904-7.052-5.904-15.908 0-13.94 5.084-27.06 14.432-37.556 6.068-6.724 13.448-11.316 17.712-11.316 2.46 0 3.772 1.64 3.772 4.756 0 5.412-3.608 11.48-10.988 18.204 1.804 2.624 4.756 4.428 7.38 4.428 6.232 0 12.464-9.84 12.464-19.844 0-10.496-6.396-16.4-17.712-16.4-22.96 0-45.264 24.108-45.264 48.872zm63.06 17.876c0 9.676 10.332 13.94 11.972 13.94.984 0 .984-1.476.984-5.412.164-4.756 2.624-11.808 4.92-17.876 5.576-14.432 8.528-26.076 18.532-37.228-4.264-6.396-11.644-10.004-15.252-10.824-9.84 4.92-14.596 21.976-15.58 26.24-4.264 19.68-5.576 27.388-5.576 31.16zm31.324-71.176c0 1.804 2.296 3.936 4.92 4.428 1.64-3.608 13.612-18.204 18.532-22.796-3.28-4.92-14.76-11.48-19.844-11.48-2.788 7.052-5.084 17.712-5.084 21.484 0 1.804.82 4.264 1.968 5.412-.328 1.312-.492 2.296-.492 2.952zm21.568 87.904c26.24-5.576 45.1-29.028 45.1-56.416 0-10.496-2.788-15.416-8.692-15.416-.984 0-1.968.164-2.952.164-3.28-5.74-6.888-9.84-10.332-11.644-5.084 0-10.988 2.296-16.892 6.724-15.416 11.316-26.732 32.472-26.732 50.02 0 14.76 8.036 25.256 20.5 26.568zm8.364-51.66c5.412-7.052 13.12-14.104 22.632-16.892 1.476 2.296 2.132 5.412 2.132 10.988 0 25.584-14.268 46.576-33.784 50.84-2.132-.656-4.264-6.396-4.264-11.644 0-8.692 5.74-23.288 13.284-33.292zm84.216 42.312c5.084 3.444 12.628 6.396 15.58 6.396 0 0 .656-.164.656-.656 0-2.132-3.608-5.74-3.608-15.088 0-17.22 12.628-35.588 20.664-54.776-1.968-2.46-9.84-5.248-15.58-5.248-7.38 7.052-10.824 16.564-12.792 21.976-3.608 9.676-11.644 19.68-16.072 25.748-9.02 12.3-13.448 17.712-16.728 19.024-.328-.328-1.148-1.312-1.148-2.952 0-5.74 4.756-20.664 6.888-25.584 9.84-23.288 18.86-35.752 20.828-37.884-3.28-3.772-10.824-5.084-14.596-5.084-13.776 10.004-25.42 37.72-29.356 54.284-.984 4.592-1.312 7.872-1.312 13.94 1.804 7.708 10.988 12.464 17.876 12.792 1.476-.164 4.264-2.132 7.052-5.084 3.608-4.264 15.416-21.156 17.22-20.992-.492 1.476-.82 3.444-.82 5.904 0 3.772 1.148 9.84 5.248 13.284zm87.988-61.664c-1.312-5.084-13.94-17.876-18.86-19.188-11.48 2.46-21.648 15.088-21.648 26.732 0 9.184 5.084 18.696 5.084 29.848-19.024 1.312-33.784 15.416-33.784 32.144 1.804 6.068 9.348 12.3 15.58 12.792 17.548-1.804 28.208-13.612 28.208-31.816 0-2.624-.164-4.264-.164-5.904 0-2.46.82-2.788 10.988-5.084.328-.328.656-1.312.656-2.132 0-.82 0-.984-.164-1.312-3.444 0-6.888.164-11.48.328-.164-.328-.164-.656-.164-1.968 0-20.992 4.756-32.308 13.448-32.308 2.296 0 3.936 2.296 3.936 5.412 0 2.624-2.624 7.544-2.624 8.856.164 1.476.82 2.296 2.132 2.46 3.444 0 8.364-10.496 8.856-18.86zm-54.12 74.784c-2.132-1.476-3.28-3.444-3.28-5.904 0-7.544 14.104-21.812 22.632-22.96 0 11.316-8.856 24.6-19.352 28.864zm56.828-40.344c0 9.676 4.592 11.316 10.004 12.792 7.052-39.524 29.356-76.916 51.824-95.448-.984-5.412-11.316-14.76-18.204-16.236-12.792 9.348-43.624 80.852-43.624 98.892zm-3.608 43.46c6.56 0 8.856-10.004 13.94-15.58-2.952-5.248-10.168-10.332-16.236-10.332-4.92 0-7.708 12.628-7.708 18.04 0 2.296 4.92 7.872 10.004 7.872z" />
    </g>
  </svg>
);