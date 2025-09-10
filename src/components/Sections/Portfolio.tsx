import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import project1 from '@/assets/projects/project-1.jpg';
import project2 from '@/assets/projects/project-2.jpg';
import project3 from '@/assets/projects/project-3.jpg';
import project4 from '@/assets/projects/project-4.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  thumb: string;
  images: string[];
  description: string;
  tags: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 'project-001',
      title: 'E-commerce Platform',
      category: 'ecommerce',
      thumb: project1,
      images: [project1],
      description: 'A fully functional e-commerce platform built with WordPress and WooCommerce. Features include custom product pages, shopping cart functionality, payment integration, and responsive design.',
      tags: ['web', 'ecommerce', 'responsive'],
      tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 'project-002',
      title: 'Custom WordPress Theme',
      category: 'wordpress',
      thumb: project2,
      images: [project2],
      description: 'A custom WordPress theme developed from scratch with advanced customization options, custom post types, and optimized performance.',
      tags: ['wordpress', 'theme', 'custom'],
      tech: ['WordPress', 'PHP', 'Advanced Custom Fields', 'SCSS'],
      liveUrl: 'https://example.com'
    },
    {
      id: 'project-003',
      title: 'Corporate Website',
      category: 'website',
      thumb: project3,
      images: [project3],
      description: 'A professional corporate website with modern design, contact forms, service pages, and SEO optimization.',
      tags: ['corporate', 'business', 'seo'],
      tech: ['WordPress', 'Elementor', 'Contact Form 7', 'Yoast SEO'],
      liveUrl: 'https://example.com'
    },
    {
      id: 'project-004',
      title: 'React Dashboard',
      category: 'webapp',
      thumb: project4,
      images: [project4],
      description: 'A modern dashboard application built with React.js featuring data visualization, user management, and real-time updates.',
      tags: ['react', 'dashboard', 'spa'],
      tech: ['React.js', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'website', name: 'Websites' },
    { id: 'webapp', name: 'Web Apps' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-surface-glass">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcasing my latest projects and creative solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              className={`glass hover-lift transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-text-primary text-background border-text-primary' 
                  : 'hover:border-border-hover'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-intense rounded-lg overflow-hidden hover-lift cursor-pointer border-2 border-border-glass hover:border-text-primary transition-all duration-300"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-surface-hover text-text-secondary rounded-full border border-border-glass"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-text-muted">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 animate-fade-in">
            <div className="glass-intense rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-glass">
                <h3 className="text-2xl font-bold text-text-primary">
                  {selectedProject.title}
                </h3>
                <Button
                  onClick={closeModal}
                  variant="secondary"
                  size="sm"
                  className="glass"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image Carousel */}
                <div className="relative mb-6">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass"
                        size="sm"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass"
                        size="sm"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      Description
                    </h4>
                    <p className="text-text-muted mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {selectedProject.liveUrl && (
                        <Button
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                          className="glass hover-lift"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button
                          onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                          variant="secondary"
                          className="glass hover-lift"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Button>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* Technologies */}
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-surface-hover text-text-secondary rounded-full border border-border-glass"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-text-primary text-background rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;