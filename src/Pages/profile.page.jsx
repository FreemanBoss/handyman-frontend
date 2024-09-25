import ProfilePage from '../Components/profile' 

const ProfileContainer = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <ProfilePage />
      </div>
    </div>
  );
};

export default ProfileContainer;