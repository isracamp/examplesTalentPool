import { useState } from 'react';
import FilterCategories from './components/home/filterCategories/FilterCategories';
import Menu from './components/home/menu/Menu';
import { Categories } from './models/Categories';
import { MenuModel } from './models/MenuModel';
import { getMenuService } from './service/GetMenuService';
const categories = [
  'all',
  ...new Set(getMenuService().map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState<MenuModel[]>([]);
  const filterItems = (category: string): void | MenuModel[] => {
    if (category === Categories.all) {
      return setMenuItems(getMenuService());
    }
    const filteredItems = getMenuService().filter(
      (filterItem) => filterItem.category === category
    );
    return setMenuItems(filteredItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <FilterCategories
          allCategories={categories}
          filterItems={filterItems}
        />
        <Menu menuElements={menuItems} />
      </section>
    </main>
  );
}

export default App;
