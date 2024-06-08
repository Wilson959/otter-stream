import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { getCurrentYear } from "../utils/";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Latest");

  const { data: videos } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      return data.items;
    },
  });

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} className="feed">
      <Box
        position="relative"
        sx={{
          height: { sx: "auto" },
          display: "flex",
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          bottom={0}
          variant="body2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontFamily="Roboto, sans-serif"
          sx={{
            py: 1.5,
            color: "gray",
            position: "absolute",
            backgroundColor: "var(--bg-secondary)",
            width: "100%",
          }}
        >
          &copy;Copyright{" "}
          <span style={{ marginInline: ".4em" }}>{getCurrentYear()}</span> Otter
          Stream
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", flex: 2, aspectRatio: "1/1" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory}{" "}
          <span style={{ color: "var(--text-primary)" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
