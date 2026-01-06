const LogoIcon = ({ className = "w-8 h-8", color = "#06b6d4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M315.5 38L95 275h135.5l-44 199L407 237H271.5l44-199z"
        fill={color}
        stroke="#1e293b"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon;
