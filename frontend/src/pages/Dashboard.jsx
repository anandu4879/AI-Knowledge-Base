import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Hidden on mobile, visible on medium screens+ */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
        <div className="p-6">
          <span className="text-2xl font-bold text-indigo-600">AI Base</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg">
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            My Knowledge
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}! 👋</h2>
            <p className="text-gray-500">Here is what's happening with your account today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Plan</p>
              <p className="text-2xl font-bold text-gray-900 capitalize">{user?.plan || 'Free'}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Files Uploaded</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Credits Used</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
          </div>

          {/* Placeholder for Data */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-64 flex items-center justify-center border-dashed border-2">
            <p className="text-gray-400 font-medium">No activity data available yet.</p>
          </div>
        </div>
      </main>
    </div>
  );
}