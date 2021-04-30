import React from 'react';
import { Values } from '../../../../core/types/Values';
import './styles.css'

type Props = {
    values: Values;
}

const SearchResult = ({ values }: Props ) => (
    <div className="container">
        <div className="search-base">
            <div className="details-box-img"><img className="box-img" src={values.avatar_url} alt=""/>
            </div>
            <div className="details">
                <div className="repository-details">
                    <div className="data-top">Repositorio público: {values.public_repos}</div>
                    <div className="data-top">Seguidores: {values.followers}</div>
                    <div className="data-top">Seguindo: {values.following}</div>
                </div>
                <div className="personal-data">
                    <h1 className="title">Informações</h1>
                        <div className="data"><h3 className="data-type">Empresa:</h3> {values.company}</div>
                        <div className="data"><h3 className="data-type">Website/Blog:</h3> {values.blog}</div>
                        <div className="data"><h3 className="data-type">Localidade:</h3> {values.location}</div>
                        <div className="data"><h3 className="data-type">Membro desde:</h3> {values.created_at}</div>
                </div>
            </div>
        </div>
        <button className="btn-tostart">Ver Perfil</button>
    </div>
    );

export default SearchResult;