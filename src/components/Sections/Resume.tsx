import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, Building, User } from 'lucide-react';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Nasratul_Nayem_Resume.pdf';
    link.click();
  };

  const experience = [
    {
      title: 'WordPress Developer',
      company: 'BDCalling',
      period: 'July 2024 - August 2025',
      location: 'Remote',
      description: [
        'Communicated with clients to understand project needs and deliver tailored solutions.',
        'Built custom functions to extend WordPress capabilities.',
        'Designed and customized layouts using HTML, CSS, and JavaScript.',
        'Developed and modified plugins to add specific features and functionality.'
      ]
    },
    {
      title: 'Web Developer (WordPress)',
      company: 'Pet Shop',
      period: 'May 2022 - April 2025',
      location: 'khilgaonpet-shop.com',
      description: [
        'Developed and maintained a fully functional pet shop website.',
        'Managed social media pages and posted engaging content regularly.',
        'Handled Meta Ads and improved reach and customer interaction.',
        'Ensured fast loading times and mobile responsiveness.',
        'Implemented SEO best practices for better search rankings.'
      ]
    }
  ];

  const education = [
    {
      degree: 'HSC',
      institution: 'Shaheed Suhrawardy College',
      period: '2023',
      gpa: 'GPA: 3.50',
      description: 'Higher Secondary Certificate in Science'
    },
    {
      degree: 'SSC',
      institution: 'Khilgaon Model School',
      period: '2020',
      gpa: 'GPA: 4.39',
      description: 'Secondary School Certificate in Science'
    }
  ];

  const languages = [
    { name: 'Bangla', percentage: 100 },
    { name: 'English', percentage: 90 },
    { name: 'Hindi', percentage: 98 }
  ];

  const personalInfo = {
    phone: '+8801962351470',
    portfolio: 'portfolio: https://nayem.dev',
    website: 'My site: https://gplmama.com',
    address: '335 Goran, Adorshabagh, Khilgaon, Dhaka-1219'
  };

  return (
    <section id="resume" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Resume
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Professional experience and educational background
          </p>
          <Button
            onClick={downloadResume}
            className="glass-intense hover-lift px-8 py-3 font-medium bg-text-primary text-background"
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info & Languages */}
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="glass-intense rounded-lg p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-text-secondary mt-1 flex-shrink-0" />
                  <span className="text-text-muted">{personalInfo.address}</span>
                </div>
                <div className="text-text-muted">{personalInfo.phone}</div>
                <div className="text-text-muted">{personalInfo.portfolio}</div>
                <div className="text-text-muted">{personalInfo.website}</div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-intense rounded-lg p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary font-medium">{lang.name}</span>
                      <span className="text-text-muted text-sm">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-text-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-8">
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="glass-intense rounded-lg p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-4 text-text-secondary mb-2">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-text-muted">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-text-muted">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-text-secondary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-8">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="glass-intense rounded-lg p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-1">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-1 text-text-secondary mb-1">
                          <Building className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-text-muted">{edu.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 text-text-muted">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <span className="text-sm font-semibold text-text-primary">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;