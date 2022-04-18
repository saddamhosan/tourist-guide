import { css } from "@emotion/react";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;
const Spinner = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={80} />
    </div>
  );
};

export default Spinner;
