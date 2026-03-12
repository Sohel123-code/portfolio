import React from 'react';
import gmailImg from '../assets/gmail.png';
import callImg from '../assets/call.png';

function Contact() {
  return (
    <section className="py-24">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl font-bold">Contact Info</h2>
        <p className="text-lg text-foreground/70 mt-2">Reach out to me directly.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>
      <div className="max-w-xl mx-auto grid gap-6 reveal">
        {/* Email */}
        <div className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <img src={gmailImg} alt="Gmail" className="w-8 h-8" />
          <a
            href="mailto:mdsohel46940@gmail.com"
            className="text-primary font-medium hover:underline break-all"
          >
            mdsohel46940@gmail.com
          </a>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <img src={callImg} alt="Phone" className="w-8 h-8" />
          <a href="tel:6309145886" className="text-primary font-medium hover:underline break-all">
            +91 6309145886
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;


