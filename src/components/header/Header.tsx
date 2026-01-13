import Time from './Time';
import TitleLogo from './TitleLogo';

const Header = () => {
  return (
    <div className='flex flex-row justify-between mb-12'>
      <TitleLogo />
      <Time />
    </div>
  );
};

export default Header;
