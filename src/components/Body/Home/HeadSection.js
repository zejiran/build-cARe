import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Box,
  Button,
  Card,
  Grid,
  isWidthUp,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import headerImage from "./logo.png";
const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.primary,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});
export function Home(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          I am <b>cARe</b>, your COVID19 medical advisor.
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "p" : "body1"}
                            color="textSecondary"
                          >
                            <li>
                              Advices about the measures to be taken when
                              contact with the outside.
                            </li>
                            <li>
                              Recommend activities to do during the quarantine
                              at home.
                            </li>
                            <li>
                              Analyze of symptoms to verify the probability of
                              coronavirus.
                            </li>
                            <li>
                              Learn simple measures like hand washing and social
                              distancing.
                            </li>
                            <li>
                              Accompany in these difficult times and mental
                              health support.
                            </li>
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="https://68d2b5750d1b4fd79677c2456fea32ba.us-east-1.sumerian.aws/"
                        >
                          Interact with cARe
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <img
                      src={headerImage}
                      className={classes.image}
                      alt="cARe logo"
                    />
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}
Home.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};
export default withWidth()(withStyles(styles, { withTheme: true })(Home));
