import React from 'react'
import clsx from 'clsx';
import styles from './PlatformDownloads.module.scss';
import SvgWindowsIcon from '@site/static/img/icons/windows_icon.svg';
import SvgMacIcon from '@site/static/img/icons/mac_icon.svg';
import SvgDebIcon from '@site/static/img/icons/deb_icon.svg';
import SvgRpmIcon from '@site/static/img/icons/rpm_icon.svg';
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";


export default function PlatformDownloads({ featured }) {

    const handleDownload = (link) => {
        window.open(link);
    }

    function DownloadWindows({ url, name }) {
        return (
            <div className={clsx('icon', styles.icon_windows)}>
                <Link to={url}>
                    <Translate
                        id="com.platform.windows"
                        description="Windows Platform">
                        Windows
                    </Translate>
                </Link>
                <div className={styles.link}>{name}</div>
            </div>
        )
    }

    function DownloadMac({ url, name }) {
        return (
            <div className={clsx('icon', styles.icon_mac)}>
                <Link to={url}>
                    <Translate
                        id="com.platform.mac"
                        description="Mac Platform">
                        MacOS
                    </Translate>
                </Link>
                <div className={styles.link}>{name}</div>
            </div>
        )
    }

    function DownloadLinuxDeb({ url, name }) {
        return (
            <div className={clsx('icon', styles.icon_debian)}>
                <Link to={url}>
                    <Translate
                        id="com.platform.deb"
                        description="Debian Platform">
                        Debian
                    </Translate>
                </Link>
                <div className={styles.link}>{name}</div>
            </div>
        )
    }

    function DownloadLinuxRpm({ url, name }) {
        return (
            <div className={clsx('icon', styles.icon_fedora)}>
                <Link to={url}>
                    <Translate
                        id="com.platform.fedora"
                        description="Fedora Platform">
                        Fedora
                    </Translate>
                </Link>
                <div className={styles.link}>{name}</div>
            </div>
        )
    }

    const components = {
        windows: () => <DownloadWindows />,
        mac: () => <DownloadMac />,
        deb: () => <DownloadLinuxDeb />,
        rpm: () => <DownloadLinuxRpm />,
    };

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
    }

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
                                onClick={() => handleDownload(link)}
                            >
                                {icons[type]()}
                                {components[type]({ link, fileName })}
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}