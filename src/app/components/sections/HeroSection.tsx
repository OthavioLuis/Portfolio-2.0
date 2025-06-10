'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import profileImg from '../../../../public/profile.svg'

const words = ["dev", "design"];

interface SectionProps {
  id: string;
}

export default function HeroSection({ id }: SectionProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);
  
  return (
    <section id={id} className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left items-center">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tight">
              Olá, me chamo <strong className='font-bold text-primary'>Othavio</strong> <br />
              <span className="flex items-center mt-2 justify-center md:justify-start">
                e sou&nbsp;
                <span className="inline-flex items-center justify-center h-12 md:h-14 min-w-[8rem] md:min-w-[9rem] px-6 bg-primary text-primary-foreground rounded-full text-2xl md:text-3xl font-medium">
                  <span>{text}</span>
                  <span className="animate-pulse">_</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <Image 
                src={profileImg} 
                alt="Foto de Othavio" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}