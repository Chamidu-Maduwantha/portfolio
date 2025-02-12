export function Footer() {
    return (
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Tailwind CSS
            </a>
            .
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Chamidu Rathnayaka. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  