import { Button, Container, TextField, Typography, Snackbar } from '@material-ui/core'
import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Contact.module.css';
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Contact = () => {
    const classes = useStyles()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    let severity = 'success';
    let response = 'Your Email has been sent!'
    const templateParams = {
        from_name: name,
        to_name: 'Vineet Kumar',
        message: message,
        reply_to: email,
    };

    function resetForm() {
        return (
            setName(""),
            setEmail(""),
            setMessage("")
        )
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    }

    async function sendEmail(e) {
        e.preventDefault();
        await emailjs.send('service_2cm0raq', 'template_4ekhlbp', templateParams, 'user_bAQCp2OrEvKKtv50mHSPS')
            .then((result) => {
                resetForm()
                setOpen(true)
            }, (error) => {
                resetForm()
                severity = "error"
                response = 'Try Again later!'
                setOpen(true)
            });
    }
    return (
        <div>
            <Head>
                <title>Contact Me</title>
                <meta name="portfolio" content="Vineet K Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container maxWidth="sm" className={styles.parent_container}>
                    <div className={classes.root}>
                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity={severity}>
                            {response}
                        </Alert>
                    </Snackbar>
                    </div>
                    <div className={styles.contact_card}>
                        <Typography variant="h5" gutterBottom align="center">Contact Me</Typography>
                        <p>Name</p>
                        <TextField
                            name="userName"
                            value={name}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={e => setName(e.target.value)}
                        />
                        <p>Email</p>
                        <TextField
                            value={email}
                            name="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={e => setEmail(e.target.value)}
                        />
                        <p>Message</p>
                        <TextField
                            value={message}
                            name="message"
                            id="outlined-basic"
                            label="Message"
                            variant="outlined"
                            size="small"
                            multiline
                            rows={4}
                            fullWidth
                            onChange={e => setMessage(e.target.value)}
                        />
                        <Button color="primary" onClick={(e) => sendEmail(e)} variant="contained" style={{ marginTop: "2rem" }} disableElevation fullWidth>Send Your Message</Button>
                    </div>
                </Container>
            </main>
        </div>

    )
}

export default Contact
