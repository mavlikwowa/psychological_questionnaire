import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const initialFormData = {
  0: {
    id: '',
  },
  1: {
    name: '',
    age: null,
    telegram: '',
  },
  2: {
    threeQuestions: '',
    role1: '',
    role2: '',
    role3: '',
    target1: '',
    target2: '',
    target3: '',
  },
  3: {
    thirdQuestion1: '',
    thirdQuestion2: '',
    thirdQuestion3: '',
    thirdQuestion4: '',
    thirdQuestion5: '',
    thirdQuestion6: '',
    thirdQuestion7: '',
    thirdQuestion8: '',
    thirdQuestion9: '',
    thirdQuestion10: '',
    thirdQuestion11: '',
    thirdQuestion12: '',
    thirdQuestion13: '',
    thirdQuestion14: '',
    thirdQuestion15: '',
    thirdQuestion16: '',
    thirdQuestion17: '',
    thirdQuestion18: '',
    thirdQuestion19: '',
    thirdQuestion20: '',
  },
}

export const MainContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {
    /** init */
  },

  formData: initialFormData,
  setFormData: () => {
    /** init */
  },

  goToNextPage: () => {
    /** init */
  },
});

const { Provider } = MainContext;

const MainProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const goToNextPage = () => {
    const hasEmptyFields = Object.keys(formData[currentPage]).some(k => !formData[currentPage][k])

    if (hasEmptyFields) {
      toast.error('Заполните необходимые поля', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: 'toast-error',
      });
      return;
    }

    setCurrentPage(prev => prev + 1);
  };

  return (
    <Provider value={{
      currentPage,
      setCurrentPage,
      formData,
      setFormData,
      goToNextPage,
    }}>
      {children}
    </Provider>
  );
};

export default MainProvider;
