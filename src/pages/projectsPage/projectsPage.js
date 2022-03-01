import React from "react";
import { cx } from '@emotion/css';

// sections of this page
import BannerSection from "./sections/banner.js";
import BreadcrumbSection from "./sections/breadcrumbSection.js";
import ProjectListSection from "./sections/projectListSection.js";
import Footer from "../../components/footer.js";

// styles
import { containerFluid, main, pb2, pt2, px4 } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";

export default function ProjectsPage() {
    return (
        <div className={cx(containerFluid)}>
            <BannerSection />
            <div className={cx(main, px4, pt2, pb2)}>
                <BreadcrumbSection />
                <Typography variant="h3" gutterBottom component="div">
                    Projects
                </Typography>
                <ProjectListSection />
            </div>
            <Footer />
        </div>
    );
}