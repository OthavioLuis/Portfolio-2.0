'use client';

import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import { useRef, useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const sectionRefs = useRef<{[key: string]: HTMLElement}>({});

    useEffect(() => {
    // Lógica para revelar seções ao rolar
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: para de observar depois de revelado para melhorar a performance
                // revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el as Element));
    
    // Lógica para destacar o link ativo no menu
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach(section => {
      sectionRefs.current[section.id] = section;
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection}/>
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
