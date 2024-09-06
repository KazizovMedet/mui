import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Header from "../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../Redux/actions/moveAction";
import {useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {originalPath} from "../lib/services";
import {CardMedia} from "@mui/material";

const DetailPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const movie = useSelector(s => s.movies.movie)

  useEffect(() => {
    dispatch(getMovie(id))
  }, [id]);

  return (
    <Box>
      <Box sx={{paddingTop: '40px'}}>
        <Typography variant={'h4'} align={'center'}>
          {movie.title}
        </Typography>
        <Box sx={infoWrapper}>
          <CardMedia
            component="img"
            sx={imgStyle}
            image={originalPath + movie.poster_path}
            alt="green iguana"
          />
          <Box>
            <Typography>
              {movie.overview}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailPage;

const imgStyle = () => ({
  height: '550px',
  objectFit: 'contain'
})

const infoWrapper = () => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '50px'
})