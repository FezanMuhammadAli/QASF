import DNav from "./DNav";

function DSettings() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />
      <div className="w-3/4 bg-white p-6">
        {/* Settings Section */}
        <section
          id="settings"
          className="bg-qasfblue p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Profile Management</h2>
          <p>
            Manage your profile details, change your password, or log out from
            your account.
          </p>
        </section>

        {/* Profile Details Section */}
        <section
          id="profile-details"
          className="bg-qasfgreen p-6 rounded-lg mb-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Save Changes
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700">
                Reset Changes
              </button>
            </div>
          </form>
        </section>

        {/* Change Password Section */}
        <section
          id="change-password"
          className="bg-blue-200 p-6 rounded-lg mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm font-medium"
              >
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Enter your current password"
              />
            </div>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Enter your new password"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 p-2 w-full rounded-md bg-white text-black"
                placeholder="Confirm your new password"
              />
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Change Password
              </button>
            </div>
          </form>
        </section>

        {/* Logout Button */}
        <section id="logout" className="bg-red-500 p-6 rounded-lg text-white">
          <h3 className="text-lg font-semibold mb-4">Logout</h3>
          <p>
            If you wish to log out from your account, click the button below.
          </p>
          <div className="mt-4">
            <button className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-900">
              Logout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DSettings;
