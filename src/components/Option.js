import React from 'react';

const Option = (props) => (
    <div className="option">
    <p className="option_text">{props.count}. {props.optionTex}</p>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionTex)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;
