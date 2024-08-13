import React from 'react';

const Profile = () => {
  // Example user data, typically this would come from an API or context
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-6">
        {/* Profile Picture */}
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full border-2 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 text-lg">{user.email}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
        <p className="text-gray-600 mt-2">{user.bio}</p>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => alert('Edit profile functionality here')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
