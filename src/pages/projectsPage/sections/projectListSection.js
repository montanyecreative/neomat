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
            <Typography variant="body1">
                I have worked many other projects that are not shown here as I do not have direct permission from clients to share works as per contracted agreements but those brands and sites include: <i>New Balance, Johnston &amp; Murphy, Sheet Music Plus, Cherished Memories, ReserveBar, LuxeDecor, SyllogisTeks, PohlmanUSA, and Our Lady's Inn.</i> See <Link href="/resume" title="See resume page" sx={{ color: '#FFF', textDecoration: 'underline' }}>resume</Link> for details.
            </Typography>
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
                        <Typography variant="h4" component="h4" sx={{ width: '100%' }}>
                            Montanye Wedding
                        </Typography>
                        <Typography sx={{ width: '100%' }}>
                            Wedding website for the Montanye wedding built in Material Design 4.0 and React. Powered on the backend by POSTgres and Node.js.
                        </Typography>
                        <Link
                            href="/projects/montanye-wedding"
                            title="See Montanye Wedding project"
                            sx={{ width: '100%' }}
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
                        <Typography variant="h4" component="h4" sx={{ width: '100%' }}>
                            GitHub Enhanced README
                        </Typography>
                        <Typography sx={{ width: '100%' }}>
                            An enhanced README for my main GitHub repo. Highlights langauges and technologies I use as well as GitHub statistics that are updated daily from API.
                        </Typography>
                        <Link
                            href="https://github.com/gatewayitconsulting/gatewayitconsulting"
                            title="See enhanced GitHub README"
                            target="_blank"
                            rel="noopener"
                            sx={{ width: '100%' }}
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
                        <Typography variant="h4" component="h4" sx={{ width: '100%' }}>
                            The Palate STL
                        </Typography>
                        <Typography sx={{ width: '100%' }}>
                            A local food finder app written in HTML5, CSS3, JavaScript, WordPress, and PHP. No longer actively maintained.
                        </Typography>
                        <Link
                            href="https://thepalatestl.com/"
                            title="See The Palate STL's project"
                            target="_blank"
                            rel="noopener"
                            sx={{ width: '100%' }}
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