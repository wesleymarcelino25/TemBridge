import {NativeModules} from 'react-native';
const {CardActivityModule} = NativeModules;

interface CardActivityModuleInterface {
  getCardInfo(): void;
}

export default CardActivityModule as CardActivityModuleInterface;
