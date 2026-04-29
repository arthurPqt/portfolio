import React from 'react';
import { QrCode, Link2, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="min-h-auto flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 pt-20 text-center bg-gray-100">
      <div className="max-w-md mx-auto border-2 border-dashed border-gray-400 p-12 bg-white rounded">
        <h2 className="text-center text-gray-800 font-bold text-lg mb-8">
          RETROUVEZ-MOI SUR
        </h2>
        
        <div className="space-y-6">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition"
          >
            <QrCode size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition"
          >
            <Link2 size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@example.com"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition"
          >
            <Mail size={20} />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
