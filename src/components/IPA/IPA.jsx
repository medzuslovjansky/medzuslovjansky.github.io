import React from 'react';
import clsx from 'clsx';
import style from './IPA.module.scss';

const IPA = ({script = "art", children}) => {
    return (
        <span lang={`${script}-fonipa`} className={clsx(style.ipa, 'notranslate')} translate="no">
            {children}
        </span>
    );
};

export default IPA;
