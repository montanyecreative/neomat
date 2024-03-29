import React from "react";
import { cx, css } from "@emotion/css";

// core components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";

// images
import avatarImage from "../../../assets/imgs/john.jpg";

// styles
import { textCenter, avatar, mb1 } from "../../../assets/styles/neomat";

const avatarSmall = css`
	height: 175px !important;
	width: 175px !important;
`;

const skillNames = [
	{
		value: 0,
		label: "Front-end",
	},
	{
		value: 50,
		label: "Fullstack",
	},
	{
		value: 100,
		label: "Back-end",
	},
];

export default function IntroSection() {
	var beganStartMonth = 1;
	var beganStartYear = 2018;

	var beganStartYears = yearDiff(
		new Date(beganStartYear, beganStartMonth),
		new Date()
	);

	function yearDiff(dateFrom, dateTo) {
		return dateTo.getFullYear() - dateFrom.getFullYear();
	}

	return (
		<div className={cx(textCenter)}>
			<Grid
				container
				spacing={1}
				style={{
					textAlign: "left",
					marginTop: "1em",
					marginBottom: "2em",
					paddingLeft: "2em",
					paddingRight: "2em",
				}}
			>
				<Grid item xs={12}>
					<Typography variant="body1" sx={{ textAlign: "center" }}>
						Ambitious Salesforce B2C Commerce Cloud Developer with{" "}
						{beganStartYears ? beganStartYears + "+" : ""} years of
						hands-on industry experience, including experience with
						Salesforce Commerce Cloud, SFRA, Page Designer,
						JavaScript, ISML/SASS, Bootstrap, React, Nodejs, and a
						variety of other web platforms. Passionate about
						learning new technologies with an eagerness to go above
						and beyond both individually and with a team to get the
						job done. Seeking new challenges and growth
						opportunities within a growing organization.
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sm={4}
					sx={{
						marginTop: "1em",
						marginLeft: "auto !important",
						marginRight: "auto !important",
					}}
				>
					<Avatar
						alt="John Montanye"
						src={avatarImage}
						className={cx(avatar, mb1, avatarSmall)}
					/>
					<Typography
						variant="h5"
						sx={{ textAlign: "center", marginBottom: "1em" }}
					>
						John Montanye
					</Typography>
					<Typography variant="body1" sx={{ textAlign: "center" }}>
						<i>Leans front-end</i>
					</Typography>
					<Slider
						aria-label="Skill comfort slider"
						defaultValue={40}
						step={10}
						valueLabelDisplay="auto"
						marks={skillNames}
						track={false}
						disabled={true}
						sx={{ color: "#FFF !important", marginTop: "1em" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
