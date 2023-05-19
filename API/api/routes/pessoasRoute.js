const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// Métodos REQUEST:
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);

// Método CREATE:
router.post('/pessoas', PessoaController.criaPessoa);

// Método UPDATE:
router.put('/pessoas/:id', PessoaController.atualizaPessoa);

// Método DELETE:
router.delete('/pessoas/:id', PessoaController.apagaPessoa);

module.exports = router;