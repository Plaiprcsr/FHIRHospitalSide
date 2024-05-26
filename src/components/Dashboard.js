import React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Grid,
  ButtonBase,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.png";
import fhirLogo from "../assets/icon1.png";
import patientsIcon from "../assets/icon2.png";
import searchIcon from "../assets/icon3.png";
import statisticsIcon from "../assets/icon4.png";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            width: "100%",
            height: "300px",
            background: `url(${backgroundImage}) no-repeat center center`,
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={fhirLogo}
              alt="FHIR Logo"
              style={{ width: "100px", marginRight: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "black",
                  textAlign: "left",
                }}
              >
                Hospital
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Dashboard
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <ButtonBase
              component={Link}
              to="/patients"
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={patientsIcon}
                alt="Patients"
                style={{
                  width: "75px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Patients</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={searchIcon}
                alt="Search"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Search</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={statisticsIcon}
                alt="Statistics"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Statistics</Typography>
            </ButtonBase>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, color: "#999" }}>
          FHIR Dashboard ©2024 Created by 8people
        </Typography>


      </Box>
    </Box>
  );
};

export default Dashboard;
