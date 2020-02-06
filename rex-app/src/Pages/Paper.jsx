import React from 'react';
import Paper from '@rakuten-rex/paper/Paper';

export default function Index() {
  return (
    <>
      <h1>Paper</h1>
      <h2>Default</h2>
      <Paper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paper>
      <h2>With Box Shadow</h2>
      <Paper shadow={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paper>
      <h2>With Box Shadow and Margin</h2>
      <Paper shadow={1} p={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paper>
      <h2>Theme</h2>
      <Paper shadow={1} style={{
          "--rex-paper-background": "#ffffff",
          "--rex-paper-text": "crimson",
          "--rex-paper-border-radius": "0.75rem"
        }}>
        Welcome to Dynamic React
      </Paper>
    </>
  );
}
