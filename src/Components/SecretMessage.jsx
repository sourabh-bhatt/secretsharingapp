import React from 'react';

const SecretMessage = ({ user, message, image }) => (
  <li className="mb-2 flex items-center">
    <img
      src={image}
      alt={`User ${user}`}
      className="rounded-full h-8 w-8 object-cover inline-block mr-2"
    />
    {message}
  </li>
);

export default SecretMessage;