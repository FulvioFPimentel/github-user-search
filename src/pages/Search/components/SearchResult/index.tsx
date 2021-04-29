import React from 'react';
import { Values } from '../../../../core/types/Values';
import './styles.css'

type Props = {
    values: Values;
}

const SearchResult = ({ values }: Props ) => (

        <div className="search-base">
            <div><img className="box-img" src={values.avatar_url} alt=""/></div>
            <div>
                <div className="repository-details">
                    <div className="data-top">Repositorio público: 62</div>
                    <div className="data-top">Seguidores: 127</div>
                    <div className="data-top">Seguindo: 416</div>
                </div>
                <div className="personal-data">
                    <h1 className="title">Informações</h1>
                </div>
            </div>
        </div>
    );

export default SearchResult;