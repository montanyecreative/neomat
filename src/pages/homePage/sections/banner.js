import React from "react";
import { cx, css } from '@emotion/css';

// images
import bannerImage from "../../../assets/imgs/banner.jpg";

// styles
import Typography from '@mui/material/Typography';

const customTitle = css`
    flex: 0 0 100%;
    text-align: center;
    color: #FFF;
`

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
            <div className={cx(bannerCopyContainer)}>
                <Typography
                    variant="h3"
                    className={cx(customTitle)}
                >
                    John Montanye, creative <br /> &amp; software engineer.
                </Typography>
            </div>
        </div >
    );
}