import React from "react";
import { styled } from "@mui/material/styles";
import { cx, css } from "@emotion/css";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

// images

// styles
import { mt5 } from "../../../assets/styles/neomat";

const Input = styled(MuiInput)`
	width: 55px;
`;

export default function PricingCalculatorSection() {
	const [value, setValue] = React.useState(10);
	const maximumSliderValue = 1000;

	const handleSliderChange = (event, newValue, value) => {
		setValue(newValue);

		calculateValue(newValue);
	};

	const handleInputChange = (event) => {
		setValue(event.target.value === "" ? "" : Number(event.target.value));

		calculateValue(event.target.value);
	};

	const handleBlur = () => {
		if (value < 0) {
			setValue(0);
		} else if (value > 1000) {
			setValue(1000);
		}
	};

	function calculateValue(value) {
		var pricePerPhoto = 1.5;
		var priceDisplay = value * pricePerPhoto;

		document.getElementById("displayCalculatedPrice").innerHTML = "$" + priceDisplay.toString();
	}

	return (
		<div className={cx(mt5)}>
			<Typography variant="body" gutterBottom sx={{ fontWeight: "700" }}>
				Pricing Estimation
			</Typography>
			<Box sx={{ width: 500, marginLeft: "auto", marginRight: "auto" }}>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={10}>
						<Slider
							value={typeof value === "number" ? value : 0}
							onChange={handleSliderChange}
							aria-labelledby="input-slider"
							max={maximumSliderValue}
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							value={value}
							size="medium"
							onChange={handleInputChange}
							onBlur={handleBlur}
							inputProps={{
								step: 1,
								min: 0,
								max: maximumSliderValue,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<div id="displayCalculatedPrice"></div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
