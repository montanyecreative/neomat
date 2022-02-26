import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import Footer from "../../../components/footer.js";

// styles
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from "@mui/material";
import { containerFluid, main, my1 } from "../../../assets/styles/neomat";

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// images
import montanyeWeddingHomePage from "../../../assets/imgs/projects/montanye-wedding/montanye-wedding-home.png";
import montanyeWeddingWhenWherePage from "../../../assets/imgs/projects/montanye-wedding/montanye-wedding-whenwhere.png";
import montanyeWeddingRSVPPage from "../../../assets/imgs/projects/montanye-wedding/montanye-wedding-rsvp.png";

const backgroundColor = css`
    background-color: #222;
`

const marginLeft = css`
    margin-left: 1em;
`

const marginTop = css`
    padding-top: 5em;
`

const displayBlock = css`
    display: block;
    margin-bottom: 2em;
`

const cursiveFont = css`
    font-family: "Alex Brush", cursive;
    font-weight: 500;
    line-height: 1.5em;
    font-size: 1.5rem;
`

export default function MontanyeWedding() {
    const itemData = [
        {
            img: montanyeWeddingHomePage,
            title: 'Home Page',
        },
        {
            img: montanyeWeddingWhenWherePage,
            title: 'When and Where Page',
        },
        {
            img: montanyeWeddingRSVPPage,
            title: 'RSVP Page',
        },
    ];
    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main)}>
                <div className={cx(my1, marginLeft, marginTop)}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="Projects navigation"
                        color="white"
                        className={cx(backgroundColor)}
                    >
                        <Link underline="hover" key="1" color="white" href="/projects">
                            All Projects
                        </Link>,
                        <Link underline="hover" key="2" color="white" href="/projects/montanye-wedding">
                            Montanye Wedding
                        </Link>
                    </Breadcrumbs>
                    <Typography variant="h3" gutterBottom component="div">
                        Montanye Wedding
                    </Typography>
                    <div className={cx(displayBlock)}>
                        <Typography variant="h5" component="span" sx={{ marginRight: '.5em' }}>
                            The Challenge:
                        </Typography>
                        <Typography variant="body1" component="span">
                            The Montanyes were looking to get married and wanted a premium and faithfully artistic representation of their relationship to convey to those looking for a glimpse of their big day. Fortunately the groom-to-be, John Montanye (the designer/developer of JMDesigns.io) was happy to take on the project and pour his heart/soul into making a website that did just that.
                        </Typography>
                    </div>
                    <div className={cx(displayBlock)}>
                        <Typography variant="h5" component="span" sx={{ marginRight: '.5em' }}>
                            The Process:
                        </Typography>
                        <Typography variant="body1" component="span">
                            John knew that he could come up with the code to accomplish whatever bride-to-be Lauren wanted done, so the couple began doing design discoveries to come up with an overall look and feel to the website. Lauren and John's taste was rather dark but they wanted a refined approach. They picked out basic structure and settled on the beautiful cursive font:
                            <br />
                            <span className={cx(cursiveFont)}>Alex Brush</span>
                            <br />
                            After the initial design was picked out, John set out to find a framework and UI library that could help him develop the website and also save time (he started working at New Balance when this project took off). He came up with a Creative Tim developed React and Material Design theme. Building off the base theme and modifying the existing theme significantly, John was able to tailor the theme to his and Lauren's exact creative needs. By adding extras like being able to Save the Date to calendars, an animated timeline that highlighted favorite moments from the relationship, a countdown timer to the event date, a vendors page to show off vendors from the event,
                        </Typography>
                    </div>
                    <div className={cx(displayBlock)}>
                        <Typography variant="h5" component="span" sx={{ marginRight: '.5em' }}>
                            The Result:
                        </Typography>
                        <Typography variant="body1" component="span">
                            Lauren and John were able to create a very customized website built off a very feature-rich theme base.
                        </Typography>
                    </div>
                </div>
                <ImageList sx={{ width: '100%' }} variant="woven" cols={3} gap={12}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Footer />
            </div>
        </div>
    );
}