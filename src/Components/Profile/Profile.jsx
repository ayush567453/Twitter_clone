// Profile.jsx
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  useParams();
  
  const handleBack = () => navigate(-1);

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>code with josh</h1>
      </section>
      <section>
        <img
          className="w-[100%] object-cover"
          src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default Profile;
