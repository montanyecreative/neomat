import React from "react";
import { cx } from '@emotion/css';

// sections of this page
import BannerSection from "./sections/banner.js";
import AdvertisementsSection from "./sections/advertisements.js";
import ContactSection from "./sections/contact.js";
import Footer from "../../components/footer.js";
// import ProjectsSection from "./homePageSections/projects.js";

// styles
import { containerFluid, main, px4 } from "../../assets/styles/neomat";

export default function HomePage() {
    return (
        <div className={cx(containerFluid)}>
            <BannerSection />
            <div className={cx(main, px4)}>
                <AdvertisementsSection />
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
}