import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(
      process.env.VITE_EMAILJS_SERVICE_ID
    ),
    "process.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(
      process.env.VITE_EMAILJS_TEMPLATE_ID
    ),
    "process.env.VITE_EMAILJS_USER_ID": JSON.stringify(
      process.env.VITE_EMAILJS_USER_ID
    ),
  },
  assetsInclude: [
    "./src/assets/2402-VHS-Depot.mp4",
    "./src/assets/1518576777676.jpg",
    "./src/assets/Cert.jpg",
    "./src/assets/ClubhouseAppPresentation.mp4",
    "./src/assets/MeandSamiha.jpg",
    "./src/assets/Meandtheboys.jpg",
    "./src/assets/Mehiking.jpg",
    "./src/assets/MeTandAndrew.JPG",
    "./src/assets/Mewithmystar.jpg",
  ],
});