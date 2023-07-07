import React from 'react';
import { transliterate } from '@interslavic/utils';

const IPA = ({script, children}) => {
    return (
        <span lang={script} className="notranslate" translate="no">
            {children}
        </span>
    );
};

export default IPA;