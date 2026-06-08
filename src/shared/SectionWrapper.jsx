/**
 * Shared layout shell for every portfolio section.
 * Handles consistent padding, background color, and max-width centering.
 * Individual sections manage their own Framer Motion animations.
 *
 * @param {{ children: React.ReactNode, id: string, className?: string, bgColor?: string }} props
 */
const SectionWrapper = ({ children, id, className = '', bgColor = 'var(--bg-void)' }) => {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
