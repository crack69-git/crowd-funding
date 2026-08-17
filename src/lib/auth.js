import dns from "dns";
dns.setServers(["8.8.8.8"], ["8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.MONGODB_DB);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    rememberMe: true,
  },
  // session: {
  //   cookieCache: {
  //     enabled: true,
  //     maxAge: 60 * 60 * 24 * 7, // 7 days
  //   },
  // },
  database: mongodbAdapter(db, {
    client,
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: true,
      },
      credit: {
        type: "number",
        input: true,
      },
    },
  },
});
