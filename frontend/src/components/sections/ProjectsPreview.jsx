import React, { useEffect, useState } from 'react';
import { getProjects } from '../../api/api';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ProjectsPreview() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data.projects.slice(0, 3))) // show 3 cards
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-left">Featured Projects</h2>

      {/* Grid: 1 on small screens, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 text-sm px-2 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="hover:text-pink-500">GitHub →</Button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="hover:text-pink-500">Demo →</Button>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <Button>View All Projects</Button>
        </Link>
      </div>
    </section>
  );
}
