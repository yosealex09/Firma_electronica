/**
 * Este módulo define una ruta para manejar la subida de archivos utilizando el paquete 'multer'.
 * Utiliza el paquete 'express' para crear un enrutador y define una ruta POST en la raíz (/) para manejar las solicitudes de subida de archivos.
 * Configura el almacenamiento de archivos utilizando el método 'diskStorage' de 'multer', especificando el directorio de destino y el nombre del archivo.
 * Utiliza el middleware 'upload.single()' de 'multer' para procesar la solicitud y subir un solo archivo con el campo de entrada denominado 'file'.
 */

const express = require('express'); // Importa el paquete express
const router = express.Router(); // Crea un enrutador de express

const multer = require('multer'); // Importa el paquete multer para gestionar la carga de archivos

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Directorio donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre del archivo: fecha actual + nombre original del archivo
    }
});

const upload = multer({ storage: storage }); // Configura multer con la opción de almacenamiento definida

// Ruta POST para manejar la subida de archivos
router.post('/', upload.single('file'), (req, res) => {
    res.send('Archivo subido correctamente'); // Envía una respuesta al cliente indicando que el archivo se ha subido correctamente
});

module.exports = router; // Exporta el enrutador para su uso en otros módulos