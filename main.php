
<?php
class alumno
{
    public $nombre;
    public $apellidos;
    public $edad;
    public $nota;

    function __construct($nombre, $apellidos, $edad, $nota)
    {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->edad = $edad;
        $this->nota = $nota;
    }

    function get_nombre()
    {
        return $this->nombre;
    }

    function get_apellidos()
    {
        return $this->apellidos;
    }

    function get_edad()
    {
        return $this->edad;
    }

    function get_nota()
    {
        return $this->nota;
    }
}
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$edad = $_POST["edad"];
$nota = $_POST["nota"];

$enrique = new alumno($nombre, $apellidos, $edad, $nota);
$alumnos = [];

array_push($alumnos, $enrique);
foreach($alumnos as $alumno){
    echo $alumno->get_nombre();
    echo $alumno->get_apellidos();
    echo $alumno->get_edad();
    echo $alumno->get_nota();
}


?>

