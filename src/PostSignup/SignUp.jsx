const SignUp = () => (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded-md" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded-md" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded-md" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Sign Up</button>
      </form>
    </div>
  );
  
  export default SignUp;
  