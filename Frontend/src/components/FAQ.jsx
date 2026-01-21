import React, { useState } from 'react';
import SectionHeader from './sectionHeader';
import AccordionItem from './AccordionItem';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null); 
  const faqItems = [
    {
      id: "faq-1",
      question: "What's included in your Ethiopian tour packages?",
      answer: "Our packages include accommodation, expert local guides, transportation, entrance fees to historical sites, and select traditional meals. Specific inclusions vary by destination and package tier."
    },
    {
      id: "faq-2",
      question: "Can I customize my Ethiopian itinerary?",
      answer: "Absolutely! We offer flexible customization for all tours. Contact our experts to create a personalized itinerary featuring your preferred sites, cultural experiences, and natural wonders."
    },
    {
      id: "faq-3",
      question: "What is your cancellation policy?",
      answer: "Full refund for cancellations 30+ days before departure. 50% refund for 15-30 days. Within 15 days, non-refundable but reschedulable subject to availability."
    },
    {
      id: "faq-4",
      question: "Do I need a visa to travel to Ethiopia?",
      answer: "Most visitors can obtain an e-visa online or visa on arrival at Bole International Airport. We guide you through the application process."
    },
    {
      id: "faq-5",
      question: "Are group discounts available?",
      answer: "Yes! Groups of 4+ receive 10% off, 8+ receive 15% off, and 12+ receive 20% off. Contact us for custom group package pricing."
    },
    {
      id: "faq-6",
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, mobile money (CBE Birr, M-Pesa), and bank transfers in ETB or USD. Flexible payment plans available for larger bookings."
    }
  ];
  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <SectionHeader 
          title="Frequently Asked Questions"
          description="Everything you need to know about traveling in Ethiopia"
        />
        
        <div className="accordion" role="region" aria-label="FAQ Accordion">
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;