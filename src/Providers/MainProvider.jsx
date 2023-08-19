import { createContext, useState } from 'react';

const initialFormData = {
  id: '',
  name: '',
  age: null,
  telegram: '',
  testSlider: 5,
  testRow: '',
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
});

const { Provider } = MainContext;

const MainProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  return (
    <Provider value={{
      currentPage,
      setCurrentPage,
      formData,
      setFormData
    }}>
      {children}
    </Provider>
  );
};

export default MainProvider;
