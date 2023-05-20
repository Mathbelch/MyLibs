const { Router } = require('express');
const NivelController = require('../controllers/NivelController');
 
const router = Router();

// Métodos REQUEST:
router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);

// Método CREATE:
router.post('/niveis', NivelController.criaNivel);

// Método UPDATE:
router.put('/niveis/:id', NivelController.atualizaNivel);

// Método DELETE:
router.delete('/niveis/:id', NivelController.apagaNivel);

module.exports = router;