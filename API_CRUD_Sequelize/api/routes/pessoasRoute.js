const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// Métodos REQUEST:
router.get('/pessoas', PessoaController.pegaPessoasAtivas);

router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);

// Método CREATE:
router.post('/pessoas', PessoaController.criaPessoa);

// Método RESTORE:
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

// Método UPDATE:
router.put('/pessoas/:id', PessoaController.atualizaPessoa);

// Método DELETE:
router.delete('/pessoas/:id', PessoaController.apagaPessoa);

// Métodos de Matriculas:
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);

router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma);

router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas);

router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);

router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);

router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);

module.exports = router;