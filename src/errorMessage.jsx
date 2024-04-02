import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert" aria-live="assertive">
      {message}
    </div>
  );
}

export default ErrorMessage;
