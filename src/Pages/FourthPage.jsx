import { useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Button, Textarea } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import { ArrowIcon } from '@images';
import firstImage from '@images/firstPicture.png';
import secondImage from '@images/secondPicture.png';
import thirdImage from '@images/thirdPicture.png';
import fourthImage from '@images/fourthPicture.png';
import { isDesktopSmall } from '@src/styles';
import CONFIG from '@src/config';

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
  max-width: 730px;

  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const StyledImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;

  ${isDesktopSmall} {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

const StyledImageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTextarea = styled(Textarea)`
  height: 195px;
`;

const FourthPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);

  const onChange = (e, field) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: e?.target?.value }})
  };

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const mappingData = Object.keys(CONFIG.mappingFields).filter(k => Object.keys(formData[currentPage]).includes(k));
  const imageMapping = {
    firstImage: firstImage,
    secondImage: secondImage,
    thirdImage: thirdImage,
    fourthImage: fourthImage,
  };

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledHeader>Кратко опишите каждую картинку. Что вы на ней видите?</StyledHeader>
      <StyledImagesWrapper>
        {mappingData.map(item => (
          <StyledImageItem key={item}>
            <img src={imageMapping[item]} alt={item} />
            <StyledTextarea onChange={(e) => onChange(e, item)} />
          </StyledImageItem>
        ))}
      </StyledImagesWrapper>
      {!isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default FourthPage;
