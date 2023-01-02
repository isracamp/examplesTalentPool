import { FactoryModal } from './components/modals/ModalFactory';
import Modal from './components/modals/modal/Modal';
import useUiStore, {
  getDisplayedModal,
  getModalOpen,
  setDisplayedModal,
} from './stores/index';
import { Modals } from './models/ModalModel';

function App() {
  const openModal = useUiStore(getModalOpen);
  const setModal = useUiStore(setDisplayedModal);
  const getModal = useUiStore(getDisplayedModal);
  const handleModal = (modal: Modals) => {
    setModal(modal);
    openModal();
  };
  return (
    <main>
      <button onClick={() => handleModal('DEMO_MODAL')} className='btn'>
        show modal
      </button>
      <Modal>{FactoryModal(getModal)}</Modal>
    </main>
  );
}

export default App;
