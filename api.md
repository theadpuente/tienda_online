- GET /api/products
  - Recupera todos los productos



- POST /api/products
  - Crea un producto


- PUT /api/products/PRODUCTID
  - Edita un producto

  
- DELETE /api/products/PRODUCTID
  - Borra un producto


##Acciones basicas para interacturar con los modelos.


## GET /api/users 

- Para recuperar todos los usuarios
- Esto devuleve un array con todos los usuarios. 

PRUEBAS GET (Las pruebas que necesito lanzar):

  - Que la URL funcione para mi.  -> Devulve el status 200. Es decir devuelve el status correcto. 
  - La respuesta esta en formato JSON. 
  - La respuesta debe ser un array de usuarios.
  


## POST /api/users

- Crea un nuevo usuario en la BD.
- Los datos los recibi os at raves del body.
- La respuesta será el usuario creado.

PRUEBA POST (Las pruebas que necesito lanzar): 

  - Que la url funcione -> status es 200 y el content-type es application/json
  - Comprobar que el usuario se ha insertado -> Si en la respuesta tenemos _id.
  - Comprobar que los datos insertados son los correctos. 


## PUT api/user/USERID

  - Editar los datos de un usario.
  - Recibe el Id del usuario a modificar
  - Recibe a através del body los datos que vamos a modificar.
  - La respuesta sera el usuario modificado.



PRUBA PUT (Las pruebas que hay que lanzar)

  - Que la url funcione -> status es 200 y el content-type es application/json
  - Comprobar si los datos que enviamos son los nuevos datos del usuario.


## DELETE /api/user/USERID

  - Borrar un usuario a partir de su ID.
  - Recibe el id del usuario a través de la URL.
  - Como respuesta devolvemos el usuario borrado.

PRUEBAS DELETE

   - Que la URL funcione.
   - Buscamos al usuario dentro de la base de datos, si no esta es que la prueba ha pasado.



## GET /api/use