import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return(
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <Link href='/' className='flex items-center'>
                    <Image
                        src='https://raw.githubusercontent.com/unibaixada/img-port/051532f683f70f1c35ca528667fb02177924b172/logo-port.svg'
                        alt='Logo com meu nome Othavio' 
                        width={150}
                        height={50}
                        className='object-contain'
                    />
                </Link>

                <nav>
                    <ul className='flex space-x-8'>
                        <li>
                            <Link href='/' className='text-lg font-medium hover:text-vinho transition-colors'
                            >Inicio</Link>
                        </li>
                        <li>
                            <Link href='#about' className='text-lg font-medium hover:text-vinho transition-colors'>Sobre</Link>
                        </li>
                        <li>
                            <Link href='#projects' className='text-lg font-medium hover:text-vinho transition-colors'>Projetos</Link>
                        </li>
                        <li>
                            <Link href='#skills' className='text-lg font-medium hover:text-vinho transition-colors'>Habilidades</Link>
                        </li>
                        <li>
                            <Link href='#contact' className='text-lg font-medium hover:text-vinho transition-colors'>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}