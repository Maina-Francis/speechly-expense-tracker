import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {/* WOrds that we speak as we interact with speechly */}
          ...
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          {/* Label for our input */}
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullwidth />
      </Grid>

      <Grid item xs={6}>
        <TextField type="date" label="Date" fullwidth />
      </Grid>

      <button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        {" "}
        Create
      </button>
    </Grid>
  );
};

export default Form;
