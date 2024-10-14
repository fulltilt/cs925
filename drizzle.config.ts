//import { type Config } from "drizzle-kit";

export default {
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: process.env.POSTGRES_URL,
    url: "postgres://default:t8fkzQ7rqAgE@ep-crimson-unit-a62twnxk-pooler.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require",
  },
  //   tablesFilter: ["poketrades_*"],
  tablesFilter: ["cs925_*"],
}; // satisfies Config;
