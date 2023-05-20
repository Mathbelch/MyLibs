const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');
 
const router = Router();

// Métodos REQUEST:
router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaUmaTurma);

// Método CREATE:
router.post('/turmas', TurmaController.criaTurma);

// Método UPDATE:
router.put('/turmas/:id', TurmaController.atualizaTurma);

// Método DELETE:
router.delete('/turmas/:id', TurmaController.apagaTurma);

module.exports = router;