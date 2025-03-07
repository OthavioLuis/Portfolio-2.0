export default function ContactSection() {
    return(
        <section id="contact" className="py-20 bg-blue-500 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Contato</h2>
                <form className="max-w-lg mx-auto">
                    
                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="name">Nome</label>
                        <input type="text" id="name" className="w-full p-2 rounded text-black" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full p-2 rounded text-black" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="message">Mensagem</label>
                        <textarea id="message" className="w-full p-2 rounded text-black" rows="4"></textarea>
                    </div>

                    <button type="submit" className="bg-white text-blue-500 px-6 py-2 rounded-lg font-bold">Enviar</button>

                </form>
            </div>
        </section>
    )
}