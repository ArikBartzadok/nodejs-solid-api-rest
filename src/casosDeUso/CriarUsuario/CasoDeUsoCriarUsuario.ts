import { Usuario } from "../../entidades/Usuario";
import { IProvedorEmail } from "../../provedores/IProvedorEmail";
import { IRepositorioUsuario } from "../../repositorios/IRepositorioUsuario"
import { IDTORequisicaoCriarUsuario } from "./DTOCriarUsuario";

export class CasoDeUsoCriarUsuario {

    constructor (
        private repositorioUsuario: IRepositorioUsuario,
        private provedorEmail: IProvedorEmail,
    ) {}

    async executar(dados: IDTORequisicaoCriarUsuario) {
        const usuarioExistente = await this.repositorioUsuario.encontrarPorEmail(dados.email);

        if (usuarioExistente) {
            throw new Error('Usuário já cadastrado.');
        }

        const usuario = new Usuario(dados);

        await this.repositorioUsuario.inserir(usuario);

        await this.provedorEmail.enviarEmail({
            de: {
                nome: 'Equipe de integração',
                email: 'equipe.integracao@plataforma.com.br'
            },
            para: {
                nome: dados.nome,
                email: dados.email
            },
            assunto: 'Seja bem-vindo à plataforma.',
            conteudo: '<p>Voc~e já pode fazer login em nossa paltaforma.</p>'
        });
    }
}