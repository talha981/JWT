import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">Welcome to JWT Authentication</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties.
          The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          JWTs are used to secure communication between a client and a server. They allow for stateless authentication, meaning the server does not need to store session information. Instead, the client stores the JWT and sends it with each request, allowing the server to verify the user's identity and permissions.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          JWTs are widely used in modern web applications for authentication, authorization, and information exchange. They consist of three parts: a header, a payload, and a signature. The header typically consists of the type of the token (JWT) and the signing algorithm being used. The payload contains the claims, which are statements about an entity (typically, the user) and additional data. The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In this application, we use JWT to authenticate users. After a user signs up or logs in, they receive a token that they can use to access protected resources. This method of authentication is secure, scalable, and widely adopted in modern web development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore the Signup and Login pages to see how JWT is used in practice. Secure your application with ease using JWT!
        </p>
      </div>
    </div>
  );
};

export default Home;
