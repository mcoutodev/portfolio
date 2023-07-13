import { FC } from 'react';

export const Description: FC = () => {
    return (
        <div className="text-justify px-4 my-12 flex flex-col gap-3 md:text-lg">
            <p>
                Olá, meu nome é Marlon Couto, tenho 32 anos, sou brasileiro e
                moro em Salvador. Estou cursando Análise e Desenvolvimento de
                Sistemas na Estácio e atualmente trabalho como Summer de
                Instrução Back-end na{' '}
                <a
                    href="https://www.betrybe.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-success hover:underline"
                >
                    Trybe
                </a>
                .
            </p>

            <p>
                Sou apaixonado por tecnologia e por aprender coisas novas. Meu
                objetivo é me tornar um desenvolvedor Full Stack e poder
                contribuir para o desenvolvimento de soluções que possam
                melhorar a vida das pessoas.
            </p>

            <p>
                Tenho sólida experiência em TypeScript, React, Next e Node, além
                de habilidades versáteis que me permitem projetar e desenvolver
                sites, aplicativos e sistemas robustos e intuitivos.
            </p>

            <p>
                Ao desenvolver projetos, considero a importância do SEO (Search
                Engine Optimization) para melhorar a visibilidade online.
                Utilizo estratégias de otimização adequadas, como a pesquisa de
                palavras-chave relevantes, a estruturação correta das páginas e
                a criação de conteúdo otimizado, a fim de maximizar a
                visibilidade e o alcance nas ferramentas de busca.
            </p>

            <p>
                Estou sempre em busca de aprimoramento contínuo, acompanhando as
                últimas tendências e tecnologias emergentes no campo do
                desenvolvimento de software. Minha paixão pela programação me
                impulsiona a aprender constantemente e aprimorar minhas
                habilidades, garantindo que eu possa oferecer soluções
                atualizadas e eficazes.
            </p>

            <p>
                Se você está em busca de um desenvolvedor que combine
                conhecimentos técnicos sólidos, experiência prática e um foco na
                qualidade, estou aqui para ajudar. Vamos trabalhar juntos para
                criar projetos incríveis!
            </p>
        </div>
    );
};
