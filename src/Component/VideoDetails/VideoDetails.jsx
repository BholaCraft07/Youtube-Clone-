import "react";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
import { videoDetails } from "../../utils/ApiData/VideoDetais";
import { relatedData } from "../../utils/ApiData/relatedData";
import { useEffect, useState } from "react";
import RelatedVideo from "./RelatedVideo";
import VideoShowPage from "./VideoShowPage";

function VideoDetails() {
  const { id } = useParams();
  console.log("id is", id);

  const location = useLocation();
  const details = location.state?.details;
  console.log("videoDetails api data", details);

  const [videodata, setVideodata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (id && videoDetails.length > 0) {
      const filteredData = videoDetails.filter((video) => video.id === id);
      setVideodata(filteredData);
    }
  }, [id]);

  useEffect(() => {
    if (id && relatedData.length > 0) {
      const res = relatedData.filter((video) => video.meta.videoId === id);
      const related = res.map((item) => item.data);
      setFilteredData(related);
    }
  }, [id]);

  const videourl = videodata[0]?.thumbnail?.[0]?.url;
  // console.log("videodata in video", videodata);

  return (
    <div className="flex md:flex-row flex-col justify-between p-6 sm:gap-0">
      <div className="md:w-[55%] sm:h-[300px] lg:h-[500px] w-[100%] rounded-full">
        {videourl && (
          // <ReactPlayer
          //   className=""
          //   url={videourl}
          //   width="100%"
          //   height="100%"
          //   controls={true}
          // />
          <VideoShowPage details={videodata[0]}/>
        )}
        {!videourl && (
          <VideoShowPage details={details}/>
        )}
      </div>
      {/* related video */}
      <div className="md:w-[44%] w-[100%]">
        {filteredData?.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              {item.map((tag, tagIndex) => (
                <RelatedVideo key={tagIndex} item={tag} />
              ))}
            </div>
          ))
        ) : (
          <p>No related data found.</p>
        )}
      </div>
    </div>
  );
}

export default VideoDetails;
// https://1024terabox.com/s/1KIQMOJ7uMOh9RUKaUx7vQ
