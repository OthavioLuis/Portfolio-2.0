import Image from "next/image";

interface SectionProps {
  id: string;
}

const projects = [
    {
        title: 'Projeto 1',
        description: 'Descrição que vou por já já',
        imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Projeto+1',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Projeto 2',
        description: 'Descrição que vou por já já',
        imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Projeto+2',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Projeto 3',
        description: 'Descrição que vou por já já',
        imageUrl: 'https://placehold.co/600x400/E0E7FF/4338CA?text=Projeto+3',
        demoUrl: '#',
        codeUrl: '#'
    },
];

export default function ProjectsSection({ id }: SectionProps) {
    return(
        <section id={id} className="py-20 md:py-32 bg-secondary scroll-reveal">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-secondary-foreground">Projetos</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">preguiça de escrever, já volto aqui</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-border">
                            <Image src={project.imageUrl} alt={`Preview do ${project.title}`} width={600} height={400} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a href={project.demoUrl} className="text-primary font-semibold hover:underline">Ver Demo</a>
                                    <a href={project.codeUrl} className="text-primary font-semibold hover:underline">Código</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}