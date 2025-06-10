interface SectionProps {
  id: string;
}

export default function ContactSection({ id }: SectionProps) {
    return(
        <section id={id} className="py-20 md:py-32 bg-secondary scroll-reveal">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-secondary-foreground">Vamos Conversar!</h2>
                <p className="text-lg text-muted-foreground mt-4 mb-8">
                Estou sempre aberto a novas oportunidades, colaborações e desafios. Sinta-se à vontade para entrar em contato.
                </p>
                <a href="mailto:othaviorodriguesf@gmail.com" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
                Mande um E-mail
                </a>
                <div className="flex justify-center space-x-6 mt-10">
                <a href="https://github.com/OthavioLuis" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">GitHub</a>
                <a href="https://www.linkedin.com/in/othavio-luis-rodrigues-752732221" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">LinkedIn</a>
                <a href="https://dribbble.com/othavio_front" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">Dribbble</a>
                </div>
            </div>
        </section>
    )
}