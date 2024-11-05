export default function Button({ ButtonText = "", className = "" }) {
    return (
      <button
        type="button"
        className={`flex font-medium bg-color-one justify-center py-3 text-sm duration-300 text-center hover:bg-green-700 shadow-md px-3 rounded-md text-white ${className}`}
      >
        {ButtonText}
      </button>
    );
  }
  