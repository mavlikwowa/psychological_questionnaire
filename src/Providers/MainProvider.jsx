import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

const initialFormData = {
  0: {
    id: '',
  },
  1: {
    name: '',
    age: '',
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
  4: {
    firstImage: '',
    secondImage: '',
    thirdImage: '',
    fourthImage: '',
  },
  5: {
    firstRow: '',
    secondRow: '',
    thirdRow: '',
    fourthRow: '',
    fifthRow: '',
    sixthRow: '',
    seventhRow: '',
    eighthRow: '',
    ninthRow: '',
    tenthRow: '',
    eleventhRow: '',
    twelfthRow: '',
    thirteenthRow: '',
    fourteenthRow: '',
    fifteenthRow: '',
  },
  6: {
    firstQuestion: '',
    secondQuestion: '',
    thirdQuestion: '',
    fourthQuestion: '',
  },
  7: {
    seventhQuestion1: 0,
    seventhQuestion2: 0,
    seventhQuestion3: 0,
    seventhQuestion4: 0,
    seventhQuestion5: 0,
    seventhQuestion6: 0,
    seventhQuestion7: 0,
    seventhQuestion8: 0,
    seventhQuestion9: 0,
    seventhQuestion10: 0,
    seventhQuestion11: 0,
    seventhQuestion12: 0,
    seventhQuestion13: 0,
    seventhQuestion14: 0,
    seventhQuestion15: 0,
    seventhQuestion16: 0,
    seventhQuestion17: 0,
    seventhQuestion18: 0,
    seventhQuestion19: 0,
    seventhQuestion20: 0,
    seventhQuestion21: 0,
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
  const [currentPage, setCurrentPage] = useState(7);
  const [formData, setFormData] = useState(initialFormData);

  const goToNextPage = () => {
    const hasEmptyFields = Object.keys(formData[currentPage])
      // 0 can be an answer
      .some(k => formData[currentPage][k] === '')

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
