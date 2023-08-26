import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Button, ListItems, Slider } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import { ArrowIcon, ArrowSlimIcon, CloseIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import CONFIG from '@src/config';
import Focus from '@src/Components/Focus/index.jsx';
import { toast } from 'react-toastify';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  width: 160px;
  align-self: flex-end;
  margin-top: 20px;
  
  ${isDesktopSmall} {
    width: 126px;
    height: 35px;
    margin-top: 0;
  }
`;

const StyledHeader = styled.h3`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 660px;

  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const StyledListItems = styled(ListItems)`
  ${isDesktopSmall} {
    flex-direction: column;
  }
`;

const StyledRow = styled(Focus)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;

  ${isDesktopSmall} {
    align-items: center;
    flex-direction: row;
    border: none;
    border-radius: initial;
    margin-bottom: 0;
    justify-content: flex-start;
  }
`;

const StyledGreetingRow = styled(GreetingRow)`
  position: relative;
`;

const StyledNotice = styled.div`
  display: flex;
  width: 286px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 120px;
`;

const Text = styled.p`
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
`;

const StyledExampleButton = styled.button`
  display: flex;
  width: 220px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #FFF;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 20px;
`;

const StyledMobileNotice = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.10);
`;

const StyledMobileNoticeHeader = styled.header`
  width: 100%;
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  
  svg {
    cursor: pointer;
  }
`;

const StyledMobileNoticeText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const SeventhPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);
  const [showMobileNotice, setShowMobileNotice] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    const allFields = {};
    Object.keys(formData).forEach(k => Object.assign(allFields, formData[k]));
    const hasEmptyFields = Object.keys(allFields).some(k => allFields[k] === '');

    if (hasEmptyFields) {
      toast.error('Ошибка отправки данных, обратитесь к администратору', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: 'toast-error',
      });
      return;
    }

    const form = new FormData();
    Object.keys(allFields).forEach(k => {
      form.append(CONFIG.mappingFields[k], allFields[k]);
    })

    try {
      setLoading(true);
      const res = await fetch(CONFIG.scriptUrl, { method: 'POST', body: form})
      const data = await res.json();
      if (data?.result === 'success') {
        goToNextPage();
        return;
      }
      toast.error('Ошибка отправки данных, обратитесь к администратору', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: 'toast-error',
      });
    } catch (e) {
      console.error(e);
      toast.error('Ошибка отправки данных, обратитесь к администратору', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: 'toast-error',
      });
    } finally {
      setLoading(false);
    }
  }

  const onChange = (field, answer) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: answer }})
  };

  const openMobileNotice = () => setShowMobileNotice(true);
  const closeMobileNotice = () => setShowMobileNotice(false);

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const isDesktopMedium = useMediaQuery({
    query: `(min-width: 1400px)`,
  });

  const mappingData = Object.keys(CONFIG.mappingFields).filter(k => Object.keys(formData[currentPage]).includes(k));

  return (
    <Root>
      <StyledGreetingRow>
        {isDesktop && <StyledButton disabled={loading} onClick={onFinish}>Далее<ArrowIcon /></StyledButton>}
        {isDesktopMedium && (
          <StyledNotice>
            <Text>Абсолютно согласен это - 10 баллов, категорически не согласен это 0.</Text>
            <Text>Варьируйте балы самостоятельно, например, скорее да в зависимости от ситуации – 7 балов, скорее нет в зависимости от ситуации – 3 балла.</Text>
          </StyledNotice>
        )}
      </StyledGreetingRow>
      <StyledHeader>
        Оцените приведенные ниже высказывания в баллах от 0 до 10.
      </StyledHeader>
      {
        !showMobileNotice && !isDesktopMedium && (
          <StyledExampleButton onClick={openMobileNotice}>
            Смотреть инструкцию<ArrowSlimIcon />
          </StyledExampleButton>
        )
      }
      {
        showMobileNotice && !isDesktopMedium && (
          <StyledMobileNotice>
            <StyledMobileNoticeHeader>
              Например:
              <CloseIcon onClick={closeMobileNotice} />
            </StyledMobileNoticeHeader>
            <StyledMobileNoticeText>
              скорее «да» в зависимости от ситуации – 7 баллов, скорее «нет» в зависимости от ситуации – 3 балла.
            </StyledMobileNoticeText>
          </StyledMobileNotice>
        )
      }
      <StyledListItems>
        {mappingData.map((k, index) => (
          <StyledRow key={k}>
            {`${index + 1}. ${CONFIG.mappingFields[k]}`}
            <Slider
              value={formData[currentPage][k]}
              onChange={(e, newValue) => onChange(k, newValue)}
              width={!isDesktop ? '50vw' : '150px'}
            />
          </StyledRow>
        ))}
      </StyledListItems>
      {!isDesktop && <StyledButton disabled={loading} onClick={onFinish}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default SeventhPage;
