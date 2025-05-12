import {forwardRef, useState} from "react";
import {motion} from "framer-motion";
import {Mail, MapPin, Github, Linkedin, Twitter, Send} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";
import {apiRequest} from "@/lib/queryClient";

const contactFormSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters"}),
    email: z.string().email({message: "Please enter a valid email address"}),
    message: z
        .string()
        .min(10, {message: "Message must be at least 10 characters"}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = forwardRef<HTMLElement>((props, ref) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        try {
            await apiRequest("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });

            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });

            form.reset();
        } catch (error) {
            toast({
                title: "Error sending message",
                description: "Please try again later or contact me directly via email.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 px-4 bg-dark-light relative"
        >
            <div className="container mx-auto section-transition">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Get In <span className="text-primary">Touch</span>
                        <div className="section-title-bar"></div>
                    </h2>
                    <p className="section-description">
                        I'm always open to discussing new projects, creative ideas or
                        opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                    >
                        <h3 className="text-2xl font-poppins font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div
                                    className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                                    <Mail className="text-primary h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <a
                                        href="mailto:moh2n2dayman@gmail.com"
                                        className="text-light text-opacity-80 hover:text-primary transition-colors duration-300"
                                    >
                                        moh2n2dayman@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div
                                    className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                                    <MapPin className="text-primary h-5 w-5"/>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-light text-opacity-80">Egypt</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-poppins font-semibold mb-6">
                            Social Profiles
                        </h3>
                        <div className="flex space-x-5">
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors duration-300"
                                aria-label="GitHub profile"
                            >
                                <Github className="h-5 w-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors duration-300"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin className="h-5 w-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors duration-300"
                                aria-label="Twitter profile"
                            >
                                <Twitter className="h-5 w-5"/>
                            </a>
                            <a
                                href="mailto:moh2n2dayman@gmail.com"
                                className="w-12 h-12 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors duration-300"
                                aria-label="Email contact"
                            >
                                <Mail className="h-5 w-5"/>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                    >
                        <h3 className="text-2xl font-poppins font-semibold mb-6">
                            Send Me a Message
                        </h3>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                                    {...form.register("name")}
                                />
                                {form.formState.errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {form.formState.errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {form.formState.errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message here..."
                                    rows={5}
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                                    {...form.register("message")}
                                />
                                {form.formState.errors.message && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {form.formState.errors.message.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
                            >
                                <span>Send Message</span>
                                <Send className="ml-2 h-4 w-4"/>
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;
