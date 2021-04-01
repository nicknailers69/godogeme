import dotenv from "dotenv";

// we use dotenv package to read .env files here
dotenv.config();

const AppConfig:any = {
    "app_name":"godogeme",
    "app_version":"1.0.0",
    "dev": process.env.DEV_MODE === "1",
    "production": process.env.DEV_MODE === "0",
    "root_apiUrl": "/api/v1/",
    "api_host": process.env.API_HOST,
    "api_port": process.env.API_PORT,
    "dev_domain":"dev.godogeme.com",
    "prod_domain":"godogeme.com",
    "https_enabled": process.env.HTTPS === "1",
    "doge_api_url": process.env.DOGE_API_URL,
    "doge_api_key": process.env.DOGE_API_KEY,
    "vault_enabled": process.env.VAULT_ENABLED === "1",


}