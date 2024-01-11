function mostrarResultados() {
    var rut=document.getElementById("rut").value;
    var nom=document.getElementById("nom").value;
    var apep=document.getElementById("apep").value;
    var apem=document.getElementById("apem").value;
    var edad=document.getElementById("edad").value;
    var genero=document.getElementById("genero").value;
    var motivacion=document.getElementById("motivacion").value;
    
    var cadena = "Rut: "+rut+"\n"+
    "Nombre: "+nom+"\n"+
    "Apellido Paterno: "+apep+"\n"+
    "Apellido Materno: "+apem+"\n"+
    "Edad: "+edad+"\n"+
    "Genero: "+genero+"\n"+
    "Motivo: "+motivacion+"\n";
    document.getElementById("carta").value=cadena
}