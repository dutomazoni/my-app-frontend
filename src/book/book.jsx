import React from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import './book.css'

export default props => {
    const [books, updateBooks] = React.useState('');
    let data = [];

    const getData = () => {
        axios.get("http://localhost:5000/api/books/genres")
            .then((response) => {
                updateBooks(response.data)
            })
    }

    React.useEffect( () => {
        getData()

    }, [])


    for (let i = 0; i < books.length; i++) {
        data.push(books[i])
    }

    //const dataNames = data.map((d) => <li>{d.Title}</li>)
    // const dataGenres = data.map((d) => <li>{d.count}</li>)
    let result = data.map(a => a.count);

    return (
        <div className={"book-div"}>
            <ContentHeader title={"Books"}></ContentHeader>
            <Content>
                <Plot
                    data={[
                        {type: 'bar', y: [result[0], result[1], result[2], result[3]], x: ['No Genre', 'Fantasy + Science Fiction','Science Fiction', 'Fantasy' ]},
                    ]}
                    layout = {{height: 400, width: 500}}
                />
            </Content>
        </div>
    )

}

