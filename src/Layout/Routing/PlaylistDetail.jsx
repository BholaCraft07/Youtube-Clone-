import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HistoryContext } from '../ContextApi/ContextApi';

function PlaylistDetail() {
    const location = useLocation();
    const playlistData = location.state?.data;
    const playlist = location.state?.play;
    // console.log('playlist data in playlistDetails', playlistData);
    // console.log('playlist item from the PlayList', playlist);

    const { history, addToHistory } = useContext(HistoryContext);
    return (
        <div className="bg-white min-h-screen p-6">
            {Array.isArray(playlistData) && playlistData.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Left Section: Playlist Info */}
                    <div className="col-span-1 lg:col-span-2 bg-blue-900 text-white p-6 rounded-lg shadow-md h-[80vh]">
                        <img
                            src={playlistData.thumbnail ?? ''}
                            alt={playlistData[0].title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-2">{playlistData[0].title}</h2>
                        <p className="text-gray-300 text-sm mb-4">
                            by {playlistData[0].channelTitle ?? 'Unknown'}
                        </p>
                        <p className="text-gray-400 text-sm mb-6">
                            Playlist · {playlistData.length} videos · {playlistData[0].views ?? '0'} views
                        </p>
                        <p className="text-gray-300">
                            {playlistData[0].description ??
                                'Dive into this playlist to explore amazing content.'}
                        </p>
                        <button className="bg-white text-blue-900 font-bold px-4 py-2 rounded-lg mt-4 hover:bg-gray-100">
                            Play all
                        </button>
                    </div>

                    {/* Right Section: Video List */}
                    <div className="col-span-1 lg:col-span-3">
                        <div className="space-y-4">
                            {playlistData.map((item, index) => (
                                <Link to={`/watch/${item.videoId}`} onClick={() => addToHistory(item)} key={index}>
                                    <div className="flex items-start gap-4 cursor-pointer py-4">
                                        <img
                                            src={item.thumbnail[0].url ?? item.thumbnail[1].url}
                                            alt={item.title}
                                            className="w-36 h-20 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 hover:underline">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {item.channelTitle ?? 'Unknown'}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {item.viewCountText ?? '0'} views · {item.publishedAt ?? 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No playlist data available.</p>
            )}
        </div>
    );
}

export default PlaylistDetail;
