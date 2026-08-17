import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button, Chip, Label, ProgressBar, Separator } from "@heroui/react";
import { getAllCampaigns } from "@/lib/actions/getSection";
import { BiDollar } from "react-icons/bi";

export default async function ExploreCampaign() {
  const campaigns = await getAllCampaigns();
  console.log("Campaigns:", campaigns);
  return (
    <div>
      {campaigns.map((campaign) => (
        <Card
          key={campaign._id}
          sx={{ maxWidth: 345 }}
          className={`border-t-8 ${campaign.status === "active" ? "border-green-500" : "border-red-500"} my-5`}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <p className="font-semibold text-sm text-gray-600">
              Deadline: {campaign.deadline}
            </p>
            <Typography gutterBottom variant="h5" component="div">
              <div className="text-2xl font-bold text-gray-800">
                {campaign.campaignTitle}
              </div>
            </Typography>

            <div>
              <Chip color="success">{campaign.tier}</Chip>
              <p className="font-semibold text-gray-600">
                Creator: {campaign.CreatorName}
              </p>
            </div>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span className="text-gray-600 text-sm line-clamp-2">
                {campaign.description}
              </span>
            </Typography>
          </CardContent>
          <Separator className="my-2" />
          <ProgressBar
            aria-label="Loading"
            className="full w-11/12 mx-auto"
            value={(campaign.TotalRaised / campaign.fundingGoal) * 100}
          >
            <Label>
              Fund Raised{" "}
              <span className="text-gray-600 flex items-center">
                <BiDollar />
                {campaign.TotalRaised} out of
                <BiDollar />
                {campaign.fundingGoal}
              </span>
            </Label>
            <ProgressBar.Output />
            <ProgressBar.Track>
              <ProgressBar.Fill />
            </ProgressBar.Track>
          </ProgressBar>
          <CardActions>
            <Button variant="primary" className="rounded-lg bg-green-900">
              View Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
