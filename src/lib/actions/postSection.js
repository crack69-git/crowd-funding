"use server";

export const postTier = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posttiers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error posting tier:", error);
    throw error;
  }
};

export const postCampaign = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/postcampaign`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error posting campaign:", error);
    throw error;
  }
};

export const paymentPost = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/payment/init`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error initiating payment:", error);
    throw error;
  }
};
