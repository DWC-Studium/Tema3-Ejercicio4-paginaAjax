<h1>Página AJAX</h1>

<p>Dada la siguiente web escrita en HTML, escribir un script que permita ir cargando el contenido de cada sección cuando se pulse el botón correspondiente usando la tecnología AJAX.</p>

<code>
        <!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>AJAX</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
            <script src="script.js"></script>
        </head>
        
        <body>
            <button id="botonCiclos">Ciclos</button>
            <button id="botonSalidas">Salidas</button>
            <button id="botonOtros">Otros servicios</button>
        
            <section>
                <h3>Ciclos formativos</h3>
                <h4>GrupoStudium Formación</h4>
                <p>Contamos con una experiencia de 15 años impartiendo las titulaciones de Técnico Superior en Informática.
                    Durante todo este tiempo hemos ido perfeccionando la metodología formativa y actualizando las herramientas
                    didácticas utilizadas.</p>
                <p>Nuestros ciclos formativos están homologados por la Consejería de Educación con los códigos Nº41000934 y
                    Nº41702345, por lo que obtendrás a la finalización de tus estudios un título totalmente oficial. La
                    titulación oficial de “Tecnico Superior” expedida por la consejería de Educacion y Ciencia de la Junta de
                    Andalucia a la finalización de un Ciclo Superior tiene efectos académicos y profesionales en España y en la
                    Unión Europea, lo que permite solicitar becas y ayudas al estudio (GrupoStudium te informa y colabora en la
                    gestión), acceder a convocatorias de empleo público y continuar estudios universitarios con acceso directo.
                </p>
                <h4>Plazas limitadas</h4>
                <p>Cada año contamos con un número de Plazas limitadas por curso, en estos momentos está abierto el plazo de
                    matrícula y al ser un centro privado las plazas se van cubriendo por orden de llegada. Los requisitos de
                    acceso a la titulación son: COU, F.P.II, Bachillerato, Tener aprobada la prueba de acceso a la universidad
                    para mayores de 25 años o tener un grado medio.
                </p>
            </section>
        
            <section>
                <h3>Salidas profesionales</h3>
                <p>ASIR</p>
                <ul>
                    <li>Técnico de redes y administración de sistemas.</li>
                    <li>Técnico en servicios de comunicación.</li>
                    <li>Administrador de bases de datos.</li>
                </ul>
                <p>DAM</p>
                <ul>
                    <li>Desarrollar aplicaciones informáticas para la gestión empresarial y de negocio.</li>
                    <li>Desarrollar aplicaciones de propósito general.</li>
                    <li>Desarrollar aplicaciones en el ámbito del entretenimiento y la informática móvil.</li>
                </ul>
                <p>DAW</p>
                <ul>
                    <li>Programador Web.</li>
                    <li>Programador Multimedia.</li>
                    <li>Desarrollador de aplicaciones en entornos Web.</li>
                </ul>
            </section>
        
            <section>
                <h3>Otros servicios</h3>
                <p><strong>Alquiler de Aulas</strong></p>
                <p>Elija el aula que mejor se adapte a sus necesidades en cualquiera de nuestros dos centros</p>
                <p><strong>Alumnos en Prácticas</strong></p>
                <p>Solicítenos alumnos de informática para realizar prácticas en su empresa</p>
                <p><strong>Organización de eventos socioeducativos</strong></p>
                <p>Campañas en centros educativos, Escuelas de verano, Exposiciones, Certámenes, Clausuras …</p>
            </section>
        
        </body>
        
        </html>
</code>