import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not configured. Please add GEMINI_API_KEY to your .env file." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-09-2025" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `You are ExoAI, the official AI assistant for Exocloud Technologies. 
                    
                    CRITICAL INSTRUCTIONS:
                    1. You must ONLY answer questions related to Exocloud Technologies, its services, products, and cloud/AI expertise.
                    2. If a user asks about anything else (e.g., general knowledge, coding help, recipes, weather), politely refuse and steer them back to Exocloud.
                    
                    EXOCLOUD CONTEXT:
                    - **Company**: Exocloud Technologies, a leader in Cloud Migration, AI Automation, and Oracle Services.
                    - **Core Services**: 
                      - Oracle Cloud Infrastructure (OCI) Migration & Management.
                      - Oracle APEX Development (Low-code, high-performance apps).
                      - Database Administration (DBA) & Performance Tuning.
                      - AI Integration (LLMs, Chatbots, Automation).
                      - E-commerce Optimization (Shopify/WooCommerce to Custom Web Apps).
                    - **Products**:
                      - **PrintSpace**: A SaaS ERP for the Printing & Packaging industry. Features: Inventory, Production Tracking, Costing.
                      - **AccuTrack**: An Industrial IoT solution for manufacturing. Features: CNC Machine Monitoring, Real-time OEE, Predictive Maintenance.
                      - **Healthcare Automation** (Coming Soon): AI-driven tools for clinics and hospitals.
                    - **Contact**: Email: Yagnik@exocloud.in | Phone: +91 99796 81995.
                    
                    Tone: Professional, futuristic, helpful, and concise.` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ExoAI. I will strictly limit my responses to Exocloud Technologies' services, products, and expertise. I will not answer unrelated queries. How can I assist you with our cloud and AI solutions today?" }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to process your request." },
            { status: 500 }
        );
    }
}
