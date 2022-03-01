import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

// images
import htmlImage from "../../../assets/imgs/skills/html5.svg";
import adobeIllustratorImage from "../../../assets/imgs/skills/adobeillustrator.svg";
import adobePhotoshopImage from "../../../assets/imgs/skills/adobephotoshop.svg";
import atlassianImage from "../../../assets/imgs/skills/atlassian.svg";
import jiraImage from "../../../assets/imgs/skills/jira.svg";
import angularImage from "../../../assets/imgs/skills/angular.svg";
import bootstrapImage from "../../../assets/imgs/skills/bootstrap.svg";
import csharpImage from "../../../assets/imgs/skills/csharp.svg";
import css3Image from "../../../assets/imgs/skills/css3.svg";
import dotnetImage from "../../../assets/imgs/skills/dot-net.svg";
import gitImage from "../../../assets/imgs/skills/git.svg";
import githubImage from "../../../assets/imgs/skills/github-white.svg";
import googleanalyticsImage from "../../../assets/imgs/skills/googleanalytics.svg";
import gulpImage from "../../../assets/imgs/skills/gulp.svg";
import herokuImage from "../../../assets/imgs/skills/heroku.svg";
import invisionImage from "../../../assets/imgs/skills/invision.svg";
import javascriptImage from "../../../assets/imgs/skills/javascript.svg";
import jqueryImage from "../../../assets/imgs/skills/jquery.svg";
import jsonImage from "../../../assets/imgs/skills/json.svg";
import mailchimpImage from "../../../assets/imgs/skills/mailchimp.svg";
import materialdesignImage from "../../../assets/imgs/skills/materialdesign.svg";
import mysqlImage from "../../../assets/imgs/skills/mysql.svg";
import nodejsImage from "../../../assets/imgs/skills/nodejs.svg";
import npmImage from "../../../assets/imgs/skills/npm.svg";
import phpImage from "../../../assets/imgs/skills/php.svg";
import postgresqlImage from "../../../assets/imgs/skills/postgresql.svg";
import reactImage from "../../../assets/imgs/skills/react.svg";
import responsiveImage from "../../../assets/imgs/skills/responsive.svg";
import salesforceImage from "../../../assets/imgs/skills/salesforce.svg";
import sassImage from "../../../assets/imgs/skills/sass.svg";
import sketchImage from "../../../assets/imgs/skills/sketch.svg";
import slackImage from "../../../assets/imgs/skills/slack.svg";
import typescriptImage from "../../../assets/imgs/skills/typescript.svg";
import uxuiImage from "../../../assets/imgs/skills/ux-ui.svg";
import wordpressImage from "../../../assets/imgs/skills/wordpress.svg";
import shopifyImage from "../../../assets/imgs/skills/shopify.svg";

// styles
import { textCenter } from "../../../assets/styles/neomat";

const avatarStyles = css`
    height: 75px !important;
    width: 75px !important;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 13px 27px -5px #000, 0px 8px 16px -8px #222;
`

export default function SkillsSection() {

    return (
        <div className={cx(textCenter)}>
            <Grid container spacing={1} style={{ marginTop: "1em", marginBottom: "2em", paddingBottom: "3em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} id="skills">
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" color="white" style={{ marginTop: "2em" }}>Skills</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="HTML5 Icon"
                        src={htmlImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>HTML5</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Adobe Illustrator Icon"
                        src={adobeIllustratorImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Adobe <br />Illustrator</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Adobe Photoshop Icon"
                        src={adobePhotoshopImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Adobe <br />Photoshop</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Atlassian Icon"
                        src={atlassianImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Atlassian</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Jira Icon"
                        src={jiraImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Jira</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Angular Icon"
                        src={angularImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Angular</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Bootstrap Icon"
                        src={bootstrapImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Bootstrap</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="C# Icon"
                        src={csharpImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>C#</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="CSS3 Icon"
                        src={css3Image}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>CSS3</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt=".NET Icon"
                        src={dotnetImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>.NET</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Git Icon"
                        src={gitImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Git</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Github Icon"
                        src={githubImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Github</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Google Analytics Icon"
                        src={googleanalyticsImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Google <br />Analytics</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Gulp Icon"
                        src={gulpImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Gulp</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Heroku Icon"
                        src={herokuImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Heroku</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="inVision Icon"
                        src={invisionImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>inVision</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="JavaScript Icon"
                        src={javascriptImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>JavaScript</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="jQuery Icon"
                        src={jqueryImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>jQuery</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="JSON Icon"
                        src={jsonImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>JSON</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Mailchimp Icon"
                        src={mailchimpImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Mailchimp</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Material Design Icon"
                        src={materialdesignImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Material <br />Design</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Node JS Icon"
                        src={nodejsImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Node JS</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="MySQL Icon"
                        src={mysqlImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>MySQL</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="NPM Icon"
                        src={npmImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>NPM</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="PHP Icon"
                        src={phpImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>PHP</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="PostGRESQL Icon"
                        src={postgresqlImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>PostgreSQL</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="ReactJS Icon"
                        src={reactImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>ReactJS</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Responsive Design Icon"
                        src={responsiveImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Responsive <br />Design</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Salesforce Icon"
                        src={salesforceImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Salesforce</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="SASS Icon"
                        src={sassImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>SASS</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Sketch Icon"
                        src={sketchImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Sketch</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Slack Icon"
                        src={slackImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Slack</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="TypeScript Icon"
                        src={typescriptImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>TypeScript</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="UX UI Icon"
                        src={uxuiImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>UX UI</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="WordPress Icon"
                        src={wordpressImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>WordPress</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ marginTop: "3em" }}>
                    <Avatar
                        alt="Shopify Icon"
                        src={shopifyImage}
                        className={cx(avatarStyles)}
                    />
                    <Typography variant="body1" style={{ marginTop: "1.5em" }}>Shopify</Typography>
                </Grid>
            </Grid>
        </div>
    );
}