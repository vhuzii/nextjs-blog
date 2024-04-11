import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import styles from './ResponsiveMenu.module.scss';
import NavListItem from 'components/NavListItem';

const ResponsiveMenu = ({ navListItems }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="md:flex md:items-center md:justify-between">
      {/* desktop view */}
      <div className={`md:flex items-center hidden md:visible`}>
        <ul className={'md:flex ' + styles.navMenu}>
          {navListItems?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
      </div>
      {/* movile view */}
      <div className={'md:hidden selt-end ' + styles.hamburger}>
        <Hamburger className={'mt-20'} toggled={isOpen} size={25} toggle={toggleMenu} />
      </div>
      <div
        className={
          `${isOpen ? 'block' : 'hidden'} absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2 ` +
          styles.mobileMenu
        }
      >
        <ul className={'flex-column ' + styles.navMenu}>
          {navListItems?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
