import React from "react";
import { cx } from "@emotion/css";

// sections of this page
import PhotographsSection from "./sections/photographsSection.js";
import Footer from "../../components/footer.js";
import Link from "@mui/material/Link";

// styles
import { containerFluid, main, pb2, pt5, px4, white } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";

export default function PhotographyPage() {
	return (
		<div className={cx(containerFluid)}>
			<div className={cx(main, px4, pt5, pb2)}>
				<Typography variant="h3" gutterBottom component="h3">
					Photography
				</Typography>
				<Typography variant="body1">
					This page includes some of the various photography styles I have worked with. I have personally taken and edited all the
					photos. Prints are coming soon in a separate Shopify website and will be available for purchase! Estimated early summer,
					2023.
				</Typography>
				<Typography variant="body1">
					If you would like to see more photography I have worked with, all of my photography is now available to view and will
					soon be available for purchase at my new{" "}
					<Link
						href="https://montanye-creative.myshopify.com/"
						title="See more photography here"
						rel="noopener"
						target="_blank"
						color={white}
					>
						Shopify Store.
					</Link>
				</Typography>
				<PhotographsSection />
			</div>
			<Footer />
		</div>
	);
}
