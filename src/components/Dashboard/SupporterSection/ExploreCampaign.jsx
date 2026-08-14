import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button, Label, ProgressBar } from "@heroui/react";

export default function ExploreCampaign() {
  return (
    <Card sx={{ maxWidth: 345 }} className="border-t-4 border-green-600">
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <p className="font-semibold text-sm text-gray-600">
          Deadline: 2023-12-31
        </p>
        <Typography gutterBottom variant="h5" component="div">
          <div className="text-2xl font-bold text-gray-800">
            Save the Rainforest
          </div>
        </Typography>
        <div>
          <p className="font-semibold">Creator: John Doe</p>
        </div>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <span className="text-gray-600 text-sm line-clamp-2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </span>
        </Typography>
      </CardContent>
      <ProgressBar
        aria-label="Loading"
        className="full w-11/12 mx-auto"
        value={20}
      >
        <Label>
          Fund Raised{" "}
          <span className="text-gray-600">($10,000 of $50,000)</span>
        </Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
      <CardActions>
        <Button variant="primary" className="rounded-lg">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
