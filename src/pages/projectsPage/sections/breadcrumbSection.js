import React from "react";
import { cx, css } from '@emotion/css';

// styles
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const backgroundColor = css`
    background-color: #222;
`

export default function BreadcrumbSection() {
    return (
        <div>
            <div>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="Projects navigation"
                    color="white"
                    className={cx(backgroundColor)}
                >
                    <Link underline="hover" key="1" color="white" href="/projects">
                        All Projects
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}