import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />

      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $500
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* Info Card Component */}
          Try Saying : Add Income for $100 in Category Salary for Monday...
        </Typography>
        <Divider /> {/* This is a horizontal rule that divides content  */}
        {/* Form */}
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* List */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
