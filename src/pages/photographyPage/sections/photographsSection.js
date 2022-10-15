import React from "react";
// import { cx, css } from '@emotion/css';

// plugins
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// styles
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import { Typography } from "@mui/material";
// import {
//     textMiddle,
//     mx1,
//     buttonPrimary,
//     buttonLink
// } from '../../../assets/styles/neomat.js';


// images
import image1 from "../../../assets/imgs/photography/bird-at-lake.jpg";
import image2 from "../../../assets/imgs/photography/nature-lake-red.jpg";
import image3 from "../../../assets/imgs/photography/nature-lake-white.jpg";
import image4 from "../../../assets/imgs/photography/roses-white.jpg";
import image5 from "../../../assets/imgs/photography/roses.jpg";
import image6 from "../../../assets/imgs/photography/tree-at-lake.jpg";
import image7 from "../../../assets/imgs/photography/turn-in-path-red.jpg";

const itemData = [
    {
      img: image1,
      title: 'Bird at the lake',
    },
    {
      img: image2,
      title: 'Nature lake red',
    },
    {
      img: image3,
      title: 'Nature lake white',
    },
    {
      img: image4,
      title: 'Roses white',
    },
    {
      img: image5,
      title: 'Roses red',
    },
    {
      img: image6,
      title: 'Tree at the lake',
    },
    {
      img: image7,
      title: 'Turn in the path',
    },
  ];

export default function PhotographsSection() {
    return (
        <div>
            <Box sx={{ boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }}>
                <ImageList variant="masonry" cols={3} gap={9}>
                    {itemData.map((item) => (
                        <Zoom>
                            <ImageListItem key={item.img}> 
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </Zoom>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}