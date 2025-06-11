'use client'

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo-portfolio.svg'
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { href: '#sobre', label: 'Sobre'},
    { href: '#projetos', label: 'Projetos'},
    { href: '#habilidades', label: 'Habilidades'},
    { href: '#contato', label: 'Contato'},
];

export default function Header({ activeSection}: HeaderProps) {
    return(
        <header id="navbar" className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex justify-between items-center h-16">
                <Link href="#hero" className="text-xl font-bold text-primary">
                    <Image
                        src={logo}
                        alt='Logo escrito Othavio com crase em volta e o ultimo "O" com a cor vinho'
                        width={120}  
                        className=" object-cover" 
                        priority
                    />
                </Link>
                <nav className="hidden md:flex space-x-8 text-muted-foreground">
                    {navLinks.map((link) => (
                    <a 
                        key={link.href} 
                        href={link.href} 
                        // A classe 'active' já está no seu globals.css, então isso vai funcionar perfeitamente
                        className={`hover:text-primary transition-colors ${activeSection === link.label.toLowerCase() ? 'active' : ''}`}
                    >
                        {link.label}
                    </a>
                    ))}
                </nav>
                <ThemeToggle />
                <div className="md:hidden">
                    {/* Botão para menu mobile pode ser implementado aqui */}
                </div>
                </div>
            </div>
        </header>
    )
}