import React from 'react'; 
import outdoorData from '../outdoorData'; // Updated data import
import '../Styles/List.css'; // Updated CSS file
//import '../Styles/OutdoorCards.css'; // Updated CSS file

const OutdoorCard = ({ outdoorActivity }) => {
    return (
        <div className="outdoor-card">
            <img src={outdoorActivity.image} alt={outdoorActivity.title} className="outdoor-card-img" />
            <div className="outdoor-card-content">
                <h2 className="outdoor-card-title">{outdoorActivity.title}</h2>
                <p className="outdoor-card-type">{outdoorActivity.type}</p>
                <p className="outdoor-card-duration">Duration: {outdoorActivity.duration} hours</p>
                <p className="outdoor-card-price">${outdoorActivity.price} / person</p>
                <p className="outdoor-card-rating">Rating: {outdoorActivity.rating} ⭐</p>
            </div>
        </div>
    );
};

const OutdoorActivitiesGrid = ({ category }) => {
    const filteredActivities = category
        ? outdoorData.filter(activity => activity.category === category)
        : outdoorData;

    return (
        <div className="outdoor-activities-grid">
            {filteredActivities.map(activity => (
                <OutdoorCard key={activity.id} outdoorActivity={activity} />
            ))}
        </div>
    );
};

export default OutdoorActivitiesGrid;
