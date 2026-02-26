// Component 8: ContactForm
// Concepts: useState (form data + errors + submitted), useEffect (live validation)
import { useState, useEffect } from 'react';

const INITIAL = { name: '', email: '', message: '' };

function ContactForm() {
    // useState — controlled form fields
    const [formData, setFormData] = useState(INITIAL);
    // useState — validation errors
    const [errors, setErrors] = useState({});
    // useState — submission state
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect — live form validation whenever formData changes
    useEffect(() => {
        const newErrors = {};
        if (formData.name && formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (formData.message && formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        setErrors(newErrors);
    }, [formData]);

    // Controlled input handler — props pattern via onChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.keys(errors).length > 0;
        const isEmpty = !formData.name || !formData.email || !formData.message;
        if (hasErrors || isEmpty) return;

        setLoading(true);
        // Simulate async send
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData(INITIAL);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="contact-form">
                <div className="form-success">
                    ✅ Message sent! I'll get back to you soon, bro.
                </div>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="form-title">SEND A MESSAGE</p>

            {/* Name field */}
            <div className="form-field">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* Email field */}
            <div className="form-field">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            {/* Message field */}
            <div className="form-field">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="What's on your mind..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button
                type="submit"
                className="form-submit"
                disabled={loading || Object.keys(errors).length > 0}
            >
                {loading ? 'SENDING...' : 'SEND IT →'}
            </button>
        </form>
    );
}

export default ContactForm;
