import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos, direction}) => {
  if (!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent="start" gap={2}>
      {videos.map((video, indx)=>(
        <Box key={indx}>
          {video.id.videoId && <VideoCard video={video}/>} 
          {video.id.channelId && <ChannelCard channelDetail={video} />} 
        </Box>
      ))}
    </Stack>
  )
}

export default Videos