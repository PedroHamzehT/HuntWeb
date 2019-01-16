import React, { Component } from 'react';
import api from "../../services/api";

import './style.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    // Depois que o componente for montado é executado
    async componentDidMount() {
        // Puxando valor passado pelo parâmetro
        const { id } = this.props.match.params;
        // Setando o valor enviado pelo parâmetro na variável response
        const response = await api.get(`/products/${id}`);
        // Inserindo o valor da response ao state product
        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        // Exibindo o produto pelo ID passado por parâmetro
        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>

            </div>
        );
    }
}