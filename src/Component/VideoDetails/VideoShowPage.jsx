import  { useState } from 'react';

function VideoShowPage({ details }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div className="p-6">
            <div className="max-w-5xl mx-auto">
                {/* Video Section */}
                <div className="relative bg-gray-900">
                    <video
                        className="w-full h-auto"
                        controls
                        src={
                            details.thumbnail && details.thumbnail.length > 0
                                ? details.thumbnail[0].url
                                : ""
                        }
                    ></video>
                </div>

                {/* Title Section */}
                <div className="mt-6">
                    <h1 className="text-xl font-bold text-gray-800">
                        {details.title}
                    </h1>
                </div>

                {/* Channel Info */}
                <div className="mt-4 flex items-center space-x-4">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={
                            details.channelThumbnail &&
                                details.channelThumbnail.length > 0
                                ? details.channelThumbnail[0].url
                                : ""
                        }
                        alt="Channel Logo"
                    />
                    <div>
                        <p className="text-sm font-bold text-gray-800">
                            {details.channelTitle}
                        </p>
                        <p className="text-sm text-gray-600">18.9M subscribers</p>
                    </div>
                    <button className="ml-auto bg-red-600 text-white px-4 py-1 rounded-full shadow">
                        Subscribe
                    </button>
                    <div className="flex space-x-4 items-center">
                        <button className="flex rounded-full px-4 py-1 bg-gray-300 items-center space-x-2 text-gray-600">
                            <i className="fas fa-thumbs-up"></i>
                            <span>3K</span>
                        </button>
                        <button className="flex rounded-full px-4 py-1 bg-gray-300 items-center space-x-2 text-gray-600">
                            <i className="fas fa-share"></i>
                            <span>Share</span>
                        </button>
                        <button className="flex rounded-full px-4 py-1 bg-gray-300 items-center space-x-2 text-gray-600">
                            <i className="fas fa-download"></i>
                            <span>Download</span>
                        </button>
                        <select name="" id="" className="flex rounded-full px-4 py-1 bg-gray-300">
                            <option value="">
                                <button className="flex rounded-full bg-slate-400 items-center space-x-2 text-gray-600">
                                    <i className="fas fa-dollar-sign"></i>
                                    <span>Thanks</span>
                                </button>
                            </option>
                            <option value="">
                                <button className="flex rounded-full bg-slate-400 items-center space-x-2 text-gray-600">
                                    <i className="fas fa-cut"></i>
                                    <span>Clip</span>
                                </button>
                            </option>
                        </select>
                    </div>
                </div>

                {/* Description Section */}
                <div className="p-4 border rounded-lg bg-white shadow-md">
                    {/* Header */}
                    <div className="text-gray-600 text-sm space-y-1">
                        <div className="flex items-center space-x-3">
                            <span className="font-bold">
                                {details.viewCount} views
                            </span>
                            <span className="text-gray-400">·</span>
                            <span className="font-semibold">
                                {details.uploadDate}
                            </span>
                        </div>
                        <div className="flex flex-wrap text-blue-500 space-x-2">
                            <span>#rdburman</span>
                            <span>#goldeneramelodies</span>
                            <span>#bollywoodsongs</span>
                        </div>
                        <div className="flex flex-wrap text-blue-500 space-x-2">
                            <span>#rdburman</span>
                            <span>#goldeneramelodies</span>
                            <span>#bollywoodsongs</span>
                            <span>#music</span>
                            <span>#legend</span>
                            <span>#bollywood</span>
                            <span>#composer</span>
                            <span>#bollywoodmusic</span>
                        </div>
                    </div>

                    {/* Music List */}
                    {showMore && (
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis veniam, nostrum necessitatibus fugiat soluta recusandae? Quas incidunt atque cupiditate, dolorem obcaecati iusto esse labore at a officiis eaque quia nisi hic voluptas illo impedit eveniet modi mollitia magnam repudiandae iste error unde neque laboriosam. Eligendi voluptatibus rem ea assumenda totam illo dicta. Quidem ad consequuntur est deserunt dicta accusamus saepe! Sunt provident voluptate, ipsam ducimus placeat accusamus et dolores suscipit, omnis blanditiis debitis dolorem in reiciendis magni officia? Modi natus recusandae atque voluptates optio aspernatur ipsam distinctio esse, architecto quibusdam voluptas iusto quisquam enim! Consequuntur nihil deserunt sequi expedita!</p>
                            <h2 className="text-lg font-bold mb-2">Music</h2>
                            <div className="flex space-x-4 overflow-auto">
                                {/* Example Music Cards */}
                                {[
                                    { title: "Aise Na Mujhe (From 'Darling Darling')", img: "url1" },
                                    { title: "Kya Yahi Pyar Hai (From 'Rocky')", img: "url2" },
                                    { title: "Saagar Kinare (From 'Saagar')", img: "url3" },
                                    // Add more as needed
                                ].map((song, index) => (
                                    <div
                                        key={index}
                                        className="w-40 p-2 flex-shrink-0 bg-gray-100 rounded-lg"
                                    >
                                        <img
                                            src={song.img}
                                            alt={song.title}
                                            className="w-full h-32 rounded-lg object-cover"
                                        />
                                        <p className="text-sm font-semibold mt-2">{song.title}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Channel Info */}
                            <div className="mt-6">
                                <h3 className="text-md font-bold">
                                    SWANTSUKHAY: THE ETERNAL LOVE OF MUSIC
                                </h3>
                                <p className="text-gray-600 text-sm">1.08K subscribers</p>
                                <div className="flex space-x-3 mt-3">
                                    <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded">
                                        Videos
                                    </button>
                                    <button className="px-4 py-1 bg-gray-200 text-sm rounded">
                                        About
                                    </button>
                                    <button className="px-4 py-1 bg-gray-200 text-sm rounded">
                                        Facebook Page
                                    </button>
                                    <button className="px-4 py-1 bg-gray-200 text-sm rounded">
                                        Instagram Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Show More / Show Less Button */}
                    <button
                        onClick={toggleShowMore}
                        className="mt-4 text-blue-500 text-sm font-semibold"
                    >
                        {showMore ? "Show less" : "Show more"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoShowPage