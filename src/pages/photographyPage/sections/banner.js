import React from "react";
import { cx, css } from '@emotion/css';

// images
import bannerImage from "../../../assets/imgs/projects-banner.jpeg";

// styles
const bannerStyle = css`
    transform: translate3d(0px, 0px, 0px);
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: 50%;
    height: 65vh;
    min-height: 65vh;
    max-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const bannerCopyContainer = css`
    width: 100%;
    z-index: 1;
    "@media (min-width: 576px)": {
        max-width: 540px;
    }
    "@media (min-width: 768px)": {
        max-width: 720px;
    },
    "@media (min-width: 992px)": {
        max-width: 960px;
    },
    "@media (min-width: 1200px)": {
        max-width: 1140px;
    }
`

export default function BannerSection() {
    return (
        <div className={cx(bannerStyle)}>
            <div className={cx(bannerCopyContainer)}></div>
        </div>
    );
}