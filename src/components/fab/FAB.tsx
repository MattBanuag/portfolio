import { FABContainer } from './FAB.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
const FAB = () => {
  return (
    <FABContainer>
        <FontAwesomeIcon icon={faGrip} className="fa-grip"/>
    </FABContainer>
  )
}

export default FAB