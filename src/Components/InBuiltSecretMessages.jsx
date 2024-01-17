import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import SecretMessage from './SecretMessage';

const SecretsSection = () => {
  const [userSecret, setUserSecret] = useState('');
  const [sharedSecrets, setSharedSecrets] = useState([]);
  const { user } = useAuth0();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const storedSecrets = JSON.parse(localStorage.getItem('sharedSecrets')) || [];
    setSharedSecrets(storedSecrets);

    scrollToBottom();
  }, [sharedSecrets]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isValidSecret = (secret) => {
    const words = secret.split(' ').filter(word => word.trim() !== '');
    return words.length > 3;
  };

  const inBuiltUsers = [
    { id: 'A', user: 'User A', message: 'React is super cool' },
    { id: 'B', user: 'User B', message: 'React is just a library' },
    { id: 'C', user: 'User C', message: 'Tailwind is a beauty parlour for React :)' },
    { id: 'D', user: 'User D', message: 'Something is not good in the world' },
    { id: 'E', user: 'User E', message: 'This is an in-built secret message.' },
  ];

  const handleSecretSubmit = () => {
    if (userSecret.trim() !== '' && isValidSecret(userSecret)) {
      const newUserSecret = {
        id: sharedSecrets.length + 1,
        message: userSecret,
        image: user?.picture || '',
      };

      setSharedSecrets((prevSecrets) => [...prevSecrets, newUserSecret]);
      setUserSecret('');

      // Save shared secrets to local storage
      localStorage.setItem('sharedSecrets', JSON.stringify([...sharedSecrets, newUserSecret]));
    } else {
      alert("This is not a valid secret. Please share a meaningful secret.");
    }
  };

  return (
    <div className="font-bold text-center mx-auto max-w-md bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl mb-4">Dashboard - Secrets Posting Section</h1>

      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"
          placeholder="Share your secret..."
          value={userSecret}
          onChange={(e) => setUserSecret(e.target.value)}
        />
        <button
          className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded cursor-pointer"
          onClick={handleSecretSubmit}
        >
          Share Secret
        </button>
      </div>

      <div>
        <h2 className="text-xl mb-2">Shared Secrets</h2>
        <ul>
          {[...inBuiltUsers, ...sharedSecrets].map((secret) => (
            <SecretMessage key={secret.id} user={secret.user} message={secret.message} image={secret.image} />
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </div>
  );
};

export default SecretsSection;
