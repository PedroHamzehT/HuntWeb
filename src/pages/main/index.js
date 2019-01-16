import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
    state = {
        docs: [],
        products: [],
        productsInfo: {},
        page: 1,
        
    }

    // Método usado para executar ações logo que o componente é mostrado em tela
    componentDidMount() {   
        this.loadProducts();
    }

    // Método que puxa todos os products que a api fornece, nos parâmetros utiliza a baseUrl + o caminho informado
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        // Desestruturando a response da function em dois arrays DOCS e PRODUCTSINFO
        const { docs, ...productsInfo } = response.data;

        // Inserindo no state duas variáveis PRODUCTS e PRODUCTSINFO que são obtidas pela response da API
        this.setState({ products: docs, productsInfo, page });
                
    };

    prevPage = () => {
        const { page, productsInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);

    }

    nextPage = () => {
        const { page, productsInfo } = this.state;

        if (page === productsInfo.pages) return;

        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    }


    render() {

        // Desestruturação do array de objetos armazenados no state
        const { products, pages, productsInfo } = this.state;

        return (
            <div className="repo-list">
            {/* // .map usado para percorrer o array de objetos */}
                { products.map(product => (                    
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ) ) }
                <div className="actions">
                    <button disabled={pages === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={pages === productsInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}