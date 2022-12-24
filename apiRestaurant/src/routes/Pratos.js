const { Router } = require('express');

const pratosController = require('../Controllers/Prato/PratoController');

const router = Router();

router.post('/', pratosController.create);
router.get('/', pratosController.getAll);
router.get('/:id', pratosController.getByIdPrato);
router.put('/:id', pratosController.update)
router.delete('/:id', pratosController.destroy);
module.exports = router;
