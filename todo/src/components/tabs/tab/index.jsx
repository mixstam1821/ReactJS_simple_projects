const TabComponent = ({ value, active, onClick }) => {
  return (
    <button
      className={`p-2 ${
        value === active ? "bg-green-600 text-white" : "border border-purple-600"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default TabComponent;
