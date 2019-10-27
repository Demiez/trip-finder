import React from 'react';

import './Main.scss';

const main = (props) => {
  const { children } = props;
  return (
    <main className="main">
      {children}
    </main>
  );
};

export default main;
