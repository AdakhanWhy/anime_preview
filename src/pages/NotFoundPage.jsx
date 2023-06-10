import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    const imageStyles = {
        width: '40px',
        height: '40px',
        display: 'block',
        border: '2px solid black',
        padding: '3px',
        boxShadow: '2px 2px #2AEABB',
    }

    return (
        <div style={{width: '45vw', textAlign: 'center', margin: '0 auto'}}>
            <h3 style={{fontSize: '18rem', textShadow: '5px 5px #2AEABB'}}>404</h3>
            <h2 style={{fontSize: '4rem'}}>Not Found Page</h2>
            <p style={{fontSize: '1.1rem', margin: '10px'}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <button onClick={() => navigate('/')} style={{width: '10vw', height: '5vh', margin: '2vh auto', fontSize: '0.9rem', fontWeight: '700', border: '2px solid black', boxShadow: '2px 2px #2AEABB'}}>HOMEPAGE</button>
            <div style={{width: '15vw', display: 'flex', justifyContent: 'space-between', margin: '2vh auto'}}>
                <img style={imageStyles} src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="" />
                <img style={imageStyles} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/VK_Logo.png" alt="" />
                <img style={imageStyles} src="https://cdn-icons-png.flaticon.com/512/87/87413.png" alt="" />
                <img style={imageStyles} src="https://cdn-icons-png.flaticon.com/512/48/48968.png" alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;