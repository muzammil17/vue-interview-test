import axios from "axios";
export const fetchCards = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772"
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
