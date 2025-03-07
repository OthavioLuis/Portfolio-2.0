export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Habilidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">React</h3>
                        <p className="text-lg">Descrição da habilidade.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}