import React from 'react'

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from '@mui/icons-material';
function TwitCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Navigate = useNavigate();
    const handleDeleteTweet = () => {
        console.log("DeleteTweet")
        handleClose();
    }
    const handleOpenReplyModel=()=>{
        console.log("open model");
    }
    const handleCreateRetweet=()=>{
        console.log("handle create retweet")
    }
    const handleLiketweet=()=>{
        console.log("handle Like tweet")
    }
    return (
        <div className=''>
            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>TwittCard</div>
            <RepeatIcon />
            <p>Your Repeat</p>

        </div> */}
            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => Navigate(`/profile/${6}`)}

                    className='cursor-pointer' alt='usernme'
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Code with Ayush</span>
                            <span className='text-gray-600'>@code with ayush  . 2m</span>
                            <img
                                className="ml-2 w-5 h-5"
                                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >

                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>

                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pinter'>
                            <p className='mb-2 p-0'>Full stack twitter clone using spring boot and react</p>
                            <img
                  className="w-[28rem] border border-gray-400 p-5 rounded-md"
                  src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                  alt=""
                />
                        </div>
                        <div className="py-5 flex flex-wrap justify-between items-center">
                            <div className="space-x-3 flex items-center text-gray-600">
<ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              
                            </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex
                            items-center`}>
                                <RepeatIcon
                                onClick={handleCreateRetweet}
                                className='cursor-pointer'/>
                                <p>54</p>
                            </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex
                            items-center`}>
                                {true?<FavoriteIcon
                                onClick={handleLiketweet}
                                className='cursor-pointer'/>:<FavoriteOutlined
                                onClick={handleLiketweet}
                                className='cursor-pointer'/>}
                                <p>54</p>
                            </div>
                            <div className="space-x-3 flex items-center text-gray-600">
<BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
                </div>
                <div className="space-x-3 flex items-center text-gray-600">
<FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
                </div>
               
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default TwitCard