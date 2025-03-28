import React from 'react';

const UserCard = ({name, age, location, borderColor}) => {
    return (
        <div style={{ border: borderColor }}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{location}</p>
        </div>
    );
};
export default UserCard;