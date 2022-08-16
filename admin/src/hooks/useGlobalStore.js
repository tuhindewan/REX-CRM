import create from "zustand";

export const useGlobalStore = create((set) => ({
  trigger: "",
  condition: [
    {
      key: "country",
      comparison: "includes",
      value: "dhaka",
    },
    [ 
        {
            key: "country",
            comparison: "includes",
            value: "dhaka",
        },
    ],
    {

    }
  ],
  delay: "",
  goal: "",
  sendEmail: "",
}));
