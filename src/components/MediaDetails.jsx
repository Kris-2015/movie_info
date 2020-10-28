import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 900,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));

const MediaDetails = (details) => {
    const classes = useStyles();
    const {Title, Poster, Plot, Actors, imdbRating, Director} = details.details;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={Poster}
                title={Title}
                hei
            />
            <div className={classes.details}>
                <CardContent>
                    <Typography component="body1" variant="body1:p">
                        <h4>Plot:</h4> {Plot}
                        <br /><br />
                        <h4>Actors:</h4> {Actors}
                        <br /><br />
                        <h4>Director:</h4> {Director}
                        <br /><br />
                        <h4>IMDB Rating:</h4> {imdbRating}
                    </Typography>
                </CardContent>
            </div>

        </Card>
    )
};

export default MediaDetails;
