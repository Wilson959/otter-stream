import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    flexWrap="wrap"
    p={2}
    sx={{
      position: "sticky",
      backgroundColor: "#2A272A",
      top: 0,
      justifyContent: "space-between",
      zIndex: "100",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
    >
      <img src={logo} alt="riderx media logo" height={45} />
      <Typography
        component="p"
        variant="h6"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          ml: 1,
          opacity: 0.8,
        }}
      >
        YouTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
