import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import BannerSection from "./sections/banner.js";
import BreadcrumbSection from "./sections/breadcrumbSection.js";
import ProjectListSection from "./sections/projectListSection.js";
import Footer from "../../components/footer.js";

// styles
import { containerFluid, main, my1 } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";

const marginLeft = css`
    margin-left: 1em;
`

export default function ProjectsPage() {
    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main)}>
                <BannerSection />
                <div className={cx(my1, marginLeft)}>
                    <BreadcrumbSection />
                    <Typography variant="h3" gutterBottom component="div">
                        Projects
                    </Typography>
                </div>
                <ProjectListSection />
                <Footer />
            </div>
        </div>
    );
}