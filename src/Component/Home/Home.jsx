import 'react'
import VideoList from '../VideoList/VideoList'
import Filter from '../FilterSection/Filter'
import { HomeData } from '../../utils/ApiData/HomeFeed'
import { useState } from 'react';

function Home() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className=" px-4">
            <div className="sticky sm:top-[72px] top-[65.2px] bg-white z-10">
                <Filter HomeData={HomeData} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>
            <VideoList activeCategory={activeCategory} />
        </div>
    )
}

export default Home