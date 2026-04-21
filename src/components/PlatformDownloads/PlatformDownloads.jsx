import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import LaptopIcon from '../LaptopIcon/LaptopIcon';
import styles from './PlatformDownloads.module.scss';

const LABELS = {
  windows: () => translate({ id: 'com.os.Windows', message: 'Windows' }),
  mac: () => translate({ id: 'com.os.macOS', message: 'macOS' }),
  deb: () => translate({ id: 'com.os.Debian', message: 'Debian / Ubuntu' }),
  rpm: () => translate({ id: 'com.os.Fedora', message: 'Fedora / RHEL' }),
};

export default function PlatformDownloads({ downloads = [] }) {
  return (
    <ul className={styles.grid}>
      {downloads.map(({ platform, href, fileName }) => {
        const getLabel = LABELS[platform];
        if (!getLabel) return null;
        return (
          <li key={platform} className={styles.item}>
            <Link to={href} className={clsx(styles.link, styles[`link_${platform}`])}>
              <LaptopIcon platform={platform} className={styles.icon} />
              <span className={styles.platform}>{getLabel()}</span>
              {fileName && <span className={styles.fileName}>{fileName}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
