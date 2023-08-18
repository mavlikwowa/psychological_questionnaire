import { createContext, useState } from 'react';

export const MainContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {
    /** init */
  },

  formData: {
    id: '',
    name: '',
    age: 0,
    telegram: '',
  },
  setFormData: () => {
    /** init */
  },
});

const { Provider } = MainContext;

const MainProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState(
    {
      id: '',
      name: '',
      age: 0,
      telegram: '',
    }
  );

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
