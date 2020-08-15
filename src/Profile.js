import Grid from "@material-ui/core/Grid";
import profileImage from "./images/profile.png";
import {Typography} from "@material-ui/core";
import githubIcon from "./images/github.png";
import linkedinIcon from "./images/linkedin.png";
import emailIcon from "./images/email.png";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    profile: {
        marginLeft: "2em",
        marginTop: "3em",
        maxWidth: "auto",
        maxHeight: "15em",
        marginBottom: "2em"
    },
    bold: {
        fontWeight: "bold"
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
    }
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <Grid container justify="space-between">
            <Grid item>
                <Grid container>
                    <Grid item>
                        <img src={profileImage} className={classes.profile} alt="Profile Picture"/>
                    </Grid>
                    <Grid item>
                        <div className={classes.nameEducation}>
                            <Typography variant="h3" className={classes.bold}>Chris Vettese</Typography>
                            <Typography className={classes.standardSize}>3rd Year, BASc in Software
                                Engineering</Typography>
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
                        <a target="_blank" href="https://github.com/chrisvettese/"
                           className={classes.standardAdjust}>GitHub</a>
                    </Grid>
                    <Grid container>
                        <a target="_blank" href="https://www.linkedin.com/in/christopher-vettese/">
                            <img src={linkedinIcon} className={classes.icon} alt="LinkedIn Icon"/>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/christopher-vettese/"
                           className={classes.standardAdjust}>LinkedIn</a>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <a href="mailto:cvett018@uottawa.ca">
                                <img src={emailIcon} className={classes.icon} alt="Email Icon"/>
                            </a>
                        </Grid>
                        <Grid item className={classes.emailAdjust}>
                            <a href="mailto:cvett018@uottawa.ca"
                               className={classes.standardAdjust}>cvett018@uottawa.ca</a>
                            <br/>
                            <a href="mailto:chris.vettese2@gmail.com"
                               className={classes.standardAdjust}>chris.vettese2@gmail.com</a>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}