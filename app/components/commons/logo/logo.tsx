import logotipo from '~/assets/logoPontuaInteiro.svg'
import miniLogo from '~/assets/logoPontua.svg'
import {LogoContainer} from "~/components/commons/logo/logo-styles";
import { AnimatePresence, motion } from 'framer-motion';

export type LogoContainerProperties = {
  open: boolean,
}

export const Logo = ({open}: LogoContainerProperties) => {
  
  return (
    <LogoContainer>
      <AnimatePresence>
        {
          open ?
            <motion.div
              key={logotipo}
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -200 }}
              transition={{ duration: .3 }}
            >
              <img src={logotipo} alt= "Pontua Web"/>
            </motion.div> :
            <motion.div
              key={miniLogo}
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -200 }}
              transition={{ duration: .3 }}
            >
              <img src={miniLogo} alt= "Pontua Web"/>
            </motion.div>
        }
      </AnimatePresence>
    </LogoContainer>
  );
};
