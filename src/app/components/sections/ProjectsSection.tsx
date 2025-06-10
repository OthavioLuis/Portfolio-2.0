import Image from "next/image";

interface SectionProps {
  id: string;
}

const projects = [
    {
        title: 'Editor de Texto',
        description: 'Editor JS com toolbar de formatação (execCommand) para exercitar manipulação de documentos e estilos.',
        imageUrl: 'https://raw.githubusercontent.com/unibaixada/img-port/refs/heads/main/capa-editor-texto.png',
        demoUrl: 'https://editor-theta-jet.vercel.app',
        codeUrl: 'https://github.com/OthavioLuis/Text-Editor'
    },
    {
        title: 'Armazenamento Volátil Web',
        description: 'Demonstração interativa de como simular um banco de dados leve no front-end com CRUD e LocalStorage.',
        imageUrl: 'https://raw.githubusercontent.com/unibaixada/img-port/refs/heads/main/tal.png',
        demoUrl: 'https://localstorage-gray.vercel.app',
        codeUrl: 'https://github.com/OthavioLuis/localStorage-Registration'
    },
    {
        title: 'Sistema de indicação',
        description: 'O projeto é um site responsivo de inscrição e indicação para eventos com TypeScript+Next. Evento NLW Connect',
        imageUrl: 'https://raw.githubusercontent.com/unibaixada/img-port/refs/heads/main/indicacao.png',
        demoUrl: 'https://nlwconnect-teal.vercel.app',
        codeUrl: 'https://github.com/OthavioLuis/NLW-Connect'
    },
];

export default function ProjectsSection({ id }: SectionProps) {
    return(
        <section id={id} className="py-20 md:py-32 bg-secondary scroll-reveal">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-secondary-foreground">Projetos</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Fique a vontade para explorar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-border">
                            <Image src={project.imageUrl} alt={`Preview do ${project.title}`} width={600} height={400} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a href={project.demoUrl} target="_blank" className="text-primary font-semibold hover:underline">Ver Demo</a>
                                    <a href={project.codeUrl} target="_blank" className="text-primary font-semibold hover:underline">Código</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}