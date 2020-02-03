import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// @material-ui/icons

import styles from "../../../assets/jss/containers/homePageSection/assesmentStyle";

const useStyles = makeStyles(styles);

export default function SectionAssesment(props) {
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Link to={"/assessment-page"} className={classes.link}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    className={classes.media}
                                    image={require("../../../assets/images/002.png")}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h2" align="center">
                                        Self Assessment Tool
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    className={classes.media}
                                    image={require("../../../assets/images/002.png")}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h4" align="center">
                                        Document Generator
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    className={classes.media}
                                    image={require("../../../assets/images/002.png")}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="h4" align="center">
                                        Ask Question
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}