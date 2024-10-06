import React from 'react';
import '../Styles/HorizontalScrollList.css'; // Import the CSS file

import { FaMusic, FaBook, FaFilm, FaGamepad, FaBicycle, FaPalette, FaLaptopCode, FaTheaterMasks, FaCamera, FaGlobe, FaLaptop, FaPaintBrush, FaPenNib, FaGuitar } from 'react-icons/fa';

const activities = [
    { name: 'All Activities', category: '', icon: <FaGlobe className='text-[25px] mb-[5px]' /> },
    { name: 'Music', category: 'Music', icon: <FaMusic className='text-[25px] mb-[5px]' /> },
    { name: 'Books', category: 'Books', icon: <FaBook className='text-[25px] mb-[5px]' /> },
    { name: 'Movies', category: 'Movies', icon: <FaFilm className='text-[25px] mb-[5px]' /> },
    { name: 'Gaming', category: 'Gaming', icon: <FaGamepad className='text-[25px] mb-[5px]' /> },
    { name: 'Cycling', category: 'Cycling', icon: <FaBicycle className='text-[25px] mb-[5px]' /> },
    { name: 'Art', category: 'Art', icon: <FaPalette className='text-[25px] mb-[5px]' /> },
    { name: 'Coding', category: 'Coding', icon: <FaLaptopCode className='text-[25px] mb-[5px]' /> },
    { name: 'Theater', category: 'Theater', icon: <FaTheaterMasks className='text-[25px] mb-[5px]' /> },
    { name: 'Photography', category: 'Photography', icon: <FaCamera className='text-[25px] mb-[5px]' /> },
    { name: 'Writing', category: 'Writing', icon: <FaPenNib className='text-[25px] mb-[5px]' /> },
    { name: 'Painting', category: 'Painting', icon: <FaPaintBrush className='text-[25px] mb-[5px]' /> },
    { name: 'Guitar', category: 'Music', icon: <FaGuitar className='text-[25px] mb-[5px]' /> },
];

const HorizontalScrollList = ({ setActivity }) => {
    return (
        <div className="horizontal-scroll-list no-scrollbar">
            {activities.map((activity, index) => (
                <button
                    key={index}
                    onClick={() => setActivity(activity.category)}
                    className="horizontal-scroll-item"
                >
                    {activity.icon}
                    <p>{activity.name}</p>
                </button>
            ))}
        </div>
    );
};

export default HorizontalScrollList;
