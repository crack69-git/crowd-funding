"use server";

export const getTiers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/gettiers`,
      {
        cache: "no-store",
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching tiers:", error);
    throw error;
  }
};

export const getMyCampaigns = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/getmycampaigns/${id}`,
      {
        cache: "no-store",
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
};

export const getAllCampaigns = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/getallcampaigns`,
      {
        cache: "no-store",
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching all campaigns:", error);
    throw error;
  }
};
