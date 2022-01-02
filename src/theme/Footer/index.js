/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';

function FooterLink({to, type, href, label, icon, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {href && !isInternalUrl(href) ? (
        <span>
          {icon ? '' : label}
          {icon ?
            <ThemedImage
              className="footer__link-icon"
              alt={label}
              title={label}
              sources={{
                light: useBaseUrl(icon.src),
                dark: useBaseUrl(icon.srcDark || icon.src),
              }}
              width={icon.width}
              height={icon.height}
            />
            : <IconExternalLink />
          }
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

const FooterLogo = ({sources, alt, width, height}) => (
  <ThemedImage
    className="footer__logo"
    alt={alt}
    sources={sources}
    width={width}
    height={height}
  />
);

function Footer() {
  const {footer} = useThemeConfig();
  const {links = [], logo = {}} = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            {logo && (logo.src || logo.srcDark) && (
              <div className="col footer__col">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo
                      alt={logo.alt}
                      sources={sources}
                      width={logo.width}
                      height={logo.height}
                    />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            {links.map((linkItem, i) => (
              <div key={i} className={clsx('col', 'footer__col')}>
                {linkItem.title != null ? (
                  <div className="footer__title">{linkItem.title}</div>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      (item.type === 'localeDropdown') ? (
                        <LocaleDropdownNavbarItem key="locale" dropdownItemsBefore={[]} dropdownItemsAfter={[]} />
                      ) : (
                        item.html ? (
                          <li
                            key={key}
                            className="footer__item" // Developer provided the HTML, so assume it's safe.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: item.html,
                            }}
                          />
                        ) : (
                          <li key={item.href || item.to} className="footer__item">
                            <FooterLink {...item} />
                          </li>
                        )
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        <div className="footer__bottom text--center">
          <div
            className="footer__copyright" // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
          >
            © {new Date().getFullYear()},
            <Link to="https://github.com/medzuslovjansky">
              <Translate
                id="footer.GITHUB_ORGANIZATION"
                description="The footer copyright fragment with organization name" />
            </Link>.
            <span dangerouslySetInnerHTML={{__html: translate({
                id: "footer.COPYRIGHT",
                description: "The footer copyright notice",
                values: {
                  CC4: '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0" target=_blank rel="license noopener">CC BY-NC-ND 4.0</a>',
                }
              })}} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
