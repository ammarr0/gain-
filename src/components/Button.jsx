const Button = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
    >
      {label}
    </button>
  );
  
  export default Button;
  