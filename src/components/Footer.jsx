import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    const imageStyles = {
        width: '50px',
        height: '50px',
        padding: '5px',
        border: '2px solid black',
        boxShadow: '5px 5px #2AEABB',
    }

    const buttonStyles = {
        width: '10vw',
        height: '5vh', 
        margin: '0 0.5rem', 
        fontSize: '0.9rem', 
        fontWeight: '700', 
        border: '2px solid black', 
        boxShadow: '2px 2px #2AEABB',
    }

    return (
        <div id='support' style={{backgroundColor: 'white', margin: '0 auto', textAlign: 'center', padding: '1rem'}}>
            <div style={{width: '30%',display: 'flex', justifyContent: 'space-between', margin: '.5rem auto'}}>
                <img style={imageStyles} src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="" />
                <img style={imageStyles} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/VK_Logo.png" alt="" />
                <img style={imageStyles} src="https://cdn-icons-png.flaticon.com/512/87/87413.png" alt="" />
                <img style={imageStyles} src="https://cdn-icons-png.flaticon.com/512/48/48968.png" alt="" />
                <img style={imageStyles} src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png" alt="" />
            </div>
            <div style={{width: '50%', margin: '1rem auto'}}>
                <h3 style={{margin: '1rem auto'}}>Project Name</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque reiciendis, labore exercitationem odit consequatur cupiditate numquam maxime. Sapiente placeat explicabo doloribus nesciunt fugit maxime.
                </p>
            </div>
            <button onClick={() => navigate('/privacy')} style={buttonStyles}>Privacy Notice</button>
            <button onClick={() => navigate('/about')} style={buttonStyles}>About Us</button>
        </div>
    );
};

export default Footer;