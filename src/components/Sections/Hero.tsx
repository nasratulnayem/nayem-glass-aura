import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Nasratul_Nayem_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="glass-intense rounded-2xl p-8 md:p-12 hover-lift">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 animate-fade-in">
              Nasratul Nayem
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-slide-up font-light">
              WordPress Developer
            </p>
            
            <div className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed animate-slide-up max-w-3xl mx-auto">
              <p>
                My name is Nasratul Nayem — I love creating websites and solving problems 
                related to custom WordPress functions and custom design. With 4+ years of 
                experience and 180+ websites delivered worldwide, I create fast, secure, 
                and custom WordPress solutions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button
                onClick={downloadResume}
                className="glass hover-lift px-8 py-3 text-lg font-medium bg-text-primary text-background hover:bg-text-secondary transition-all duration-300"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              
              <Button
                onClick={() => scrollToSection('#portfolio')}
                variant="secondary"
                className="glass hover-lift px-8 py-3 text-lg font-medium"
                size="lg"
              >
                <Eye className="h-5 w-5 mr-2" />
                View Portfolio
              </Button>
            </div>
            
            {/* Skills Tags */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 animate-slide-up">
              {['WordPress Development', 'Custom Theme Functions', 'Theme Design & Customization', 'Client Communication', 'HTML, CSS, JavaScript & PHP'].map((skill) => (
                <span
                  key={skill}
                  className="glass px-4 py-2 rounded-full text-sm font-medium text-text-secondary border border-border-glass hover:border-border-hover transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-12 animate-float">
            <button
              onClick={() => scrollToSection('#resume')}
              className="text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              <ArrowRight className="h-6 w-6 rotate-90 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;