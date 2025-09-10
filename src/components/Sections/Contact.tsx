import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nasratulnayem@gmail.com',
      href: 'mailto:nasratulnayem@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 196 235 1470',
      href: 'tel:+8801962351470'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                I'm always excited to work on new projects and help businesses 
                achieve their goals through professional web development. Whether 
                you need a custom WordPress site, theme customization, or ongoing 
                maintenance, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="glass w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-secondary">{info.label}</p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-text-primary hover:text-text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-primary">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="glass-intense rounded-lg p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Monday - Friday</span>
                  <span className="text-text-primary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Saturday</span>
                  <span className="text-text-primary">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sunday</span>
                  <span className="text-text-muted">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-intense rounded-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-muted mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                  className="glass hover-lift"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass bg-surface-glass border-border-glass focus:border-border-hover"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass bg-surface-glass border-border-glass focus:border-border-hover"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-text-primary">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass bg-surface-glass border-border-glass focus:border-border-hover"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass bg-surface-glass border-border-glass focus:border-border-hover resize-none"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-intense hover-lift bg-text-primary text-background disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-text-muted text-center">
                  * Required fields. Your information will be kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;