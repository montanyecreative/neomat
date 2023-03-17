import React from "react";
import { cx, css } from "@emotion/css";

// sections of this page
import Footer from "../../../../components/footer.js";

// styles
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
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
  mb3,
} from "../../../../assets/styles/neomat";

// icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import htmlImage from "../../../../assets/imgs/skills/html5.svg";
import css3Image from "../../../../assets/imgs/skills/css3.svg";
import reactImage from "../../../../assets/imgs/skills/react.svg";
import javascriptImage from "../../../../assets/imgs/skills/javascript.svg";
import materialdesignImage from "../../../../assets/imgs/skills/materialdesign.svg";
import githubImage from "../../../../assets/imgs/skills/github-white.svg";
import mailchimpImage from "../../../../assets/imgs/skills/mailchimp.svg";
import sassImage from "../../../../assets/imgs/skills/sass.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// images
import montanyeWeddingHomePage from "../../../../assets/imgs/projects/wedding-website/montanye-wedding-home.png";
import montanyeWeddingWhenWherePage from "../../../../assets/imgs/projects/wedding-website/montanye-wedding-whenwhere.png";
import montanyeWeddingRSVPPage from "../../../../assets/imgs/projects/wedding-website/montanye-wedding-vendors.png";
import bottomImage from "../../../../assets/imgs/projects/wedding-website/montanye-wedding-rsvp.png";
import mailchimpLayoutImage from "../../../../assets/imgs/projects/wedding-website/mailchimp-save-the-date.png";

const backgroundColor = css`
  background-color: #222;
`;

const paddingTop = css`
  padding-top: 5em;
`;

const cursiveFont = css`
  font-family: "Alex Brush", cursive;
  font-weight: 500;
  line-height: 1.5em;
  font-size: 1.5rem;
`;

const bottomPortfolioImage = css`
  margin-top: 1em;
  width: 100%;
`;

const avatarStyles = css`
  height: 75px !important;
  width: 75px !important;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 13px 27px -5px #000, 0px 8px 16px -8px #222;
`;

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MontanyeWedding() {
  const itemData = [
    {
      img: montanyeWeddingHomePage,
      title: "Home Page",
    },
    {
      img: montanyeWeddingWhenWherePage,
      title: "When and Where Page",
    },
    {
      img: montanyeWeddingRSVPPage,
      title: "RSVP Page",
    },
  ];

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
              <ArrowBackIcon sx={{ fontSize: ".8rem", marginRight: ".5em" }} />
              All Projects
            </Link>
            ,
            <Link
              underline="hover"
              key="2"
              color="white"
              href="/projects/wedding-website"
            >
              Wedding Website
            </Link>
          </Breadcrumbs>
          <Typography variant="h3" gutterBottom component="h3">
            Wedding Website
          </Typography>
          <Paper
            elevation={13}
            sx={{ backgroundColor: "#222 !important", color: "#FFF" }}
            className={cx(py1)}
          >
            <Box
              sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Objectives, processes, solutions tabs"
                  variant="fullWidth"
                  textColor="inherit"
                  centered
                >
                  <Tab label="Objectives" {...a11yProps(0)} />
                  <Tab label="Processes" {...a11yProps(1)} />
                  <Tab label="Solutions" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ul
                  style={{ textAlign: "center", listStylePosition: "inside" }}
                >
                  <li>Create a beautiful wedding website</li>
                  <li>Focus on cursive font and sleek monochrome design</li>
                  <li>Setup a countdown timer to wedding day</li>
                  <li>Allow attendees to save the date to their calendar</li>
                  <li>Allow attendees to RSVP to the event</li>
                  <li>Keep attendees updated on event details through email</li>
                  <li>Promote the vendors digitally</li>
                  <li>Give as much information about the event as possible</li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ul
                  style={{ textAlign: "center", listStylePosition: "inside" }}
                >
                  <li>
                    Found a themed codebase that could be quickly scaled and
                    effectively managed
                  </li>
                  <li>
                    Communicated about and designed website layout, colors, and
                    fonts
                  </li>
                  <li>
                    Started to customize and add functionality to codebase
                  </li>
                  <li>
                    Selected Mailchimp as email client and began creating
                    wedding email segment list
                  </li>
                  <li>
                    Started implementing various plugins, developing some from
                    scratch
                  </li>
                  <li>
                    Collaborated with fellow developer to create API for
                    attendee RSVPs
                  </li>
                  <li>
                    Constantly asked for approval/feedback from website owners
                    to improve site
                  </li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ul
                  style={{ textAlign: "center", listStylePosition: "inside" }}
                >
                  <li>Mailchimp powered all the emails sent to attendees</li>
                  <li>Scaling a theme allowed faster development of plugins</li>
                  <li>Was able to remove unnecessary code from theme</li>
                  <li>
                    API collaboration provided high quality form and DB
                    functionality
                  </li>
                  <li>
                    Augmented theme with countdown timer, calendar, RSVPs,
                    vendor page
                  </li>
                  <li>
                    Implemented Google Analytics to understand most used pages
                  </li>
                </ul>
              </TabPanel>
            </Box>
          </Paper>
        </div>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            textAlign: "center !important",
            display: "block !important",
          }}
          className={cx(mb3)}
        >
          <Link
            href="https://github.com/montanyecreative/weddingwebsite"
            title="See code on Github"
            target="_blank"
            rel="noopener"
          >
            <Button
              startIcon={<GitHubIcon />}
              className={cx(buttonPrimary, buttonLink)}
              size="large"
              sx={{ marginTop: "1em !important" }}
            >
              See Github
            </Button>
          </Link>
        </Stack>
        <div className={cx(textCenter)}>
          <Grid
            container
            spacing={1}
            sx={{
              marginTop: "1em",
              marginBottom: "2em",
              paddingBottom: "3em",
              boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222",
              borderRadius: "5px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h4"
                color="white"
                sx={{ marginTop: "1em !important" }}
              >
                Languages &amp; Technologies
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="HTML5 Icon"
                src={htmlImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                HTML5
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="CSS3 Icon"
                src={css3Image}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                CSS3
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="SASS Icon"
                src={sassImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                SASS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="JavaScript Icon"
                src={javascriptImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                JavaScript
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="Material Design Icon"
                src={materialdesignImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                Material <br />
                Design
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="ReactJS Icon"
                src={reactImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                ReactJS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="Github Icon"
                src={githubImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                Github
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ marginTop: "3em" }}>
              <Avatar
                alt="Mailchimp Icon"
                src={mailchimpImage}
                className={cx(avatarStyles)}
              />
              <Typography variant="body1" sx={{ marginTop: "1.5em" }}>
                Mailchimp
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Paper
          elevation={13}
          sx={{ backgroundColor: "#222 !important", color: "#FFF" }}
          className={cx(py1)}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: "center",
              marginTop: "1em !important",
              marginBottom: "1em !important",
            }}
          >
            Layouts
          </Typography>
          <ImageList sx={{ width: "100%" }} variant="woven" cols={3} gap={12}>
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
          <div>
            <img
              src={bottomImage}
              className={cx(bottomPortfolioImage)}
              alt="Wedding Website RSVP page layout"
            />
            <img
              src={mailchimpLayoutImage}
              className={cx(bottomPortfolioImage)}
              alt="Wedding Website Mailchimp Save the Date email layout"
            />
          </div>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
