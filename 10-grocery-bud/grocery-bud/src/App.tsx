import { SyntheticEvent, useState, useEffect, useCallback } from 'react';
import Alert from './components/alert/Alert';
import List from './components/list/List';
import {
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage,
} from './utils/sessionStorage/SessionStorage';
import { ItemsProps } from './models/ListModel';

function App() {
  const [name, setName] = useState<string>('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [list, setList] = useState(
    getSessionStorage<ItemsProps[]>('list') || []
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string>('');
  const showAlert = (show = false, type = '', message = ''): void => {
    setAlert({ show, type, message });
  };
  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (!name || !name.trim().length) {
      showAlert(true, 'danger', 'please enter value');
      return;
    }

    if (name && isEditing) {
      setList(
        list.map((item: any) =>
          item.id === editID ? { ...item, title: name } : item
        )
      );

      setName('');
      setEditID('');
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
      return;
    }
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    setSessionStorage('list', list);
    setName('');
    showAlert(true, 'success', 'item added to the list');
  };
  const editItem = useCallback(
    (id: string): void => {
      const specificItem = list.find((item: any) => item.id === id);
      if (!specificItem) {
        return;
      }
      setIsEditing(true);
      setEditID(id);
      setName(specificItem.title);
    },
    [list]
  );

  const removeItem = useCallback(
    (id: string): void => {
      setList(list.filter((item: any) => item.id !== id));
      showAlert(true, 'danger', 'item removed');
    },
    [list]
  );
  const clearList = () => {
    setList([]);
    showAlert(
      true,
      'danger',
      `You remove ${list.length} ${list.length === 1 ? 'item' : 'items'}`
    );
    removeSessionStorage('list');
  };

  useEffect(() => {
    setSessionStorage('list', list);
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            removeAlert={showAlert}
            list={list}
          />
        )}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
