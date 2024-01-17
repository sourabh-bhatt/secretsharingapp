import React from 'react';
import secretImage from '../assets/secret-agent.png';
import SecretMessage from './SecretMessage';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { user } = useAuth0();

  // Example data with user images
  const exampleSecrets = [
    {
      id: 'A',
      user: user ? user.nickname : 'AnonymousUser1', 
      message: 'React is just a library!',
      image: user ? user.picture : 'user1_image_url',
    },
    { id: 'B', user: 'AnonymousUser2', message: 'The root of all projects is index.html', image: 'user2_image_url' },
  ];

  return (
    <>
      <div className="bg-indigo-200 min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Secrets App</h1>
          <p className="text-lg mb-6">Share your thoughts anonymously and explore secrets shared by others!</p>
          <p className="text-lg mb-6">Design a user-friendly home screen featuring a section for posting secrets.</p>
          <ul className="text-left mb-6">
            <li>Each user can share one secret message.</li>
            <li>Secrets are displayed without revealing the identity of the person sharing them.</li>
          </ul>
          <p className="text-lg mb-6">Examples:</p>
          <div className="text-left mb-4">
            {exampleSecrets.map((secret) => (
              <SecretMessage key={secret.id} user={secret.user} message={secret.message} image={secret.image} />
            ))}
          </div>
        </div>
        <img
          src={secretImage}
          alt="Secrets Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg lg:w-1/2"
        />
      </div>
    </>
  );
};

export default Home;
