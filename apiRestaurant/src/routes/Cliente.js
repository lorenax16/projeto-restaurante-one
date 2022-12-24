const { Router } = require('express');

const clienteController = require('../Controllers/cliente/clienteController');
const router = Router();

router.post('', clienteController.create);
router.get('/:id', clienteController.getByIdCliente);


module.exports = router;
