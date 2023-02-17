import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />

      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance: ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* Infor Card... Things to say to speechly */}
          Try Saying: Add Income for $100 in Category Salary for Monday
        </Typography>

        {/* Horizontal Rule to subdivide the cards */}
        <Divider />

        <Form />
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* List Component*/}
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
