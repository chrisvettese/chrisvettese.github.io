import React, {Fragment, useState} from "react";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import githubIcon from "./images/github.png";
import devpostIcon from "./images/devpost.png";
import demoIcon from "./images/demo.png";
import AppBar from "@material-ui/core/AppBar";
import {projects} from "./projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Profile from "./Profile";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
    icon: {
        width: "auto",
        height: "2.5em",
        marginRight: "0.5em",
        marginTop: "1em"
    },
    standardParagraph: {
        fontSize: "1.5em",
        marginLeft: "2em",
        marginRight: "2em",
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
        width: "70%",
        left: "2em"
    },
    carouselImageWide: {
        height: "100%"
    },
    carouselImageNarrow: {
        height: "100%",
    },
    projectName: {
        fontWeight: "bold",
        marginTop: "0.5em"
    },
    captionWide: {
        fontStyle: "italic"
    },
    captionNarrow: {
        width: "70%",
        fontStyle: "italic"
    },
    projectDescription: {
        fontSize: "1.5em",
        width: "170%",
        marginLeft: "2em"
    },
    projectSources: {
        marginLeft: "2em",
        marginTop: "0.1em"
    },
    projectBox: {
        marginLeft: "4em",
        marginRight: "4em",
        borderRadius: "25px",
        background: "#A9D7D8",
        padding: "20px",
        marginTop: "2em",
        marginBottom: "2em"
    },
    dividerText: {
        width: "100%",
        borderBottom: "2px solid #000",
        lineHeight: "0.1em",
        margin: "1em 0 1em 0",
    },
    dividerSpan: {
        background: "#E6EFF4",
        padding: "0 10px"
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: `"Helvetica", "Arial", sans-serif`
    },
    palette: {
        background: {
            default: "#E6EFF4"
        },
        primary: {
            main: "#D5E8F2"
        },
        secondary: {
            main: "#5F747F"
        }
    }
});

export default function App() {
    const classes = useStyles();
    const projectKeys = Object.keys(projects);

    const states = [];
    projectKeys.forEach(project => {
        states.push(useState(projects[project].captions[0]));
    });

    function changeCaption(project, captionIndex) {
        states[projectKeys.indexOf(project)][1](projects[project].captions[captionIndex]);
    }

    function DevpostLink({project}) {
        if (projects[project].links[1].length > 0) {
            return (
                <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a target="_blank" href={projects[project].links[1]}>
                        <img src={devpostIcon} className={classes.icon} alt="Devpost Icon"/>
                    </a>
                    <a target="_blank" href={projects[project].links[1]}
                       className={classes.standardAdjust}>Devpost</a>
                </>
            )
        }
        return <></>
    }

    function DemoLink({project}) {
        if (projects[project].links[2].length > 0) {
            return (
                <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a target="_blank" href={projects[project].links[2]}>
                        <img src={demoIcon} className={classes.icon} alt="Demo"/>
                    </a>
                    <a target="_blank" href={projects[project].links[2]}
                       className={classes.standardAdjust}>Demo Project</a>
                </>
            )
        }
        return <></>
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
            <Typography className={classes.standardParagraph} align="center">
                I'm a software engineering student at University of Ottawa.
                I've completed 4 semesters of courses, and am currently in my 3rd co-op work term.
                I grew up in Toronto, and have been interested in programming for many years.
                My first project was a simple Java game I made at the age of 12, and I've since developed programs in
                Java, Python, JavaScript, and various frameworks.
                The goal of this website is to demonstrate some of my projects.
            </Typography>
            <Typography align="center" variant="h3" className={classes.dividerText}>
                <span className={classes.dividerSpan}>
                    Projects
                </span>
            </Typography>
            {
                projectKeys.map(project => {
                    return (
                        <div key={projects[project].name} className={classes.projectBox}>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>
                                        <Typography variant="h4"
                                                    className={classes.projectName}>{projects[project].name}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container className={classes.projectSources}>
                                            <a target="_blank" href={projects[project].links[0]}>
                                                <img src={githubIcon} className={classes.icon} alt="GitHub Icon"/>
                                            </a>
                                            <a target="_blank" href={projects[project].links[0]}
                                               className={classes.standardAdjust}>GitHub</a>
                                            <DevpostLink project={project}/>
                                            <DemoLink project={project}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>
                                        <Carousel
                                            className={projects[project].wideImage ? classes.carouselWide : classes.carouselNarrow}
                                            showThumbs={false}
                                            showStatus={false}
                                            onChange={index => changeCaption(project, index)}>
                                            {
                                                projects[project].images.map((image, index) => {
                                                    return <img
                                                        className={projects[project].wideImage ? classes.carouselImageWide : classes.carouselImageNarrow}
                                                        key={projects[project].name + index}
                                                        src={image}
                                                        alt={"Image of project"}/>
                                                })
                                            }
                                        </Carousel>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            className={classes.projectDescription}>{projects[project].description}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={4}>
                                        <Typography
                                            className={projects[project].wideImage ? classes.captionWide : classes.captionNarrow}
                                            align="center">{states[projectKeys.indexOf(project)][0]}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    )
                })
            }
            <AppBar className={classes.appBar} color="secondary" position="static">
                <Typography align="center">Website made with React by Chris Vettese</Typography>
            </AppBar>
        </ThemeProvider>
    );
}
