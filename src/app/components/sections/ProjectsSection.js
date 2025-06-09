export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Projeto 1</h3>
                        <p className="text-lg">Descrição do projeto 1.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}