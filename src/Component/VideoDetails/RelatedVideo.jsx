import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HistoryContext } from '../../Layout/ContextApi/ContextApi';

// Inbuilt function for formatting numbers
const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
});
function RelatedVideo({ item }) {
    // console.log('related video id:', item);

    const{addToHistory}=useContext(HistoryContext);

    return (
        <Link 
        to={`/watch/${item.videoId || ''}`} 
        onClick={() => addToHistory(item)}
        state={{details:item}}
        >
            <div className={`flex w-full p-4 bg-slate-50 shadow-sm hover:bg-gray-200 transition duration-200 rounded-lg my-1 {isActive ? 'bg-sky-400' : ''}`}>
                {/* Thumbnail Section */}
                <div className="w-1/3">
                    <img
                        src={item.channelThumbnail[0].url}
                        alt={item.title}
                        className="rounded-md object-cover w-full h-24"
                    />
                </div>

                {/* Video Info Section */}
                <div className="w-2/3 pl-4">
                    {/* Video Title */}
                    <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                        {item.title}
                    </h3>

                    {/* Metadata */}
                    <div className="text-sm text-gray-600 mt-1">
                        <p>{item.channelTitle}</p>
                        <p>{formatter.format(item.viewCount)} views &#183; {item.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RelatedVideo;