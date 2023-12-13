import React from 'react';
import  { useEffect, useState } from "react";
import { Avatar, Button } from '@mui/material'; // Import Avatar from MUI
import { useFormik } from 'formik';
import ImageIcon from "@mui/icons-material/Image";
  // Adjust the import path accordingly
import TwitCard from '../TwitCard/TwitCard';


import SlideshowIcon from '@mui/icons-material/Slideshow';
import * as Yup from 'yup'
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is Required")
})

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleSubmit = (values) => {
    console.log("values ", values)
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  })
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };
  return (
    <div className="space-y-5">
    <section>
      <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
    </section>
    <section className={'pb-10'}>
        <div className="flex space-x-5">
          <Avatar alt="Avatar" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent `}
                  {...formik.getFieldProps("content")} />
                {formik.errors.content && formik.touched.content && (
                  <div className="text-red-500">{formik.errors.content}</div>
                )}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="image"
                      className="hidden"
                      onChange={handleSelectImage} />
                  </label>
                  <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                    <SlideshowIcon className="text-[#1d9bf0]" />

                    <input
                      type="file"
                      name="videoFile"
                      className="hidden" />
                  </label>

                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0] cursor-pointer" />

                </div>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#1d9bf0",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      color: "white",
                    }}
                  >
                    Tweet
                  </Button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
      
  <section>
    {[1,1,1,1,1,1].map((item)=> <TwitCard/>)}
  </section>
      </div>
  );
};

export default HomeSection;
