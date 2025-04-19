<div className="flex-1 flex flex-col items-center space-y-4">
{isSignIn ? (
  /* Sign In options */
  <>
    {/* Sign In with Google */}
    <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-6 w-8 mr-3"
      />
      <span className="text-sm font-medium text-gray-700">
        Sign In with Google
      </span>
    </button>

    {/* Sign In with LinkedIn */}
    <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
      <img
        src="https://www.svgrepo.com/show/448234/linkedin.svg"
        alt="LinkedIn"
        className="h-6 w-8 mr-3"
      />
      <span className="text-sm font-medium text-gray-700">
        Sign In with LinkedIn
      </span>
    </button>

    {/* Sign In with Apple */}
    <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
      <img
        src="https://www.svgrepo.com/show/473543/apple.svg"
        alt="Apple"
        className="h-6 w-8 mr-3"
      />
      <span className="text-sm font-medium text-gray-700">
        Sign In with Apple
      </span>
    </button>

    {/* Sign In with Email */}
    <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
      <img
        src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
        alt="Email"
        className="h-6 w-8 mr-3"
      />
      <span className="text-sm font-medium text-gray-700">
        Sign In with Email
      </span>
    </button>
  </>
) : (
  /* Placeholder for future sign-up components */
  <>
  </>
)}
</div>