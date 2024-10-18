import dotenv from "dotenv"
dotenv.config()
export const PORT = process.env.PORT || 4444
export const HOST = process.env.HOST || "localhost"
export const JWT_SECRET = process.env.JWT_SECRET || "nitsuh_temar_endigebat"