import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

import { CloseButton, Flex } from "./mobileNavContent.styles";

const MobileNavContent = (props: any) => {
  const { isOpen, onClose, children } = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{
            duration: 0.1,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}>
          <Flex>
            {children}
            <CloseButton onClick={onClose} />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavContent;
