interface SectionProps {
    id: string;
}
export default function AboutSection({ id }: SectionProps) {
    return (
        <section id={id} className="py-20 md:py-32 scroll-reveal">
            <div className="container mx-auto px-4 max-w-3xl text-center ">
                <h2 className="font-bold text-4xl font-blod mb-6 text-foreground">Sobre mim</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Me chamo Othavio Luis, sou formado em Análise e Desenvolvimento de Sistemas pela UniFatecie e atuo no mercado unindo desenvolvimento de software, análise de dados e design de interfaces (UX).
                Trago em minha trajetória uma forte bagagem como Analista de Dados e Qualidade no Hospital Regional Jorge Rossman (HRJR/ISG), onde fui responsável por estruturar indicadores de saúde, desenvolver dashboards (Excel/Power Query) e criar ferramentas internas que otimizaram a gestão hospitalar.
                Hoje, minha atuação principal é como cofundador e Desenvolvedor Full-Stack na g0tab, agência de tecnologia onde projeto e entrego soluções sob medida, como sistemas SaaS, plataformas de e-commerce e aplicações web completas para clientes reais.
                Minha stack técnica transita entre o front-end (React, TypeScript, Tailwind) e o back-end (Node.js, PHP, Python, SQL). Somado a isso, possuo o Certificado Profissional de Cibersegurança do Google, o que me permite garantir que as soluções que construo sejam não apenas visualmente atraentes e centradas no usuário, mas também robustas e protegidas contra ameaças digitais.</p>
            </div>
        </section>
    )
}