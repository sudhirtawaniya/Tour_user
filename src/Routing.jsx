import logo from './logo.svg';
import './App.css';
import TourPackage from './component/TourPackage';


import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import TourDetails from './component/Tourdet';
import PackageD from './component/PackageD';
import BookCab from './component/Bookacab';
import Blog from './component/Blog';
import LiveBlog from './component/LiveBlog';
export default function Routing() {
    return <>
    <Routes>
    
        <Route exact  path="/" element={<Home/>}/>
        <Route path="/bookcab" element={<BookCab/>}/>
       
        <Route  path="/tourdetails" element={<PackageD/>}/>
        <Route  path="tourdetails/:url" element={<TourPackage/>}/>
        <Route  path="tour/:url" element={<TourPackage/>}/>
        <Route path="/blog/:url" element={<Blog/>}/>
        <Route path="/blogdetails" element={<LiveBlog/>}/>
    </Routes>
    </>
}