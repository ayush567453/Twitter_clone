// HomePage.jsx
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import Profile from '../Profile/Profile';
import RightPart from '../RightPart/RightPart';
import { Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      <Grid item xs={12} lg={2} className='hidden lg:block w-full relative'>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/home' element={<HomeSection />} />
          <Route path='/profile/:id?' element={<Profile />} />
        </Routes>
      </Grid>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
