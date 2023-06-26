import React, { Component } from "react";
import { Movie } from "./Movie";

class MovieList extends Component {

	constructor() {
		super();
		this.state = {
			moviesList: [],
		}
	};

	componentDidMount() {
		fetch('http://localhost:3001/api/movies')
			.then((response) => {
				return response.json();
			})
			.then((movies) => {
				this.setState({ moviesList: movies.data })
			})
			.catch(err => console.error(err));
	};

	render() {
		return (
			<>
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table>
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
								<tbody>
									{this.state.moviesList.map((movie, i) => {
										return <Movie {...movie} key={i} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		);
	};
};

export default MovieList;