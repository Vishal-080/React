import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import CommentIcon from "@mui/icons-material/Comment";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Masai
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2 }}
          ></Typography>
          <Button color="inherit">
            <GitHubIcon fontSize="small" />
            Github
          </Button>
          <Button color="inherit">
            <CommentIcon fontSize="small" />
            Slack
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
