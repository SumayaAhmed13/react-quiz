import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      //Database Connection
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(4)
      );

      try {
        setLoading(true);
        setError(false);

        //Get Data from Database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          console.log(snapshot);
          setVideoList((preVideo) => {
            return [...preVideo, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return { loading, error, videoList, hasMore };
};

export default useVideoList;
