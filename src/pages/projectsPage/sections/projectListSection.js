import React from "react";
import { cx, css } from '@emotion/css';

// styles
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

// images
import montanyeWeddingCover from "../../../assets/imgs/projects/montanye-wedding.PNG";

const Item = styled(Paper)(() => ({
    height: 400
}));

const backgroundColor = css`
    background-color: #222;
`

const montanyeWedding = css`
    background-image: url("${montanyeWeddingCover}");
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
                    <div>
                        <Typography>Hello</Typography>
                    </div>
                </Box>
            </div>
        </div>
    );
}