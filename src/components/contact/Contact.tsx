import { Mail } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ContactDetails } from './ContactDetails';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-700/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeNumber="05"
          badgeText="INITIATE TRANSMISSION"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Let's Architect the Future of Web"
          titleGradient="Together."
          subtitle="Whether you have an open Junior MERN role, a collaborative full-stack project, or want to discuss modern 3D web engineering — my channels are open."
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Direct channels, availability, location */}
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>

          {/* Right Column: Interactive Transmission Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
