import type {Express} from "express";
import {createServer, type Server} from "http";
import {storage} from "./storage";
import {z} from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
    // Contact form API endpoint
    app.post("/api/contact", async (req, res) => {
        try {
            // Validate request body
            const validatedData = contactSchema.parse(req.body);

            // In a real application, you would save this to a database
            // or send an email. For now, we'll just log it.
            console.log("Contact form submission:", validatedData);

            // Return success response
            res.status(200).json({
                message: "Message received successfully",
                success: true
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({
                    message: "Validation error",
                    errors: error.errors,
                    success: false
                });
            } else {
                res.status(500).json({
                    message: "Server error",
                    success: false
                });
            }
        }
    });

    const httpServer = createServer(app);

    return httpServer;
}
