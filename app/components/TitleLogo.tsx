export default function TitleLogo() {
  return (
    <div className="title-logo-svg">
      <svg
        width="500"
        height="200"
        viewBox="0 0 500 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Black background rectangle */}
        <rect width="500" height="200" fill="#000000"/>

        {/* "The" text */}
        <text
          x="50"
          y="70"
          fill="#FFFFFF"
          fontSize="48"
          fontWeight="400"
          fontFamily="Arial, sans-serif"
        >
          The
        </text>

        {/* White inner rectangle */}
        <rect x="50" y="90" width="400" height="90" fill="#FFFFFF"/>

        {/* "ZSC DAO" text */}
        <text
          x="250"
          y="150"
          fill="#000000"
          fontSize="64"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
        >
          ZSC
        </text>
        <text
          x="250"
          y="175"
          fill="#000000"
          fontSize="40"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
        >
          DAO
        </text>
      </svg>
    </div>
  )
}
