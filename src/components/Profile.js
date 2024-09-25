import React, { useState } from 'react';

function changeName(setName, names) {
    const index = Math.floor(Math.random() * names.length);
    console.log(index)
    setName(names[index]);
}

const Profile = () => {
    // Declaring multiple states using useState hook
    const [name, setName] = useState('John Doe');
    const names = ['Franco', 'Gian', 'Franco Gian', 'Franco Gian de Castro'];

    return (
        <div>
            <h1>Profile Information</h1>
            <p>Name: {name}</p>
            <br /><br />
            <button className='btn btn-primary' onClick={() => changeName(setName, names)}>Change Name</button>
        </div>
    );
}

export default Profile;

