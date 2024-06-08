import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Box, Stack, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";

const VideoDetail = () => {
  const { id } = useParams();

  const { data: videoDetail } = useQuery({
    queryKey: ["video-detail", id],
    queryFn: async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      return data.items[0];
    },
  });

  const { data: videos } = useQuery({
    queryKey: ["videos-with-stats", id],
    queryFn: async () => {
      const result = await fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      return result.items;
    },
  });

  if (!videoDetail?.snippet) return <div className="spinner" />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
