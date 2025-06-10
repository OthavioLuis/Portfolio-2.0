interface SectionProps {
    id: string;
}
const skillCategories = [
    {
        title: 'Frontend',
        skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Next.js', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Databases (SQL/NoSQL)', 'REST APIs']
    },
    {
        title: 'Design',
        skills: ['Figma', 'UI/UX Principles', 'Design Responsivo', 'Prototipagem']
    }
]

export default function SkillsSection({ id }: SectionProps) {
    return(
        <section id={id} className="py-20 md:py-32 scroll-reveal">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground">Habilidades</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Minhas linguagens</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="p-6">
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