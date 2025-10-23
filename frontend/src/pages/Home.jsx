import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import ArticlesPreview from '../components/sections/ArticlesPreview';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ArticlesPreview />
    </div>
  );
}   