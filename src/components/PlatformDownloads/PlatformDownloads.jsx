import React from 'react'
import clsx from 'clsx';
import styles from './PlatformDownloads.module.scss';
import SvgWindowsIcon from '@site/static/img/icons/windows_icon.svg';
import SvgMacIcon from '@site/static/img/icons/mac_icon.svg';
import SvgDebIcon from '@site/static/img/icons/deb_icon.svg';
import SvgRpmIcon from '@site/static/img/icons/rpm_icon.svg';
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";



const icons = {
    windows: () => (<SvgWindowsIcon />),
    mac: () => (<SvgMacIcon />),
    deb: () => (<SvgDebIcon />),
    rpm: () => (<SvgRpmIcon />),
};

const fullNames = {
    win: 'Windows',
    mac: 'MacOS',
    deb: 'Debian',
    rpm: 'Fedora',
};

function DownloadPlatform({ url, name, type }) {
    return (
        <div className={clsx(styles.icon, styles[`icon_${type}`])}>
            <Link to={url}>
                <Translate
                    id={`com.platform.${type}`}
                    description={`${fullNames.type} Platform`}>
                    {fullNames.type}
                </Translate>
            </Link>
            <div className={styles.linkText}>{name}</div>
        </div >
    )
}

export default function PlatformDownloads({ featured }) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {featured.map((value) => {
                        const { type, link, fileName } = value;
                        return (
                            <div
                                key={type}
                                className={styles.flexItem}
                            >
                                {icons[type]()}
                                <DownloadPlatform
                                    url={link}
                                    name={fileName}
                                    type={type}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}