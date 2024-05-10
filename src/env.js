import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // Define your server-side environment variables schema
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    OPENAI_APIKEY: z.string(), // Add the API key schema here
    ASSISTANT_MODEL_ID: z.string(),
  },

  // Optionally define client-side environment variables here
  client: {
    // Add public client variables like:
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  // Manually destruct `process.env` to avoid runtime issues
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    OPENAI_APIKEY: process.env.OPENAI_APIKEY, // Ensure this is also added here
    ASSISTANT_MODEL_ID: process.env.ASSISTANT_MODEL_ID,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  // Other optional configurations
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
