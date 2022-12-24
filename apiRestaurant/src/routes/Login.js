const { Router } = require('express');

const clienteController = require('../Controllers/cliente/clienteController');
const validation = require('../middlewares/validations');
const router = Router();

router.post('', validation.verificaEmail, clienteController.login);
router.get('', clienteController.getAll);

module.exports = router;
