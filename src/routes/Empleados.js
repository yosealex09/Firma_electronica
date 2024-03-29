/**
 * Este módulo proporciona rutas para la gestión de empleados.
 * Utiliza el framework Express.js para manejar las solicitudes HTTP.
 * También utiliza el módulo underscore para simplificar algunas operaciones.
 * Se espera que la lista de empleados esté en formato JSON y se cargue desde un archivo.
 * Las rutas disponibles incluyen GET para obtener todos los empleados,
 * POST para agregar un nuevo empleado, PUT para actualizar un empleado existente
 * y DELETE para eliminar un empleado por su ID.
 */
const { Router } = require('express');
const router = Router();
const _ = require('underscore');


// Se carga la lista de empleados desde un archivo JSON
const Empleados = require('../Sample.json');
 
// Ruta para obtener todos los empleados
router.get('/', (req, res) => {
    res.json(Empleados); 
});

// Ruta para agregar un nuevo empleado
router.post('/', (req, res) => {
    const { nombre, apellido, nacionalidad, rut } = req.body;
    if (nombre && apellido && nacionalidad && rut) {
        const id = Empleados.length + 1;
        const NewEmpleado = { id, ...req.body };
        Empleados.push(NewEmpleado);
        res.json(Empleados); 
    } else {
        res.status(500).json({ error: 'wrong request' });
    }
});
// Ruta para actualizar un empleado existente por su ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, nacionalidad, rut } = req.body;
    if (nombre && apellido && nacionalidad && rut) {
        _.each(Empleados, (empleado, i) => {
            if (empleado.id == id) {
                empleado.nombre = nombre;
                empleado.apellido = apellido;
                empleado.nacionalidad = nacionalidad;
                empleado.rut = rut;
            }
        });
        res.json(Empleados); 
    } else {
        res.status(500).json({ error: 'error' }); // Corregido el objeto JSON de respuesta
    }
});

// Ruta para eliminar un empleado por su ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(Empleados, (empleado, i) => {
        if (empleado.id == id) {
            Empleados.splice(i, 1);
        }
    });
    res.send(Empleados);

    
// Ruta para subir un archivo
    router.post('/upload', upload.single('upload'), function (req, res, next) {
        
        res.send('Archivo subido correctamente');
    });

});



module.exports = router;

