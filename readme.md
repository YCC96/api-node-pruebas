## api-node-pruebas es un proyecto back-end para pruebas

## Probar proyecto on-line
```
https://api-node-pruebas.herokuapp.com/
```

## Levantar proyecto local
```
cd /api-node-pruebas
npm install
npm start
```

## Servicio proveedores

```
GET
http://{host}:port/proveedores/consulta-proveedores

RESPONSE
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
POST
http://{host}:port/proveedores/agregar-proveedor

REQUEST
{
    "nombre": "KYDSAPP",
    "razonSocial": "KYDSAPP",
    "direccion": "Direccion KYDSAPP"
}

RESPONSE
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

RESPONSE CON ERROR
{
    "cve_Error": 1,
    "cve_Mensaje": "El provedor ya existe.",
    "response": null
}

```

```
DELETE
http://{host}:port/proveedores/eliminar-proveedor/6920bed7-76ca-4bb1-833f-90024a9d2623

RESPONSE
{
    "cve_Error": 0,
    "cve_Mensaje": "Elemento eliminado con éxito",
    "response": null
}

RESPONSE ERROR
{
    "cve_Error": 1,
    "cve_Mensaje": "No existe el id",
    "response": null
}
```

## Servicio usuario

```
GET
http://{host}:port/usuario/consulta-usuario

RESPONSE
{
    "cve_Error": 0,
    "cve_Mensaje": "Exito al consultar usuario",
    "response": {
        "nombre": "Bienvenido Candidato 01",
        "version": "1.0.0"
    }
}
```
