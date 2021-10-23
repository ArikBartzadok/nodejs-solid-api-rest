import { Request, Response } from 'express';
import { CasoDeUsoCriarUsuario } from './CasoDeUsoCriarUsuario';

export class ControladorCriarUsuario {
    constructor (
        private casoDeUsoCriarUsario: CasoDeUsoCriarUsuario
    ) {}

    async handle(requisicao: Request, resposta: Response): Promise<Response> {
        const { nome, email, senha } = requisicao.body;

        try {
            await this.casoDeUsoCriarUsario.executar({
                nome,
                email,
                senha
            });

            return resposta.status(201).send();
        } catch (err: any) {
            const { message: mensagem } = err;
            return resposta.status(400).json({
                mensagem: mensagem ?? 'Erro inesperado'
            });
        }
    }
}