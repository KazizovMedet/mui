import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Header from "../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../Redux/actions/moveAction";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {originalPath} from "../lib/services";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(s => s.movies.movies)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getMovies())
  }, []);
  console.log(movies)
  return (
    <Box>
      <Grid sx={{paddingTop: '40px'}} container spacing={2}>
        {
          movies.map(movie =>
            <Grid key={movie.id} item xs={6} sm={4} md={3}>
              <Card sx={{height: '100%'}}>
                <CardActionArea onClick={() => navigate(`/detail/${movie.id}`)}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={originalPath + movie.poster_path}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Tooltip title={movie.overview} placement="top">
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                      {movie.overview.slice(0, 60) + '...'}
                    </Typography>
                    </Tooltip>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </Box>
  );
};

export default HomePage;