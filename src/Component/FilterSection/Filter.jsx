import 'react'
import { useState } from 'react';
// import { HomeData } from '../../utils/ApiData/HomeFeed'

function Filter({ HomeData, activeCategory, setActiveCategory }) {

    return (
        <div className="flex space-x-2 overflow-x-auto bg-white p-2 w-[100%]">
            {HomeData.filters.map((filter) => (
                <button
                    key={filter.filter}
                    onClick={() => setActiveCategory(filter.filter)}
                    className={`flex-shrink-0 md:h-10 h-8 px-8 rounded-full text-sm font-medium whitespace-nowrap
                    ${activeCategory === filter.filter
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                        } transition-colors duration-300`}

                >
                    {filter.filter}
                </button>
            ))}
        </div>
    );
}

export default Filter