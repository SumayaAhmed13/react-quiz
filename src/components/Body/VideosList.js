import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../CustomHooks/useVideoList";
import Video from "./Video";
// import classes from "./VideosList.module.css";
const VideosList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videoList, hasMore } = useVideoList(page);

  return (
    <div>
      {videoList.length > 0 && (
        <InfiniteScroll
          dataLength={videoList.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videoList.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videoList.length === 0 && <div>No Data Found !</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading......</div>}
    </div>
  );
};

export default VideosList;
