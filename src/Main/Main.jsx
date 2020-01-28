/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, func, element, oneOfType, arrayOf } from 'prop-types';
import './Main.scss';

export default function Main({
  children,
  onClick,
  title,
  className,
  ...props
}) {
  return (
    <div className={className} onClick={onClick} role="presentation" {...props}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

Main.defaultProps = {
  children: null,
  title: 'Hello World',
  className: 'rex-main',
  onClick: () => null,
};

Main.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  title: string,
  className: string,
  onClick: func,
};
