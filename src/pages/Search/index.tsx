import React, { useState } from 'react';
import { makeRequest } from '../../core/utils/request'
import './styles.css'
import '../../core/components/Button/styles.css'
import BaseForm from './components/BaseForm';
import SearchResult from './components/SearchResult';
import { Values } from '../../core/types/Values';
//import SearchResult from '../Search/components/SearchResult'


const Search = () => {

    const [valuesResult, setValuesResult] = useState<Values>();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
      setName(event.target.value);

    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
         makeRequest({url:name})
        .then(Response => setValuesResult(Response.data))
        .finally(() => {
        setIsLoading(false);
        })
    }

    return(
        <div className="base-container">
        <form className="form-container" onSubmit={handleSubmit}>
            <BaseForm title="Encontre um perfil Github">
                <input 
                    value={name}
                    className="input-text" 
                     onChange={handleOnChange}
                type="text"/>
                
            </BaseForm>
            {valuesResult && (
                isLoading ? <h1>Carregando...</h1> : (
                <SearchResult values={valuesResult}/>)
            )}
        
        </form>
        </div>

    );
}

export default Search;