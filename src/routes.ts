import { Router } from 'express';
import { controladorCriarUsuario } from './casosDeUso/CriarUsuario';

const router = Router();

router.post('/usuarios', (requisicao, resposta) => {
    return controladorCriarUsuario.handle(requisicao, resposta);
});

export { router };