//import { type Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: process.env.POSTGRES_URL,
    url: "postgresql://ai-short-video-generator_owner:X0OoSauM8FQR@ep-floral-feather-a6tvf95y.us-west-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
  },
  tablesFilter: ["cs925_*"],
}; // satisfies Config;
