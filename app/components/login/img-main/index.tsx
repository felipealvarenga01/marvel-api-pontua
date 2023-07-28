import { ImgBuilding, ImgLoginContent } from '~/components/login/styles';
import building from '../../../assets/building.svg';

export default function ImgLogin() {
  return (
    <ImgLoginContent>
      <ImgBuilding src={building} />
    </ImgLoginContent>
  );
}
