import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen.jsx'
import LockScreen from './LockScreen.jsx'
import EnvelopeScreen from './EnvelopeScreen.jsx'
import MainCollage from './MainCollage.jsx'
import RoseBurstTransition from './RoseBurstTransition.jsx'
import FloatingPetals from './FloatingPetals.jsx'

export default function App() {
  // stages: loading -> locked -> envelope -> board, with transitions a/b
  const [stage, setStage] = useState('loading')
  const [showTransition, setShowTransition] = useState(null) // 'A' | 'B' | null

  // Loading -> Locked after 3s
  useEffect(() => {
    if (stage !== 'loading') return
    const t = setTimeout(() => setStage('locked'), 3000)
    return () => clearTimeout(t)
  }, [stage])

  // After a transition finishes, swap the underlying stage
  const onTransitionDone = () => {
    setShowTransition(null)
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden no-select">
      <FloatingPetals />

      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30"
          >
            <LoadingScreen />
          </motion.div>
        )}

        {stage === 'locked' && (
          <motion.div
            key="locked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-30"
          >
            <LockScreen onUnlock={() => {
              setShowTransition('A')
              setTimeout(() => setStage('envelope'), 200)
            }} />
          </motion.div>
        )}

        {stage === 'envelope' && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30"
          >
            <EnvelopeScreen onOpen={() => {
              setShowTransition('B')
              setTimeout(() => setStage('board'), 200)
            }} />
          </motion.div>
        )}

        {stage === 'board' && (
          <motion.div
            key="board"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <MainCollage />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition overlays sit on top of everything */}
      <RoseBurstTransition
        active={showTransition}
        onComplete={onTransitionDone}
      />
    </div>
  )
}
