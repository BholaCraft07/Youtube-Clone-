// import "react";
// import { TiHome } from "react-icons/ti";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { GoHistory } from "react-icons/go";
// import { CgPlayList } from "react-icons/cg";
// import { GoVideo } from "react-icons/go";
// import { BiLike } from "react-icons/bi";
// import { MdOutlineWatchLater } from "react-icons/md";
// import "../../App.css";
// import { SiYoutubeshorts } from "react-icons/si";
// import { LiaFireAltSolid } from "react-icons/lia";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { IoMusicalNotesOutline } from "react-icons/io5";
// import { BiMoviePlay } from "react-icons/bi";
// import { PiBroadcastLight } from "react-icons/pi";
// import { SiYoutubegaming } from "react-icons/si";
// import { PiNewspaperClippingLight } from "react-icons/pi";
// import { GoTrophy } from "react-icons/go";
// import { RiGraduationCapLine } from "react-icons/ri";
// import { GiHanger } from "react-icons/gi";
// import { MdOutlinePodcasts } from "react-icons/md";
// import { FaRegUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";


// function Sidebar({ IsOpens }) {
//   console.log(IsOpens)
//   return (
//     <>
//       {/* either than mobile */}
//       <div className={`sm:w-[100%] shrink-0 border-solid border-2 border-sky-500 overflow-y-scroll overflow-x-hidden h-screen custom-scrollbar ${IsOpens ? 'hidden' : 'block'} transition-all duration-1000`}>
//         {/* first section where we desing home and shorts log */}
//         <div className="py-2">

//           <Link to="/">
//             <div className="flex items-center gap-4 text-m p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 font-semibold text-sm">
//               <span className="text-[18px] xl:text-xl  ">
//                 <TiHome />
//               </span>
//               <span>Home</span>
//             </div>

//           </Link>
//           <Link to="/shorts">
//             <div className="flex items-center gap-4 text-m p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 font-semibold text-sm">
//               <span className="text-[18px] xl:text-xl ">
//                 <SiYoutubeshorts />
//               </span>
//               <span>Shorts</span>
//             </div>
//           </Link>

//           <Link to='/'>
//             <div className="flex items-center gap-4 text-m p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 font-semibold text-sm">
//               <span className="text-[18px] xl:text-xl ">
//                 <MdOutlineSubscriptions />
//               </span>
//               <span>Subscriptions</span>
//             </div>
//           </Link>
//         </div>
//         <hr />
//         {/* you history */}
//         <div className="py-2">
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[18px]">You</span>
//           </div>
//           <Link to='/history'>
//             <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//               <span className="text-[16px] xl:text-xl ">
//                 <GoHistory />
//               </span>
//               <span>History</span>
//             </div>
//           </Link>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[16px] xl:text-xl ">
//               <CgPlayList />
//             </span>
//             <span>Playlist</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[16px] xl:text-xl ">
//               <GoVideo />
//             </span>
//             <span>Subscriptions</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[16px] xl:text-xl ">
//               <MdOutlineWatchLater />
//             </span>
//             <span>Watched later</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[16px] xl:text-xl ">
//               <BiLike />
//             </span>
//             <span>Liked Video</span>
//           </div>
//         </div>
//         <hr />

//         {/* subscriptions */}
//         <div className="py-2 px-2">
//           <div className="">
//             <span className="text-[18px] font-normal">Subcription</span>
//           </div>

//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="w-8 h-8 rounded-full bg-slate-700 text-xl xl:text-xl "><img className="rounded-full object-cover w-8 h-8 " src="https://images.unsplash.com/photo-1736254329261-5595925b7e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBpfGVufDB8fDB8fHww" alt="" /></span>
//             <span>Vedantu JEE</span>
//             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
//           </div>
//         </div>
//         <hr />
//         {/* Explore */}
//         <div className="py-2">
//           <div className="flex items-center gap-4 py-1 px-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-[18px]">Explore</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <LiaFireAltSolid />
//             </span>
//             <span>Trending</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <MdOutlineShoppingBag />
//             </span>
//             <span>Shopping</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <IoMusicalNotesOutline />
//             </span>
//             <span>Music</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <BiMoviePlay />
//             </span>
//             <span>Movies</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <PiBroadcastLight />
//             </span>
//             <span>Live</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <SiYoutubegaming />
//             </span>
//             <span>Gaming</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <PiNewspaperClippingLight />
//             </span>
//             <span>News</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <GoTrophy />
//             </span>
//             <span>Soorts</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <RiGraduationCapLine />
//             </span>
//             <span>Course</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <GiHanger />
//             </span>
//             <span>Fashion & Beauty</span>
//           </div>
//           <div className="flex items-center gap-4  p-2 cursor-pointer text-zinc-900 hover:bg-slate-100 text-sm text-center font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <MdOutlinePodcasts />
//             </span>
//             <span>Podcast</span>
//           </div>
//         </div>
//         <hr />
//       </div>
//       {/* for mobile */}
//       {/* <div className={`sm:w-[90px] xl:w-[90px] w-18 border-solid border-2 border-sky-500 ${IsOpens ? 'block' : 'hidden'}`}>
//         <div className="py-2">
//           <div className="sm:w-20 sm:h-14 py-2 sm:px-3 text-[12px] flex items-center flex-col p-2 text-sm cursor-pointer border-radious text-zinc-900 hover:bg-slate-100 font-semibold">
//             <span className="text-xl xl:text-xl  ">
//               <TiHome />
//             </span>
//             <span className="sm:block hidden">Home</span>
//           </div>
//           <div className="sm:w-20 sm:h-14 py-2 sm:px-3 text-[12px] flex items-center flex-col p-2 text-sm cursor-pointer border-radious text-zinc-900 hover:bg-slate-100 font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <SiYoutubeshorts />
//             </span>
//             <span className="sm:block hidden">Shorts</span>
//           </div>
//           <div className="sm:w-20 sm:h-14 py-2 sm:px-3 text-[12px] flex items-center flex-col p-2 text-sm cursor-pointer border-radious text-zinc-900 hover:bg-slate-100 font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <MdOutlineSubscriptions />
//             </span>
//             <span className="sm:block hidden">Subscriptions</span>
//           </div>
//           <div className="sm:w-20 sm:h-14 py-2 sm:px-3 text-[12px] flex items-center flex-col p-2 text-sm cursor-pointer border-radious text-zinc-900 hover:bg-slate-100 font-semibold">
//             <span className="text-xl xl:text-xl ">
//               <FaRegUserCircle />
//             </span>
//             <span className="sm:block hidden">you</span>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default Sidebar;


