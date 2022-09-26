import React from "react";
import { cx } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

// styles
import {
    textCenter
} from "../../../assets/styles/neomat";

const skillNames = [
    {
        value: 0,
        label: 'Front-end',
    },
    {
        value: 100,
        label: 'Back-end',
    },
];

function valuetext(value) {
    return `${value}°C`;
}


export default function IntroSection() {
    return (
        <div className={cx(textCenter)}>
            <Grid container spacing={1} style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em", paddingLeft: "2em", paddingRight: "2em" }}>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Ambitious Salesforce Commerce Cloud Developer with 5+ years of hands-on industry experience, including experience with Salesforce Commerce Cloud, SFRA, Page Designer, JavaScript, ISML/SASS, Bootstrap, React, Nodejs, and a variety of other web platforms. Passionate about learning new technologies with an eagerness to go above and beyond both individually and with a team to get the job done. Seeking new challenges and growth opportunities within a growing organization.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ marginTop: '1em', marginLeft: 'auto !important', marginRight: 'auto !important' }}>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        <i>
                            Leans front-end
                        </i>
                    </Typography>
                    <Slider
                        aria-label="Skill comfort slider"
                        defaultValue={40}
                        getAriaValueText={valuetext}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={skillNames}
                        track={false}
                        disabled={true}
                        sx={{ color: '#FFF !important', marginTop: '1em' }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}