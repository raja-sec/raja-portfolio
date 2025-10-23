import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/api';
import Card from '../components/ui/Card';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res.data.projects || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16">
        <p className="text-center text-gray-400 animate-pulse">Loading projects...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16">
        <p className="text-center text-gray-400">No projects found.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-20 mt-16 text-gray-200">
      <h1 className="text-5xl font-bold mb-4 text-center text-accent">Projects</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects showcasing my skills and experience.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full bg-gray-900 rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/10 transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
