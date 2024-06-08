import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

import Logo from "../assets/logo-light.svg";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    flexWrap={{ xs: "wrap", sm: "nowrap" }}
    gap={1}
    px={4}
    py={1}
    minHeight="80px"
    sx={{
      position: "sticky",
      backgroundColor: "var(--bg-secondary)",
      top: 0,
      justifyContent: { xs: "center", sm: "space-between" },
      zIndex: "100",
      borderBottom: "1px solid black",
      alignItems: "center",
    }}
  >
    <Link to="/">
      <img src={Logo} alt="riderx media logo" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
