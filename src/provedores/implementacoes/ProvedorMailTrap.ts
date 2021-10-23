import { env } from 'process';
import { IMensagem, IProvedorEmail } from "../IProvedorEmail";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class ProvedorMailTrap implements IProvedorEmail {
    private transportador: Mail;

    constructor () {
        this.transportador = nodemailer.createTransport({
            host: env.EMAIL_SERVIDOR,
            port: env.EMAIL_PORTA,
            auth: {
                user: env.EMAIL_USUARIO,
                pass: env.EMAIL_SENHA
            }
        })
    }

    async enviarEmail(mensagem: IMensagem): Promise<void> {
        await this.transportador.sendMail({
            to: {
                name: mensagem.para.nome,
                email: mensagem.para.email
            },
            from: {
                name: mensagem.de.nome,
                email: mensagem.de.email
            },
            subject: mensagem.assunto,
            html: mensagem.conteudo
        });
    }
}