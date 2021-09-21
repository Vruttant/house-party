import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

export default function Info(props) {
  const [page, setPage] = useState(pages.JOIN);

  function joinInfo() {
    return "Join Page";
  }

  function createInfo() {
    return "Create Page";
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          What is House Party?
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1">
          {page == pages.JOIN ? joinInfo() : createInfo()}{" "}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconButton
          onClick={() => {
            page === pages.create ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {page === pages.create ? (
            <NavigateBeforeIcon />
          ) : (
            <NavigateNextIcon />
          )}
        </IconButton>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