import React from "react";
import {
  TiHome
} from "react-icons/ti";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineShoppingBag,
  MdOutlinePodcasts
} from "react-icons/md";
import {
  GoHistory,
  GoVideo,
  GoTrophy
} from "react-icons/go";
import {
  BiLike,
  BiMoviePlay
} from "react-icons/bi";
import {
  SiYoutubeshorts,
  SiYoutubegaming
} from "react-icons/si";
import {
  LiaFireAltSolid
} from "react-icons/lia";
import {
  IoMusicalNotesOutline
} from "react-icons/io5";
import {
  PiBroadcastLight,
  PiNewspaperClippingLight
} from "react-icons/pi";
import {
  RiGraduationCapLine
} from "react-icons/ri";
import {
  GiHanger
} from "react-icons/gi";
import { Link } from "react-router-dom";
import "../../App.css";

// Reusable MenuSection Component
const MenuSection = ({ items }) => (
  <div className="py-2">
    {items.map(({ label, icon, path }) => (
      <Link to={path || "#"} key={label}>
        <div className="flex items-center gap-4 p-2 text-zinc-900 hover:bg-slate-100 font-semibold text-sm cursor-pointer">
          <span className="text-xl">{icon}</span>
          <span>{label}</span>
        </div>
      </Link>
    ))}
  </div>
);

const Sidebar = ({ IsOpens }) => {
  // Main menu items
  const menuItems = [
    { label: "Home", icon: <TiHome />, path: "/" },
    { label: "Shorts", icon: <SiYoutubeshorts />, path: "/shorts" },
    { label: "Subscriptions", icon: <MdOutlineSubscriptions />, path: "/subscriptions" },
  ];

  // Secondary menu items
  const secondaryItems = [
    { label: "History", icon: <GoHistory />, path: "/history" },
    { label: "Playlist", icon: <GoVideo />, path: "/playlist" },
    { label: "Watched later", icon: <MdOutlineWatchLater />, path: "/watched-later" },
    { label: "Liked Videos", icon: <BiLike />, path: "/liked" },
  ];

  // Explore menu items
  const exploreItems = [
    { label: "Explore", icon: null }, 
    { label: "Trending", icon: <LiaFireAltSolid />, path: "/trending" },
    { label: "Shopping", icon: <MdOutlineShoppingBag />, path: "/shopping" },
    { label: "Music", icon: <IoMusicalNotesOutline />, path: "/music" },
    { label: "Movies", icon: <BiMoviePlay />, path: "/movies" },
    { label: "Live", icon: <PiBroadcastLight />, path: "/live" },
    { label: "Gaming", icon: <SiYoutubegaming />, path: "/gaming" },
    { label: "News", icon: <PiNewspaperClippingLight />, path: "/news" },
    { label: "Sports", icon: <GoTrophy />, path: "/sports" },
    { label: "Course", icon: <RiGraduationCapLine />, path: "/course" },
    { label: "Fashion & Beauty", icon: <GiHanger />, path: "/fashion" },
    { label: "Podcast", icon: <MdOutlinePodcasts />, path: "/podcast" },
  ];

  return (
    <div
      className={`sm:w-[100%] h-screen overflow-y-scroll custom-scrollbar  ${IsOpens ? "hidden" : "block"
        }`}
    >
      {/* Main Menu */}
      <MenuSection items={menuItems} />

      <hr />

      {/* Secondary Menu */}
      <MenuSection items={secondaryItems} />

      <hr />

      {/* Explore Menu */}
      <MenuSection items={exploreItems} />
    </div>
  );
};

export default Sidebar;
