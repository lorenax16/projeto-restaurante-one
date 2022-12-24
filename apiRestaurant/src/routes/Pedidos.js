const { Router } = require('express');

const pedidosController = require('../Controllers/Pedidos/PedidosController');

const router = Router();

router.post('', pedidosController.createPedido);
router.get('', pedidosController.getAll);
router.get('/:id', pedidosController.getByIdPedidos);
router.patch('/:id', pedidosController.atualizarStatus);

module.exports = router;
