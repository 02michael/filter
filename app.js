import React, { useState } from "https://esm.sh/react@19"
import { createRoot } from "https://esm.sh/react-dom@19/client"
import { motion, AnimatePresence } from "https://esm.sh/motion/react"
import { LayoutGrid, Rabbit, Brush, Sparkles } from "https://esm.sh/lucide-react"

const ITEMS = [
  { name: 'Cartoon', icon: <Rabbit /> },
  { name: 'Pixel', icon: <LayoutGrid /> },
  { name: 'Watercolor', icon: <Brush /> },
  { name: 'Random', icon: <Sparkles /> },
]

const App = () => {
  const [activeIndex, setActiveIndex] = useState(3)

  return (
    <div
      role="radiogroup"
      className="text-neutral-800 text-2xl flex items-center gap-4"
    >
      {ITEMS.map((el, i) => {
        const checked = activeIndex === i
        return (
          <label key={el.name} className="cursor-pointer">
            <input
              type="radio"
              name="style"
              value={el.name}
              checked={checked}
              onChange={() => setActiveIndex(i)}
              className="sr-only"
            />

            <motion.div
              layout
              transition={{ type: 'spring', visualDuration: 0.3, bounce: 0.3 }}
              className={`px-4 h-12 flex justify-center items-center gap-3 overflow-hidden relative transition-colors ${
                checked
                  ? 'text-rose-500 bg-rose-200/75'
                  : 'text-rose-300 bg-neutral-200'
              }`}
              style={{ borderRadius: 99 }}
            >
              <motion.span layout className="shrink-0">
                {el.icon}
              </motion.span>

              <AnimatePresence mode="popLayout" initial={false}>
                {checked && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {el.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </label>
        )
      })}
    </div>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(<App />)