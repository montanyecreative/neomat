import React from "react";
import { cx, css } from '@emotion/css';

// styles
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
import {
    textMiddle,
    mx1,
    buttonPrimary,
    buttonLink
} from '../../../assets/styles/neomat.js';

// icons
import VisibilityIcon from '@mui/icons-material/Visibility';

// images
import montanyeWeddingCover from "../../../assets/imgs/projects/montanye-wedding.PNG";
import thePalateSTLCover from "../../../assets/imgs/projects/thePalateSTL.JPG";
import githubCover from "../../../assets/imgs/projects/githubProject.png";

const Item = styled(Paper)(() => ({
    height: 400
}));

const marginTop = css`
    margin-top: 2em;
`

const montanyeWedding = css`
    background-image: url("${montanyeWeddingCover}");
    background-size: cover;
    background-repeat: no-repeat;
`

const thePalateSTL = css`
    background-image: url("${thePalateSTLCover}");
    background-size: cover;
    background-repeat: no-repeat;
`

const githubProject = css`
    background-image: url("${githubCover}");
    background-size: cover;
    background-repeat: no-repeat;
`

export default function ProjectListSection() {
    return (
        <div>
            <div>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: '#222',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Item key={16} elevation={16} className={cx(montanyeWedding)} />
                    <div className={cx(textMiddle, mx1)}>
                        <Typography variant="h4" component="div">
                            Montanye Wedding
                        </Typography>
                        <Typography>
                            Wedding website for the Montanye wedding built in Material Design 4.0 and React. Powered on the backend by POSTgres and Node.js.
                        </Typography>
                        <Link
                            href="/projects/montanye-wedding"
                            title="See Montanye Wedding project"
                        >
                            <Button
                                className={cx(buttonPrimary, buttonLink)}
                                startIcon={<VisibilityIcon />}
                                aria-label="See Montanye Wedding project"
                            >
                                See project
                            </Button>
                        </Link>
                    </div>
                </Box>
            </div>
            <div className={cx(marginTop)}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: '#222',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Item key={16} elevation={16} className={cx(githubProject)} />
                    <div className={cx(textMiddle, mx1)}>
                        <Typography variant="h4" component="div">
                            GitHub Enhanced README
                        </Typography>
                        <Typography>
                            An enhanced README for my main GitHub repo. Highlights langauges and technologies I use as well as GitHub statistics that are updated daily from API.
                        </Typography>
                        <Link
                            href="/"
                            title="See enhanced GitHub README"
                            target="_blank"
                            rel="noopener"
                        >
                            <Button
                                className={cx(buttonPrimary, buttonLink)}
                                startIcon={<VisibilityIcon />}
                                aria-label="See enhanced GitHub README"
                            >
                                See project
                            </Button>
                        </Link>
                    </div>
                </Box>
            </div>
            <div className={cx(marginTop)}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: '#222',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Item key={16} elevation={16} className={cx(thePalateSTL)} />
                    <div className={cx(textMiddle, mx1)}>
                        <Typography variant="h4" component="div">
                            The Palate STL
                        </Typography>
                        <Typography>
                            A local food finder app written in HTML5, CSS3, JavaScript, and PHP.
                        </Typography>
                        <Link
                            href="/"
                            title="See The Palate STL's project"
                            target="_blank"
                            rel="noopener"
                        >
                            <Button
                                className={cx(buttonPrimary, buttonLink)}
                                startIcon={<VisibilityIcon />}
                                aria-label="See The Palate STL's project"
                            >
                                See project
                            </Button>
                        </Link>
                    </div>
                </Box>
            </div>
        </div>
    );
}