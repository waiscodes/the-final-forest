import axios from 'axios';

const searchBookByTitle = (title: string) => {
  axios
  .get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
  .then((res: any) => {
    console.log(res.data)
  });
}

export {
  searchBookByTitle
}