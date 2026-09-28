"use client"
import { sendGAEvent } from "@next/third-parties/google"

interface PhoneClickableProps {
    phone:string;
    label:string;
}
const PhoneClickable = ({phone, label}:PhoneClickableProps) => {
    const handleClick = ()=> {
        sendGAEvent("event", "generate_lead", {
          event_category: "Conversion",
          event_label: `Phone call - contact page`,
          method: "Direct Call",
          value: 1,
         })
    }


  return (
    <a href={phone} onClick={handleClick}>{label}</a>
  )
}

export default PhoneClickable