import React, {Component} from 'react';
import Genre  from './Genre';


/*let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]*/

class GenresInDb extends Component{        
    constructor(props){
        super(props)
        this.state ={
        genresList : []
        }
        }
        componentDidMount(){

            fetch('http://localhost:3001/api/genres')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(genres =>{
            //console.log(genres)
            this.setState({genresList: genres.data})
            })
            .catch(error => console.log(error))
            }

            cambiarFondo = () => {
                this.setState({cardClass: "card-body bg-secondary"})
            };
    render() {
        const { genresList } = this.state;
        return (
<React.Fragment>
<div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 id="titleH5" onMouseOver={this.cambiarFondo} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className={this.state.cardClass}>
                    <div className="row">
            {genresList.map((genre, index) => {
              return <Genre {...genre} key={index} />;
            })}
          </div>
        </div>
        </div>
        </div>
</React.Fragment>
        )
    }
}

/*function GenresInDb(){
    return (
        <React.Fragment>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}*/
export default GenresInDb;