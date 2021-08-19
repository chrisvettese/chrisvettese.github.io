import React, {Fragment, useState} from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import {projects} from "./projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Profile from "./Profile";
import ReactPlayer from 'react-player';

const useStyles = makeStyles(() => ({
    icon: {
        width: "auto",
        height: "2.5em",
        marginRight: "0.5em",
        marginTop: "1em"
    },
    standardParagraph: {
        fontSize: "1.5em",
        marginLeft: "2.8em",
        marginRight: "2.8em",
        marginBottom: "1em"
    },
    standardAdjust: {
        fontSize: "1.5em",
        marginTop: "0.7em"
    },
    appBar: {
        top: "auto",
        bottom: "0"
    },
    carouselWide: {
        left: "2em"
    },
    carouselNarrow: {
        width: "50%",
        left: "2em"
    },
    carouselImageWide: {
        height: "100%"
    },
    carouselImageNarrow: {
        height: "100%",
    },
    projectName: {
        fontWeight: "bold"
    },
    captionWide: {
        marginTop: "0.5em",
        fontStyle: "italic"
    },
    captionNarrow: {
        width: "50%",
        marginTop: "0.5em",
        fontStyle: "italic"
    },
    projectDescription: {
        fontSize: "1.5em",
        width: "170%",
        marginLeft: "2em",
        marginBottom: "3em",
        marginTop: "0.5em"
    },
    projectSources: {
        marginLeft: "2em",
        marginTop: "-1em",
        width: "150%"
    },
    projectLanguages: {
        marginLeft: "2em",
        marginTop: "-4em",
        width: "150%"
    },
    projectBox: {
        marginLeft: "4em",
        marginRight: "4em",
        borderRadius: "25px",
        background: "#A9D7D8",
        padding: "1.5em",
        marginTop: "2em",
        marginBottom: "2em"
    },
    dividerText: {
        width: "100%",
        borderBottom: "2px solid #000",
        lineHeight: "0.1em",
        margin: "1em 0 1em 0",
        fontFamily: `"Roboto", "Helvetica", sans-serif`
    },
    dividerSpan: {
        background: "#E8EDEF",
        padding: "0 10px"
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: `"Helvetica", "Roboto", sans-serif`
    },
    palette: {
        background: {
            default: "#E8EDEF"
        },
        secondary: {
            main: "#5F747F"
        }
    }
});

export default function App() {
    const classes = useStyles();
    const projectKeys = Object.keys(projects);

    const captions = new Array(projectKeys.length);
    projectKeys.forEach((project, index) => {
        captions[index] = projects[project].captions[0];
    });
    const [states, setStates] = useState(captions);

    function changeCaption(project, captionIndex) {
        const newStates = [...states];
        newStates[projectKeys.indexOf(project)] = projects[project].captions[captionIndex];
        setStates(newStates);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Profile/>
            <Typography align="center" variant="h3" className={classes.dividerText}>
                <span className={classes.dividerSpan}>
                    About Me
                </span>
            </Typography>
            <Typography className={classes.standardParagraph}>
                I'm a 3rd year software engineering student at University of Ottawa.
                I've completed 4 co-op work terms as a software developer at Mitel, Thomson Reuters, and Nokia, and I'm currently on my 6th university semester.
                I grew up in Toronto, and have been passionate about programming from a young age.
                The goal of this website is to demonstrate some of my personal and university-related projects.
                Feel free to reach out if you would like to know more about my experience.
            </Typography>
            <Typography align="center" variant="h3" className={classes.dividerText}>
                <span className={classes.dividerSpan}>
                    Projects
                </span>
            </Typography>
            {
                projectKeys.map(project => {
                    return (
                        <div key={projects[project].name} className={classes.projectBox} id={project}>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>
                                        <Typography variant="h4"
                                                    className={classes.projectName}>{projects[project].name}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container className={classes.projectSources}>
                                            {
                                                projects[project].links.map((link, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <a target="_blank" href={link[1]} rel="noreferrer">
                                                                <img src={link[0][0]} className={classes.icon}
                                                                     alt="Demo"/>
                                                            </a>
                                                            <a target="_blank" href={link[1]} rel="noreferrer"
                                                               className={classes.standardAdjust}>{link[0][1]}</a>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>
                                        <Grid container direction={"column"}>
                                            <Carousel
                                                className={projects[project].wideImage ? classes.carouselWide : classes.carouselNarrow}
                                                showThumbs={false}
                                                showArrows={true}
                                                onChange={index => changeCaption(project, index)}>
                                                {
                                                    projects[project].images.map((image, index) => {
                                                        if (image.includes("youtube")) {
                                                            return <ReactPlayer width="100%" url={image}
                                                                                key={projects[project].name + index}/>
                                                        }
                                                        return <img
                                                            className={projects[project].wideImage ? classes.carouselImageWide : classes.carouselImageNarrow}
                                                            key={projects[project].name + index}
                                                            src={image}
                                                            alt={"Project"}/>
                                                    })
                                                }
                                            </Carousel>
                                            <Typography
                                                className={projects[project].wideImage ? classes.captionWide : classes.captionNarrow}
                                                align="center">{states[projectKeys.indexOf(project)]}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            className={classes.projectDescription}>{projects[project].description}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container className={classes.projectLanguages}>
                                            {
                                                projects[project].languages.map((language, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <img src={language[0]} className={classes.icon} alt="Demo"/>
                                                            <Typography
                                                                className={classes.standardAdjust}>{language[1]}</Typography>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    )
                })
            }
            <AppBar className={classes.appBar} color="secondary" position="static">
                <Typography align="center">Website made by Chris Vettese</Typography>
            </AppBar>
        </ThemeProvider>
    );
}
