import React from "react";
import { cx } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// icons
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

// images
import websterUniversityLogo from "../../../assets/imgs/websteruniversity.png";

// styles
import {
    textCenter
} from "../../../assets/styles/neomat";


export default function EducationSection() {
    return (
        <div className={cx(textCenter)}>
            <Typography variant="h3" component="h2" style={{ marginTop: "1em", textAlign: "left", marginLeft: ".5em" }} id="education">Education</Typography>
            <Grid container spacing={1} style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em", paddingLeft: "2em", paddingRight: "2em" }}>
                <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                        <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">Graduated December 2017</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={websterUniversityLogo} style={{ width: "50px", marginRight: ".5em", paddingTop: "1em", paddingBottom: "1em" }} alt="Webster University logo" />
                        <Typography variant="h4" component="h3" style={{ display: "inline" }}>Webster University, St. Louis, Missouri</Typography>
                    </div>
                    <Typography variant="body1">- Bachelor’s Degree in Information Systems, Minor in Web Development - 3.5 GPA / Minor Completed with GPA of 3.76</Typography>
                </Grid>
            </Grid>
        </div>
    );
}