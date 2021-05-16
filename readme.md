## api-node-pruebas es un proyecto back-end para pruebas

## Levantar proyecto
```
cd /api-node-pruebas
npm install
npm start
```

## servicio proveedores

```
get
http://{host}:port/proveedores/consulta-proveedores

Response:
{
    "cve_Error": 0,
    "cve_Mensaje": "",
    "response": [
        {
            "id": "221e7c66-b979-4556-a11a-cf9fe93925cb",
            "nombre": "KYDSAPP",
            "razonSocial": "KYDSAPP",
            "direccion": "Direccion KYDSAPP"
        }
    ]
}
```

```
post
http://{host}:port/proveedores/agregar-proveedor

Request:

{
    "nombre": "KYDSAPP",
    "razonSocial": "KYDSAPP",
    "direccion": "Direccion KYDSAPP"
}

Response: 
{
    "cve_Error": 0,
    "cve_Mensaje": "",
    "response": {
        "id": "221e7c66-b979-4556-a11a-cf9fe93925cb",
        "nombre": "KYDSAPP",
        "razonSocial": "KYDSAPP",
        "direccion": "Direccion KYDSAPP"
    }
}

Response con error:
{
    "cve_Error": 1,
    "cve_Mensaje": "El provedor ya existe.",
    "response": null
}

```

```
delete
http://{host}:port/proveedores/eliminar-proveedor/6920bed7-76ca-4bb1-833f-90024a9d2623

Response:
{
    "cve_Error": 0,
    "cve_Mensaje": "Elemento eliminado con éxito",
    "response": null
}

No existe:
{
    "cve_Error": 1,
    "cve_Mensaje": "No existe el id",
    "response": null
}
```

## servicio usuario

```
get
http://{host}:port/usuario/consulta-usuario

Response:
{
    "cve_Error": 0,
    "cve_Mensaje": "Exito al consultar usuario",
    "response": {
        "nombre": "Bienvenido Candidato 01",
        "version": "1.0.0"
    }
}
```
