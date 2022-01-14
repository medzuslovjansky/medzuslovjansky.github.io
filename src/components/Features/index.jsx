import React from 'react';
import styles from './Features.module.css';
import stylesCard from './Card.module.css';
import stylesCTA from './CTA.module.css';
import {buildWrapper} from "../utils/buildWrapper";

export const Card = buildWrapper('Features.Card', stylesCard.root);
export const CTA = buildWrapper('Features.CTA', stylesCTA.root);
export const Features = buildWrapper('Features', styles.root);

Features.Card = Card;
Features.CTA = CTA;

export default Features;
