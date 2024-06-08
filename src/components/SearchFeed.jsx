import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data: videos } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const result = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      return result.items;
    },
  });

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for:{" "}
        <span style={{ color: "var(--text-primary)" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
