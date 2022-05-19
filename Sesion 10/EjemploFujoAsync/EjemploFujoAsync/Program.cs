using EjemploFujoAsync;
using System.Diagnostics;

// Iniciamos un contador de tiempo - SÍNCRONA
Stopwatch stopwatch = new Stopwatch();
stopwatch.Start();

Console.WriteLine("\n**************************************************");
Console.WriteLine("\nBienvenido a la Calculadora de Hipotecas Síncrona");
Console.WriteLine("\n**************************************************");

var aniosVidaLaboral = CalculadoraHipotecaSync.ObtenerAniosVidaLaboral();
Console.WriteLine($"\nAños de Vida Laboral Obtenidos: {aniosVidaLaboral}");

var esTipoContratoIndefinido = CalculadoraHipotecaSync.EsTipoContratoIndefindo();
Console.WriteLine($"\nTipo de contrato indefinido: { esTipoContratoIndefinido }");

var sueldoNeto = CalculadoraHipotecaSync.ObtenerSueldoNeto();
Console.WriteLine($"\nSueldo neto obtenido: { sueldoNeto }€");

var gastosMensuales = CalculadoraHipotecaSync.ObtenerGastosMensuales();
Console.WriteLine($"\nGastos Mensuales obtenidos: { gastosMensuales }€");


var hipotecaConcedida = CalculadoraHipotecaSync.AnalizarInformacionParaConcederHipoteca(
    aniosVidaLaboral, esTipoContratoIndefinido, sueldoNeto, gastosMensuales, cantidadSolicitada: 50000, aniosPagar: 30);

var resultado = hipotecaConcedida ? "APROBADA" : "DENEGADA";

Console.WriteLine($"\nAnálisis Finalizado. Su solicitud de hipoteca ha sido: {resultado}");

stopwatch.Stop();

Console.WriteLine($"\nLa operación síncrona ha durado: {stopwatch.Elapsed}");

// REIniciamos un contador de tiempo - ASÍNCRONA
stopwatch.Restart();
Console.WriteLine("\n**************************************************");
Console.WriteLine("\nBienvenido a la Calculadora de Hipotecas Asíncrona");
Console.WriteLine("\n**************************************************");


Task<int> aniosVidaLaboralTask = CalculadoraHipotecaAsync.ObtenerAniosVidaLaboral();
Task<bool> esTipoContratoIndefinidoTask = CalculadoraHipotecaAsync.EsTipoContratoIndefindo();
Task<int> sueldoNetoTask = CalculadoraHipotecaAsync.ObtenerSueldoNeto();
Task<int> gastosMensualesTask = CalculadoraHipotecaAsync.ObtenerGastosMensuales();


var analisisHipotecaTasks = new List<Task>
{
    aniosVidaLaboralTask,
    esTipoContratoIndefinidoTask,
    sueldoNetoTask,
    gastosMensualesTask
};


while (analisisHipotecaTasks.Any())
{

    Task tareaFinalizada = await Task.WhenAny(analisisHipotecaTasks);

    if(tareaFinalizada == aniosVidaLaboralTask)
    {
        Console.WriteLine($"\nAños de Vida Laboral Obtenidos: {aniosVidaLaboralTask.Result}");
    }
    else if(tareaFinalizada == esTipoContratoIndefinidoTask)
    {
        Console.WriteLine($"\nTipo de contrato indefinido: { esTipoContratoIndefinidoTask.Result }");
    }
    else if (tareaFinalizada == sueldoNetoTask)
    {
        Console.WriteLine($"\nSueldo neto obtenido: { sueldoNetoTask.Result }€");
    }
    else if (tareaFinalizada == gastosMensualesTask)
    {
        Console.WriteLine($"\nGastos Mensuales obtenidos: { gastosMensualesTask.Result }€");
    }

    analisisHipotecaTasks.Remove(tareaFinalizada); // eliminamos de la lista de tareas para ir vaciando y salir del While

}


var hipotecaAsyncConcedida = CalculadoraHipotecaAsync.AnalizarInformacionParaConcederHipoteca(
    aniosVidaLaboralTask.Result, esTipoContratoIndefinidoTask.Result, sueldoNetoTask.Result, gastosMensualesTask.Result, cantidadSolicitada: 50000, aniosPagar: 30);

var resultadoAsync = hipotecaAsyncConcedida ? "APROBADA" : "DENEGADA";

Console.WriteLine($"\nAnálisis Finalizado. Su solicitud de hipoteca ha sido: {resultadoAsync}");

stopwatch.Stop();

Console.WriteLine($"\nLa operación asíncrona ha durado: {stopwatch.Elapsed}");

Console.Read();