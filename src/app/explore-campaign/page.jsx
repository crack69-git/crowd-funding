import { getAllCampaigns } from "@/lib/actions/getSection";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Label,
  ProgressBar,
  Separator,
  Typography,
} from "@heroui/react";
import { CardActions, CardMedia } from "@mui/material";
import React from "react";
import { BiDollar } from "react-icons/bi";

const page = async () => {
  const campaigns = await getAllCampaigns();
  console.log("Campaigns:", campaigns);
  return (
    <div className="min-h-screen w-11/12 mx-auto my-5">
      <h3 className="text-2xl text-gray-600 font-bold text-center">
        Explore Active Campaigns
      </h3>
      <Separator className="my-5" />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {campaigns.map((campaign) => (
          <Card key={campaign._id} sx={{ maxWidth: 345 }} className="border">
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <span className="font-semibold text-sm text-gray-600">
                Deadline: {campaign.deadline}
              </span>
              <Typography gutterBottom variant="h5" component="div">
                <span className="text-2xl font-bold text-gray-800">
                  {campaign.campaignTitle}
                </span>
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
    </div>
  );
};

export default page;
