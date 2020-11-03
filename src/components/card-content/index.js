import React from 'react'
import { Grid, Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import styles from '../../screens/Home/styles/index.style';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 5
    },
    box: {
        padding: 10,
        background: "#FFF",
        display: 'flex',
        flexDirection: 'column'
    },
    gird_button: {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    span_title: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 5
    },
    span_content: {
        fontSize: 12
    }
}))
const CardContent = () => {
    const classes = useStyles(makeStyles)
    return (
        <Grid className={classes.container}>
            <Box border={1} borderColor="#f2f2f2" className={classes.box}>
                <Grid>
                    <span className={classes.span_title}>
                        Phần mềm và máy móc
                     </span>
                    <span className={classes.span_content}>
                        Wikipedia dựa trên MediaWiki, nền phần mềm wiki chuyên biệt có nguồn tự do và mở, phần lớn được viết trong PHP và được xây trên cơ sở dữ liệu MySQL.
                     </span>
                </Grid>

                <Grid className={classes.gird_button}>
                    <IconButton color="secondary" aria-label="upload picture" component="span">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <BorderColorIcon />
                    </IconButton>
                </Grid>
            </Box>
        </Grid>

    )
}
export default CardContent