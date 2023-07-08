import { FC } from 'react';
import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from 'react-router-dom';

export const ErrorPage: FC = () => {
    // exibe corretamente o erro que ocorreu ao carregar a página
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.error?.message ?? error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Erro desconhecido';
    }

    const navigate = useNavigate();

    return (
        <main
            id="error-page"
            className="flex flex-col gap-4 justify-center items-center"
        >
            <h1 className="text-4xl text-center">Erro!</h1>
            <p className="text-center text-xl">
                Ocorreu um erro ao carregar a página:
            </p>
            <p className="text-warning mb-4">
                <code>{errorMessage}</code>
            </p>
            {/* permite retornar à página anterior */}
            <button
                onClick={() => navigate(-1)}
                className="btn btn-primary w-32"
            >
                Voltar
            </button>
        </main>
    );
};
