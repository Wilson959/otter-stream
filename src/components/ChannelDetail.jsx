import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const { id } = useParams();

  const { data: channelDetail } = useQuery({
    queryKey: ["channel", id],
    queryFn: async () => {
      const result = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      return result.items[0];
    },
  });

  const { data: videos } = useQuery({
    queryKey: ["channel-videos", id],
    queryFn: async () => {
      const result = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      return result?.items;
    },
  });

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 14%, var(--text-primary)), url(${channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-111px" />
      </Box>
      <Box p={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
