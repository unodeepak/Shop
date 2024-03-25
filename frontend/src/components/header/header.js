import { AppBar, Box, Toolbar, Typography, Button, Grid } from "@mui/material";
import AddItem from "../items/addItem";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box mb={9}>
        <AppBar sx={{ background: "black" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              component={RouterLink}
              to="/"
            >
              Shop
            </Button>
            <Grid>
              {/* <Button component={RouterLink} to="/showAllItem" variant="outlined" sx={{ ml: 2 }}>Show All Items</Button> */}

              <Button
                component={RouterLink}
                to="/addItem"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Add Item
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
