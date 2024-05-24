import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import BarChartIcon from "@mui/icons-material/BarChart";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#082F49",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/patients">
            <ListItemIcon>
              <PeopleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Patient List" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
