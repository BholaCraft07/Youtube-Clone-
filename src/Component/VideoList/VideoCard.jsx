import 'react'
import { useContext, useEffect } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HistoryContext } from '../../Layout/ContextApi/ContextApi';

function VideoCard({ details }) {
    // console.log('videoid',details.videoId);
    const { history, addToHistory } = useContext(HistoryContext);
    // console.log('history id is :',history)
    function formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        } else {
            return num.toString();
        }
    }
    return (

        <div className={`sm:w-[300px] max-w-[80%] py-4  rounded-xl `}>
            {/* video container in which we show thumbnail */}
            {/* src="https://picsum.photos/200/300" */}
            <Link
                to={`/watch/${details.videoId || ''}`}
                onClick={() => addToHistory(details)}
                state={{ details }}
            >
                <div className="w-[100%] sm:h-[150px] h-[200px] cursor-pointer ">
                    <img
                        className='w-[100%] h-[100%] rounded-xl hover:rounded-none border-2 '
                        src={details.thumbnail && details.thumbnail.length > 0 ? details.thumbnail[0].url : 'https://picsum.photos/200/300'}
                        alt="Video" />
                </div>
            </Link>
            {/* this is for details */}
            <div className="py-2 flex">
                {/* here we import channel logo */}
                <div className="px-1">
                    <span className='rounded-full overflow-hidden w-[50px] h-[50px]'>
                        <img
                            className='rounded-full'
                            src={details.channelThumbnail && details.channelThumbnail.length >= 0 ? details.channelThumbnail[0].url : 'https://picsum.photos/30/30'}
                            alt="Channel Logo" />
                    </span>
                </div>

                <div className="">
                    {/* title  */}
                    <div className='text-[15px] font-sans font-medium'>
                        {/* Mahakumbh में पहुंचा Lallantop, रात के 3 बजे मेले में कैसा माहौल होता है? Prayagraj */}
                        {
                            details.title ? details.title : 'The Eaton and Palisades Fires are likely the second and fourth most destructive in California history.\n\nFirefighters are in a critical stage of their almost week-long battle against deadly'
                        }
                    </div>
                    {/* channel name */}
                    <div className="flex items-center gap-2 text-zinc-600">
                        <span >{details.channelTitle ? details.channelTitle : 'Lallantop'}</span>
                        <span className='bg-slate-600 rounded-full text-white text-[13px]'><IoIosCheckmarkCircleOutline />
                        </span>
                    </div>
                    {/* views and time */}
                    <div className="flex items-center gap-2 text-zinc-600">
                        <span>{formatNumber(details.viewCount || 0)} views</span>
                        <span className='w-1 h-1 rounded-full bg-sky-300'></span>
                        <span>5 months ago</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoCard