//app/signup/layout.tsx
export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col bg-white">
        {children}
      </div>
    );
  }
  