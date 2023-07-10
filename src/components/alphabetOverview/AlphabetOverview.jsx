import React, { useMemo } from 'react';
import { transliterate } from '@interslavic/utils';

const IPA = ({ children }) => {
    return (
        <span lang="art-fonipa" className="notranslate" translate="no">
            {children}
        </span>
    );
};

const AlphabetOverview = ({ script }) => {
    const LETTERS = [
        ["A", <><IPA>ɑ</IPA> ~ <IPA>a</IPA></>],
        ["Å", <><IPA>ɒ</IPA></>],
        ["B", <><IPA>b</IPA></>],
        ["C", <><IPA>t͡s</IPA></>],
        ["Ć", <><IPA>t͡ɕ</IPA></>],
        ["Č", <><IPA>t͡ʃ</IPA> ~ <IPA>t͡ʂ</IPA></>]
    ];

    function checkTransliteration() {
        const result = [];
        
        for (let i = 0; i < LETTERS.length; i++) {
            const firstElement = LETTERS[i][0];
            const transliteration = transliterate(firstElement, script);
            
            if (transliteration === firstElement) {
            result.push(LETTERS[i]);
            }
        }
        return result;
    }
    const filteredArray = checkTransliteration();

    const tableRows = useMemo(() => {
        return filteredArray.map((item, index) => {
            return (
                <tr key={index}>
                    {item.map((column, columnIndex) => (
                        <td key={columnIndex}>{column}</td>
                    ))}
                </tr>
            );
        });
    }, [filteredArray]);
    
    return (
        <table>
            {tableRows}
        </table>
    );
};

export default AlphabetOverview;