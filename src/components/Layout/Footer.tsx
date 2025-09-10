import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-surface-glass border-t border-border-glass">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-primary mb-6">
            Nasratul Nayem
          </h2>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="glass hover-lift w-12 h-12 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Nasratul Nayem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;