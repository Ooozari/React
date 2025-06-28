import {useLoaderData} from 'react-router-dom'

function GitHub() {
  const githubUser = useLoaderData() 
 
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-[#0e0e0ed5] to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-[#1f1f1f] rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-md w-full">
        <img
          src={githubUser.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-600 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-white mb-1">{githubUser.login}</h2>
        <div className="flex justify-center gap-6 text-white font-semibold text-lg">
          <div>
            <span className="block text-green-500 text-2xl">
              {githubUser.followers.toLocaleString()}
            </span>
            Followers
          </div>
          <div>
            <span className="block text-green-500 text-2xl">
              {githubUser.following}
            </span>
            Following
          </div>
        </div>
      </div>
    </div>
  );
}

export const getGitHubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Ooozari');
    return response.json()
}

export default GitHub;
