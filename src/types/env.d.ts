declare namespace NodeJS {
  interface ProcessEnv {
    readonly JWT_SECRET: string;
    readonly GITHUB_ID: string;
    readonly GITHUB_SECRET: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
  }
}
