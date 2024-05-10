//lista attori

import React from 'react';

// Definizione dell'array multidimensionale di actor
const actors = [
  { name: 'Marlon Brando',  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_SX300.jpg'},
  { name: 'Brad Pitt', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_SX300.jpg' },
  { name: 'Gillian Anderson',  imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmRjNWQwMDQtMWNjZS00ZTUzLTkwODEtMTU5YjRlZmJiMTVkXkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_SX300.jpg' }
];


const ActorList = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Actor List
              </h1>
      </div>
      <ul>
        {/* iterazione */}
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          {actors.map((actor, index) => (
            <li>
            <>
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{actor.name}</h1>
                    <img
                    className="avatar"
                    src={actor.imageUrl}
                    alt={'Photo of ' + actor.name}
                    style={{
                      width: actor.imageSize,
                      height: actor.imageSize
                    }}
                    />
                  {/* <h2 >Categoria genere di film {actor.categoria_film}</h2>
                  <h2>Rating {actor.rating}</h2> */}
                </div>
              </section>
            </>
            </li>
          ))}
          </div>
      </ul>
    </div>
  );
};

export default ActorList;

















