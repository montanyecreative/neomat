import React from "react";
import { cx } from '@emotion/css';

// sections of this page
// import BannerSection from "./sections/banner.js";
import PhotographsSection from "./sections/photographsSection.js";
import Footer from "../../components/footer.js";

// styles
import { containerFluid, main, pb2, pt5, px4 } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";

export default function PhotographyPage() {
    return (
        <div className={cx(containerFluid)}>
            {/* <BannerSection /> */}
            <div className={cx(main, px4, pt5, pb2)}>
                <Typography variant="h3" gutterBottom component="h3">
                    Photography
                </Typography>
                <Typography variant="body1">
                    This page includes the various photography styles I have worked with. Some of the images I have taken personally and edited. Others may be digital restorations of older images. Any imagery that is styled red or white, in an infrared style, I have taken myself.
                </Typography>
                <PhotographsSection />
            </div>
            <Footer />
        </div>
    );
}