import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/lib/config';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Ferran, CTO and technical leader.',
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            I&apos;m {siteConfig.author.name}, currently serving as {siteConfig.author.role} at {siteConfig.author.company}. 
            With over a decade of experience in software engineering and technical leadership, I specialize in 
            building scalable systems and leading high-performing engineering teams.
          </p>
          
          <p>
            My journey in tech started with a fascination for how things work at scale. From optimizing 
            database queries that serve millions of users to architecting distributed systems that handle 
            billions of requests, I&apos;ve learned that the best solutions come from understanding both the 
            technical details and the bigger picture.
          </p>
          
          <p>
            As a CTO, I believe in leading by example. I stay hands-on with code, participate in architecture 
            reviews, and work closely with teams to solve complex technical challenges. My approach combines 
            strategic thinking with practical implementation, ensuring that our technology choices align with 
            business goals while maintaining technical excellence.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Technical Leadership</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Building and scaling engineering teams</li>
              <li>• Technical strategy and roadmap planning</li>
              <li>• Architecture reviews and system design</li>
              <li>• Engineering culture and best practices</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-3">System Architecture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Distributed systems and microservices</li>
              <li>• Cloud infrastructure (AWS, GCP, Azure)</li>
              <li>• Performance optimization at scale</li>
              <li>• Data architecture and pipelines</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Languages: TypeScript, Python, Go, Rust</li>
              <li>• Databases: PostgreSQL, Redis, Elasticsearch</li>
              <li>• Infrastructure: Kubernetes, Docker, Terraform</li>
              <li>• Monitoring: Datadog, Prometheus, Grafana</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Business Impact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Aligning technology with business goals</li>
              <li>• Cost optimization and efficiency</li>
              <li>• Product development methodology</li>
              <li>• Stakeholder communication</li>
            </ul>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Speaking & Writing</h2>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            I regularly share my experiences and insights through writing and speaking engagements. 
            My articles focus on practical solutions to real-world engineering challenges, from scaling 
            systems to building effective teams.
          </p>
          
          <p>
            Topics I frequently cover include:
          </p>
          <ul>
            <li>Scaling from startup to enterprise</li>
            <li>Building engineering culture</li>
            <li>System design and architecture patterns</li>
            <li>Technical debt management</li>
            <li>Engineering leadership in hypergrowth</li>
          </ul>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Connect</h2>
        
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={`mailto:${siteConfig.author.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Email me
            </a>
          </Button>
          
          <Button asChild variant="outline">
            <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          I&apos;m always interested in connecting with fellow technologists, entrepreneurs, and anyone passionate 
          about building great products. Feel free to reach out!
        </p>
      </section>
    </div>
  );
}