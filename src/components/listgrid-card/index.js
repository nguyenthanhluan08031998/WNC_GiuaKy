import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    marginBottom: 10,
    cursor: 'pointer',
  },
  image: {
    width: 300,
    // position: 'absolute',
    height: 150,
    borderRadius: 10
  },
  span: {
    position: "absolute",
    color: '#FFF',
    fontWeight: 500,
    marginTop: 120,
    marginLeft: 20
  }
}));

export default function ListGridCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.card}>
        <img className={classes.image} src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt='Image' />
        <span className={classes.span}>bài tập về nhà</span>
      </div>

      <div className={classes.card}>
        <img className={classes.image} src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt='Image' />
        <span className={classes.span}>bài tập về nhà</span>
      </div>

    </div >
  );
}


