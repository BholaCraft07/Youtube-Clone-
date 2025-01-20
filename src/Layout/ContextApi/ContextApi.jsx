import React, { createContext, useState, useEffect } from 'react';
import fetchData from '../../utils/Apisotrage';

// Create Contexts
export const ContextApi = createContext();
export const HistoryContext = createContext();
export const SearchContext = createContext();
// Combined Context Provider
export const AppProvider = ({ children }) => {
  // State for ContextApi
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('New');
  const [videoData, setVideoData] = useState([]);

  // State for HistoryContext
  const [history, setHistory] = useState([]);

  // State for SearchContext
  const [search, setSearch] = useState('');

  // Fetch Data Function for ContextApi
  const fetchAllData = async (params) => {
    setLoading(true);
    try {
      const result = await fetchData('videos', params);
      console.log('context api result', result.data);
      setVideoData(result.data);
    } catch (e) {
      console.error('Error fetching data:', e.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory === 'Home') {
        fetchAllData({
          part: 'snippet,contentDetails,statistics',
          regionCode: 'IN',
          maxResults: 10,
        });
      } else {
        fetchAllData({
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: 'IN',
          maxResults: 10,
          videoCategoryId: selectedCategory,
        });
      }
    }
  }, [selectedCategory]);

  // HistoryContext Functions
  const addToHistory = (item) => {
    setHistory((prevHistory) => [...prevHistory, item]);
  };

  const clearHistory = () => {
    setHistory([]);
  };
  //delte a particular video from history
  const removeFromHistory = (videoId) => {
    setHistory((prevHistory) => prevHistory.filter((item) => item.videoId !== videoId));
  };

  // Provide both contexts
  return (
    <ContextApi.Provider
      value={{
        videoData,
        loading,
        value,
        setValue,
        setSelectedCategory,
        selectedCategory,
      }}
    >
      <HistoryContext.Provider
        value={{
          history,
          addToHistory,
          clearHistory,
          removeFromHistory,
        }}
      >
        <SearchContext.Provider value={{ search, setSearch }}>
          {children}
        </SearchContext.Provider>
      </HistoryContext.Provider>
    </ContextApi.Provider>
  );
};
