import axiosInstance from "@/lib/axios";

export const generateEventPLan = async (eventDescription: string) => {
  const response = await axiosInstance.post("/generate-plan", {
    eventDescription,
  });
  return response.data;
};

export const getAllEventPlans = async () => {
  const response = await axiosInstance.get("/plans");
  return response.data.data;
};
