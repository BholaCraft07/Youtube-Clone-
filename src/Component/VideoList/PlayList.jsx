import { useEffect, useState } from 'react'
import { playlistData } from '../../utils/ApiData/PlaylistApi';
import { Link } from 'react-router-dom';

function PlayList() {
    const playlists = [
        {
            title: "Liked videos",
            subtitle: "Private · Playlist",
            updated: "Updated today",
            videoCount: "41",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "Spring Boot Mastery: From Basics to Advanced",
            subtitle: "Engineering Digest · Playlist",
            videoCount: "45",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "Complete Java Programming Course 2025",
            subtitle: "Engineering Digest · Playlist",
            videoCount: "35",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "Build & Deploy Fully Functional YouTube Clone",
            subtitle: "JS Dev Hindi · Playlist",
            videoCount: "18",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "Complete MongoDB Tutorial",
            subtitle: "Net Ninja · Playlist",
            videoCount: "25",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "Blockchain Full Course",
            subtitle: "Private · Playlist",
            videoCount: "3",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "React Redux Tutorial",
            subtitle: "Codevolution · Playlist",
            videoCount: "30",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
        {
            title: "ReactJS Tutorial for Beginners",
            subtitle: "Codevolution · Playlist",
            videoCount: "120",
            thumbnail: "https://via.placeholder.com/300", // Replace with your image URL
        },
    ];

    const [playlistDetails, setPlaylistDetails] = useState([]);
    useEffect(() => {
        const extractedMeta = playlistData.meta ? [playlistData.meta] : [];
        setPlaylistDetails(extractedMeta);
    }, [])
    console.log('playlist data:', playlistData);
    console.log('playlist details:', playlistDetails);
    return (
        <div className="bg-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Playlists</h1>
            <div className="mb-4">
                <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-600">
                    <option>Recently added</option>
                    <option>Most popular</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.isArray(playlistDetails) && playlistDetails.map((playlist) => (
                    <div key={playlist.channelId} className="group border rounded-lg overflow-hidden shadow-sm">
                        {/* Thumbnail */}
                        <div className="relative">
                            <img
                                src={playlist.thumbnail?.[1]?.url ?? ''}
                                alt={playlist.title}
                                className="w-full h-44 object-cover"
                            />
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                                {playlist.videoCountText ?? '0 videos'}
                            </span>
                        </div>
                        {/* Content */}
                        <div className="p-4">
                            <h2 className="text-lg font-bold group-hover:text-blue-500">
                                {playlist.title}
                            </h2>
                            <p className="text-gray-500 text-sm">{playlist.channelTitle}</p>
                            {playlist.lastUpdated && (
                                <p className="text-gray-400 text-sm">{playlist.lastUpdated}</p>
                            )}
                        </div>
                        <div className="px-4 pb-4">
                            <Link
                                to={`/playlist/${playlist.channelId}`} 
                                state={{ data: playlistData.data ,play: playlistDetails }} 
                                className="text-blue-500 text-sm hover:underline font-medium"
                            >
                                View full playlist
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayList