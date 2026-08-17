"use server";

export const deleteSingleUser = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/deletesingleuser/${id}`,
      {
        method: "DELETE",
      },
    );

    return res.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
