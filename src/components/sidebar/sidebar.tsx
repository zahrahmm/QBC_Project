import favorites from '../../assets/sidebarLogo/favorites.svg';
import home from '../../assets/sidebarLogo/home.svg';
import login from '../../assets/sidebarLogo/login.svg';
import orders from '../../assets/sidebarLogo/orders.svg';
import addPerson from '../../assets/sidebarLogo/person_add.svg';
import shoppingCard from '../../assets/sidebarLogo/shoppingCard.svg';

function sidebar() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-20 pb-8 pt-4 bg-white">
      <div className="flex flex-col justify-center items-center gap-y-16">
        <img src={home} alt="" className="cursor-pointer" />
        <img src={orders} alt=" " className="cursor-pointer" />
        <img src={shoppingCard} alt="" className="cursor-pointer" />
        <img src={favorites} alt="" className="cursor-pointer" />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-6">
        <img src={login} alt="" className="cursor-pointer" />
        <img src={addPerson} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
export default sidebar;
