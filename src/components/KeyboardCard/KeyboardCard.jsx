import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import KeyboardPreview from '../KeyboardPreview/KeyboardPreview';
import LaptopIcon from '../LaptopIcon/LaptopIcon';
import styles from './KeyboardCard.module.scss';

const PLATFORM_LABELS = {
  windows: () => translate({ id: 'com.os.Windows', message: 'Windows' }),
  mac: () => translate({ id: 'com.os.macOS', message: 'macOS' }),
  deb: () => translate({ id: 'com.os.Debian', message: 'Debian / Ubuntu' }),
  rpm: () => translate({ id: 'com.os.Fedora', message: 'Fedora / RHEL' }),
};

const DEFAULT_PLATFORMS = ['windows', 'mac', 'deb', 'rpm'];

export default function KeyboardCard({
  layoutId,
  title,
  description,
  href,
  platforms = DEFAULT_PLATFORMS,
}) {
  const base = href ?? '';
  return (
    <article className={styles.card}>
      {layoutId && (
        <Link
          to={href}
          className={styles.previewLink}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className={styles.preview}>
            <KeyboardPreview layoutId={layoutId} compact />
          </div>
        </Link>
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>
          {href ? (
            <Link to={href} className={styles.titleLink}>
              {title}
            </Link>
          ) : (
            <span className={styles.titleLink}>{title}</span>
          )}
        </h3>
        {description && <p className={styles.description}>{description}</p>}
        {platforms && platforms.length > 0 && (
          <ul className={styles.platforms}>
            {platforms.map((platform) => {
              const getLabel = PLATFORM_LABELS[platform];
              if (!getLabel) return null;
              const label = getLabel();
              return (
                <li key={platform} className={styles.platformItem}>
                  <Link
                    to={`${base}#${platform}`}
                    className={styles.platformLink}
                    aria-label={label}
                  >
                    <LaptopIcon
                      platform={platform}
                      title={label}
                      className={styles.platformIcon}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
}

export function KeyboardCardGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
