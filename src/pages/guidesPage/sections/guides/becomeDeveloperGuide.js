import React from "react";
import { cx, css } from '@emotion/css';

// sections of this page
import Footer from "../../../../components/footer.js";

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// images
import guideImage from "../../../../assets/imgs/entry-developer.jpg";

// styles
import { Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {
    containerFluid,
    container,
    main,
    pb2,
    pt2,
    px4,
    textCenter,
    textLeft,
    buttonLink,
    buttonPrimary,
    guideCoverImage
} from "../../../../assets/styles/neomat";

const backgroundColor = css`
    background-color: #222;
`

const paddingTop = css`
    padding-top: 5em;
`

const linkOverrides = css`
    text-decoration: underline !important;
    margin-left: .5em !important;
    color: #FFF !important;
`

export default function GuidesPage() {
    return (
        <div className={cx(containerFluid)}>
            <div className={cx(main, px4, pt2, pb2, textCenter)}>
                <div className={cx(backgroundColor, paddingTop)}>
                    <div className={cx(container, textLeft)}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="Guides navigation"
                            color="white"
                        >
                            <Link
                                underline="hover"
                                key="1"
                                href="/guides"
                                color="white"
                            >
                                <ArrowBackIcon sx={{ fontSize: ".8rem", marginRight: '.5em' }} />
                                Guides
                            </Link>,
                            <Link
                                underline="hover"
                                key="2"
                                href="/guides/become-a-developer"
                                color="white"
                            >
                                Want to become a website developer?
                            </Link>
                        </Breadcrumbs>
                        <Typography variant="h3" gutterBottom component="h3" sx={{ marginTop: '.25em !important' }}>
                            Want to become a website developer?
                        </Typography>
                        <Typography >
                            Last updated: 08/29/2021
                        </Typography>
                        <img
                            src={guideImage}
                            alt="Contemplating developer"
                            id="guideImage"
                            className={cx(guideCoverImage)}
                        />
                        <Button
                            className={cx(buttonPrimary, buttonLink)}
                            id="buttonIconGithub"
                            aria-label="Read More"
                            href="#skills"
                            sx={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px !important", marginTop: "2em !important", marginBottom: "2em !important" }}
                        >
                            Take me to the skills I need
                        </Button>
                        <Typography gutterBottom variant="h5" component="h5">
                            Overview
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            To become a website developer, you must understand the basic building blocks that make up a website and how they function. Skills you must learn include HTML5, CSS, and JavaScript.
                            Responsive Design will make your website look good no matter the screen size and should always be a priority when you are developing any website or app.
                            SASS is a coding language that makes CSS easier to use and more reusable which will save you time from the get go when developing websites and apps.
                            Bootstrap and Material Design are two different design frameworks that include prebuilt HTML elements and designs for those elements so that you can write less code and get your web app up and running quicker.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5" sx={{ marginTop: "1em" }}>
                            Nice haves are:
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <b>- The Agile Methodology</b>, which defines how you will be planning, designing, and developing websites in your daily career. It will also define how to communicate with teams that interface with websites and application projects.
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <b>- Git &amp; Version Control</b> will help you organize code and avoid coding errors when working with more than one person on a project.
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <b>- ReactJS, Angular, and VueJS</b> are JavaScript libraries and frameworks (in case of Angular) that are similar to SASS in that they include several pre-built JavaScript functionalities that make developing easier and quicker. These libraries are highly prized in recruiting for jobs.
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <b>- NPM</b> is a package manager tool that is essential to installing several of the libraries and frameworks discussed above. It is often used in a CLI format that can be worked by entering different commands to achieve different results.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5" id="skills" sx={{ marginTop: "1em" }}>
                            Skills to Learn:
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ marginTop: "1em" }}>
                            <b>Must Haves</b>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - HTML5
                            <Link
                                href="https://www.w3schools.com/html/html_intro.asp"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with HTML5"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - CSS3
                            <Link
                                href="https://www.w3schools.com/css/css_intro.asp"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with CSS3"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - SASS
                            <Link
                                href="https://sass-lang.com/guide"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with SASS"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Responsive Design
                            <Link
                                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Responsive Design"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - JavaScript
                            <Link
                                href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with JavaScript"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Bootstrap
                            <Link
                                href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Bootstrap"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Material Design
                            <Link
                                href="https://material.io/design/introduction"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Material Design"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ marginTop: "1em" }}>
                            <b>Nice to Haves</b>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Agile Methodology
                            <Link
                                href="https://medium.com/shecancode/an-introduction-to-agile-software-development-914339dcec66"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Agile Methodology"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Git &amp; Version Control
                            <Link
                                href="https://www.atlassian.com/git/tutorials/what-is-version-control"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Git &amp; Version Control"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - ReactJS
                            <Link
                                href="https://reactjs.org/tutorial/tutorial.html"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with ReactJS"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - Angular
                            <Link
                                href="https://angular.io/guide/what-is-angular"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with Angular"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - VueJS
                            <Link
                                href="https://vuejs.org/v2/guide/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with VueJS"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            - NPM &amp; Node.JS
                            <Link
                                href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
                                target="_blank"
                                rel="noopener"
                                aria-label="Get started with NPM &amp; Node.JS"
                                className={cx(linkOverrides)}
                            >
                                Get Started
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5" sx={{ marginTop: "1em" }}>
                            Must Have Books:
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://www.amazon.com/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Buy Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett"
                                className={cx(linkOverrides)}
                            >
                                Web Design with HTML, CSS, JavaScript and jQuery Set by Jon Duckett
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary-dp-0135957052/dp/0135957052/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Buy The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt"
                                className={cx(linkOverrides)}
                            >
                                The Pragmatic Programmer: Your Journey To Mastery by David Thomas and Andrew Hunt
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://www.scrum.org/resources/scrum-guide"
                                target="_blank"
                                rel="noopener"
                                aria-label="Buy The Scrum Guide by Ken Schwaber and Jeff Sutherland"
                                className={cx(linkOverrides)}
                            >
                                The Scrum Guide by Ken Schwaber and Jeff Sutherland
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5" sx={{ marginTop: "1em" }}>
                            Bootcamps &amp; Courses:
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ marginTop: "1em" }}>
                            <b>Bootcamps</b>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://brainstation.io/course/online/remote-web-development-bootcamp"
                                target="_blank"
                                rel="noopener"
                                aria-label="Take the Coding Bootcamp Online by Brainstation"
                                className={cx(linkOverrides)}
                            >
                                Coding Bootcamp Online by Brainstation
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://www.thinkful.com/bootcamp/web-development/#introduction"
                                target="_blank"
                                rel="noopener"
                                aria-label="Take the Software Engineering Bootcamp by Thinkful"
                                className={cx(linkOverrides)}
                            >
                                Software Engineering Bootcamp by Thinkful
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ marginTop: "1em" }}>
                            <b>Courses</b>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://javascript30.com/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Take the JavaScript30 (free) course"
                                className={cx(linkOverrides)}
                            >
                                JavaScript30 (free)
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <Link
                                href="https://www.udemy.com/course/the-complete-javascript-course/"
                                target="_blank"
                                rel="noopener"
                                aria-label="Take The Complete JavaScript Course 2021 by udemy"
                                className={cx(linkOverrides)}
                            >
                                The Complete JavaScript Course 2021 by udemy
                            </Link>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5" sx={{ marginTop: "1em" }}>
                            Next Steps:
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            The next step of your journey to becoming a website developer is to learn about APIs and how to consume them to show data in your application. Another guide is coming soon that will talk about how to create one and what else you need to know to work with APIs.
                        </Typography>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}