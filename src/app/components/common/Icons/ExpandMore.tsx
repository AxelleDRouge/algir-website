import * as React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
function ExpandMore(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#e9937e"
      {...props}
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
  );
}

export default ExpandMore;
