import React from 'react';
import './styles.css';

type Props = {
    title: string;
    children: React.ReactNode;
}

const BaseForm = ({ title, children }: Props) => {
    return (
        <div className="search-container">
                <div className="seatch-content">
                    <h1 className="text-seatch">
                        {title}
                    </h1>
                        {children}
                    <div className="base-form-actions">
                        <button className="btn-tostart">
                            Encontrar
                        </button> 
                    </div>
                      
                </div>
            </div>
    );
}

export default BaseForm;