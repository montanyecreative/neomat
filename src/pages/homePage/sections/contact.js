import React from "react";
import { cx } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

// images
import avatarImage from "../../../assets/imgs/john.jpg";

// styles
import {
    my2,
    buttonPrimary,
    buttonLink,
    textCenter,
    avatar,
    emphasis,
    icon,
    iconText,
    white,
    linkOverrides
} from "../../../assets/styles/neomat";

export default function ContactSection() {
    return (
        <div className={cx(my2, textCenter)}>
            <h1>Contact Me</h1>
            <Avatar
                alt="John Montanye"
                src={avatarImage}
                className={cx(avatar, my2)}
            />
            <Grid container spacing={1} className={cx(my2)}>
                <Grid item xs={12} sm={4}>
                    <Link href="https://www.linkedin.com/in/john-montanye/" target="_blank" rel="noopener" color={white} className={cx(linkOverrides)}>
                        <LinkedInIcon
                            fontSize="large"
                            className={cx(icon)}
                        />
                        <span className={cx(iconText)}>
                            LinkedIn
                        </span>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link href="https://goo.gl/maps/4yb3nLeBr8TwYhwT7" target="_blank" rel="noopener" color={white} className={cx(linkOverrides)}>
                        <LocationOnIcon
                            fontSize="large"
                            className={cx(icon)}
                        />
                        <span className={cx(iconText)}>
                            Edwardsville, IL
                        </span>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link href="https://www.gatewayitconsulting.com/contact-us" target="_blank" rel="noopener" color={white} className={cx(linkOverrides)}>
                        <LaptopMacIcon
                            fontSize="large"
                            className={cx(icon)}
                        />
                        <span className={cx(iconText)}>
                            Business Inquiries
                        </span>
                    </Link>
                </Grid>
            </Grid>
            <Typography paragraph className={cx(emphasis)}>
                *References available upon request
            </Typography>
            <Link href="mailto:jmontanye24@gmail.com" target="_blank" rel="noopener">
                <Button
                    className={cx(buttonPrimary, buttonLink)}
                    startIcon={<EmailIcon />}
                    id="buttonIconGuides"
                >
                    Email me
                </Button>
            </Link>
        </div>
    );
}