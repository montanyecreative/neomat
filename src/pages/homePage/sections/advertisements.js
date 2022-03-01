import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// icons
import BookIcon from '@mui/icons-material/Book';
import GitHubIcon from '@mui/icons-material/GitHub';

// styles
import {
    my2,
    buttonPrimary,
    buttonLink,
    textCenter,
    fontSize1
} from "../../../assets/styles/neomat";

const paddingTop = css`
    padding-top: 1em;
`

export default function AdvertisementsSection() {
    return (
        <div className={cx(textCenter, paddingTop)}>
            <div>
                <h1>About This Website</h1>
                <Typography paragraph className={cx(fontSize1)}>
                    This website was developed using ReactJS, JavaScript, Material Design, CSS, and HTML5.
                    The different looking style is based off a design pattern I call neomat, which blends concepts
                    of Neumorphism and Material Design together. The design emphasis was to create a "texturized"
                    feel to the website. Check out the code for this website on Github below.
                </Typography>
                <Link
                    href="https://github.com/gatewayitconsulting/neomat"
                    title="See code on Github"
                    target="_blank"
                    rel="noopener"
                >
                    <Button
                        className={cx(buttonPrimary, buttonLink)}
                        startIcon={<GitHubIcon />}
                        id="buttonIconGithub"
                        aria-label="See code on Github"
                    >
                        Github
                    </Button>
                </Link>
            </div>
            <div className={cx(my2)}>
                <h1>Professional Guides</h1>
                <Typography paragraph>
                    Check out my guides on getting more familiar with website development
                    and software engineering related paths and concepts.
                </Typography>
                <Link href="/Guides" title="See guides">
                    <Button
                        className={cx(buttonPrimary, buttonLink)}
                        startIcon={<BookIcon />}
                        id="buttonIconGuides"
                        aria-label="See guides"
                    >
                        See guides
                    </Button>
                </Link>
            </div>
        </div>
    );
}