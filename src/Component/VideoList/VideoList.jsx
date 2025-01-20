import { useContext, useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { HomeData } from '../../utils/ApiData/HomeFeed';
import { SearchContext } from '../../Layout/ContextApi/ContextApi';
function VideoList({ activeCategory }) {
  const { search, setSearch } = useContext(SearchContext);
  console.log('search in videoList ', search);
  const filteredVideoList = HomeData.data.filter(
    (item) =>
      item.title?.toLowerCase()?.includes(search.toLowerCase()) ||
      item.description?.toLowerCase()?.includes(search.toLowerCase())
  );

  const filteredData = activeCategory === "All"
    ? HomeData.data
    : HomeData.data.filter(
      (item) =>
        item.title?.toLowerCase()?.includes(activeCategory.toLowerCase()) ||
        item.description?.toLowerCase()?.includes(activeCategory.toLowerCase())
    );

  const dataToDisplay = search ? filteredVideoList : filteredData;

  return (
    <div className="flex flex-wrap gap-4">
      {dataToDisplay.map((item) =>
        item.type === 'video' ? (
          <VideoCard key={item.videoId} details={item} />
        ) : null
      )}
    </div>
  )
}

export default VideoList

/**
 *  // console.log("video data", HomeData.data);

  // useEffect(() => {
  //   const downloadFromLocalStorage = (key) => {
  //     // Retrieve the data from localStorage
  //     const data = localStorage.getItem(key);

  //     // Parse the data if it's in JSON format
  //     let parsedData;
  //     try {
  //       parsedData = JSON.parse(data);
  //     } catch (error) {
  //       console.error('Error parsing JSON from localStorage:', error.message);
  //       return;
  //     }

  //     // Create a Blob from the parsed data
  //     const blob = new Blob([JSON.stringify(parsedData, null, 4)], { type: 'application/json' });

  //     // Create a link element to trigger the download
  //     const link = document.createElement('a');
  //     link.href = URL.createObjectURL(blob);
  //     link.download = 'data.json';  // File name to save as
  //     link.click();  // Trigger the download by simulating a click
  //   };
  //   downloadFromLocalStorage('PlayList');
  // }, [])


  //  localStorage.setItem('videoDetails', JSON.stringify(result));

  const [videosid, setVideosid] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (HomeData?.data) {
      const ids = HomeData.data.filter((item) => item.videoId !== undefined).map((item) => item.videoId);
      setVideosid(ids);
      console.log('all ids:', ids); // Debugging log for all videoIds
    }
  }, []);

  // Fetch data from the API and store it in localStorage
  // const api_key = 'c0cb2ed3aemsh9bb76ed5d4f9de3p1646b7jsn485d2fb7f335';
  const api_key = '0356cc6706msh4b8eb368b0f46a6p1bce17jsn63b5a10fcbfc';
  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     const results = await Promise.all(
  //       videosid.map(async (item) => {
  //         const url = `https://yt-api.p.rapidapi.com/playlist?id=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde`;
  //         // 'https://yt-api.p.rapidapi.com/id=dQw4w9WgXcQ'
  //         const options = {
  //           method: 'GET',
  //           headers: {
  //             'x-rapidapi-key': api_key,
  //             'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  //           }
  //         };
  //         try {
  //           const response = await fetch(url, options);
  //           return await response.json();
  //         } catch (error) {
  //           console.error('Error fetching data for videoId:', item, error);
  //           return null; 
  //         }
  //       })
  //     );
  //     setDetails(results.filter((item) => item !== null));
  //     localStorage.setItem('PlayList', JSON.stringify(results));
  //   };
  
  //   fetchAllData();
  // }, [videosid]);
  

  //playlist data
  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     const url = `https://yt-api.p.rapidapi.com/playlist?id=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde`;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': api_key,
  //         'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  //       }
  //     };
  
  //     try {
  //       const response = await fetch(url, options);
  //       const results = await response.json();
  //       setDetails(results);
  //       localStorage.setItem('PlayList', JSON.stringify(results));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchAllData();
  // }, []);




  // console.log(localStorage.getItem('PlayList'));
  useEffect(() => {
    // fetchDataAndStore();
  }, [])

 * 
 */