import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
          {/* Sidebar */}
          <Sidebar avatar='https://media-exp1.licdn.com/dms/image/C5603AQEgXrSsg-5I4g/profile-displayphoto-shrink_400_400/0/1543072699529?e=1645056000&v=beta&t=3rDbTMtBcTUgqneHRqIlUe2zwYLNOoYQHmuAls20uSI'/>

          {/* Feed */}
          <Feed />

          {/* Widgets */}

      </div>

    </div>
  );
}

export default App;
