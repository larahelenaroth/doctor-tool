import React, { Fragment } from 'react';

/* 
  Purpose of Component: User enters URL that does not exist - show not found
*/

function NotFound() {
  return (
    <Fragment>
      <h1 className="display-5">Page Not Found</h1>
      <p className="lead">Sorry, that page does not exist.</p>
    </Fragment>
  );
}
export default NotFound;
