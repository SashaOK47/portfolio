import { motion, AnimatePresence } from 'framer-motion'

import './style.scss'

const transition = { ease: [0.6, 0.01, -0.05, 0.9] }

const text = {
  initial: {
    y: 0
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
}

const letter = {
  initial: { y: 400, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ...transition, duration: 1.5 } }
}

const line = {
  initial: { width: 0 },
  animate: {
    width: '100vw',
    transition: { ...transition, duration: 2.1, delay: 2.1 }
  }
}

const Loader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <>
          <motion.div className="loading" exit={{ opacity: 0 }}>
            <motion.span
              className="loading__text"
              variants={text}
              initial="initial"
              animate="animate"
            >
              <motion.span className="loading__letter" variants={letter}>
                l
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                o
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                a
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                d
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                i
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                n
              </motion.span>
              <motion.span className="loading__letter" variants={letter}>
                g
              </motion.span>
            </motion.span>
            <motion.span
              className="loading__line"
              variants={line}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          {/*<motion.div*/}
          {/*  className="loading__bg"*/}
          {/*  initial={{ height: 0 }}*/}
          {/*  exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}*/}
          {/*  transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}*/}
          {/*/>*/}
        </>
      )}
    </AnimatePresence>
  )
}

export default Loader
