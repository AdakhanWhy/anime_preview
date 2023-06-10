import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPage = () => {
    const navigate = useNavigate();

    const buttonStyles = {
        width: '10vw',
        height: '5vh', 
        margin: '0 0.5rem', 
        fontSize: '0.9rem', 
        fontWeight: '700', 
        border: '2px solid black', 
        boxShadow: '2px 2px #ff4655',
    }

    return (
        <div style={{width: '95%', height: '100vh', margin: '0 auto', backgroundImage: 'url(https://i0.wp.com/averagebeing.com/wp-content/uploads/2022/10/KFCs-Naruto-Meme-Is-Breaking-The-Internet-Right-Now.jpg?fit=960%2C500&ssl=1)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white', textAlign: 'center', fontWeight: '700'}}>
            <h2>Privacy</h2>
            <p style={{width: '40%', lineHeight: '2', margin: '10px auto',}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae qui odio debitis possimus facere harum, eligendi dicta veniam assumenda, modi temporibus officiis eos fugiat consequuntur deleniti vel error quia dolore natus impedit. Numquam quos provident, repudiandae architecto quidem ad corrupti unde laudantium quaerat, illo quasi. Nesciunt quidem nihil veniam inventore laborum quae dolore molestias non consectetur deleniti voluptatibus consequatur obcaecati saepe, delectus dolorem suscipit, ratione dolorum enim! Quis, dicta vitae praesentium, eum quod atque alias quasi quia quibusdam commodi provident deleniti, iusto quisquam? Ut aut impedit culpa tenetur reprehenderit enim dicta velit praesentium facilis cupiditate fugiat repellat magni veritatis blanditiis quae, consequuntur asperiores! Rerum doloremque consequatur modi facilis, odio natus, accusamus dolores sed libero non, quisquam placeat error deserunt maiores reiciendis? Qui, dolorem, quaerat eligendi nulla dicta maiores autem ad praesentium illum pariatur numquam optio ullam dolor sequi, voluptates vero quam cum ex omnis! Suscipit laudantium ipsum recusandae obcaecati?
            </p>
            <button style={buttonStyles} onClick={() => navigate('/')}>Home</button>
        </div>
    );
};

export default PrivacyPage;