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
    <footer className={clsx('footer', 'footer--dark')}>
      <div className="container">
        <div className="row footer__links">
          <div className="col footer__col">
            <Link href={logo.href} className={styles.footerLogoLink}>
              <FooterLogo
                alt={translate({ id: 'theme.footer.logoAlt' })}
                sources={sources}
              />
            </Link>
          </div>
          {links.map((linkItem, i) => (
            <div key={i} className={clsx('col', 'footer__col')}>
              <div className="footer__title">{linkItem.title}</div>
              <ul className="footer__items">
                {linkItem.items.map((item, key) =>
                  (item.type === 'localeDropdown') ? (
                    <LocaleDropdownNavbarItem key="locale" dropdownItemsBefore={[]} dropdownItemsAfter={[]}/>
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
            </div>
          ))}
        </div>
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            © {new Date().getFullYear()},&#20;
            <Link to="https://github.com/medzuslovjansky">
              Medžuslovjansky (Меджусловјанскы)
            </Link>.&#20;
            <Translate
              id="theme.footer.copyrightNotice"
              description="The footer copyright notice"
              values={{
                LEGAL: <Link to="/legal">/legal</Link>,
                MIT: <Link to="https://en.wikipedia.org/wiki/MIT_License">MIT License</Link>,
                CC4: <Link to="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</Link>,
              }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
