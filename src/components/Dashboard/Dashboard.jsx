import React, {useEffect, useState} from 'react';
import { Card, Button, Placeholder, DropdownButton, Dropdown, Container, Row, Col } from 'react-bootstrap';
import moviesApi from "../../api/movies";
import './dashboard.css';

const STATES = {
    LIST_VIEW: 'list',
    COLUMN_VIEW: 'column'
};

/**
 * TO SEE how movies are used => https://github.com/seshasaisrivatsav/FilmNerd/blob/38d5f069a3398ceedd58c829a8b6c67c333b7479/public/project/views/main/movie-default.view.client.html
 * @return {*}
 * @constructor
 */
const Dashboard = () => {
    const [movies, setMovies] = useState();
    const [view, setView] = useState(STATES.COLUMN_VIEW)
    const [columnSize, setColumnSize] = useState(4);

    useEffect(() => {
        const getMovies = async () => {
            setMovies(await moviesApi.getNowPlaying());
        };
        getMovies();
    }, []);

    const buildDropDownItems = () => {
        return Object.keys(STATES).map(state => {
            return (<Dropdown.Item key={STATES[state]} onClick={() => setView(STATES[state])}>{STATES[state]}</Dropdown.Item>)
        })
    };

    const buildMoviesList = () => {
        if (movies && movies.results) {
            console.log(movies);
            return movies.results.map(movie => renderMovieCard(movie));
        }
    };

    const renderMovieCard = movie => {
        return (
            <Card style={{ width: '18rem' }} key={movie.id}>
                <Card.Img variant="top" src={moviesApi.getMoviePoster(movie.poster_path)} />
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Card.Subtitle>Rating: {movie.vote_average}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    };

    const createRowMovies = () => {
        let rows = {};
        let counter = 1;
        if (movies && movies.results) {
            movies && movies.results.forEach((movie, index) => {
                rows[counter] = rows[counter] ? [...rows[counter]] : [];
                if (index%columnSize === 0 && index!==0) {
                    counter ++;
                    rows[counter] = rows[counter] ? [...rows[counter]] : [];
                    rows[counter].push(renderMovieCard(movie));
                } else {
                    rows[counter].push(renderMovieCard(movie));
                }
            })

            return Object.values(rows).map(row => {
                return (
                    <Row key={row[0].key}>
                        {row}
                    </Row>
                );
            });
        }
    }



    return (
        <div className="apply-margin">
            <h1>Dashboard Page</h1>
            <Row>
                <Col xs={12} md={6}>
                    <DropdownButton id="toggle-view" title={view ? view : "Select View"}>
                        {buildDropDownItems()}
                    </DropdownButton>
                </Col>
                <Col xs={12} md={6}>
                    <a>Column Size
                        <Button onClick={() => setColumnSize(3)}>3</Button>
                        <Button onClick={() => setColumnSize(5)}>5</Button>
                        <Button onClick={() => setColumnSize(7)}>7</Button>
                        <Button onClick={() => setColumnSize(9)}>9</Button>
                    </a>
                </Col>
            </Row>

            {view === STATES.LIST_VIEW ? buildMoviesList() : null}
            {view === STATES.COLUMN_VIEW ? createRowMovies() : null}
        </div>
    );
};

export default Dashboard;