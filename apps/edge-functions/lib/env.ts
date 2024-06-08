export const verifyEnv = () => {
  if (!process.env.TURSO_DATABASE_URL) {
    throw new Error('TURSO_DATABASE_URL is not set');
  }

  if (!process.env.TURSO_AUTH_TOKEN) {
    throw new Error('TURSO_AUTH_TOKEN is not set');
  }
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TURSO_DATABASE_URL: string;
      TURSO_AUTH_TOKEN: string;
    }
  }
}
