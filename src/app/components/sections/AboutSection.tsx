interface SectionProps {
    id: string;
}
export default function AboutSection({ id }: SectionProps) {
    return (
        <section id={id} className="py-20 md:py-32 scroll-reveal">
            <div className="container mx-auto px-4 max-w-3xl text-center ">
                <h2 className="font-bold text-4xl font-blod mb-6 text-foreground">Sobre mim</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Me chamo Othavio Luis, sou um desenvolvedor front-end de 20 anos apaixonado por construir interfaces intuitivas. Com uma base sólida adquirida no curso técnico de Desenvolvimento de Sistemas e prestes a concluir a graduação em Análise e Desenvolvimento de Sistemas, busco constantemente aprimorar minhas habilidades. Atualmente, estou me especializando em Design UX e Cibersegurança através de uma bolsa de estudos que ganhei do Google, o que me permite criar soluções que não apenas são visualmente atraentes, mas também centradas no usuário e protegidas contra ameaças digitais. Meu objetivo é unir a criatividade do design com a robustez da segurança para entregar produtos digitais de excelência.</p>
            </div>
        </section>
    )
}