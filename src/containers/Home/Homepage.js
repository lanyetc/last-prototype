import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Parallax from "../../components/Parallax/Parallax";
// sections for this page
import SectionAssesment from "./Sections/SectionAssesment";

import styles from "../../assets/jss/containers/homePage";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
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
      <Parallax image={require("../../assets/images/helloquence-OQMZwNd3ThU-unsplash.jpg")}>
        <div className={classes.container}>
        <div className={classes.brand}>
                <h1 className={classes.title}>LAST 2.0</h1>
                <h3 className={classes.subtitle}>
                  Get Legal Assistance in Few Steps.
                </h3>
              </div>
        </div>
      </Parallax>
      <div className={classes.sections}>
          <SectionAssesment></SectionAssesment>
      </div>
    </div>
  );
}
