const arrayPeliculas = [
    {
        id:1,
        nombre: 'Interestelar',
        genero: 'Ciencia Ficcion',
        elenco: 'Matthew McConaughey',
        año: '2014',
        deleted: false
    },
    {
        id:2,
        nombre: 'El Codigo Da Vinci',
        genero: 'Suspenso',
        elenco: 'Tom Hanks',
        año: '2006',
        deleted: false
    },
    {
        id:3,
        nombre: 'El Origen',
        genero: 'Ciencia Ficcion',
        elenco: 'Leonardo di Caprio',
        año: '2010',
        deleted: false
    },
    {
        id:4,
        nombre: 'El Lobo de Wall Street',
        genero: 'Drama',
        elenco: 'Leonardo di Caprio',
        año: '2013',
        deleted: false
    },
    {
        id:5,
        nombre: 'Breaking Bad',
        genero: 'Drama',
        elenco: 'Bryan Cranston',
        año: '2013',
        deleted: false
    },
    {
        id:6,
        nombre: 'Angeles y Demonios',
        genero: 'Ciencia Ficcion',
        elenco: 'Tom Hanks',
        año: '2009',
        deleted: false
    }
]

localStorage.setItem('peliculas',JSON.stringify(arrayPeliculas))
