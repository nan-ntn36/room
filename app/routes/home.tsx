import type { Route } from './+types/home';
import Navbar from '../../components/Navbar';
import { ArrowRight } from 'lucide-react';
import { Button } from 'components/ui/Button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introducing Roomiffy</p>
        </div>
        <h1>Build beautiful rooms with Roomiffy</h1>
        <p className="subtitle">
          Roomify is an AI-first design environment that helps you visualize,
          render, and ship architectural projects faster than ever.
        </p>
        <div className="actions">
          <a href="#upload" className="cta">
            Starting building <ArrowRight className="icon" />
          </a>
          <Button size="lg" variant="outline">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
