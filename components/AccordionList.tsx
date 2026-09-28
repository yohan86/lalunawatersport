"use client"
import { useState } from "react";

interface Item {
    question:string; 
    answer:string; 
}
interface ItemListProps {
    itemlist: Item[];
}
const AccordionList = ({itemlist}: ItemListProps) => {
    const [openIndex, setOpenIndex] = useState <number | null>(null);

    const toggleIndex = (index:number)=> {
        setOpenIndex(openIndex === index ? null : index);
    }
  return (
    <div className="speakable-answer space-y-4 my-8">
        {itemlist.map((item:Item, index:number)=> {
            const isOpen = openIndex === index;
            return (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <h3>
                    <button
                    onClick={()=>toggleIndex(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-900 bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                    
                    >
                    <span>{item.question}</span>
                    <span className="text-xl font-bold text-site-green ml-2">{isOpen ? "-" : "+"}</span>
                    </button>
                    </h3>
                    <div className={`p-4 bg-gray-50 text-gray-600 text-sm border-t border-gray-100 ${isOpen ? "block" : "hidden"}`}>
                        {item.answer}
                    </div>
                </div>
            )
        } )}
    </div>
  )
}

export default AccordionList