import React from "react";
import { cx } from "@emotion/css";

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
					This page includes the various photography styles I have worked with. I have personally taken and edited all the photos.
					Prints are coming soon in a separate Shopify website and will be available for purchase! Estimated early summer, 2023.
				</Typography>
				<PhotographsSection />
			</div>
			<Footer />
		</div>
	);
}
