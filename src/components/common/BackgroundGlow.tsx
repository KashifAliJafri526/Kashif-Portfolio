export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Cybernetic grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-70" />

      {/* Top Left Electric Violet Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[140px]" />

      {/* Center Right Electric Cyan Glow */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full bg-cyan-600/15 blur-[140px]" />

      {/* Deep Blue Bottom Glow */}
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[150px]" />

      {/* Subtle vignette radial mask */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030014]/40 to-[#030014]" />
    </div>
  );
};
