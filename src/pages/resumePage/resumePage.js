import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import Footer from "../../components/footer.js";
import Intro from "./sections/intro";
import Matrix from "./sections/matrix";
import Experience from "./sections/experience";
import Education from "./sections/education";
import Skills from "./sections/skills";

// styles
import { containerFluid, main, pb2, pt2, px4, textCenter } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const backgroundColor = css`
    background-color: #222;
`

const navLink = css`
    color: #FFF !important;
    margin-right: .5em !important;
    text-decoration: underline !important;
`

const paddingTop = css`
    padding-top: 5em;
`

export default function ResumePage() {
    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main, px4, pt2, pb2, textCenter)}>
                <div className={cx(backgroundColor, paddingTop)}>
                    <Typography variant="h3" gutterBottom component="h3">
                        Resume
                    </Typography>
                    {/* <Typography variant="body1">
                        <i>Currently only looking for small freelance projects outside of 8am-6pm schedule.</i>
                    </Typography> */}
                    <Typography sx={{ marginTop: '1.5em !important' }}>
                        <Link href="#intro" className={cx(navLink)}>
                            Intro
                        </Link>
                        <Link href="#highlights" className={cx(navLink)}>
                            Highlights
                        </Link>
                        <Link href="#experience" className={cx(navLink)}>
                            Experience
                        </Link>
                        <Link href="#education" className={cx(navLink)}>
                            Education
                        </Link>
                        <Link href="#skills" className={cx(navLink)}>
                            Skills
                        </Link>
                    </Typography>
                    <Intro />
                    <Matrix />
                    <Experience />
                    <Education />
                    <Skills />
                </div>
            </div>
            <Footer />
        </div>
    );
}