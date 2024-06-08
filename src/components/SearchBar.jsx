import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        width: "100%",
        maxWidth: "480px",
        height: "45px",
        mr: { sm: 5 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--bg-primary)",
        border: "2px solid transparent",

        "&:focus-within": {
          border: "2px solid var(--text-primary)",
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        style={{
          height: "40px",
          width: { sm: "100%", md: "max-content" },
          backgroundColor: "var(--bg-primary)",
          color: "white",
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "var(--text-primary-dark)",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
