const collection = {
    2548: {
      albumTitle: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
      albumTitle: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [],
    },
 
  };

  const albums = Object.values(collection);

  albums.forEach(function (album, index) {
      console.log(album,index);
  });

  //imprimir por pantalla cada tracks. cada string que haya en el track   5439: {
      albumTitle: "ABBA Gold",
    },


albums.forEach((album) => {

    album.tracks.forEach((track)=> console.log(tracks));
    
    
})

// utiliza .map y que devuelva array nuevo conpropiedad nombre artista y valor titulo album

const mapped = albums.map((value) => {
    if 
})

const newArray = Object
.values(collection)
.map((album) => {
    if (album.artist  != null && album.albumTitle != null) {
        return {
            [album.artist] : album.albumTitle,
        };
    };
})
.map((element) => element.artist)


//.filter

const array = [5,4,3,2,1];

const nuevoArray = array.filter((value)=> value <3);

console.log(nuevoArray)

//

const otroArray = albums.filter((value) => value.artist.startsWith("B")).map((album) => album.artist);
                        

//reduce

const arraybat = [1,2,3,4,5];

const sum = arraybat.reduce((acc, value)=> value + acc, 0);