import React from "react";
import { cx, css } from '@emotion/css';

// core components
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// import Modal from '@mui/material/Modal';

// sections of this page
import Footer from "../../components/footer.js";
import Intro from "./sections/intro";
import Matrix from "./sections/matrix";
import Experience from "./sections/experience";
import Education from "./sections/education";
import Skills from "./sections/skills";

// icons
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NorthIcon from '@mui/icons-material/North';
// import ShareIcon from '@mui/icons-material/Share';

// assets
import resumeLink from '../../assets/john-montanye-resume.pdf';

// styles
import { containerFluid, main, pb2, pt2, px4, textCenter } from "../../assets/styles/neomat";
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

const backgroundColor = css`
    background-color: #222;
`

const navLink = css`
    color: #FFF !important;
    margin-right: .5em !important;
    text-decoration: underline !important;
`

const paddingTop = css`
    padding-top: 5em;
`

const actions = [
    { icon: <DownloadIcon />, name: 'Download resume', action: handleDownload },
    { icon: <MailOutlineIcon />, name: 'Contact me', action: handleEmail },
    // { icon: <ShareIcon />, name: 'Share page', action: handleShareOpen },
    { icon: <NorthIcon />, name: 'To top of page', action: handleToTop },
];

function handleDownload() {
    window.open(resumeLink);
};

function handleEmail() {
    var emailAddress = 'montanyecreative@outlook.com';
    document.location = 'mailto:' + emailAddress;
};

// function handleShareOpen() {
//     handleModalOpen();
// };

function handleToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function ResumePage() {
    const [open, setOpen] = React.useState(false);
    // const [open, setOpen, openModal, setModalOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const handleModalOpen = () => setModalOpen(true);
    // const handleModalClose = () => setModalOpen(false);

    return (
        <div className={cx(containerFluid)}>
            <div id="resumeActions">
                <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: '25px', right: '0', zIndex: '999' }}>
                    <SpeedDial
                        ariaLabel="SpeedDial controlled open example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.action}
                            />
                        ))}
                    </SpeedDial>
                </Box>
            </div>
            <div className={cx(main, px4, pt2, pb2, textCenter)}>
                <div className={cx(backgroundColor, paddingTop)}>
                    <Typography variant="h3" gutterBottom component="h3">
                        Resume
                    </Typography>
                    {/* <Typography variant="body1">
                        <i>Currently only looking for small freelance projects outside of 8am-6pm schedule.</i>
                    </Typography> */}
                    <Typography sx={{ marginTop: '1.5em !important' }}>
                        <Link href="#highlights" className={cx(navLink)}>
                            Highlights
                        </Link>
                        <Link href="#experience" className={cx(navLink)}>
                            Experience
                        </Link>
                        <Link href="#education" className={cx(navLink)}>
                            Education
                        </Link>
                        <Link href="#skills" className={cx(navLink)}>
                            Skills
                        </Link>
                    </Typography>
                    <Intro />
                    <Matrix />
                    <Experience />
                    <Education />
                    <Skills />
                </div>
            </div>
            <Footer />
            {/* <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
        </div>
    );
}