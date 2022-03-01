import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import Footer from "../../components/footer.js";

// styles
import { Typography } from "@mui/material";
import {
    containerFluid,
    container,
    main,
    pb2,
    pt2,
    px4,
    textCenter
} from "../../assets/styles/neomat";
import GuidesListSection from "./sections/guidesList.js";

const backgroundColor = css`
    background-color: #222;
`

const paddingTop = css`
    padding-top: 5em;
`

export default function GuidesPage() {
    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main, px4, pt2, pb2, textCenter)}>
                <div className={cx(backgroundColor, paddingTop)}>
                    <div className={cx(container)}>
                        <Typography variant="h3" gutterBottom component="h3">
                            Professional Guides
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: '2em !important', marginBottom: '3em !important' }}>
                            Have you ever had interest in website development or software engineering but have had trouble
                            figuring out how to get into the field? These guides are made so that someone can figure out exactly
                            what skills are used often in the professional world and get into understanding them quickly.
                        </Typography>
                        <GuidesListSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}