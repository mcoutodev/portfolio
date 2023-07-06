import { FC } from 'react';

export const Code: FC = () => {
    return (
        <div className="mockup-code mt-4">
            <pre data-prefix="$">
                <code>cat marlon_couto_dev.txt</code>
            </pre>
            
            <pre
                data-prefix=">"
                className="text-success"
            >
                <code>Nome: Marlon Couto</code>
            </pre>

            <pre
                data-prefix=">"
                className="text-success"
            >
                <code>Nascimento: 17/01/1991</code>
            </pre>

            <pre
                data-prefix=">"
                className="text-success"
            >
                <code>Nacionalidade: Brasileiro</code>
            </pre>

            <pre
                data-prefix=">"
                className="text-success"
            >
                <code>Profissão: Desenvolvedor web</code>
            </pre>

            <pre data-prefix=">">
                <code>END</code>
            </pre>
        </div>
    );
};
