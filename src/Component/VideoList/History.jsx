import React, { useContext } from 'react'
import { HistoryContext } from '../../Layout/ContextApi/ContextApi';
import VideoCard from './VideoCard';

function History() {
  const { history, clearHistory, removeFromHistory } = useContext(HistoryContext);
  history.map((item) => console.log('all history', item));

  const handleDelete = (videoId) => {
    removeFromHistory(videoId);
  }
  console.log('history', history);
  const len=history.length;
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Watch history</h1>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Videos Section */}
        <div className="col-span-2">
          {/* Today */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Today</h2>
              <h3 className="text-red-500 font-semibold mb-4">video</h3>
            </div>
            <button
              onClick={() =>clearHistory()}
              className={`ml-4 bg-red-500 text-white px-4 py-2 rounded ${len>0?'':'hidden'}`}
            >Delete All</button>
          </div>
          {/* Videos */}
          <div className="flex flex-col  lg:space-y-4 space-y-2 ">
            {/* Single Video */}
            {
              history.map((item) =>
                <div key={item.videoId}
                  className='border-2 flex flex-col border-gray-200 rounded-md w-[100%] sm:p-4 p-2'
                >
                  <VideoCard details={item} customClass="flex" />
                  <button
                    onClick={() => handleDelete(item.videoId)}
                    className="ml-4 hover:bg-red-500 text-white px-4 py-2 rounded bg-green-600"
                  >
                    Delete
                  </button>

                </div>
              )
            }
            {/* <div className="w-10">6</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default History