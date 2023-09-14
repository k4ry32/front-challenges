import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const links = [
        {
            name: 'Results summary component',
            href: '/challenges/summary-component'
        }
    ];

    return (
        <div className="flex min-h-screen flex-col items-center justify-between lg:p-20 p-5">
            <div className="flex z-10 lg:max-w-5xl w-full items-center justify-between font-semibold text-lg lg:flex mb-4">
                <p className="text-2xl"> Frontend Challenges </p>
                <p> 2023 </p>
            </div>

            <div className="container lg:max-w-4xl flex lg:flex-row flex-col items-center justify-around bg-slate-900/50 rounded-md py-5 lg:py-0">
                <Image
                    src="https://i.pinimg.com/originals/ca/75/3f/ca753f2cd3e13792e5a409d71557d41c.jpg"
                    width={250}
                    height={200}
                    alt="baby-yoda"
                    className="rounded-lg"
                />
                <div className="max-w-lg px-4 pt-4 lg:p-4 leading-relaxed">
                    <h1 className="text-xl mb-3"> Hola amigos! </h1>
                    <p className="mb-3">
                        Me llamo Karina Rodriguez y soy una desarrolladora
                        autodidacta y apasionada por la programación que me ha
                        llevado a recorrer este camino de formación, aunque no
                        siempre fácil, pero siempre divertido y lleno de
                        experiencias.
                    </p>
                    <p className="mb-3">
                        Tengo experiencia en el desarrollo de software
                        utilizando tecnologías como Next.js, React, Tailwind,
                        Express.js, PostgreSQL y MongoDB.
                    </p>
                    <p className="mb-2">
                        Mi enfoque se centra en la creación de sistemas
                        completos, con bases de arquitecturas REST/RESTful
                        eficientes y modernas. Además, estoy familiarizada con
                        herramientas de gestión de proyectos como Jira y
                        metodologías ágiles, con Docker para facilitar la
                        implementación de bases de datos y Git/Github para el
                        control de versiones.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <p className="text-xl font-bold mt-4 mb-3">Challenges</p>
                <div className="grid text-center lg:max-w-5xl lg:w-full mt-4 lg:m-0 lg:grid-cols-4 lg:text-left">                
                    {links.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <div className="p-4 bg-[#303b5a7e] rounded-xl hover:bg-[#303b5ab0]">
                                <p className="text-lg font-bold">{link.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
