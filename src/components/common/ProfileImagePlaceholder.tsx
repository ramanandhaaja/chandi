import React from 'react';

interface ProfileImagePlaceholderProps {
  initials?: string;
  className?: string;
  useTie?: boolean;
}

const ProfileImagePlaceholder: React.FC<ProfileImagePlaceholderProps> = ({
  initials = '',
  className = '',
  useTie = false,
}) => {
  // Generate initials if not provided
  const displayInitials = initials || 'U';
  
  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="#D2AF6D" />
      <circle cx="50" cy="35" r="20" fill="#F2F2F2" />
      <path
        d="M50 60 C25 60, 15 80, 15 100 L85 100 C85 80, 75 60, 50 60Z"
        fill="#F2F2F2"
      />
      {useTie && (
        <>
          {/* Tie shape */}
          <path
            d="M45 60 L50 85 L55 60 L50 55 Z"
            fill="#333333"
          />
          <path
            d="M48 85 L50 100 L52 85 L50 82 Z"
            fill="#333333"
          />
        </>
      )}
      <text
        x="50"
        y="55"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="#333333"
        dominantBaseline="middle"
      >
      </text>
    </svg>
  );
};

export default ProfileImagePlaceholder;
