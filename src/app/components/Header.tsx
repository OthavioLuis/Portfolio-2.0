'use client'

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import logoLight from '../../../public/logo.svg';
import logoDark from '../../../public/logo-dark.svg';
import { useTheme } from 'next-themes';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contato', label: 'Contato' },
];

export default function Header({ activeSection }: HeaderProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    })

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    const currentLogo = theme === 'dark' ? logoDark : logoLight

    return (
        <>
            <header id="navbar" className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-sm border-b border-border">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex justify-between items-center h-16">
                        <Link href="#hero">
                            <Image
                                src={currentLogo}
                                alt='Logo escrito Othavio com crase em volta e o ultimo "O" com a cor vinho'
                                width={120}
                                className=" object-contain"
                                priority
                            />
                        </Link>
                        <div className="hidden md:flex items-center gap-4">
                            <nav className="flex space-x-8 text-muted-foreground">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`hover:text-primary transition-colors ${activeSection === link.label.toLowerCase() ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                            <ThemeToggle />
                        </div>

                        {/* Botão Hambúrguer para Mobile */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Abrir menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Painel do Menu Mobile */}
            <div
                className={`fixed inset-0 z-50 bg-background/90 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <X className="h-8 w-8" />
                        <span className="sr-only">Fechar menu</span>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-8">
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </>
    )
}