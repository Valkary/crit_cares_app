import * as React from "react";
import Svg, { SvgProps, Path, G, Defs, ClipPath } from "react-native-svg";

const logoSizes = (width: number) => {
  const conversion_value = 320 / 435;
  const height_pixels = width * conversion_value;

  return [width, height_pixels];
}

function CritCaresLogo(props: SvgProps) {
  const [dimensions, setDimensions] = React.useState([435, 320]);

  React.useEffect(() => {
    if (props.width && typeof props.width === "number") {
      setDimensions(logoSizes(props.width));
    }
  }, [props.width]);

  const [width, height] = dimensions;

  return (
    <Svg
      viewBox="0 0 435 320"
      fill="none"
      width={width}
      height={height}
      {...props}
    >
      <Path fill="#fff" d="M0 0h434.91v319.08H0z" />
      <G clipPath="url(#prefix__clip0_1_2)">
        <Path d="M103.92 0H.44v195.47h103.48V0z" fill="#0076B0" />
        <Path d="M323.94 0H220.46v195.47h103.48V0z" fill="#6BB9DC" />
        <Path d="M433.96 0H330.48v195.47h103.48V0z" fill="#A1DAF8" />
        <Path d="M213.93 0H110.45v195.47h103.48V0z" fill="#0097D9" />
        <Path
          d="M35.99 259.74c-4.07 4.01-9.32 5.88-15.03 5.88-14.69 0-20.9-10.11-20.96-20.39-.05-10.34 6.67-20.85 20.96-20.85 5.37 0 10.45 2.03 14.52 6.04l-4.97 4.8c-2.6-2.55-6.1-3.73-9.54-3.73-9.54 0-13.67 7.12-13.61 13.73.05 6.55 3.84 13.39 13.61 13.39 3.45 0 7.34-1.41 9.94-4.01l5.08 5.14zM76.65 264.72h-8.87L56.26 251.5h-7.18v13.22h-7.45v-39.6c6.27 0 12.54.05 18.81.05 9.32.06 14.24 6.27 14.24 13.11 0 5.42-2.48 10.9-10 12.43l11.98 13.5-.01.51zm-27.57-32.6v12.65h11.35c4.75 0 6.78-3.16 6.78-6.32 0-3.17-2.09-6.33-6.78-6.33H49.08zM88.55 225.17h-7.4v39.55h7.4v-39.55zM108.99 231.95H96.45v-6.78h32.54v6.78h-12.55v32.77h-7.45v-32.77zM142.36 225.17h-7.4v39.55h7.4v-39.55zM185.62 259.74c-4.07 4.01-9.32 5.88-15.03 5.88-14.69 0-20.9-10.11-20.96-20.39-.06-10.34 6.66-20.85 20.96-20.85 5.37 0 10.45 2.03 14.51 6.04l-4.97 4.8c-2.6-2.55-6.1-3.73-9.54-3.73-9.54 0-13.67 7.12-13.61 13.73.05 6.55 3.84 13.39 13.61 13.39 3.44 0 7.34-1.41 9.94-4.01l5.09 5.14zM217.52 257.26h-20.67l-3.39 7.45h-8.08l17.74-39.55h8.13l17.74 39.55h-8.13l-3.34-7.45zm-10.33-23.78l-7.35 16.83h14.69l-7.34-16.83zM241.8 225.17v32.66h20.33v6.89h-27.79v-39.55h7.46zM316.46 259.74c-4.07 4.01-9.32 5.88-15.02 5.88-14.69 0-20.9-10.11-20.96-20.39-.05-10.34 6.66-20.85 20.96-20.85 5.37 0 10.45 2.03 14.51 6.04l-4.97 4.8c-2.6-2.55-6.1-3.73-9.54-3.73-9.54 0-13.67 7.12-13.61 13.73.05 6.55 3.84 13.39 13.61 13.39 3.44 0 7.34-1.41 9.94-4.01l5.08 5.14zM348.36 257.26h-20.68l-3.39 7.45h-8.08l17.74-39.55h8.13l17.74 39.55h-8.13l-3.33-7.45zm-10.34-23.78l-7.34 16.83h14.69l-7.35-16.83zM399.64 264.72h-8.87l-11.52-13.22h-7.17v13.22h-7.46v-39.6c6.27 0 12.54.05 18.81.05 9.32.06 14.24 6.27 14.24 13.11 0 5.42-2.49 10.9-10 12.43l11.98 13.5v.51h-.01zm-27.57-32.6v12.65h11.35c4.75 0 6.78-3.16 6.78-6.32 0-3.17-2.09-6.33-6.78-6.33h-11.35zM433.56 264.72h-29.59v-39.55h29.59v7.23h-22.19v9.1h21.41v6.95h-21.41v8.93h22.19v7.34zM9.06 283.33h-4.1v35.18h4.1v-35.18zM50.13 309.74l-21.24-26.12-.23-.29h-2.25v35.17h4.14v-26.36l21.3 26.08.23.28h2.15v-35.17h-4.1v26.41zM95.39 309.74l-21.25-26.12-.23-.29h-2.24v35.17h4.14v-26.36l21.29 26.08.23.28h2.16v-35.17h-4.1v26.41zM133.64 282.8c-12.25 0-17.73 9.08-17.73 18.07 0 8.77 5.55 18.21 17.73 18.21 12.11 0 17.68-9.39 17.73-18.11.03-5.28-1.77-10.01-5.06-13.32-3.16-3.17-7.54-4.85-12.67-4.85zm0 32.32c-9.31 0-13.59-7.36-13.63-14.21-.03-4.21 1.36-7.93 3.89-10.48 2.39-2.41 5.77-3.68 9.75-3.68 9.45 0 13.68 7.11 13.68 14.16-.01 6.85-4.3 14.21-13.69 14.21zM179.32 312.78l-11.91-29.45h-4.47l14.27 34.78.2.49h3.83l14.46-35.27h-4.46l-11.92 29.45zM225.42 283.33h-3.84l-15.78 35.18h4.49l3.65-8.26h19.07l3.7 8.26h4.48l-15.57-34.71-.2-.47zm-9.78 22.96l7.84-17.76 7.84 17.76h-15.68zM246.87 287.24h12.16v31.26h4.14v-31.26h12.15v-3.86h-28.45v3.86zM294.27 283.33h-4.1v35.18h4.1v-35.18zM328.87 282.8c-12.25 0-17.73 9.08-17.73 18.07 0 8.77 5.55 18.21 17.73 18.21 12.11 0 17.68-9.39 17.73-18.11.03-5.28-1.77-10.01-5.06-13.32-3.16-3.17-7.54-4.85-12.67-4.85zm0 32.32c-9.3 0-13.59-7.36-13.63-14.21-.03-4.21 1.36-7.93 3.89-10.48 2.39-2.41 5.76-3.68 9.74-3.68 9.45 0 13.68 7.11 13.68 14.16 0 6.85-4.28 14.21-13.68 14.21zM386.4 309.74l-21.24-26.12-.23-.29h-2.25v35.17h4.15v-26.36l21.29 26.08.23.28h2.16v-35.17h-4.11v26.41zM421.41 298.5l-.36-.07c-5.83-1.09-9.64-2.06-9.64-5.57 0-5.88 8.44-6.04 9.4-6.04 3.62.04 7.29.58 9.54 4.19l.4.65 3.47-2.06-.45-.68c-3.38-5.03-7.61-6.06-12.94-6.06-4.64 0-8.81 1.43-11.16 3.82-1.64 1.68-2.44 3.79-2.4 6.28 0 6.85 6.94 8.21 13.07 9.41 6.32 1.2 10.46 2.31 10.42 6.44 0 5.71-6.95 6.33-9.93 6.33-3.94 0-8.91-1.95-10.79-5.67l-.35-.69-3.69 1.84.35.7c2.88 5.7 9.36 7.73 14.48 7.73 3.28 0 14.02-.74 14.08-10.19-.01-7.78-7.17-9.15-13.5-10.36z"
          fill="#575756"
        />
        <Path
          d="M97.47 117.57l.33-.26c3.09-2.38 7.75-5.97 4.15-16.31 1.17-5.53.39-9.84-2.38-13.16.85-3.08 1.69-9.45-4.1-13.24-1.37-3.55-3.51-8.61-10.62-9.3-1.57-2.38-4.27-5.27-9.66-5.27-.93 0-1.92.09-2.95.26-3.34-3.28-8.03-4.42-13.86-3.34-1.38-.78-3.4-1.23-5.52-1.23-2.65 0-5.18.71-7.17 2.02-4.5-.43-16.76-.93-22.69 4.4-3.81 1.07-6.14 2.35-7.41 4.09-4.66.61-8.44 2.94-11.24 6.92-2.46 3.49-5.22 8.91-1.21 15.91-.92 2.19-2.34 6.78-.36 10.92 1.46 3.05 4.45 5.19 8.88 6.38.16.16.32.35.49.53 1.61 1.75 4.29 4.67 9.21 4.67 2.48 0 5.31-.76 8.4-2.25.37.49.72.96 1.05 1.42 2.98 4.1 5.55 7.53 15.2 6.57 1.78-.14 4.83-2 6.13-2.85 1.01.68 3.22 1.86 6.39 1.86 1.13 0 2.28-.16 3.44-.45-.51 2.2-.52 5.24 1.04 7.76 1.19 1.93 3.79 4.23 9.36 4.23 11.6 0 18.55 3.35 21.25 10.24l.66 1.67 1.03-1.47c1.89-2.68 2.26-4.15 2.3-4.35.06-.34 1.31-7.69-3.01-12.17.25-.4.16-.91-.2-1.22.43-.68 1.25-1.57 3.07-2.98zM45.84 59.69l.36.04.3-.21c1.71-1.2 3.97-1.86 6.36-1.86 2.29 0 3.98.58 4.81 1.12L58 59l.39-.08c5.53-1.1 9.85-.06 12.82 3.08l.37.39.52-.1c1.09-.21 2.13-.32 3.09-.32 4.69 0 6.89 2.55 8.28 4.78l.26.42.5.03c6 .4 7.87 4.03 9.55 8.4l.12.3.28.17c5.32 3.28 4.15 9.29 3.4 11.72l-.16.53.37.41c2.65 2.93 3.38 6.9 2.22 12.13l-.06.27.09.26c3.3 9.22-.42 12.08-3.41 14.39l-.34.26c-3.34 2.59-3.85 3.82-4.22 5.26l-.07.28c-1.06.76-3 1.61-6.31.77-2.73-.68-4.6-1.83-5.39-3.32-.65-1.23-.44-2.44-.15-3.24.42-1.16 1.22-2.01 2.24-2.4 1.27-.5 2.83-.28 4.5.62 3.16 1.69 5.25.57 6.22-.25 1.64-1.4 2.47-4.02 1.84-5.88-.63-1.85-1.84-3.25-3.5-4.02-2.36-1.09-5.45-.9-9.19.56-1.99.79-3.36-.29-4-1-1.42-1.57-1.87-4.07-1.03-5.7.75-1.45 2.44-2.09 4.91-1.79 1.27.13 2.28 1.22 3.45 2.48.85.92 1.73 1.87 2.85 2.59 1.82 1.16 4.18 1.09 6.18-.21 1.94-1.25 2.96-3.28 2.66-5.29-.31-2.1-2.11-5.02-8.89-6.98-1.13-.71-1.61-1.65-1.47-2.89.19-1.85 1.68-3.52 2.34-3.75 1.53-.74 2.41-2.09 2.47-3.8.08-2.23-1.31-4.68-3.3-5.83-1.7-.98-3.56-.94-5.24.11-5.3 3.3-4.53 6.3-3.65 9.78l.17.65c.54 2.17-.61 6.18-2.73 7.76-1.24.93-2.61.92-4.17-.01-1.53-.9-2.28-1.89-2.24-2.93.05-1.46 1.59-2.81 2.04-3.09 1.1-.57 2.03-1.32 2.58-2.43.7-1.41 1.19-3.92-.39-7.89-2.47-6.22-7.15-6.29-7.41-6.22-2.33-.06-3.42-.81-3.66-1.51-.17-.49.04-1.06.54-1.47.63-.52.9-1.35.73-2.28-.25-1.35-1.5-3.04-3.41-3.67-1.07-.36-3.25-.64-5.6 1.55-2.31 2.14-3.35 4.04-3.18 5.82.12 1.33.91 2.46 2.33 3.38.5.31 1.23 2.2.6 3.67-.71 1.7-3.1 2.13-6.72 1.27-1.58-.36-2.51-1.14-2.75-2.32-.27-1.31.38-2.61.65-2.81 1.3-.93.48-3.65-.59-5.18-1.39-1.99-4.02-3.32-7.21-1.14-3.49 2.41-5.66 5.58-5.79 8.49-.09 1.94.71 3.66 2.29 4.97 2.26 1.87 3.12 4.22 2.8 5.57-.14.59-.5.94-1.17 1.09-1.49.33-2.91.65-3.63.09-.57-.43-.88-1.49-.95-3.12-.06-1.75-1.11-3.06-2.87-3.59-2.31-.71-5.12.14-6.4 1.92-.65.9-1.45 2.82.45 5.5 2.1 3.25 3.88 5.41 8.48 5.18.52 0 2.02 1.21 2.02 2.38.01 1.21-2.15 2-5.52 2.06-2.18-.25-4.14.43-5.29 1.75-.88 1.01-1.18 2.32-.84 3.69.4 1.63.42 4.66-.83 5.95-.56.58-1.34.75-2.39.54-1.64-.34-2.65-1.24-2.83-2.53-.17-1.15.38-2.38 1.27-2.86 1-.53 1.52-1.63 1.45-3.02-.1-1.64-1.05-3.65-2.7-4.31-.68-.27-2.01-.5-3.45.87-1.57 1.49-3.21 1.4-4.14.88-.95-.53-1.36-1.56-1.11-2.75.35-1.59 1.82-3.19 3.75-4.05 1.79-.8 3.61-.82 4.96-.05 1.6.91 2.7.41 3.21.05 1.29-.92 1.59-2.88 1.31-4.4-.31-1.72-1.31-2.96-2.66-3.31-.58-.15-1.35-.29-2.19-.44-2.29-.41-5.75-1.03-6.44-2.44-.08-.16-.32-.67.26-1.77 1.13-2.12 2.37-3.35 3.4-3.36h.01c.9 0 1.59.99 1.91 1.58 1.22 2.19 4.42 2.72 6.82 2.08 2.09-.54 3.34-1.84 3.34-3.45v-.47c-.01-1.72-.03-3.49.94-4.41.63-.6 1.69-.88 3.25-.77 3.39.21 4.87-1.12 5.53-2.26.91-1.55.64-3.5-.09-4.62-.07-.11-.2-.13-.3-.2 2.02-.23 3.97-.36 5.46-.36 2.26.04 4.18.18 5.4.3zm10.32 8.5c-.92-.58-1.38-1.21-1.45-1.92-.1-1.11.79-2.57 2.57-4.23 1.23-1.14 2.51-1.51 3.69-1.14 1.14.38 1.97 1.41 2.11 2.19.03.16.04.36-.04.43-1.13.92-1.58 2.33-1.14 3.6.27.81 1.36 2.71 5.47 2.81.15 0 3.66.06 5.63 5 1.04 2.62 1.2 4.81.45 6.31-.36.75-.91 1.19-1.46 1.51-.19.06-.38.13-.61.28-.16.06-.33.18-.48.22-1.18.34-2.34.19-3.25-.41-1.14-.75-1.88-2.14-2.12-4.02-.47-3.55-2.6-4.6-3.84-4.9-.43-.11-.87-.16-1.32-.16-1.04 0-2.1.27-2.99.76.05-.09.1-.19.14-.28.93-2.19.03-5.16-1.36-6.05zm39.57 65.35c0 .01-.2.77-1.05 2.19-3.05-5.88-9.4-8.93-18.91-9.55 0-.43-.23-.83-.67-.94-2.07-.52-3.41-1.44-4.1-2.82-1.54-3.07.49-7.89 1.7-10.78.27-.62.5-1.18.66-1.63.98-2.69.68-7.06-1.51-9.73-1.13-1.37-3.21-2.92-6.89-2.34-4.53.69-5.65 3.05-5.9 4.4-.49 2.52 1.12 5.13 2.94 6.21 2.83 1.69 5.52-.98 6.53-2.61a.961.961 0 00-.31-1.33.965.965 0 00-1.33.31c-.01.03-2 3.09-3.91 1.97-1.22-.72-2.33-2.57-2.02-4.18.36-1.87 2.53-2.59 4.29-2.85 2.2-.35 3.92.22 5.1 1.65 1.83 2.23 1.86 5.99 1.19 7.84-.16.43-.38.95-.63 1.54-1.34 3.19-3.58 8.53-1.66 12.39.54 1.09 1.45 1.91 2.55 2.6-3.44-.11-5.88-1.19-7.16-3.27-1.6-2.59-1.13-6.13-.28-7.82l1.12-2.25-2.34.92c-1.58.62-3.13.93-4.62.93-3.58 0-5.7-1.81-5.71-1.82l-.57-.5-.62.43c-1.56 1.07-4.51 2.79-5.79 2.89-8.57.85-10.48-1.68-13.46-5.78-.5-.68-1.01-1.38-1.58-2.11l-.49-.62-.71.36c-3.1 1.59-5.87 2.39-8.24 2.39-4.07 0-6.22-2.33-7.79-4.04-.26-.29-.5-.55-.73-.78l-.19-.19-.25-.07c-4.01-1.02-6.65-2.85-7.89-5.41-1.78-3.73-.19-8.06.58-9.75l.22-.47-.27-.44c-3.74-6.12-1.65-10.62.88-14.21 2.56-3.63 6.03-5.71 10.31-6.17l.47-.05.25-.4c.93-1.52 3.09-2.69 6.76-3.7l.41-.23c2.34-2.21 6.03-3.23 9.58-3.76-.25.32-.35.74-.12 1.1.33.5.58 1.68.04 2.59-.7 1.22-2.42 1.37-3.75 1.3-2.14-.12-3.65.3-4.7 1.3-1.58 1.5-1.56 3.9-1.54 5.83v.46c0 .79-.98 1.33-1.89 1.57-1.68.44-3.93.12-4.64-1.16-.92-1.66-2.2-2.57-3.6-2.57h-.03c-1.26.01-3.17.78-5.09 4.38-.7 1.3-.8 2.49-.3 3.52 1.12 2.3 4.85 2.96 7.84 3.5.79.14 1.5.27 2.04.41.9.24 1.18 1.43 1.25 1.78.21 1.15-.11 2.18-.53 2.48-.25.18-.63.13-1.14-.16-1.91-1.07-4.35-1.08-6.7-.04-2.51 1.13-4.36 3.2-4.85 5.41-.44 2.03.34 3.89 2.04 4.85 1.99 1.11 4.51.66 6.43-1.16.77-.73 1.25-.54 1.4-.48.74.3 1.42 1.49 1.48 2.61.01.29.01.98-.41 1.21-1.6.85-2.56 2.89-2.28 4.84.3 2.1 1.94 3.65 4.36 4.15 2.16.46 3.46-.36 4.18-1.1 1.88-1.96 1.81-5.72 1.31-7.76-.19-.76-.05-1.42.42-1.95.72-.84 2.09-1.25 3.75-1.1 6.59-.1 7.55-2.55 7.54-4.01-.02-2.17-2.28-4.29-4-4.29-3.57.06-4.77-1.14-6.84-4.33-.65-.91-1.25-2.21-.48-3.28.79-1.09 2.79-1.64 4.27-1.2.95.29 1.46.9 1.5 1.81.08 2.26.64 3.76 1.7 4.58 1.45 1.11 3.38.69 5.32.25 1.3-.28 2.22-1.2 2.54-2.51.56-2.33-.82-5.35-3.44-7.51-1.12-.93-1.65-2.07-1.59-3.4.1-2.31 1.95-4.91 4.95-6.98 1.4-.97 2.6-1.06 3.66-.27 1.35 1.02 1.87 2.95 1.78 3.53-.92.8-1.65 2.81-1.28 4.64.23 1.13 1.08 3.13 4.21 3.83 3.39.82 5.55.5 6.91-.2-.85 1.45-1.15 3.03-.84 4.62.48 2.55 2.44 4.95 5.81 7.13 1.79 1.16 1.72 2.9 1.52 3.83-.45 2.07-2.21 3.9-4.02 4.17-1.59.25-3.12-.77-4.32-2.94-.64-1.11-.35-2.57 0-4.25.25-1.23.51-2.51.44-3.83-.11-2.15-1.55-4.02-3.78-4.89-2.14-.85-4.39-.48-5.86.94-1.52 1.48-2.83 4.64-.47 11.29.08 1.32-.4 2.26-1.48 2.87-1.61.92-3.83.7-4.41.29-1.49-.8-3.1-.72-4.52.22-1.86 1.23-3.04 3.79-2.81 6.08.19 1.94 1.31 3.43 3.14 4.18 5.77 2.39 7.77 0 10.07-2.75l.43-.52c1.45-1.71 5.35-3.12 7.89-2.32 1.47.47 2.26 1.58 2.43 3.39.16 1.77-.2 2.96-1.07 3.53-1.24.82-3.28.33-3.72.13-.32-.25-.79-.26-1.15-.02-.44.31-.54.91-.23 1.35.36.5 1.77.93 3.25.93.7 0 1.41-.09 2.03-.32 1.47-.54 3.16-1.99 2.82-5.77-.23-2.56-1.57-4.37-3.77-5.06-3.4-1.06-8.04.65-9.95 2.91l-.44.52c-2.25 2.7-3.39 4.03-7.85 2.21-1.46-.6-1.87-1.74-1.95-2.59-.16-1.59.69-3.44 1.96-4.28.81-.54 1.67-.58 2.42-.19 1.22.89 4.28.96 6.39-.25 1.76-1 2.63-2.73 2.44-4.85 0-.08-.02-.16-.05-.24-1.6-4.44-1.61-7.86-.05-9.38 1.1-1.06 2.68-.96 3.8-.53 1.18.46 2.47 1.55 2.56 3.19.05 1.08-.18 2.23-.4 3.34-.39 1.9-.79 3.87.22 5.6 2.16 3.88 4.88 4.09 6.29 3.89 2.59-.39 5.01-2.82 5.63-5.68.53-2.42-.34-4.55-2.36-5.86-2.87-1.86-4.59-3.88-4.97-5.87-.31-1.6.32-2.9.89-3.71.61-.85 2.3-1.54 3.8-1.18 1.32.33 2.15 1.47 2.39 3.28.41 3.1 1.84 4.64 2.97 5.38.83.54 1.78.76 2.77.81-.25.41-.46.84-.58 1.28-.42 1.51-.23 3.72 3.04 5.65 2.22 1.31 4.46 1.28 6.31-.11 2.84-2.12 4.16-6.91 3.45-9.78l-.17-.66c-.87-3.4-1.31-5.11 2.79-7.66 1.35-.83 2.51-.5 3.24-.08 1.39.8 2.39 2.56 2.33 4.09-.04.98-.5 1.7-1.25 2.08-1.42.47-3.28 2.9-3.53 5.33-.22 2.02.67 3.73 2.51 4.82.07.04.15.08.22.1 4.53 1.29 7.32 3.28 7.64 5.44.22 1.5-.78 2.73-1.79 3.38-1.07.69-2.69 1.11-4.09.21-.91-.59-1.71-1.45-2.48-2.28-1.31-1.42-2.68-2.89-4.66-3.09-4.46-.52-6.18 1.55-6.84 2.83-1.2 2.33-.63 5.72 1.32 7.88 1.67 1.84 3.89 2.37 6.14 1.51 3.18-1.25 5.82-1.47 7.66-.61 1.48.69 2.17 1.95 2.48 2.88.34 1-.1 2.79-1.27 3.78-1.04.88-2.44.88-4.05.02-2.75-1.48-4.85-1.21-6.11-.73-1.55.59-2.75 1.85-3.36 3.55-.61 1.68-.52 3.34.26 4.81.74 1.39 2.48 3.26 6.62 4.29 1.13.28 2.14.4 3.05.4 2.35 0 3.94-.77 4.97-1.51 3.68 3.86 2.58 10.46 2.58 10.49zM320.52 71.43c-11.48-19.74-31.23-19.64-40.97-14.94-4.88 2.35-8.37 5.87-8.88 8.99-.22 1.29.11 2.47 1.06 3.43l.45.34c1.91 1.49 4.12 2.6 8.13-1.37 2.74-2.72 9.24-5.92 15.08-4.45 5.81 1.43 7.49 2.35 11.99 6.51 4.62 4.28 8.97 11.98 7.94 17.84-.58 3.3-2.11 5.8-4.32 7.02-1.66.92-3.53 1.02-5.14.24-1.46-.71-2.32-1.52-2.63-2.48-.32-.99-.08-2.26.81-4.11 1.59-3.27 4.55-9.35-.42-14.67-3.47-3.72-9.02-8.11-16.94-3.22-4.59 2.83-5.69 5.44-5.81 7.13-.1 1.39.42 2.67 1.42 3.52 1.64 1.37 4.19.97 7.81-1.24 3.98-2.44 6.47.89 6.92 1.59 1 1.51-.52 5.91-1.51 6.67-.93.7-2.4.27-3.2-.57-.55-.58-1.02-1.56-.14-2.92.32-.49.21-1.16-.26-1.5a.993.993 0 00-1.41.27c-1.26 1.93-1.12 4.11.37 5.69 1.41 1.49 3.96 2.18 5.81.8 1.71-1.3 3.75-7.02 2.01-9.67-1.75-2.66-5.32-4.82-9.59-2.22-3.65 2.24-5.04 1.84-5.55 1.43-.22-.19-.72-.72-.66-1.67.07-.96.78-2.95 4.8-5.43 5.19-3.19 9.66-2.31 14.49 2.87 3.93 4.2 1.6 8.98-.04 12.35-1.07 2.2-1.34 4.04-.83 5.61.5 1.55 1.72 2.77 3.71 3.73 2.16 1.06 4.68.95 6.92-.28 2.77-1.53 4.68-4.57 5.38-8.54 1.32-7.51-4.42-15.99-8.6-19.86-4.78-4.42-6.71-5.47-12.87-6.99-6.95-1.72-14.06 2.14-16.92 4.98-3.11 3.08-4.19 2.26-5.56 1.21l-.36-.26c-.33-.34-.44-.79-.34-1.39.32-1.93 2.87-5.07 7.72-7.4 9.11-4.38 27.61-4.46 38.41 14.12 3.69 6.35 4.5 12.44 2.35 17.63-2.26 5.45-7.8 9.65-14.44 10.95-6.35 1.23-20.6-9.92-42.41-33.21-1.25-1.34-2.13-2.27-2.51-2.64-3.03-2.9-17.11-11.16-30.61 1.32-6.89 6.36-10.83 13.63-11.09 20.45-.15 3.91.93 7.41 2.97 9.62.36.39 37.55 39.84 43.75 42.61 4.07 1.82 7.2 2.29 9.36 2.29 2.32 0 3.53-.54 3.63-.59.21-.1 5.1-2.49 6.41-5.89.13-.34.53-1.37-.07-2.18-.69-.94-1.97-.73-3.75-.43-1.62.27-3.64.6-5.55.19-2.11-.46-10.32-6.7-37.48-33.84l-1.72-1.71c-7.11-7.05-6.18-14.14-2.95-18.43 6.35-8.43 12.54-9.97 18.92-4.72 3.75 3.09 13.81 12.47 22.68 20.76 8.53 7.95 15.9 14.82 17.45 15.95 2.69 1.95 5.33 3.29 8.49 3.09-1.74 1.81-4.67 3.97-8.08 3.05-5.93-1.62-9.45-4.22-19.84-14.65-10.21-10.26-22.52-21.43-24.85-22.55-4.16-2.02-6.33-.16-7.06.75-1.48 1.81-1.58 4.76-.23 7.01 2.35 3.92 24.98 23.89 28.17 26.32.6.46 1.34 1.09 2.19 1.81 3.81 3.21 9.75 8.21 15.93 9.51-3.74 1.86-6.47 2.35-10.16.17-5.37-3.19-38.81-34.84-40.2-38.05-.25-.54-.85-.78-1.35-.53-.51.26-.73.89-.5 1.44 1.77 4.06 36.3 36.19 41.06 39.02 5.56 3.3 9.44 1.43 15.31-1.89.42-.24.62-.76.5-1.25-.13-.49-.58-.8-1.04-.78-6.67.39-13.94-5.68-18.29-9.34-.89-.75-1.65-1.39-2.27-1.86-4.02-3.07-25.68-22.48-27.64-25.73-.88-1.46-.85-3.33.04-4.44.93-1.14 2.64-1.2 4.69-.21 1.9.93 13.72 11.55 24.3 22.17 10.09 10.13 14.03 13.35 20.73 15.17 6.92 1.91 11.77-5.7 11.96-6.04.24-.37.23-.85-.01-1.22-.24-.37-.67-.52-1.07-.43-3.93 1.04-6.6-.12-9.65-2.33-1.46-1.05-9.13-8.21-17.25-15.79-8.9-8.3-18.99-17.72-22.79-20.84-5.04-4.16-12.91-6.66-21.74 5.07-3.81 5.04-4.98 13.31 3.14 21.36l1.72 1.71c22.7 22.68 34.93 33.61 38.46 34.38 2.26.49 4.59.1 6.28-.17.5-.09 1.14-.19 1.58-.22-.92 2.12-4.13 4.05-5.3 4.62-.04.02-3.86 1.64-11.39-1.72-5.06-2.25-38.18-36.8-43.09-42.13-1.62-1.76-2.52-4.76-2.4-8.02.14-3.6 1.67-10.85 10.4-18.91 12.25-11.32 25.34-3.81 27.93-1.34.36.35 1.21 1.25 2.42 2.55 14.43 15.41 34.66 35.69 44.21 33.81 7.29-1.43 13.39-6.11 15.92-12.2 1.72-4.11 2.67-10.84-2.45-19.66zM418.62 71.89c-6.24-13.05-15.54-17.69-21.6-17.69-1.46 0-2.78.28-3.82.81-4.53 2.31-7.25 9.85-8.81 24.43-.13 1.31-.21 2.49-.31 3.72-.91.59-1.84 1.18-2.71 1.76-.28.19-.55.35-.83.54-.14-1.92-.3-3.92-.5-6.04-1.56-14.57-4.28-22.1-8.81-24.42-1.04-.53-2.35-.81-3.82-.81-4.95 0-12.03 3.18-17.87 11.41-.06.01-.12.01-.18.02-.54.09-.89.56-.8 1.05.01.07.09.1.12.16-1 1.54-1.97 3.19-2.87 5.06-3.65 7.64-8.54 19.84-11.81 32.21-.06.12-.09.21-.09.34-2.42 9.23-3.94 18.53-3.23 26.11.69 6.07 2.16 9.98 7.35 10.7.16.02.35.04.56.04 2.25 0 7.27-1.62 12.81-3.83.07.01.12.08.2.08.23 0 .47-.08.66-.23.11-.09.21-.22.32-.32 6.65-2.7 13.8-6.11 17.66-8.51.34-.03.59-.22.74-.49.69-.46 1.27-.88 1.63-1.23l.36-.35c3.65-3.51 9.55-9.26 7.72-38.8.62-.41 1.23-.79 1.86-1.22.43-.29.91-.58 1.35-.88-2.25 31.41 3.86 37.3 7.6 40.89l.36.35c3.83 3.71 28.22 14.54 34.01 14.54.21 0 .39-.01.56-.04 5.2-.72 6.66-4.63 7.36-10.72 1.64-17.8-8.76-45.24-15.17-58.64zm-71.02.72c.95-1.98 2-3.7 3.1-5.31 5.65-.78 10.02-.26 12.87 1.64 2.54 1.69 3.25 4.02 3.44 5.26.4 2.57-.16 5.03-1.49 6.56-1.06 1.23-2.63 1.94-4.59 2.1h-.06c-3.8 0-6.34-.84-7.35-2.42-1.18-1.85-.15-4.36.34-5.17.74-1.2 1.96-1.91 3.29-1.91h.08c1.24.03 2.32.65 2.88 1.68.34.63.43 1.15.25 1.51-.25.53-1.02.74-1.02.74-.52.13-.83.62-.7 1.1.14.49.68.78 1.19.65.17-.04 1.68-.43 2.32-1.72.44-.89.35-1.93-.28-3.08-.87-1.6-2.63-2.63-4.59-2.67h-.13c-2.05 0-3.92 1.05-5.01 2.83-.87 1.42-1.91 4.48-.32 6.97 1.41 2.19 4.45 3.31 9.12 3.31h.08c2.6-.22 4.64-1.15 6.05-2.78 2.39-2.76 2.12-6.48 1.89-7.94-.24-1.52-1.1-4.39-4.22-6.47-2.98-1.98-7.27-2.64-12.66-2.13 4.98-6.39 10.88-9.34 15.34-9.34 1.13 0 2.12.2 2.86.58 3.85 1.97 6.33 9.29 7.81 23.01.24 2.52.42 4.86.57 7.1-1.33.85-2.66 1.64-3.97 2.25-6.97 3.2-24.46 5.86-35.05 3.25 2.38-6.9 5.12-13.65 7.96-19.6zm-9.42 51.37c.96 2.1 3.06 3.73 5.61 4.37 1.92.48 4.03-.06 5.6-1.46 1.72-1.52 2.48-3.67 1.97-5.61-.83-3.17-4.33-3.64-6.1-3.45-.54.05-.92.5-.86 1 .06.49.61.85 1.09.79.14-.02 3.33-.32 3.95 2.08.34 1.3-.22 2.83-1.42 3.89-1.09.97-2.47 1.34-3.72 1.02-1.97-.49-3.58-1.73-4.31-3.32-.85-1.86-.49-4.19 1.03-6.7.86-1.28 2.9-2.21 5.21-2.38 3.19-.18 6.36 1.01 8.62 3.41 4.71 5.02.6 14.01-3.43 17.82-5.61 2.28-10.76 4.02-12.85 4.02-.1 0-.18 0-.26-.01-3.54-.49-4.97-2.79-5.68-9.08-.66-7 .71-16.02 3.14-25.42 3.75-2.37 9.59-4.59 16.81-2.32 12.04 3.78 16.97 15.12 16.57 24.31-2.99 1.86-8.37 4.51-13.88 6.89 3.58-5.15 5.44-12.72 1.06-17.39-2.66-2.84-6.41-4.33-10.26-4.03-2.95.21-5.53 1.45-6.75 3.26-2.32 3.84-1.9 6.64-1.14 8.31zm33.35 1.16l-.37.36-.04.04c-.14-9.56-5.53-20.74-17.89-24.62-6.94-2.18-12.72-.61-16.83 1.55.79-2.84 1.68-5.7 2.64-8.55 11.38 2.85 29.34-.06 36.55-3.36 1.08-.49 2.14-1.1 3.2-1.75 1.56 27.75-3.87 33.07-7.26 36.33zm14.82-45.54c1.47-13.73 3.95-21.05 7.81-23.02.74-.38 1.73-.58 2.86-.58 5.9 0 14.32 5.13 19.8 16.61 2.16 4.51 4.27 9.48 6.21 14.63-3.69-4.76-11.13-10.05-20.7-10.15-.11-.01-.22-.01-.33-.01-6.5 0-11.5 2.19-15.85 4.78.07-.76.12-1.46.2-2.26zm45.45 50.75c-.72 6.31-2.15 8.61-5.68 9.1-.08.01-.17.01-.27.01-5.2 0-29.18-10.67-32.58-13.97l-.37-.36c-3.57-3.43-9.41-9.14-6.93-41 4.41-2.77 9.45-5.25 16.05-5.25h.3c12.18.14 20.41 9.4 21.24 13.33 1.04 4.94.25 12.19-5.09 17.73-5.63 5.84-14.86 4.4-21.06.57-2.86-1.78-3.67-4.51-3.84-6.49-.31-3.72 1.31-7.9 3.96-10.18 2.12-1.81 4.63-1.98 6.38-1.79 2.99.3 5.91 1.85 7.45 3.94 1.32 1.8 1.43 4.28.28 6.34-1.09 1.95-3.12 3.09-5.59 3.15h-.18c-3.04 0-4.12-1.62-4.5-2.59-.63-1.65-.1-3.6 1.23-4.52.79-.55 1.45-.78 2.07-.65.84.18 1.3 1.02 1.31 1.03.24.44.84.63 1.31.41.49-.22.7-.75.47-1.2-.09-.17-.89-1.62-2.62-2-1.18-.26-2.43.06-3.72.96-2.02 1.41-2.82 4.16-1.9 6.56.91 2.39 3.28 3.81 6.37 3.81h.22c3.2-.07 5.86-1.58 7.29-4.13 1.47-2.64 1.32-5.85-.4-8.18-1.85-2.51-5.33-4.36-8.87-4.72-3.05-.3-5.86.5-7.94 2.28-3.07 2.62-4.94 7.41-4.58 11.64.29 3.41 1.92 6.13 4.7 7.85 3.55 2.19 8.01 3.66 12.38 3.66 4.11 0 8.15-1.3 11.26-4.54 4.74-4.92 6.1-11.02 5.86-16.03 4.17 12.78 6.87 25.82 5.99 35.23zM206.12 77.29c-.59-.43-.89-.91-1.07-1.69-1.47-6.19-4.83-10.89-9.97-13.93-2.61-1.55-5.5-2.37-8.34-2.37-5.61 0-10.59 3.1-13.32 8.29-3.66 6.99-2.64 16.2 2.56 22.92l2.3 2.92c-.49.22-.92.39-1.26.51-.3-.04-.49-.08-.51-.08-9.23-1.32-9.59-14.47-9.6-14.6-.01-.43-.35-.78-.75-.78h-.01c-.41.01-.74.37-.74.81 0 .14.4 13.97 10.2 15.99 0 .01.02.02.02.04.02.05.03.09.05.14-4.63.5-11.28 3.01-13.48 12.73-2.22-9.83-8.98-12.27-13.5-12.72a.69.69 0 00.07-.15c0-.01.01-.02.02-.04 9.8-2.05 10.2-15.85 10.2-15.99.01-.44-.32-.8-.74-.81h-.01c-.41 0-.74.35-.75.78 0 .13-.35 13.28-9.63 14.61-.01 0-.19.03-.45.07-.35-.13-.77-.3-1.28-.53l2.3-2.9c5.19-6.71 6.21-15.92 2.55-22.91-2.73-5.19-7.7-8.29-13.32-8.29-2.85 0-5.73.82-8.34 2.37-5.14 3.05-8.49 7.74-9.97 13.93-.19.79-.49 1.26-1.07 1.69-8.71 6.42-9.58 19.59-5.38 28.62 1.88 4.03 4.76 7.35 6.94 9.48.08 2.25 1.1 13.94 13.17 17.03 1.36.35 2.76.52 4.18.52 6.53 0 12.65-3.78 15.59-9.62 3.36-6.7 2.97-14.32-1-19.89-1.79-2.5-4.16-4.84-6.09-6.65.16-.07.3-.14.45-.21 1.06.18 1.74.37 1.8.39 6.17.45 13.53 4.01 13.53 18.42v19.98c0 .44.34.8.75.8s.75-.36.75-.8v-19.98c0-14.42 7.35-17.98 13.67-18.45.03 0 .64-.18 1.61-.35.14.06.31.15.46.22-1.93 1.8-4.29 4.13-6.06 6.62-3.98 5.57-4.36 13.19-1 19.89 2.94 5.84 9.05 9.62 15.6 9.62 1.41 0 2.82-.18 4.18-.52 12.06-3.09 13.08-14.79 13.16-17.03 2.18-2.13 5.06-5.44 6.94-9.48 4.17-9.02 3.3-22.19-5.41-28.62zm-61.4 15.41c-4.12-2.25-10.45-7.39-11.3-18a.8.8 0 00-.82-.73c-.41.04-.72.43-.69.87.92 11.42 7.81 16.94 12.24 19.34v.03c-4.16.1-10.75-.64-13.99-5.76a.75.75 0 00-1.05-.22c-.34.24-.43.74-.2 1.11 2.16 3.41 5.53 5.09 8.85 5.87-3.12.74-6.37 2.4-8.82 5.83-.25.35-.18.85.15 1.12.32.26.8.2 1.06-.16 3.63-5.09 9.27-5.87 13.22-5.69-4.42 2.61-10.58 8.13-11.45 18.89-.04.44.27.82.69.86h.06c.39 0 .72-.31.75-.73.83-10.4 6.77-15.49 10.89-17.81.04.08.04.18.1.24 1.92 1.78 4.36 4.15 6.15 6.65 3.62 5.07 3.94 12.04.87 18.18-2.68 5.33-8.28 8.77-14.26 8.77-1.3 0-2.59-.16-3.83-.48-12.1-3.1-12.03-15.3-12.02-15.82 0-.23-.09-.45-.25-.6-2.1-2.03-5-5.29-6.84-9.24-3.92-8.42-3.16-20.68 4.89-26.6.88-.65 1.4-1.45 1.68-2.61 1.37-5.75 4.47-10.1 9.24-12.93 2.39-1.42 5.02-2.17 7.6-2.17 5.06 0 9.54 2.79 12 7.47 3.37 6.43 2.41 14.92-2.39 21.12l-2.53 3.2zm65.42 12.51c-1.85 3.97-4.73 7.21-6.84 9.24-.16.15-.25.38-.24.6 0 .13.11 12.71-12.02 15.82-1.24.32-2.53.48-3.82.48-5.99 0-11.59-3.44-14.27-8.77-3.08-6.14-2.74-13.1.87-18.18 1.78-2.5 4.22-4.87 6.14-6.65.05-.05.05-.14.08-.21 4.12 2.36 10.09 7.5 10.91 17.78.03.41.36.73.75.73h.06c.41-.04.72-.43.69-.86-.87-10.77-7.04-16.29-11.46-18.89 3.92-.19 9.58.57 13.24 5.69.25.36.73.42 1.05.16.33-.27.4-.76.15-1.12-2.45-3.43-5.7-5.09-8.82-5.83 3.32-.79 6.69-2.47 8.85-5.87.23-.36.14-.87-.21-1.11a.735.735 0 00-1.05.22c-3.23 5.11-9.83 5.85-14 5.75v-.02c4.44-2.4 11.33-7.91 12.25-19.34.03-.44-.27-.82-.69-.87-.36 0-.78.29-.81.73-.86 10.72-7.16 15.82-11.28 18.04l-2.55-3.24c-4.81-6.21-5.77-14.7-2.4-21.13 2.45-4.68 6.93-7.47 11.99-7.47 2.59 0 5.22.75 7.6 2.17 4.77 2.83 7.89 7.18 9.25 12.93.27 1.16.79 1.96 1.67 2.61 8.08 5.94 8.84 18.19 4.91 26.61z"
          fill="#fff"
        />
        <Path
          d="M206.12 77.29c-.59-.43-.89-.91-1.07-1.69-1.47-6.19-4.83-10.89-9.97-13.93-2.61-1.55-5.5-2.37-8.34-2.37-5.61 0-10.59 3.1-13.32 8.29-3.66 6.99-2.64 16.2 2.56 22.92l2.3 2.92c-.49.22-.92.39-1.26.51-.3-.04-.49-.08-.51-.08-9.23-1.32-9.59-14.47-9.6-14.6-.01-.43-.35-.78-.75-.78h-.01c-.41.01-.74.37-.74.81 0 .14.4 13.97 10.2 15.99 0 .01.02.02.02.04.02.05.03.09.05.14-4.63.5-11.28 3.01-13.48 12.73-2.22-9.83-8.98-12.27-13.5-12.72a.69.69 0 00.07-.15c0-.01.01-.02.02-.04 9.8-2.05 10.2-15.85 10.2-15.99.01-.44-.32-.8-.74-.81h-.01c-.41 0-.74.35-.75.78 0 .13-.35 13.28-9.63 14.61-.01 0-.19.03-.45.07-.35-.13-.77-.3-1.28-.53l2.3-2.9c5.19-6.71 6.21-15.92 2.55-22.91-2.73-5.19-7.7-8.29-13.32-8.29-2.85 0-5.73.82-8.34 2.37-5.14 3.05-8.49 7.74-9.97 13.93-.19.79-.49 1.26-1.07 1.69-8.71 6.42-9.58 19.59-5.38 28.62 1.88 4.03 4.76 7.35 6.94 9.48.08 2.25 1.1 13.94 13.17 17.03 1.36.35 2.76.52 4.18.52 6.53 0 12.65-3.78 15.59-9.62 3.36-6.7 2.97-14.32-1-19.89-1.79-2.5-4.16-4.84-6.09-6.65.16-.07.3-.14.45-.21 1.06.18 1.74.37 1.8.39 6.17.45 13.53 4.01 13.53 18.42v19.98c0 .44.34.8.75.8s.75-.36.75-.8v-19.98c0-14.42 7.35-17.98 13.67-18.45.03 0 .64-.18 1.61-.35.14.06.31.15.46.22-1.93 1.8-4.29 4.13-6.06 6.62-3.98 5.57-4.36 13.19-1 19.89 2.94 5.84 9.05 9.62 15.6 9.62 1.41 0 2.82-.18 4.18-.52 12.06-3.09 13.08-14.79 13.16-17.03 2.18-2.13 5.06-5.44 6.94-9.48 4.17-9.02 3.3-22.19-5.41-28.62zm-61.4 15.41c-4.12-2.25-10.45-7.39-11.3-18a.8.8 0 00-.82-.73c-.41.04-.72.43-.69.87.92 11.42 7.81 16.94 12.24 19.34v.03c-4.16.1-10.75-.64-13.99-5.76a.75.75 0 00-1.05-.22c-.34.24-.43.74-.2 1.11 2.16 3.41 5.53 5.09 8.85 5.87-3.12.74-6.37 2.4-8.82 5.83-.25.35-.18.85.15 1.12.32.26.8.2 1.06-.16 3.63-5.09 9.27-5.87 13.22-5.69-4.42 2.61-10.58 8.13-11.45 18.89-.04.44.27.82.69.86h.06c.39 0 .72-.31.75-.73.83-10.4 6.77-15.49 10.89-17.81.04.08.04.18.1.24 1.92 1.78 4.36 4.15 6.15 6.65 3.62 5.07 3.94 12.04.87 18.18-2.68 5.33-8.28 8.77-14.26 8.77-1.3 0-2.59-.16-3.83-.48-12.1-3.1-12.03-15.3-12.02-15.82 0-.23-.09-.45-.25-.6-2.1-2.03-5-5.29-6.84-9.24-3.92-8.42-3.16-20.68 4.89-26.6.88-.65 1.4-1.45 1.68-2.61 1.37-5.75 4.47-10.1 9.24-12.93 2.39-1.42 5.02-2.17 7.6-2.17 5.06 0 9.54 2.79 12 7.47 3.37 6.43 2.41 14.92-2.39 21.12l-2.53 3.2zm65.42 12.51c-1.85 3.97-4.73 7.21-6.84 9.24-.16.15-.25.38-.24.6 0 .13.11 12.71-12.02 15.82-1.24.32-2.53.48-3.82.48-5.99 0-11.59-3.44-14.27-8.77-3.08-6.14-2.74-13.1.87-18.18 1.78-2.5 4.22-4.87 6.14-6.65.05-.05.05-.14.08-.21 4.12 2.36 10.09 7.5 10.91 17.78.03.41.36.73.75.73h.06c.41-.04.72-.43.69-.86-.87-10.77-7.04-16.29-11.46-18.89 3.92-.19 9.58.57 13.24 5.69.25.36.73.42 1.05.16.33-.27.4-.76.15-1.12-2.45-3.43-5.7-5.09-8.82-5.83 3.32-.79 6.69-2.47 8.85-5.87.23-.36.14-.87-.21-1.11a.735.735 0 00-1.05.22c-3.23 5.11-9.83 5.85-14 5.75v-.02c4.44-2.4 11.33-7.91 12.25-19.34.03-.44-.27-.82-.69-.87-.36 0-.78.29-.81.73-.86 10.72-7.16 15.82-11.28 18.04l-2.55-3.24c-4.81-6.21-5.77-14.7-2.4-21.13 2.45-4.68 6.93-7.47 11.99-7.47 2.59 0 5.22.75 7.6 2.17 4.77 2.83 7.89 7.18 9.25 12.93.27 1.16.79 1.96 1.67 2.61 8.08 5.94 8.84 18.19 4.91 26.61z"
          stroke="#fff"
          strokeWidth={0.891}
          strokeMiterlimit={10}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_1_2">
          <Path fill="#fff" d="M0 0h434.91v319.08H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CritCaresLogo;
