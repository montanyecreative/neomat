import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// icons
import BookIcon from '@mui/icons-material/Book';
import GitHubIcon from '@mui/icons-material/GitHub';

// images
import bannerImage from "../../../assets/imgs/trailhead1.jpeg";
import photographyShowcaseImage from "../../../assets/imgs/photography/storm-sunset.JPG";

// styles
import {
    my2,
    buttonPrimary,
    buttonLink,
    textCenter,
    fontSize1,
    buttonSalesforce,
    white
} from "../../../assets/styles/neomat";

const paddingTop = css`
    padding-top: 3em;
`

// const customTitle = css`
//     flex: 0 0 100%;
//     text-align: center;
//     color: #FFF;
// `

const bannerStyle = css`
    transform: translate3d(0px, 0px, 0px);
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: 50%;
    height: 25vh;
    min-height: 25vh;
    max-height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const bannerCopyContainer = css`
    width: 100%;
    z-index: 1;
    "@media (min-width: 576px)": {
        max-width: 540px;
    }
    "@media (min-width: 768px)": {
        max-width: 720px;
    },
    "@media (min-width: 992px)": {
        max-width: 960px;
    },
    "@media (min-width: 1200px)": {
        max-width: 1140px;
    }
`

var photographyShowcaseImageDescription = 'Sunset lights storm foreground.';

export default function AdvertisementsSection() {
    return (
        <div className={cx(textCenter, paddingTop)}>
            <div>
                <Typography variant="h4" gutterBottom component="h4">
                    About This Website
                </Typography>
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
            <div className={cx(textCenter, paddingTop)}>
                <Card>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={photographyShowcaseImage}
                        title={photographyShowcaseImageDescription}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Upcoming Shopify for Photography
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            In the coming months, individuals will be able to purchase Montanye Creativity photography prints and have them shipped right to your door!
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link
                            href="/Photography"
                            title="See more photography here"
                            rel="noopener"
                        >
                            <Button
                                className={cx(buttonPrimary, buttonLink)}
                                id="buttonIcon"
                                aria-label="See more photography here"
                            >
                                See More
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            {/* <div className={cx(my2)}>
                <Typography variant="h4" gutterBottom component="h4">
                    Professional Guides
                </Typography>
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
            </div> */}
            <div className={cx(my2)}>
                <Typography variant="h4" gutterBottom component="h4">
                    My Salesforce Journey
                </Typography>
                <Typography paragraph>
                    I work by day as a Salesforce Commerce Cloud Developer. Trailhead has become my #1 resource aside from work to become B2C certified. Follow my Salesforce journey on Trailhead or connect with me on <Link href="https://www.linkedin.com/in/john-montanye/"
                        title="Connect with me on LinkedIn"
                        target="_blank"
                        rel="noopener" color={white}>LinkedIn!</Link>
                </Typography>
            </div>
            <div className={cx(bannerStyle)}>
                <div className={cx(bannerCopyContainer)}>
                    <Link
                        href="https://trailblazer.me/id/johnmontanye"
                        title="See Trailblazer page"
                        target="_blank"
                        rel="noopener"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            className={cx(buttonSalesforce, buttonLink)}
                            aria-label="See Trailblazer page"
                        >
                            Trailblazer Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}