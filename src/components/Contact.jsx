import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedTitle from '../shared/AnimatedTitle';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABEL_STYLE = {
  fontFamily: 'Sora', fontSize: '11.5px',
  color: 'var(--text-muted)', textTransform: 'uppercase',
  letterSpacing: '0.09em', display: 'block', marginBottom: '6px',
};

/* ── Contact ───────────────────────────────────── */
/**
 * @param {{ contact: Object, personal: Object, onToast: Function }} props
 */
const Contact = ({ contact, personal, onToast }) => {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim())               e.name    = 'Name is required';
    if (!EMAIL_RE.test(form.email))      e.email   = 'Enter a valid email address';
    if (!form.subject.trim())            e.subject = 'Subject is required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await emailjs.send(
        contact.emailjs.serviceId,
        contact.emailjs.templateId,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        contact.emailjs.publicKey
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      onToast?.("Message delivered. I'll be in touch.", 'success');
      setTimeout(() => setStatus('idle'), 3200);
    } catch {
      setStatus('error');
      onToast?.('Something went wrong. Please try again.', 'error');
      setTimeout(() => setStatus('idle'), 3200);
    }
  };

  /* Button state config */
  const btnConfig = {
    idle:    { bg: 'var(--cursed-purple)', text: 'Send Message',       shadow: '0 0 24px rgba(139,63,200,0.35)' },
    loading: { bg: 'var(--cursed-indigo)', text: 'Sending...',         shadow: 'none' },
    success: { bg: '#166534',             text: '✓ Message Delivered', shadow: '0 0 24px rgba(22,101,52,0.4)' },
    error:   { bg: '#7F1D1D',             text: 'Failed — Try Again',  shadow: 'none' },
  }[status];

  return (
    <SectionWrapper id="contact" bgColor="var(--bg-void)">
      {/* Background blob */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(45,26,94,0.18), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedTitle text="CONTACT" />
        <div className="section-separator" />

        <div className="contact-grid">

          {/* ── Left panel ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <p style={{
              fontFamily: 'Sora', fontWeight: 300, fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'var(--text-muted)', lineHeight: 1.65,
            }}>
              {contact.tagline}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href={`mailto:${personal.email}`} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                textDecoration: 'none', color: 'var(--aura-violet)',
                fontFamily: 'Sora', fontSize: '0.9rem',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <FiMail size={16} color="var(--aura-violet)" />
                {personal.email}
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiMapPin size={16} color="var(--aura-violet)" />
                <span style={{ fontFamily: 'Sora', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { Icon: FiGithub,   href: personal.github,   label: 'GitHub' },
                { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                { Icon: SiLeetcode, href: personal.leetcode, label: 'LeetCode' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ boxShadow: '0 0 16px rgba(139,63,200,0.32)' }}
                  style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    border: '1px solid rgba(93,45,158,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--aura-violet)';
                    e.currentTarget.style.borderColor = 'rgba(139,63,200,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(93,45,158,0.4)';
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right panel: Form ──────────────── */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            onSubmit={handleSubmit}
            noValidate
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Name */}
            <div>
              <label htmlFor="name" style={FIELD_LABEL_STYLE}>Name</label>
              <input
                id="name" name="name" type="text"
                value={form.name} onChange={handleChange}
                placeholder="Your full name"
                className={`form-field${errors.name ? ' field-error' : ''}`}
              />
              {errors.name && <p style={{ fontFamily: 'Sora', fontSize: '12px', color: '#E24B4A', marginTop: '5px' }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={FIELD_LABEL_STYLE}>Email</label>
              <input
                id="email" name="email" type="email"
                value={form.email} onChange={handleChange}
                placeholder="your@email.com"
                className={`form-field${errors.email ? ' field-error' : ''}`}
              />
              {errors.email && <p style={{ fontFamily: 'Sora', fontSize: '12px', color: '#E24B4A', marginTop: '5px' }}>{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" style={FIELD_LABEL_STYLE}>Subject</label>
              <input
                id="subject" name="subject" type="text"
                value={form.subject} onChange={handleChange}
                placeholder="What's this about?"
                className={`form-field${errors.subject ? ' field-error' : ''}`}
              />
              {errors.subject && <p style={{ fontFamily: 'Sora', fontSize: '12px', color: '#E24B4A', marginTop: '5px' }}>{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" style={FIELD_LABEL_STYLE}>Message</label>
              <textarea
                id="message" name="message" rows={6}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project, idea, or opportunity..."
                className={`form-field${errors.message ? ' field-error' : ''}`}
                style={{ resize: 'vertical' }}
              />
              {errors.message && <p style={{ fontFamily: 'Sora', fontSize: '12px', color: '#E24B4A', marginTop: '5px' }}>{errors.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={status === 'idle' ? { boxShadow: btnConfig.shadow, y: -2 } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              style={{
                width: '100%', padding: '15px',
                border: 'none', borderRadius: '8px',
                fontFamily: 'Sora', fontWeight: 600, fontSize: '0.97rem',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                background: btnConfig.bg, color: '#fff',
                transition: 'background 0.3s, box-shadow 0.3s',
              }}
            >
              {btnConfig.text}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
