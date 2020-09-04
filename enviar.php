<?php

function validar_campo($campo)
{
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;
}
header('Content-Type: application/json');


if( isset($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['email']) && !empty($_POST['message']) ){

    $destino = "straticonahuel@gmail.com";
    $name = validar_campo($_POST["name"]);
    $phone = validar_campo($_POST["phone"]);
    $email = validar_campo($_POST["email"]);
    $msg = validar_campo($_POST["message"]);

    $contenido = "Nombre: " .$name;
    $contenido = "\n phone: " .$phone;
    $contenido .= "\n Correo: " . $email;
    $contenido .= "\n Mensaje: " . $msg;

    mail($destino,"Alguien se contacto desde tu pagina web, La persona es: " . $name, $contenido);

    return print(json_encode('ok'));
}

return print(json_encode('no se envio'));



?>