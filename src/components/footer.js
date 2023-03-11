import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

// icons
import EmailIcon from '@mui/icons-material/Email';

// styles
import {
    footer,
    white,
    linkOverrides,
    buttonPrimary,
    buttonLink
} from "../assets/styles/neomat.js";

const footerLinkOverrides = css`
    margin-top: 1em !important;
    margin-bottom: 1em !important;
    @media (min-width: 576px) {
        margin-bottom: inherit !important;
    }
`

const footerButtonOverrides = css`
    @media (min-width: 576px) {
        float: right !important;
    }
`

export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className={cx(footer)}>
            <Grid container sx={{ padding: '1em' }}>
                <Grid item xs={12} sm={8} className={cx(footerLinkOverrides)}>
                    <span
                        color={white}
                    >
                        &copy; {currentYear} &nbsp;
                        <Link
                            href="https://www.montanyecreative.com/"
                            target="_blank"
                            rel="noopener"
                            color={white}
                            className={cx(linkOverrides)}
                        >
                            Montanye Creative LLC
                        </Link>
                    </span>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link
                        href="mailto:montanyecreative@outlook.com"
                        target="_blank"
                        rel="noopener"
                        color={white}
                        className={cx(linkOverrides, footerButtonOverrides)}
                    >
                        <Button
                            className={cx(buttonPrimary, buttonLink)}
                            startIcon={<EmailIcon />}
                        >
                            Email me
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}