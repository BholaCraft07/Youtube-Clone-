import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../../Component/Home/Home.jsx";
import Search from "../../Component/Search/Search.jsx";
import VideoDetails from "../../Component/VideoDetails/VideoDetails.jsx";
// import VideoList from "../../Component/VideoList/VideoList.jsx";
import Shorts from "../../Component/VideoList/Shorts.jsx";
import History from "../../Component/VideoList/History.jsx";
import TrendingList from "../../Component/VideoList/TrendingList.jsx";
import PlayList from "../../Component/VideoList/PlayList.jsx";
import PlaylistDetail from "./PlaylistDetail.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Define the Home component for the root path */}
      <Route index element={<Home />} />
      {/* Other routes */}
      <Route path="search/:id" element={<Search />} />
      <Route path="watch/:id" element={<VideoDetails />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path='/history' element={<History />} />
      <Route path='/trending' element={<TrendingList />} />
      <Route path='/playlist' element={<PlayList />} />
      <Route path="/playlist/:id" element={<PlaylistDetail />} />
    </Route>
  )
);
