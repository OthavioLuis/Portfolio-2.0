export default function Footer() {
  return (
    <footer className="bg-background py-6 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground max-w-7xl">
        <p>&copy; {new Date().getFullYear()} Othavio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}