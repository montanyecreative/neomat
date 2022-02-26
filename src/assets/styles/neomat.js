import { css } from '@emotion/css';

// colors
const black = "#222";
const white = "#FFF";

// containers
const containerFluid = css`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`

const container = css`
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`

const main = css`
    background: #222;
    color: #FFF;
    position: relative;
    z-index: 3;
`

const footer = css`
    background-color: #222;
    color: #FFF;
    border-top: 1px solid #000;
`

// utilities
const my1 = css`
    margin-top: 1em;
    margin-bottom: 1em;
`

const my2 = css`
    margin-top: 2em;
    margin-bottom: 2em;
`

const my3 = css`
    margin-top: 3em;
    margin-bottom: 3em;
`

const my4 = css`
    margin-top: 4em;
    margin-bottom: 4em;
`

const my5 = css`
    margin-top: 5em;
    margin-bottom: 5em;
`

const mxAuto = css`
    margin-left: auto;
    margin-right: auto;
`

const mx1 = css`
    margin-left: 1em;
    margin-right: 1em;
`

const mx2 = css`
    margin-left: 2em;
    margin-right: 2em;
`

const mx3 = css`
    margin-left: 3em;
    margin-right: 3em;
`

const mx4 = css`
    margin-left: 4em;
    margin-right: 4em;
`

const mx5 = css`
    margin-left: 5em;
    margin-right: 5em;
`

const py1 = css`
    padding-top: 1em;
    padding-bottom: 1em;
`

const textCenter = css`
    text-align: center;
`

const textMiddle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`

const dividingLine = css`
    border-top: 1px solid #000;
`

// buttons
const buttonPrimary = css`
    border-width: 1px;
    padding: 11px 23px !important;
    background-color: #222 !important;
    border-radius: 50px !important;
    margin: 1em;
    &:hover {
        background-color: #222 !important;
        opacity: .8 !important;
    }
`

const buttonLink = css`
    color: white !important;
    text-decoration: none !important;
`

// text
const fontSize1 = css`
    font-size: 1em;
`
const emphasis = css`
    font-size: 1em;
    font-style: italic;
    margin-top: 1em;
`

// links
const linkOverrides = css`
    text-decoration: none !important;
`

// images
const avatar = css`
    height: 200px !important;
    width: 200px !important;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 13px 27px -5px #000, 0px 8px 16px -8px #222;
`

// icons
const icon = css`
    display: inline;
    vertical-align: middle;
    margin-right: .2em;
`
const iconText = css`
    color: #FFF;
    display: inline;
    vertical-align: middle;
    box-shadow: 0px 13px 27px -5px #000, 0px 8px 16px -8px #222;
`

export {
    black,
    white,
    containerFluid,
    container,
    main,
    my1,
    my2,
    my3,
    my4,
    my5,
    mxAuto,
    mx1,
    mx2,
    mx3,
    mx4,
    mx5,
    py1,
    textCenter,
    textMiddle,
    dividingLine,
    buttonPrimary,
    buttonLink,
    avatar,
    emphasis,
    icon,
    iconText,
    fontSize1,
    linkOverrides,
    footer
};