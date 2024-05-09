//lista attori

// import React from 'react';

// Definizione dell'array multidimensionale di actor
// const actors = [
//   { name: 'Marlon Brando',  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_SX300.jpg'},
//   { name: 'Brad Pitt', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SX300.jpg' },
//   { name: 'Gillian Anderson',  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmRjNWQwMDQtMWNjZS00ZTUzLTkwODEtMTU5YjRlZmJiMTVkXkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_SX300.jpg' }
// ];


// const ActorList = () => {
//   return (
//     <div>
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//             <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//             Movie Collection
//             </h1>
            
//             <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
//             Explore the whole collection of movies
//             </p>
//         </div>


//             <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//                     <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//                          Actor List
//                     </h1>
//             </div>
//       <ul>
//         {/* iterazione */}
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//           {actors.map((actor, index) => (
//             <li>
//             <>
//               <section className="bg-white dark:bg-gray-900">
//                 <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//                   <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{actor.name}</h1>
//                     <img
//                     className="avatar"
//                     src={actor.imageUrl}
//                     alt={'Photo of ' + actor.name}
//                     style={{
//                       width: actor.imageSize,
//                       height: actor.imageSize
//                     }}
//                     />
//                   {/* <h2 >Categoria genere di film {actor.categoria_film}</h2>
//                   <h2>Rating {actor.rating}</h2> */}
//                 </div>
//               </section>
//             </>
//             </li>
//           ))}
//           </div>
//       </ul>
//     </div>
//   );
// };

// export default ActorList;

















// import React from 'react';




// const movies = [
//   {categoria:'Drammatico', rating:'5', title_film:'The Godfather', imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', description:'Anni Quaranta. Come è consuetudine, durante il rinfresco per festeggiare le nozze della figlia Conny con Carlo, il \"padrino\" don Vito Corleone promette assistenza e protezione a familiari e amici. Invia il figliastro Tom Hagen in California per convincere in ogni modo il produttore Jack Woltz a scritturare il cantante Johnny nel suo prossimo film'},

//   {categoria:'Avventura', rating:'3', title_film:'Top Gun: Maverick',imageUrl:'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg', description:'Dopo più di trent’anni di servizio nella Marina, il Tenente Pete “Maverick” Mitchell (Tom Cruise) è proprio dove vorrebbe essere: un pilota coraggioso che può spingersi oltre ogni limite, cercando di schivare l’avanzamento di carriera che metterebbe un freno alla sua libertà'},

//   {categoria:'Drammatico',rating:'2', title_film:'The Flash (film 2023)', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDFhZTc3NWQtY2UyZS00OGYzLTgxNTUtYjYxMjZjMmEyMjcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', description:'The Flash travels back in time to prevent the murder of his mother, an act which disrupts time significantly' }
// ];


// // Definizione del componente Functional React
// const MovieList = () => {
//   return (
//     <div>
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//             <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//             Movie Collection
//             </h1>
            
//             <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
//             Explore the whole collection of movies
//             </p>
//         </div>


//             <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//                     <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//                          Movie List
//                     </h1>
//             </div>
//       <ul>
//         {/* iterazione */}
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//           {/* {movies.map((movie, index) => ( */}
//           {movies.map((movie, index) => (

//             <li>
//             <>
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{actor.name}</h1>
                    <img
                    className="avatar"
                    src={movie.imageUrl}
                    alt={'Photo of ' + movie.title_film}
                    style={{
                      width: movie.imageSize,
                      height: movie.imageSize
                    }}
                    />
                    <p>Descrizione film :</p>
                    <p>{movie.description}</p>
                  <h2 >Categoria genere di film {movie.categoria}</h2>
                  <h2>Rating {movie.rating}</h2>
                </div>
              </section>
//             </>
//             </li>
//           ))}
//           </div>
//       </ul>
//     </div>
//   );
// };

// export default MovieList;
