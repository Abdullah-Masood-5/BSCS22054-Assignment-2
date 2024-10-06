import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../Styles/Searchbar.css'; // Assuming your styles are saved here

const SearchBar = () => {
    const [activity, setActivity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [participants, setParticipants] = useState(1);
    const [scrollY, setScrollY] = useState(0);

    const handleSearch = () => {
        console.log({
            activity,
            startDate,
            endDate,
            participants,
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (scrollY > 50) {
        return null;
    }

    return (
        <div className="search-bar">
            <div className="search-bar-container">
                <div className="search-bar-input-container">
                    <label className="search-bar-label">Activity</label>
                    <input
                        type="text"
                        placeholder="What outdoor activity are you interested in?"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="search-bar-input"
                    />
                </div>

                <div className="search-bar-input-container">
                    <label className="search-bar-label">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="search-bar-date"
                    />
                </div>

                <div className="search-bar-input-container">
                    <label className="search-bar-label">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="search-bar-date"
                    />
                </div>

                <div className="search-bar-input-container">
                    <label className="search-bar-label">Participants</label>
                    <select
                        value={participants}
                        onChange={(e) => setParticipants(e.target.value)}
                        className="search-bar-select"
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} participant{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleSearch}
                    className="search-bar-button"
                >
                    <AiOutlineSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
