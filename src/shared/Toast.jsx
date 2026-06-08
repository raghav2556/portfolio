import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiAlertCircle, FiX } from 'react-icons/fi';

/**
 * Bottom-right slide-in toast notification.
 * @param {{ toast: { message: string, type: 'success'|'error' }|null, onDismiss: () => void }} props
 */
const Toast = ({ toast, onDismiss }) => {
  const isSuccess = toast?.type === 'success';

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 80, y: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="alert"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: isSuccess ? 'rgba(20, 83, 45, 0.96)' : 'rgba(127, 29, 29, 0.96)',
            border: `1px solid ${isSuccess ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
            borderRadius: '10px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '380px',
            backdropFilter: 'blur(12px)',
            boxShadow: isSuccess
              ? '0 8px 32px rgba(20, 83, 45, 0.4)'
              : '0 8px 32px rgba(127, 29, 29, 0.4)',
          }}
        >
          {isSuccess
            ? <FiCheck size={16} color="#4ade80" />
            : <FiAlertCircle size={16} color="#f87171" />
          }
          <p style={{ fontFamily: 'Sora', fontSize: '0.875rem', color: 'var(--text-primary)', flex: 1, lineHeight: 1.5 }}>
            {toast.message}
          </p>
          <button
            onClick={onDismiss}
            aria-label="Dismiss notification"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '2px', display: 'flex' }}
          >
            <FiX size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
