const styles = theme => ({
    container: {
        paddingRight: 50
    },
    zleft: {
        backgroundColor: '#e6f7ff',
        minHeight: 700
    },
    zleft_user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    },
    zright: {
        backgroundColor: '#FFF',
    },
    zright_board: {
        display: 'flex',
        justifyContent: 'center'
    },
    col: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 500,

    },
    col_body: {
        backgroundColor: '#e6f7ff',
    },
    col_header: {
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    col_content: {
        fontSize: 18,
        fontWeight: 700,
    },
    zleft_avt: {
        height: 50,
        width: 50,
        marginBottom: 10,
        marginTop: 10,
    },
    zleft_listbtn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    zleft_btn: {
        backgroundColor: '#e6f7ff',
        border: 0,
        fontSize: 16,
        cursor: 'pointer',
        height: 50

    },
})
export default styles;