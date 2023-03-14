import React from "react";
// import { cx, css } from '@emotion/css';

// plugins
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ReactGA from 'react-ga';

// styles
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
import image8 from "../../../assets/imgs/photography/lake-bridge.jpg";
import image9 from "../../../assets/imgs/photography/tower-in-trees.jpg";
import image10 from "../../../assets/imgs/photography/lake-sky-view.jpg";
import image11 from "../../../assets/imgs/photography/lake-reeds-white.jpg";
import image12 from "../../../assets/imgs/photography/zoo-bird-lake.jpg";

const itemData = [
  {
    img: image1,
    title: 'Bird at the lake',
    category: 'infrared',
  },
  {
    img: image2,
    title: 'Nature lake red',
    category: 'infrared',
  },
  {
    img: image3,
    title: 'Nature lake white',
    category: 'infrared',
  },
  {
    img: image4,
    title: 'Roses white',
    category: 'infrared',
  },
  {
    img: image5,
    title: 'Roses red',
    category: 'infrared',
  },
  {
    img: image6,
    title: 'Tree at the lake',
    category: 'infrared',
  },
  {
    img: image7,
    title: 'Turn in the path',
    category: 'infrared',
  },
  {
    img: image8,
    title: 'Stone bridge in lake',
    category: 'infrared',
  },
  {
    img: image9,
    title: 'Wooden tower in the trees',
    category: 'infrared',
  },
  {
    img: image10,
    title: 'Grass and trees with lake and sky in the background',
    category: 'infrared',
  },
  {
    img: image11,
    title: 'Lake reeds and surface algae',
    category: 'infrared',
  },
  {
    img: image12,
    title: 'Zoo birds on lake',
    category: 'infrared',
  },
];

export default function PhotographsSection() {
  return (
    <div>
      <Box sx={{ boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }}>
        <ImageList variant="masonry" cols={3} gap={9} sx={{ overflowX: "hidden" }}>
          {itemData.map((item) => (
            <Zoom>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={ReactGA.event({ category: 'Photography', action: 'Clicked on', label: 'Image: ' + item.title })}
                />
              </ImageListItem>
            </Zoom>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}