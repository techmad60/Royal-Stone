//app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col bg-white">
        {children}
      </div>
    );
  }
  