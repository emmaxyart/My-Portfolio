export function Footer() {
  return (
    <footer className="border-t border-wine/20 bg-white-smoke py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-wine md:text-left">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* Social links */}
        </div>
      </div>
    </footer>
  )
}