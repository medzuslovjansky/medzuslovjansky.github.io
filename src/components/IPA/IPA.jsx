import React from 'react';

const IPA = ({script = "art", children}) => {
    return (
        <span lang={`${script}-fonipa`} className="notranslate" translate="no">
            {children}
        </span>
    );
};

export default IPA;
