"use server";

export const patchCampaignState = async (id, newState) => {
  try {
    console.log(id, newState);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/patchCampaignState/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: newState }),
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error patching campaign state:", error);
    throw error;
  }
};

export const patchUserInfo = async (email, updatedData) => {
  try {
    console.log(email, updatedData);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/patchUserInfo/${email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credit: updatedData }),
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error patching user info:", error);
    throw error;
  }
};
