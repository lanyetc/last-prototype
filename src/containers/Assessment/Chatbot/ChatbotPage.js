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
import Header from "../../../components/Header/Header";

import styles from "../../../assets/jss/containers/chatbotPage";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ChatbotPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    
    
    return (
        <div className={classes.main}>
                
                
        </div>
    );
}
