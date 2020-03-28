import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    display: "flex"
  },
  title: {
    fontSize: 14
  }
});

export default function OutlinedCard({
  timeStamp,
  producer,
  number
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {producer}
        </Typography>
        <div style={{ display: "inline-grid" }}>
          <div style={{ textAlign: "left" }}>
            <span style={{fontWeight: 600}} >Block Numer :</span> {number}
          </div>
          <div style={{ textAlign: "left" }}>
            <span style={{fontWeight: 600}}>Time-Stamp :</span>
            {timeStamp}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
