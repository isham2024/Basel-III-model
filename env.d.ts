declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Server-side environment variables should be named using uppercase
            // letters only, while camelCase naming convention should be used
            // for variables shared by both the client-side and server-side.
            appName: "ARCH";
            appLogo: "https://www.flaticon.com/free-icon/accenture_6128893";
            appThemeColor: string;
            appSummary: "Stay up-to-date on your firm-specific regulations";
            exampleInput: "What is Basel III?";

            OPENAI_API_KEY: "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";
            OPENAI_API_BASE_URL: string;
            SYSTEM_MESSAGE: "Learn about regulations specific to your firm";
            MESSAGE_TEMPLATE: "Enter your regulatory requirement";
        }
    }
}

export {}
