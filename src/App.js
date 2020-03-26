import React from 'react';
import './App.css';

function App(props) {
  const { appContent, loading } = props;
  return (
    <React.Fragment>
      {loading && (
        <h4 className="subapp-loading">Loading...</h4>
      )}
      <div dangerouslySetInnerHTML={{ __html: appContent }} />
    </React.Fragment>
  );
}

export default App;
