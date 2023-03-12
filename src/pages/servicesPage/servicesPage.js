import React from "react";
import { cx, css } from "@emotion/css";

// sections of this page
import Footer from "../../components/footer.js";

// icons

// images

// styles
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {
  containerFluid,
  container,
  main,
  pb2,
  pt2,
  px4,
  textCenter,
  textLeft,
  buttonLink,
  buttonPrimary,
  guideCoverImage,
} from "../../assets/styles/neomat";

const backgroundColorLight = css`
  background-color: #fff;
  color: #222;
`;

const paddingTop = css`
  padding-top: 5em;
`;

const linkOverrides = css`
  text-decoration: underline !important;
  margin-left: 0.5em !important;
`;

export default function ServicesPage() {
  return (
    <div className={cx(containerFluid)}>
      <div
        className={cx(main, backgroundColorLight, px4, pt2, pb2, textCenter)}
      >
        <div className={cx(paddingTop)}>
          <div className={cx(container, textLeft)}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
