"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <>
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            We'd love to hear from you! Please fill out the form below — our executive will get in touch with you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="mb-5">
                    <label htmlFor="fullName" className="block mb-2 font-medium">Full Name *</label>
                    <input type="text" id="fullName" required placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                      <input type="email" id="email" required placeholder="john@example.com" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone *</label>
                      <input type="tel" id="phone" required placeholder="+91 XXXXX XXXXX" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="businessType" className="block mb-2 font-medium">Type of Business *</label>
                    <select id="businessType" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                      <option value="" disabled selected>Select an option</option>
                      <option value="architect">Architect</option>
                      <option value="interior_designer">Interior Designer</option>
                      <option value="dealers">Dealers</option>
                      <option value="manufacturers">Manufacturers</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Message *</label>
                    <textarea id="message" required placeholder="How can we help you?" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"></textarea>
                  </div>

                  <button type="submit" className="btn btn-secondary w-full py-4 text-lg">Send Message</button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-neutral-offwhite p-10 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>
                
                <div className="flex gap-4 mb-8">
                  <div className="text-3xl text-secondary">📍</div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Head Office</h4>
                    <p className="text-neutral-muted leading-relaxed">
                      Ragawood Veneers Pvt Ltd.<br/>
                      403/1, Dakshindari Road,<br/>
                      ALCOVE GLORIA Mall, Shop No. 1,<br/>
                      VIP, Golaghat, Kolkata – 700048,<br/>
                      West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <div className="text-3xl text-secondary">📞</div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Phone</h4>
                    <p className="text-neutral-muted">
                      <a href="tel:+918017757170" className="hover:text-primary transition-colors">+91 8017757170</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-secondary">✉️</div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Email</h4>
                    <p className="text-neutral-muted">
                      <a href="mailto:ragawoodveneers@gmail.com" className="hover:text-primary transition-colors">ragawoodveneers@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 rounded-xl overflow-hidden h-[400px] shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.670354460592!2d88.3970631!3d22.608035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027670731f8f3b%3A0xc3afbfdfb556f8f5!2sAlcove%20Gloria!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
