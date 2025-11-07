/**
 * Contact Component
 * Contact form and social links section
 * Features glassmorphic form inputs, validation, and social media links
 */

import React, { useState } from 'react';
import type { FormEvent } from 'react';
import GlassCard from '../ui/GlassCard';
import GlassButton from '../ui/GlassButton';
import SectionTitle from '../ui/SectionTitle';
import SocialLinks from '../ui/SocialLinks';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import type { ContactProps } from '../../types';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ email, socialLinks }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement actual form submission logic
      // This could be an API call to your backend or a service like Formspree
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <FadeIn delay={100} duration={800}>
          <SectionTitle
            title="Get In Touch"
            subtitle="Let's work together"
          />
        </FadeIn>

        <div className="contact-section__content">
          {/* Contact Form */}
          <SlideIn direction="left" delay={200} duration={800}>
            <GlassCard variant="medium" blur="lg" className="contact-section__form-card">
              <form onSubmit={handleSubmit} className="contact-section__form" noValidate>
                {/* Name Field */}
                <div className="contact-section__form-group">
                  <label htmlFor="name" className="contact-section__label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-section__input ${errors.name ? 'contact-section__input--error' : ''}`}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="contact-section__error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="contact-section__form-group">
                  <label htmlFor="email" className="contact-section__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-section__input ${errors.email ? 'contact-section__input--error' : ''}`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="contact-section__error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div className="contact-section__form-group">
                  <label htmlFor="subject" className="contact-section__label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`contact-section__input ${errors.subject ? 'contact-section__input--error' : ''}`}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="contact-section__error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="contact-section__form-group">
                  <label htmlFor="message" className="contact-section__label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`contact-section__textarea ${errors.message ? 'contact-section__textarea--error' : ''}`}
                    placeholder="Your message..."
                    rows={6}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="contact-section__error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="contact-section__form-actions">
                  <GlassButton
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="contact-section__submit-button"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </GlassButton>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="contact-section__success" role="alert">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact-section__error-message" role="alert">
                    ✗ Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}
              </form>
            </GlassCard>
          </SlideIn>

          {/* Contact Info & Social Links */}
          <div className="contact-section__info">
            {/* Email */}
            {email && (
              <SlideIn direction="right" delay={300} duration={800}>
                <GlassCard variant="light" blur="md" className="contact-section__info-card">
                  <div className="contact-section__info-content">
                    <h3 className="contact-section__info-title">Email Me</h3>
                    <a
                      href={`mailto:${email}`}
                      className="contact-section__email-link"
                      aria-label={`Send email to ${email}`}
                    >
                      📧 {email}
                    </a>
                  </div>
                </GlassCard>
              </SlideIn>
            )}

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <SlideIn direction="right" delay={400} duration={800}>
                <GlassCard variant="light" blur="md" className="contact-section__info-card">
                  <div className="contact-section__info-content">
                    <h3 className="contact-section__info-title">Connect With Me</h3>
                    <SocialLinks links={socialLinks} size="lg" />
                  </div>
                </GlassCard>
              </SlideIn>
            )}

            {/* Additional Info */}
            <FadeIn delay={500} duration={800}>
              <GlassCard variant="light" blur="md" className="contact-section__info-card">
                <div className="contact-section__info-content">
                  <h3 className="contact-section__info-title">Let's Collaborate</h3>
                  <p className="contact-section__info-text">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;