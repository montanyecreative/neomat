import React from "react";
import { cx, css } from "@emotion/css";

// core components
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// icons
import StarIcon from "@mui/icons-material/Star";

// styles
import { textCenter } from "../../../assets/styles/neomat";

const starIcon = css`
  color: #fff !important;
`;

export default function MatrixSection() {
  return (
    <div className={cx(textCenter)}>
      <Grid
        container
        spacing={1}
        style={{
          textAlign: "left",
          marginTop: "1em",
          marginBottom: "2em",
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
        id="highlights"
      >
        <Grid item xs={12}>
          <TableContainer
            sx={{
              boxShadow: "8px 9px 27px -9px #000, 0px 8px 16px -8px #222",
              borderRadius: "6px",
            }}
          >
            <Table
              style={{ minWidth: 650, backgroundColor: "#222" }}
              size="small"
              aria-label="Skills matrix"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", color: "#FFF" }}>
                    Skill
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#FFF" }}>
                    # Years Used
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#FFF" }}>
                    Proficiency
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    Web Development (PWAs, Localization, Responsive)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    Salesforce Commerce Cloud
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>3+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    Page Designer (SME)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>2+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    JavaScript (React, Nodejs, Angular2, AngularJS, jQuery)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    ADA Compliance
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>4+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    Bootstrap (3,4,5)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>APIs</TableCell>
                  <TableCell style={{ color: "#FFF" }}>3+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    Agile (Scrum, SAFe, Jira/Confluence Poweruser)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>HTML/CSS</TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#FFF" }}>
                    UX/UI Tools (Adobe Photoshop, XD, Illustrator, Figma)
                  </TableCell>
                  <TableCell style={{ color: "#FFF" }}>5+</TableCell>
                  <TableCell style={{ color: "#FFF" }}>
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                    <StarIcon className={cx(starIcon)} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
