import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import profileImage from "./images/profile.png";
import githubIcon from "./images/github.png";
import linkedinIcon from "./images/linkedin.png";
import emailIcon from "./images/email.png";
import AppBar from "@material-ui/core/AppBar";
import {projects} from "./projects";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold"
    },
    profile: {
        marginLeft: "2em",
        marginTop: "3em",
        maxWidth: "auto",
        maxHeight: "15em",
        marginBottom: "2em"
    },
    nameEducation: {
        marginTop: "7em",
        marginLeft: "2em",
    },
    standardSize: {
        fontSize: "1.5em"
    },
    icon: {
        width: "auto",
        height: "2.5em",
        marginRight: "0.5em",
        marginTop: "1em"
    },
    standardAdjust: {
        fontSize: "1.5em",
        marginTop: "0.7em"
    },
    socialMedia: {
        marginTop: "5em",
        marginRight: "2em"
    },
    emailAdjust: {
        marginTop: "1em"
    },
    standardParagraph: {
        fontSize: "1.5em",
        marginLeft: "2em",
        marginRight: "2em",
        marginBottom: "1em"
    },
    appBar: {
        top: "auto",
        bottom: "0"
    }
});

const theme = createMuiTheme({
    typography: {
        fontFamily: `"Helvetica", "Arial", sans-serif`
    },
    palette: {
        background: {
            default: "#E6EFF4"
        },
        secondary: {
            main: "#5F747F"
        }
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container justify="space-between">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <img src={profileImage} className={classes.profile} alt="Profile Picture"/>
                        </Grid>
                        <Grid item>
                            <div className={classes.nameEducation}>
                                <Typography variant="h3" className={classes.bold}>Chris Vettese</Typography>
                                <Typography className={classes.standardSize}>3rd Year, BASc in Software Engineering</Typography>
                                <Typography className={classes.standardSize}>University of Ottawa</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className={classes.socialMedia}>
                        <Grid container>
                            <a target="_blank" href="https://github.com/chrisvettese/">
                                <img src={githubIcon} className={classes.icon} alt="GitHub Icon"/>
                            </a>
                            <a target="_blank" href="https://github.com/chrisvettese/" className={classes.standardAdjust}>GitHub</a>
                        </Grid>
                        <Grid container>
                            <a target="_blank" href="https://www.linkedin.com/in/christopher-vettese/">
                                <img src={linkedinIcon} className={classes.icon} alt="LinkedIn Icon"/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/christopher-vettese/" className={classes.standardAdjust}>LinkedIn</a>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <a href="mailto:cvett018@uottawa.ca">
                                    <img src={emailIcon} className={classes.icon} alt="Email Icon"/>
                                </a>
                            </Grid>
                            <Grid item className={classes.emailAdjust}>
                                <a href="mailto:cvett018@uottawa.ca" className={classes.standardAdjust}>cvett018@uottawa.ca</a>
                                <br/>
                                <a href="mailto:chris.vettese2@gmail.com" className={classes.standardAdjust}>chris.vettese2@gmail.com</a>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Divider/>
            <Typography align="center" variant="h3">About Me</Typography>
            <Typography className={classes.standardParagraph} align="center">
                I'm a software engineering student at University of Ottawa.
                I've completed 4 semesters of courses, and am currently in my 3rd co-op work term.
                I grew up in Toronto, and have been interested in programming for many years.
                My first project was a simple Java game I made at the age of 12, and I've since developed programs in Java, Python, JavaScript, and various frameworks.
                The goal of this website is to demonstrate some of my projects.
            </Typography>
            <Divider/>
            <Typography align="center" variant="h3">Projects</Typography>
            {
                Object.keys(projects).map(project => {
                    return (
                        <Fragment key={projects[project].name}>
                            <Typography>{projects[project].name}</Typography>
                        </Fragment>
                    )
                })
            }
            <AppBar className={classes.appBar} color="secondary">
                <Typography align="center">Website made with React by Chris Vettese</Typography>
            </AppBar>
        </ThemeProvider>
    );
}
