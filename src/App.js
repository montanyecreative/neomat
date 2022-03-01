import React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { cx, css } from '@emotion/css';


// styles
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

// components/sections
import HomePage from "./pages/homePage/homePage";
import ResumePage from "./pages/resumePage/resumePage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import MontanyeWeddingProject from "./pages/projectsPage/sections/projects/montanyeWedding";
import GuidesPage from "./pages/guidesPage/guidesPage";
import BecomeDeveloperGuide from "./pages/guidesPage/sections/guides/becomeDeveloperGuide";

const theme = createTheme({
  palette: {
    primary: {
      main: '#222'
    }
  },
});

const drawerWidth = 240;

const hide = css`
  display: none;
`
const neoOpenMenu = css`
    border-radius: 50px;
    background: linear-gradient(225deg, #1f1f1f, #242424);
    box-shadow: -7px 7px 13px #1d1d1d, 7px -7px 13px #272727;
`

function App(props) {
  const { container } = props;
  const [open, setOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const followLink = () => {
    setOpen(false);
    scrollToTop();
  };

  const drawer = (
    <div>
      <div>
        <Typography variant="h6" noWrap sx={{ textAlign: 'center' }}>
          JMDesigns
        </Typography>
      </div>
      <Divider />
      <List>
        {["Home", "Projects", "Resume", "Guides"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={"/" + text.toLocaleLowerCase()}
            sx={{
              margin: "0.3em",
              marginBottom: "1em",
              borderRadius: "8px",
              background: "ffffff",
              boxShadow: "-6px 6px 12px #e6e6e6, 6px -6px 12px #ffffff",
              color: "#222"
            }}
            onClick={followLink}
            aria-label={"Navigate to the " + text.toLocaleLowerCase() + " page"}
          >
            <ListItemIcon>
              {index === 0 ? <HomeIcon /> : <span></span>}
              {index === 1 ? <DesktopMacIcon /> : <span></span>}
              {index === 2 ? <AssignmentIcon /> : <span></span>}
              {index === 3 ? <LibraryBooksIcon /> : <span></span>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" sx={{ display: 'flex' }}>
        <AppBar position="fixed"
          sx={{
            marginLeft: drawerWidth,
            backgroundColor: "#222 !important",
            minHeight: "70px !important",
            height: "70px !important"
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <a
              href="/Home"
              id="brand-link"
            >
              <Typography
                variant="h6"
                noWrap
                aria-label="Navigate to home page"
              >
                JMDesigns
              </Typography>
            </a>
            <IconButton
              color="inherit"
              aria-label="Open menu"
              edge="end"
              onClick={handleDrawerOpen}
              className={cx(open && hide), neoOpenMenu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <nav
            sx={{
              [theme.breakpoints.up("sm")]: {
                width: drawerWidth,
                flexShrink: 0
              }
            }}
            aria-label="Navigation menu"
          >
            <Drawer
              container={container}
              variant="persistent"
              anchor="right"
              open={open}
              onClose={handleDrawerClose}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  borderRadius: "3px",
                  overflowX: "hidden"
                },
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // necessary for content to be below app bar
                  ...theme.mixins.toolbar,
                  justifyContent: 'flex-start'
                }}
              >
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                    borderRadius: "50px",
                    background: "linear-gradient(225deg, #e6e6e6, #ffffff)",
                    boxShadow: "-7px 7px 14px #d9d9d9, 7px -7px 14px #ffffff"
                  }}
                  aria-label="Close menu"
                >
                  <ChevronRightIcon />
                </IconButton>
              </div>
              {drawer}
            </Drawer>
          </nav>

          <main
            sx={{
              flexGrow: 1,
              padding: 0,
              [theme.breakpoints.up("sm")]: {
                marginLeft: -drawerWidth
              },
              backgroundColor: "#222"
            }}
          >
            <div />
            <Routes>
              <Route exact path="/home" element={<HomePage />} />
              <Route path="/projects/montanye-wedding" element={<MontanyeWeddingProject />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/guides/become-a-developer" element={<BecomeDeveloperGuide />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
