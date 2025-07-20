import { FC } from 'react';
import { Github, Instagram, Linkedin, BookOpen } from 'lucide-react';

const Footer: FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/anoopjoshy254', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/anoop_joshyy?igsh=bW5kZjIxczk0bnZv&utm_source=qr', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anoop-k-joshy-5ab372333/', label: 'LinkedIn' }
  ];

  return (
    <footer className="py-12 border-t border-violet-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 border border-violet-900/30 rounded-lg flex items-center justify-center text-gray-400 hover:border-violet-600/50 hover:text-violet-300 hover:bg-violet-900/20 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 – <span className="text-violet-300 font-medium">THANKS FOR VISITING..!!</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;