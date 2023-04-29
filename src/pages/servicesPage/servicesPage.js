import React from "react";
import { cx, css } from "@emotion/css";

// sections of this page
import Footer from "../../components/footer.js";
import BannerSection from "./sections/banner.js";
import PricingCalculatorSection from "./sections/pricing-calculator.js";

// mui components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NorthIcon from "@mui/icons-material/North";

// images
import websiteCreate from "../../assets/imgs/services/website-create.jpg";
import websiteRefresh from "../../assets/imgs/services/website-refresh.png";
import pictureStack from "../../assets/imgs/services/picture-stack.jpg";
import vhsStack from "../../assets/imgs/services/vhs-stack.jpg";
import aiRestoration from "../../assets/imgs/services/photo-restoration.jpg";
import computerRepair from "../../assets/imgs/services/computer-repair.jpg";

// styles
import { containerFluid, main, pb2, pt2, px4, textCenter, textLeft, guideCoverImage } from "../../assets/styles/neomat";

const backgroundColorLight = css`
	background-color: #fff;
	color: #222;
`;

const imagePadding = css`
	@media (min-width: 576px) {
		margin-left: 2em;
	}
`;

const aiImage = css`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`;

const paddingTop = css``;

const actions = [
	{ icon: <MailOutlineIcon />, name: "Contact me", action: handleEmail },
	{ icon: <NorthIcon />, name: "To top of page", action: handleToTop },
];

function handleEmail() {
	var emailAddress = "montanyecreative@outlook.com";
	document.location = "mailto:" + emailAddress;
}

function handleToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ServicesPage() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className={cx(containerFluid)}>
			<BannerSection />
			<div id="servicesActions">
				<Box
					sx={{
						height: 320,
						transform: "translateZ(0px)",
						flexGrow: 1,
						position: "fixed",
						bottom: "25px",
						right: "0",
						zIndex: "999",
					}}
				>
					<SpeedDial
						ariaLabel="Services speed dial"
						sx={{ position: "absolute", bottom: 16, right: 16 }}
						icon={<SpeedDialIcon />}
						onClose={handleClose}
						onOpen={handleOpen}
						open={open}
					>
						{actions.map((action) => (
							<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.action} />
						))}
					</SpeedDial>
				</Box>
			</div>
			<div className={cx(main, backgroundColorLight, px4, pt2, pb2, textCenter)}>
				<div className={cx(paddingTop)}>
					<div className={cx(containerFluid, textLeft)}>
						<Typography variant="h3" gutterBottom component="h3" sx={{ marginTop: ".25em !important" }}>
							Services
						</Typography>
						<Typography variant="body">
							Check out some of the services we provide below. We have extensive experience with all the services we support
							and would love to help you with your needs.
						</Typography>
						<Paper
							elevation={3}
							sx={{
								marginTop: "1em",
								padding: "1em",
								borderRadius: ".25em",
							}}
						>
							<Accordion defaultExpanded>
								<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="photovhs-content" id="photovhs-header">
									<Typography
										variant="h5"
										gutterBottom
										component="h5"
										sx={{
											marginTop: ".25em !important",
											fontWeight: "700",
										}}
									>
										Photo/VHS restoration and to digital
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										<Grid xs={12}>
											<Typography sx={{ marginBottom: "1.5em" }}>
												<b>Local to Saint Louis County, Missouri</b>
											</Typography>
										</Grid>
										<Grid xs={12} md={8}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Photo to Digital
											</Typography>
											<ul>
												<li>copy</li>
												<li>copy</li>
											</ul>
										</Grid>
										<Grid xs={12} md={4}>
											<img src={pictureStack} alt="Stack of small pictures" className={cx(guideCoverImage)} />
										</Grid>
										<Grid xs={12} md={8}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												VHS to Digital
											</Typography>
											<ul>
												<li>copy</li>
												<li>copy</li>
											</ul>
										</Grid>
										<Grid xs={12} md={4}>
											<img src={vhsStack} alt="Stack of VHS tapes" className={cx(guideCoverImage)} />
										</Grid>
										<Grid xs={12} md={8}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Restoration Using Upscaling and AI
											</Typography>
											<ul>
												<li>copy</li>
												<li>copy</li>
											</ul>
										</Grid>
										<Grid xs={12} md={8} sx={{ marginLeft: "auto !important", marginRight: "auto !important" }}>
											<img
												src={aiRestoration}
												alt="Bad resolution of dog photography next to great resolution of dog photography"
												className={cx(aiImage)}
											/>
											<ImageListItemBar title="Before and after restoration" position="below" />
										</Grid>
										<Grid xs={12} md={7} sx={{ marginLeft: "auto !important", marginRight: "auto !important" }}>
											<PricingCalculatorSection />
										</Grid>
									</Grid>
								</AccordionDetails>
							</Accordion>
							<Accordion sx={{ marginTop: "1em" }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="createwebsite-content"
									id="createwebsite-header"
								>
									<Typography
										variant="h5"
										gutterBottom
										component="h5"
										sx={{
											marginTop: ".25em !important",
											fontWeight: "700",
										}}
									>
										Creating a website
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										<Grid xs={12}>
											<Typography sx={{ marginBottom: "1.5em" }}>
												Looking to create a beautiful and fast, brand-new web app or website? We can build you sites
												that range from a business landing page to a small shopify site, all that look stunning on
												mobile devices. We start with the design process, which includes your brand and ideas from
												the beginning. Then we implement the design with our coding skills, setting up a domain name
												for your website and configuring it securely. Finally, we test it thoroughly to make sure
												the product is just the way you want it.
											</Typography>
										</Grid>
										<Grid xs={12} md={7}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Creating a design and implementing the code
											</Typography>
											<ul>
												<li>
													Creation of a responsive first, ADA compliant website design, fitting to best practices
													and industry standards.
												</li>
												<li>
													Implementation of web developed pages in either WordPress or a custom theme coded by
													hand from website designs approved from our design phase.
												</li>
												<li>
													Thorough testing of the website release to verify the website’s integrity before the
													official release.
												</li>
												<li>
													We then can spend two to four weeks (or longer if requested) maintaining the website and
													fixing any potential bugs from the release of website.
												</li>
											</ul>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Web hosting (Provided by leading and trusted 3rd party hosting companies)
											</Typography>
											<ul>
												<li>
													We seek out and create your domain name, otherwise known as a URL (i.e.
													https://www.montanyecreative.com).
												</li>
												<li>
													We secure your website traffic by implementing an SSL certificate for secure web
													browsing and can implement Google ReCAPTCHA services to protect login forms from
													malicious actors.
												</li>
												<li>
													We implement backups for not just your content but also for the code that goes into
													creating your website.
												</li>
											</ul>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												What sets us apart
											</Typography>
											<ul>
												<li>
													We benchmark website performance using real world tests that we implement with tools
													like Google Lighthouse. These insights allow us to build websites with less code that
													run much faster than other websites. You receive these reports to showcase your
													website’s strength as the milestones are built.
												</li>
												<li>
													User outreach takes having a successful website to a whole new level. We integrate SEO
													from the first day and explore the website’s journey with Google Analytics, providing
													you with real time insights to growing your business.
												</li>
												<li>
													Whether a brand new website or a refresh, our team takes design seriously and implements
													all designs pixel-to-pixel. Every design starts responsive first so your website looks
													perfect regardless of the browser or device.
												</li>
											</ul>
										</Grid>
										<Grid xs={12} md={4} className={cx(imagePadding)}>
											<img src={websiteCreate} alt="Website creation graphic" className={cx(guideCoverImage)} />
										</Grid>
									</Grid>
								</AccordionDetails>
							</Accordion>
							<Accordion sx={{ marginTop: "1em" }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="refreshwebsite-content"
									id="refreshwebsite-header"
								>
									<Typography
										variant="h5"
										gutterBottom
										component="h5"
										sx={{
											marginTop: ".25em !important",
											fontWeight: "700",
										}}
									>
										Refreshing &amp; maintaining a website
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										<Grid xs={12}>
											<Typography sx={{ marginBottom: "1.5em" }}>
												Looking to fix up or give your existing web app or website a refreshing look? Did you have a
												brand change or want to make your website more uniform with how your brand is presented in
												other places? We can update any part of your website to make it more relevant to your
												day-to-day business. Do you need a new feature like a live calendar, contact form, or Google
												Maps? We can implement many new features into your website to make it more interactive and
												robust. We can also fix bugs that your website might be encountering, potentially offering
												performance increases and a better web usability experience.
											</Typography>
										</Grid>
										<Grid xs={12} md={7}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Updating your brand online
											</Typography>
											<ul>
												<li>
													We can refresh your website's page designs by applying a more updated brand using new
													images, content, and colors, with an emphasis on responsive design and ADA compliance
													for those who have disabilities.
												</li>
												<li>
													Already have copy but need small changes? We can update any typo or image at a very
													reasonable cost.
												</li>
											</ul>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												Adding new features to your website
											</Typography>
											<ul>
												<li>
													We can add a series of different features to your website. Some of these include contact
													forms, registration forms, event calendars, countdown timers, Google Analytics, Google
													Maps, Google form ReCAPTCHA, email buttons, slideshows, animations, and videos. If you
													have any idea we haven't listed let us know, we probably know the answer.
												</li>
												<li>
													Have a current feature that is broken or buggy and don't know how to fix it? We can help
													sort out the issue and improve your web app's or website's performance.
												</li>
											</ul>
										</Grid>
										<Grid xs={12} md={4} className={cx(imagePadding)}>
											<img src={websiteRefresh} alt="Website refresh graphic" className={cx(guideCoverImage)} />
										</Grid>
									</Grid>
								</AccordionDetails>
							</Accordion>
							<Accordion sx={{ marginTop: "1em" }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="computerbuilding-content"
									id="computerbuilding-header"
								>
									<Typography
										variant="h5"
										gutterBottom
										component="h5"
										sx={{
											marginTop: ".25em !important",
											fontWeight: "700",
										}}
									>
										Computer building &amp; laptop repair
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										<Grid xs={12}>
											<Typography sx={{ marginBottom: "1.5em" }}>
												<b>Local to Saint Louis County, Missouri</b>
											</Typography>
											<Typography sx={{ marginBottom: "1.5em" }}>
												Tech troubleshooting for laptops, computers, basic networks, and basic printers.
											</Typography>
										</Grid>
										<Grid xs={12} md={8}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												copy
											</Typography>
											<ul>
												<li>copy</li>
												<li>copy</li>
											</ul>
										</Grid>
										<Grid xs={12} md={4}>
											<img src={computerRepair} alt="Man repairing on open laptop" className={cx(guideCoverImage)} />
										</Grid>
									</Grid>
								</AccordionDetails>
							</Accordion>
							<Accordion sx={{ marginTop: "1em" }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="techconsulting-content"
									id="techconsulting-header"
								>
									<Typography
										variant="h5"
										gutterBottom
										component="h5"
										sx={{
											marginTop: ".25em !important",
											fontWeight: "700",
										}}
									>
										Tech &amp; consumer tech consulting
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										<Grid xs={12}>
											<Typography sx={{ marginBottom: "1.5em" }}>
												to figure out what products to buy (TV, Laptops, Computers, Monitors, all computer
												accessories, Apple products).
											</Typography>
										</Grid>
										<Grid xs={12} md={8}>
											<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
												copy
											</Typography>
											<ul>
												<li>copy</li>
												<li>copy</li>
											</ul>
										</Grid>
										{/* <Grid xs={12} md={4}>
                    <img
                      src={websiteRefresh}
                      alt="Website refresh graphic"
                      className={cx(guideCoverImage)}
                    />
                  </Grid> */}
									</Grid>
								</AccordionDetails>
							</Accordion>
						</Paper>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
