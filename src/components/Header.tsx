import RoundIcon from './RoundIcon';
import StatusBadge from './StatusBadge';

export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      {/* Background subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 via-stone-50/30 to-gray-50/30 opacity-50"></div>
      
      <div className="relative container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <RoundIcon 
              src="https://avatars.githubusercontent.com/u/172601471"
              alt="ハチミツアイコン"
              size={48}
              className="shadow-md"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              ハチミツ技術者ブログ
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <StatusBadge>本当のエンジニアになるために孤軍奮闘</StatusBadge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;