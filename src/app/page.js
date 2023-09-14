import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-semibold text-lg lg:flex">
                <p className="text-2xl"> Frontend Challenges </p>
                <p> 2023 </p>
            </div>

            <div className="container max-w-4xl flex flex-row items-center justify-around bg-slate-900/50">
                <Image
                    src="https://i.pinimg.com/originals/ca/75/3f/ca753f2cd3e13792e5a409d71557d41c.jpg"
                    width={250}
                    height={200}
                    alt="baby-yoda"
                    className="rounded-lg"
                />
                <div className="max-w-lg p-4 leading-relaxed">
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

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <p> Footer </p>
            </div>
        </div>
    );
}
