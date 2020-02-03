import React from "react";
import { Route } from "react-router-dom";
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
import ChatbotPage from "./Chatbot/ChatbotPage";
import ModulePage from "./Modules/ModulePage";

import styles from "../../assets/jss/containers/assessmentPage";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function AssessmentPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div className={classes.fullContainer}>
            <Header
                brand="LAST 2.0"
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
             <Route path="/assessment-page/chatbot" component={ChatbotPage} />
             <Route path="/assessment-page/modules" component={ModulePage} />
        </div>
    );
}
