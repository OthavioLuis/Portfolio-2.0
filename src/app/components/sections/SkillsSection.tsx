interface SectionProps {
    id: string;
}

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'PHP', 'Python (Bots/Automação)', 'REST APIs']
    },
    {
        title: 'Banco de Dados',
        skills: ['MySQL', 'Consultas SQL', 'Modelagem Relacional', 'Estruturação de Dados']
    },
    {
        title: 'Dados & Análise',
        skills: ['Power Query', 'Excel Avançado', 'Dashboards Estratégicos', 'Indicadores de Saúde']
    },
    {
        title: 'Segurança & Infra',
        skills: ['Cibersegurança (Google Cert)', 'Linux / Redes', 'Git & Versionamento', 'Pipelines (YAML)']
    },
    {
        title: 'Design & UX',
        skills: ['Figma', 'Princípios de UX', 'Design Responsivo', 'Prototipagem']
    }
]

export default function SkillsSection({ id }: SectionProps) {
    return(
        <section id={id} className="py-20 md:py-32 scroll-reveal">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground">Habilidades</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Tecnologias, ferramentas e minhas especialidades</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-center text-primary">{category.title}</h3>
                            <ul className="text-center space-y-2 text-muted-foreground text-lg">
                                {category.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}