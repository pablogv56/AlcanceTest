<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "api"; $contrasenia = "api2022+*"; $nombreBaseDatos = "api";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consult"])){
    $sqlPetitions = mysqli_query($conexionBD,"SELECT * FROM petition WHERE id=".$_GET["consult"]);
    if(mysqli_num_rows($sqlPetitions) > 0){
        $petitions = mysqli_fetch_all($sqlPetitions,MYSQLI_ASSOC);
        echo json_encode($petitions);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["delete"])){
    $sqlPetitions = mysqli_query($conexionBD,"DELETE FROM petition WHERE id=".$_GET["delete"]);
    if($sqlPetitions){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post
if(isset($_GET["insert"])){
    $data = json_decode(file_get_contents("php://input"));
    $fecha=$data->fecha;
    $metodoConsultado=$data->metodoConsultado;
    $datos=$data->datos;
        if(($fecha!="")&&($metodoConsultado!="")&&($datos!="")){
            
    $sqlPetitions = mysqli_query($conexionBD,"INSERT INTO petition(fecha,metodoConsultado,datos) VALUES('$fecha','$metodoConsultado','$datos') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos
if(isset($_GET["patch"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["patch"];
    $fecha=$data->fecha;
    $metodoConsultado=$data->metodoConsultado;
    
    $sqlPetitions = mysqli_query($conexionBD,"UPDATE petition SET fecha='$fecha',metodoConsultado='$metodoConsultado' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla peticiones
$sqlPetitions = mysqli_query($conexionBD,"SELECT * FROM petition");
if(mysqli_num_rows($sqlPetitions) > 0){
    $petitions = mysqli_fetch_all($sqlPetitions,MYSQLI_ASSOC);
    echo json_encode($petitions);
}
else{ echo json_encode([["success"=>0]]); }


?>