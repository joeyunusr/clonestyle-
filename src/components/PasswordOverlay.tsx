import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function PasswordOverlay({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('_auth_status');
    if (authStatus === 'verified') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Obfuscated password check to prevent easy inspection
    try {
      if (btoa(password) === 'SkFVSEFSLTEyMw==') {
        setIsAuthenticated(true);
        sessionStorage.setItem('_auth_status', 'verified');
        setError(false);
      } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    } catch {
      setError(true);
    }
  };

  if (isChecking) return null;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f6f6f6] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-white border border-black/10 rounded-[24px] p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)]"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#2b2b2b]" />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="font-serif text-[28px] text-[#2b2b2b] mb-2">Akses Terbatas</h2>
          <p className="font-sans text-[14px] text-[#2b2b2bcc]">
            Masukkan sandi akses untuk menggunakan aplikasi ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Sandi..."
              className={`w-full bg-[#f8f8f8] border ${
                error ? 'border-red-500/50 focus:border-red-500' : 'border-black/10 focus:border-black/30'
              } rounded-[12px] p-4 pr-12 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:ring-1 ${
                error ? 'focus:ring-red-500/20' : 'focus:ring-black/30'
              } transition-all`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/60 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            {error && (
              <span className="absolute -bottom-6 left-2 text-[12px] text-red-500 font-medium">
                Sandi akses salah
              </span>
            )}
          </div>

          <button
            type="submit"
            className="group mt-4 flex items-center justify-center gap-2 bg-[#2b2b2b] text-white rounded-[12px] py-4 px-8 font-sans text-[14px] font-medium tracking-wide uppercase transition-all hover:bg-black hover:scale-[1.02] active:scale-95 w-full"
          >
            Masuk
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
