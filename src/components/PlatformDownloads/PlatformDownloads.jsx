import React from 'react'
import styles from './PlatformDownloads.module.scss';

export default function PlatformDownloads({ featured }) {
    const handleDownload = (link) => {
        window.open(link);
    }

    return (
        <>

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {featured.map((file, index) => (
                        <div key={file.type} className={styles.flexItem} onClick={() => handleDownload(file.link)}>
                            <div className={styles.title}>{file.type}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}