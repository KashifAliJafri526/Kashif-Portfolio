import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Role',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before initiating transmission.');
      return;
    }

    setStatus('transmitting');

    // Simulate cybernetic transmission delay
    setTimeout(() => {
      setStatus('success');
    }, 1400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Full-Stack Role',
      message: '',
    });
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/25 relative overflow-hidden shadow-2xl">
      {/* Top cyber light line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600" />

      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-purple-500/15 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <h3 className="font-display font-bold text-base sm:text-lg text-white">
            Direct Transmission Console
          </h3>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
          TLS ENCRYPTED
        </span>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-white">
                Transmission Dispatched
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm font-sans leading-relaxed">
                Thank you for reaching out, <span className="text-cyan-300 font-medium">{formData.name}</span>! Your message has been received and I will reply as soon as possible.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-cyan-400/50 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Send Another Transmission</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Error Message */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-mono">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-slate-300 tracking-wider"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#060417] border border-purple-500/20 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-slate-200 placeholder:text-slate-600 text-xs font-mono transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-slate-300 tracking-wider"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#060417] border border-purple-500/20 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-slate-200 placeholder:text-slate-600 text-xs font-mono transition-all outline-none"
                />
              </div>
            </div>

            {/* Subject / Purpose */}
            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block text-xs font-mono text-slate-300 tracking-wider"
              >
                Inquiry Topic
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060417] border border-purple-500/20 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-slate-200 text-xs font-mono transition-all outline-none cursor-pointer"
              >
                <option value="Full-Stack Role">Full-Stack / Junior MERN Role Opportunity</option>
                <option value="Project Collaboration">Web App Project Collaboration</option>
                <option value="Freelance Inquiry">Freelance / Contract Opportunity</option>
                <option value="Technical Networking">Technical Networking & Mentorship</option>
              </select>
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-xs font-mono text-slate-300 tracking-wider"
              >
                Message Payload *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project details, job scope, or questions..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060417] border border-purple-500/20 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-slate-200 placeholder:text-slate-600 text-xs font-mono transition-all outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'transmitting'}
              className="w-full relative group overflow-hidden py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium text-xs font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-purple-400/30 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'transmitting' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-300" />
                  <span>Transmitting Payload...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
