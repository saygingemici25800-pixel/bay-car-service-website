import { motion } from 'framer-motion'

export default function Emergency() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h1 className="text-4xl font-bold">Acil Yol Yardım</h1>
      <p className="text-mute mt-4">Bu sayfa yakında.</p>
    </motion.div>
  )
}
