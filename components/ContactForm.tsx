"use client"
import { Suspense, useEffect, useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";

const FormContent = () => {
    const params = useSearchParams();
    const searchParams = params.get("title");
    const formRef = useRef<HTMLDivElement>(null);
    const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = useState({
        name: "",
        subject: searchParams || "Inquiry",
        date: "",
        phone: "",
        email: "",
        message:"",
    });

    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error" >("idle");

    useEffect(()=> {
        if (searchParams && formRef.current) {
      const timer = setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1150); // 150ms delay gives Next.js time to complete page scroll restoration

      return () => clearTimeout(timer);
    }

    },[searchParams]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev)=> ({...prev, [e.target.name]:e.target.value}));
    }

    useEffect(() => {
        if(formStatus === "success") {
            const timer = setTimeout(() => {
                setFormStatus("idle");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [formStatus]);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setFormStatus("submitting");
        const whatsappMessage = `Hi LaLuna! I would like to make an inquiry:
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Subject:* ${formData.subject}${formData.date ? `\n• *Preferred Date:* ${formData.date}` : ""}
• *Message:* ${formData.message}`;

        // Replace with La Luna's actual WhatsApp phone number (with country code, no + or spaces)
        const phoneNumber = "94765504541"; 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirect user directly to WhatsApp
        window.open(whatsappUrl, "_blank");
        setFormStatus("success");

        sendGAEvent("event", "generate_lead", {
            event_category: "Contact Form",
            service_requested: formData.subject,
            method: "WhatsApp Redirect",
        });

        setFormData({
            name: "",
            subject: "Inquiry",
            date:"",
            phone: "",
            email: "",
            message:"",
        });
    }
  


  return (
    <div ref={formRef} className="flex w-full m-auto mt-10 scroll-mt-35">
        {formStatus === "success" ? (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center">
                <p className="font-semibold text-lg">Thank You!</p>
                <p className="text-sm">Your inquiry has been sent successfully. We will get back to you shortly!</p>
            </div>
        ):(
            <form className="form w-full" onSubmit={handleSubmit}>
                <div className="field-wrapper">
                    <label>Subject</label>
                    <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="E.g. Jone Petter"

                    />
                </div>
                {searchParams && (
                    <div className="field-wrapper">
                    <label>Preferred Date</label>
                    <input 
                        type="date"
                        name="date"
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                    />
                    </div>
                )}
                <div className="field-wrapper">
                    <label>Full Name</label>
                    <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Jone Petter"

                    />
                </div>
                <div className="field-wrapper">
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jone@sample.com"

                    />
                </div>
                <div className="field-wrapper">
                    <label>Phone</label>
                    <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+947xxxxxxxx"

                    />
                </div>
                <div className="field-wrapper">
                    <label>Message</label>
                    <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    className="h-32 resize-none"
                    />
                </div>
                <button className="btn primary-button" type="submit"
                disabled = {formStatus === "submitting"}
                >{formStatus === "submitting"? "Opening WhatsApp...": "Send"}</button>
            </form>
        )}

    </div>
  )
}

const FormContainer = ()=> {
    const params = useSearchParams();
    const titleParams = params.get("title") || "default";
    return <FormContent key={titleParams} />;
}

export default function ContactForm(){
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <FormContainer />
    </Suspense>
    );
}