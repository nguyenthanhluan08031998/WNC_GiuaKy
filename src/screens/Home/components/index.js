import React from 'react'
import { Grid, Avatar, Paper, IconButton, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/index.style'
import ListgridCard from '../../../components/listgrid-card/index'
import CardContent from '../../../components/card-content/index'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

const useStyles = makeStyles(styles);

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container item className={classes.container}>
            <Grid item xs={2} className={classes.zleft}>
                <Grid className={classes.zleft_user}>
                    <Avatar className={classes.zleft_avt} />
                    <div>Nguyen Thanh Luan</div>
                </Grid>
                <Grid className={classes.zleft_listbtn}>
                    <button className={classes.zleft_btn}>
                        Chỉnh sửa
                    </button>
                    <button className={classes.zleft_btn}>
                        Cài đặt
                    </button>
                    <button className={classes.zleft_btn}>
                        Đăng xuất
                    </button>
                </Grid>
            </Grid>
            <Grid item xs={3} className={classes.zright_board}>
                <ListgridCard />
            </Grid>
            <Grid item xs={7} className={classes.zright}>
                <Grid container>
                    <Grid item xs={4} className={classes.col}>
                        <Grid className={classes.col_body}>
                            <Grid className={classes.col_header}>
                                <Grid className={classes.col_content}>
                                    Went Well
                                </Grid>
                                <IconButton color="primary">
                                    <AddToPhotosIcon />
                                </IconButton>
                            </Grid>

                            <Grid>
                                <CardContent />
                                <CardContent />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.col}>
                        <Grid className={classes.col_body}>
                            <Grid className={classes.col_header}>
                                <Grid className={classes.col_content}>
                                    Went Well
                                </Grid>
                                <IconButton color="primary">
                                    <AddToPhotosIcon />
                                </IconButton>
                            </Grid>
                            <Grid>
                                <CardContent />
                                <CardContent />
                                <CardContent />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.col}>
                        <Grid className={classes.col_body}>
                            <Grid className={classes.col_header}>
                                <Grid className={classes.col_content}>
                                    Went Well
                                </Grid>
                                <IconButton color="primary">
                                    <AddToPhotosIcon />
                                </IconButton>
                            </Grid>
                            <Grid>
                                <CardContent />
                                <CardContent />
                                <CardContent />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div backgroundImage="https://cdn.hipwallpaper.com/i/8/91/4keEjX.jpg"></div>
        </Grid>
    )
}
export default Home
