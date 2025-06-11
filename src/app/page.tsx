'use client';

import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMounted, setIsMounted] = useState(false);

  // Este useEffect garante que qualquer lógica que dependa do "window" ou do DOM
  // só rode no cliente, após a montagem inicial.
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => sectionObserver.observe(section));

    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el as Element));
    
    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [isMounted]);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <HeroSection id="hero" />
        <AboutSection id="sobre" />
        <ProjectsSection id="projetos" />
        <SkillsSection id="habilidades" />
        <ContactSection id="contato" />
      </main>
      <Footer />
    </>
  );
}