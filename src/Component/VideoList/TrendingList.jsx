import { useEffect, useState } from 'react';
import { TrendingData } from '../../utils/ApiData/Trending'
import VideoCard from './VideoCard';
import { LiaHotjar } from 'react-icons/lia';

function TrendingList() {
    const [activeTab, setActiveTab] = useState('Now');
    const tabs = ['Now', 'Music', 'Gaming', 'Movies'];

    const [data, setData] = useState([]);

    console.log(TrendingData);
    useEffect(() => {
        if (TrendingData && TrendingData.length > 0) {
            const combinedData = TrendingData.flatMap(item => item.data);
            setData(combinedData);
        }
    }, [TrendingData])
    console.log('trending data :', data);

    const [categorizedData, setCategorizedData] = useState({
        music: [],
        movies: [],
        gaming: []
    });

    useEffect(() => {
        const categorizedData = {
            music: [],
            movies: [],
            gaming: []
        };

        data.forEach(item => {
            const title = item?.title?.toLowerCase();
            const channel = item?.channelTitle?.toLowerCase();

            if (title?.includes("song") || title?.includes("music") || channel?.includes("music")) {
                categorizedData.music.push(item);
            } else if (title?.includes("trailer") || title?.includes("movie") || channel?.includes("movies")) {
                categorizedData.movies.push(item);
            } else if (title?.includes("game") || title?.includes("gaming") || channel?.includes("gaming")) {
                categorizedData.gaming.push(item);
            }
        });
        setCategorizedData(categorizedData);
    }, [data])

    //show based on category data
    const getDisplayedData=()=>{
        switch (activeTab) {
            case 'Music':
                return categorizedData.music;
            case 'Movies':
                return categorizedData.movies;
            case 'Gaming':
                return categorizedData.gaming;
            default:
                return data;
        }
    };
    const displayedData=getDisplayedData();
    console.log('categorizedData :', categorizedData);
    return (
        <div className="bg-white min-h-screen p-6">
            {/* Header Section */}
            <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                    <LiaHotjar />
                </div>
                <h1 className="text-3xl font-bold">Trending</h1>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-6 text-gray-700 font-semibold border-b pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${activeTab === tab
                            ? 'text-black border-b-2 border-black'
                            : 'hover:text-black'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Trending Items */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
                {displayedData.map((item) => (
                    <div className="" key={item.id}>
                        <VideoCard details={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingList;