import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
// core components
import Header from "../../components/Header/Header.js";

import styles from "../../assets/jss/containers/assessmentPage";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function AssessmentPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const modules = ["Module 1", "Module 2", "Module 3", "Module 4"]
    return (
        <div>
            <Header
                brand="LAST 2.0"
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <div className={classes.main}>
                <Typography variant="h2" align="center" gutterBottom={true}>
                    Self Assessment Tool
                </Typography>
                <Typography variant="h6" align="center" gutterBottom={true}>
                    Some Description.
                </Typography>
                <Button color="primary" variant="contained" className={classes.margin}>Start</Button>
                <div className={classes.container}>
                    <Grid container spacing={3}>
                        {modules.map(item => (
                            <Grid item xs key={item}>
                                <Card className={classes.card} variant="outlined">
                                    <Typography>{item}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}
