import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// images
import guideImage from "../../../assets/imgs/entry-developer.jpg";

// styles
import { buttonPrimary, buttonLink, textLeft } from "../../../assets/styles/neomat";

const mediaImage = css`
    height: 400px;
`

export default function GuidesListSection() {
    return (
        <div>
            <Grid item xs={12}>
                <div className={cx(textLeft)}>
                    <Card sx={{ marginTop: "1em", marginBottom: "1em" }}>
                        <CardActionArea href={`guides/become-a-developer`}>
                            <CardMedia
                                className={cx(mediaImage)}
                                image={guideImage}
                                title="Learn how to become a developer"
                            />
                            <CardContent sx={{ marginLeft: "1em", marginRight: "1em" }}>
                                <Typography gutterBottom variant="h5" component="h5">
                                    Want to become a website developer?
                                </Typography>
                                <Typography variant="body2">
                                    To become a website developer, you must understand the basic building blocks that make up a website and how they function. Skills you must learn include HTML5, CSS, and JavaScript.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                className={cx(buttonPrimary, buttonLink)}
                                sx={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px !important', marginRight: "2em !important" }}
                                id="buttonIconGithub"
                                aria-label="Read More"
                                href={`guides/become-a-developer`}
                            >
                                Read More
                            </Button>
                            <p sx={{ marginLeft: "1em", fontSize: ".9em" }}>
                                <b>Published</b>: 08/29/2021 <b>Last updated</b>: 03/11/2023
                            </p>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
        </div>
    );
}