import React from 'react';
import s from './footer.module.css';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.footerContainer}>
      <div className={s.footerColumn}>
        <p>о проекте</p>
        <p>пишите нам почта/телега</p>
      </div>
      <div className={s.footerColumn}>
        <p>инст</p>
        <p>telegram</p>
      </div>
    </div>
  </footer>
);
