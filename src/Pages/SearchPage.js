import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import Header from "../Components/Header/Header";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import {originalPath} from "../lib/services";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SearchPage = () => {
  const movies = useSelector(s => s.movies.searchedMovies)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: "CLOSE_LIST"})
  }, []);

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

export default SearchPage;