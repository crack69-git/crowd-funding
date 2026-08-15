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
