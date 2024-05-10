//lista film disponibili

import React from 'react';

const films = [
    {categoria:'Drammatico', rating:'5', title_film:'The Godfather', imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', description:'Anni Quaranta. Come è consuetudine, durante il rinfresco per festeggiare le nozze della figlia Conny con Carlo, il \"padrino\" don Vito Corleone promette assistenza e protezione a familiari e amici. Invia il figliastro Tom Hagen in California per convincere in ogni modo il produttore Jack Woltz a scritturare il cantante Johnny nel suo prossimo film'},
  
    {categoria:'Avventura', rating:'3', title_film:'Top Gun: Maverick',imageUrl:'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', description:'Dopo più di trent’anni di servizio nella Marina, il Tenente Pete “Maverick” Mitchell (Tom Cruise) è proprio dove vorrebbe essere: un pilota coraggioso che può spingersi oltre ogni limite, cercando di schivare l’avanzamento di carriera che metterebbe un freno alla sua libertà'},
  
    {categoria:'Futuristico',rating:'2', title_film:'The Flash (film 2023)', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDFhZTc3NWQtY2UyZS00OGYzLTgxNTUtYjYxMjZjMmEyMjcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', description:'The Flash travels back in time to prevent the murder of his mother, an act which disrupts time significantly' }
  ];

const MovieList = () => {
return (
<div>
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Complete movie list
        </h1>
    </div>
    <ul>
        {/* iterazione */}
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                {films.map((film, index) => (
                    <li>
                    <>
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{film.title_film}</h1>
                                <img
                                className="avatar"
                                src={film.imageUrl}
                                alt={'Photo of ' + film.title_film}
                                style={{
                                    width: film.imageSize,
                                    height: film.imageSize
                                }}
                                />
                                <h2 >Categoria genere di film {film.categoria}</h2>
                                <h2>Rating {film.rating}</h2>
                                <p>Descrizione</p>
                                <p>{film.description}</p>
                            </div>
                        </section>
                    </>
                    </li>
                ))}
            </div>
    </ul>
</div>


)
}

export default MovieList;