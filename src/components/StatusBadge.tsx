interface StatusBadgeProps {
  children: React.ReactNode;
}

export const StatusBadge = ({ children }: StatusBadgeProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-custom"></div>
      <small className="text-sm text-gray-600 font-medium tracking-wide">
        {children}
      </small>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-custom"></div>
    </div>
  );
};

export default StatusBadge;
