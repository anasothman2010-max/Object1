import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center bg-surface pt-32">
      <Container className="py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-500">404</p>
        <h1 className="mt-4 font-display text-4xl font-light text-ink md:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    </div>
  );
}
