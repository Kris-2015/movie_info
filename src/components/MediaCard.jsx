import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

const MediaCard = (movieObj) => {
    const classes = useStyles();
    const {image_path, name, year} = movieObj.movieObj;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="movie"
                    height="200"
                    className={classes.media}
                    image={process.env.PUBLIC_URL + image_path}
                    title={name}
                />
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => movieObj.handleOnClick(name, year)}
                >
                    View
                </Button>
            </CardActions>
        </Card>
    )
};

export default MediaCard;
