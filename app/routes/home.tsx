import type { Route } from './+types/home';
import Navbar from '../../components/Navbar';
import { ArrowRight, ArrowUpRight, Clock, Layers } from 'lucide-react';
import { Button } from 'components/ui/Button';
import preview from '../../src/asset/img/rendered.png';

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
        <div id="upload" className="upload-shell">
          <div className="grid-overlay" />
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>
              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG, and PDF formats, up to 100MB in size.</p>
            </div>
            <p>Upload images</p>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your latest work and shared projects, all in one place.</p>
            </div>
          </div>
          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img src={preview} alt="Project preview" />
                <div className="badge">
                  <span>Cummunity</span>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Modern Villa</h3>
                  <div className="meta">
                    <Clock className="icon" />
                    <span>{new Date('01.01.2027').toLocaleDateString()}</span>
                    <span>Yoshi</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUpRight className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
