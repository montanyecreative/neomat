import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import Footer from "../../../../components/footer.js";

// styles
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Typography } from "@mui/material";
import {
    containerFluid,
    main,
    my1,
    pb2,
    px4,
    py1,
    textCenter,
    buttonPrimary,
    buttonLink,
    mb2,
    mb3
} from "../../../../assets/styles/neomat";

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import githubImage from "../../../../assets/imgs/skills/github-white.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// images
import mainImage from "../../../../assets/imgs/projects/gitc-readme.png";

const backgroundColor = css`
    background-color: #222;
`

const paddingTop = css`
    padding-top: 5em;
`

const bottomPortfolioImage = css`
    margin-top: 1em;
    width: 100%;
`

const avatarStyles = css`
    height: 75px !important;
    width: 75px !important;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 13px 27px -5px #000, 0px 8px 16px -8px #222;
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>{children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MontanyeWedding() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main, px4, pb2)}>
                <div className={cx(my1, paddingTop, mb2)}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="Projects navigation"
                        color="white"
                        className={cx(backgroundColor)}
                    >
                        <Link underline="hover" key="1" color="white" href="/projects">
                            <ArrowBackIcon sx={{ fontSize: ".8rem", marginRight: '.5em' }} />
                            All Projects
                        </Link>,
                        <Link underline="hover" key="2" color="white" href="/projects/montanye-wedding">
                            GitHub Readme
                        </Link>
                    </Breadcrumbs>
                    <Typography variant="h3" gutterBottom component="h3">
                        GitHub Readme
                    </Typography>
                    <Paper elevation={13} sx={{ backgroundColor: '#222 !important', color: '#FFF' }} className={cx(py1)}>
                        <Box sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="Objectives, processes, solutions tabs" variant="fullWidth" textColor="inherit" centered>
                                    <Tab label="Objectives" {...a11yProps(0)} />
                                    <Tab label="Processes" {...a11yProps(1)} />
                                    <Tab label="Solutions" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                                    <li>Create a visually appealing user profile for GitHub website</li>
                                    <li>Convey to other developers and recruiters current skillset and a general understanding of preferred work</li>
                                    <li>Create a dashboard of statistics for publishing code for personal projects</li>
                                    <li>Only use web development technologies available inside a README file</li>
                                </ul>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                                    <li>Implemented basic text sections of README page</li>
                                    <li>Created a GIF image banner for top of README page</li>
                                    <li>Found existing API and utilized them for personal GitHub stats to be displayed on page</li>
                                    <li>Found fun icons, badges, and GIFs to add color and visual depth to page</li>
                                    <li>Thought about how to teach future developers how to build page and added resources to bottom for more advanced section creation</li>
                                </ul>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
                                    <li>Came up with visually appealing and fun story-telling of personal biography, most used skills, and what am looking for in future for work</li>
                                    <li>Was able to compactly and effectively display a dashboard with breakdowns on code pushing activity and most used technologies</li>
                                    <li>Implemented resources to help other developers with more advanced sections of building a similar README file</li>
                                </ul>
                            </TabPanel>
                        </Box>
                    </Paper>
                </div>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        textAlign: 'center !important',
                        display: 'block !important'
                    }}
                    className={cx(mb3)}
                >
                    <Link
                        href="https://github.com/gatewayitconsulting/gatewayitconsulting/blob/main/README.md"
                        title="See website at https://github.com/gatewayitconsulting/gatewayitconsulting/blob/main/README.md"
                        target="_blank"
                        rel="noopener"
                    >
                        <Button
                            startIcon={<LanguageIcon />}
                            className={cx(buttonPrimary, buttonLink)}
                            size="large"
                            sx={{ marginTop: '1em !important' }}
                        >
                            See Website
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/gatewayitconsulting/gatewayitconsulting"
                        title="See code on Github"
                        target="_blank"
                        rel="noopener"
                    >
                        <Button
                            startIcon={<GitHubIcon />}
                            className={cx(buttonPrimary, buttonLink)}
                            size="large"
                            sx={{ marginTop: '1em !important' }}
                        >
                            See Github
                        </Button>
                    </Link>
                </Stack>
                <div className={cx(textCenter)}>
                    <Grid container spacing={1} sx={{ marginTop: "1em", marginBottom: "2em", paddingBottom: "3em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222", borderRadius: "5px" }}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h4" color="white" sx={{ marginTop: '1em !important' }}>
                                Languages &amp; Technologies
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ marginTop: "3em" }}>
                            <Avatar
                                alt="Github Icon"
                                src={githubImage}
                                className={cx(avatarStyles)}
                            />
                            <Typography variant="body1" sx={{ marginTop: "1.5em" }}>Github Markdown</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ marginTop: "3em" }}>
                            <Avatar
                                alt="Github Icon"
                                src={githubImage}
                                className={cx(avatarStyles)}
                            />
                            <Typography variant="body1" sx={{ marginTop: "1.5em" }}>Github</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Paper elevation={13} sx={{ backgroundColor: '#222 !important', color: '#FFF' }} className={cx(py1)}>
                    <Typography variant="h4" component="h4" sx={{ textAlign: 'center', marginTop: '1em !important', marginBottom: '1em !important' }}>
                        Layout
                    </Typography>
                    <div>
                        <img
                            src={mainImage}
                            className={cx(bottomPortfolioImage)}
                            alt="GitHub Readme page layout"
                        />
                    </div>
                </Paper>
            </div>
            <Footer />
        </div >
    );
}