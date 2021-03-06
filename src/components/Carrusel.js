import {Link} from 'react-router-dom'

import useFetch from '../hooks/useFetch'

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const useStyles = makeStyles((theme) => ({
  root: {
    Width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%'
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {

const peliculasCarrusel = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2d9a1d2ba98bd4f269229908068559f1&language=es-ES&page=1")
    
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = peliculasCarrusel.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}/>
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {peliculasCarrusel.map((step, index) => (
        <div key={step.title}>
        {Math.abs(activeStep - index) <= 2 ? (
            <>
                <img className={classes.img} src={`https://image.tmdb.org/t/p/original${step.backdrop_path}`} alt={step.label} />
                <div className={classes.header}>
                    <h2>{step.title}</h2>
                    <h4>{step.overview}</h4>       
                    <Link to={`/pelicula-info/${step.id}`}>
                    <Button variant="contained" color="primary">ver mas</Button> 
                    </Link>
                </div>
            </>    
        ) : null}
        </div>
        ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
                </Button>
            }
        />
    </div>
  );
}

export default SwipeableTextMobileStepper;