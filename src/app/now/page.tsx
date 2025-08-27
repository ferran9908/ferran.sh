import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, BookOpen, Target, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Now',
  description: "What I'm currently focused on and working on.",
};

export default function NowPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">What I&apos;m Doing Now</h1>
        <p className="text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg">
            This is my <Link href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">now page</Link>, 
            inspired by Derek Sivers. It&apos;s a snapshot of what I&apos;m currently focused on in my life and work.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-6 w-6" />
          <h2>Work</h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Leading Engineering at [Company]</h3>
              <p className="text-muted-foreground">
                Currently focused on scaling our engineering team from 50 to 100+ engineers while maintaining 
                our culture of technical excellence and rapid iteration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Platform Modernization</h3>
              <p className="text-muted-foreground">
                Leading a major initiative to modernize our infrastructure, moving from monolithic architecture 
                to microservices. We&apos;re seeing 3x improvement in deployment frequency and 50% reduction in incidents.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">AI/ML Integration</h3>
              <p className="text-muted-foreground">
                Exploring and implementing AI capabilities across our product suite, with a focus on practical 
                applications that deliver immediate customer value.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6" />
          <h2>Learning</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Currently Reading</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• &quot;Staff Engineer&quot; by Will Larson</li>
                <li>• &quot;The Pragmatic Programmer&quot; (20th Anniversary Edition)</li>
                <li>• &quot;Building Microservices&quot; by Sam Newman</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Technologies I&apos;m Exploring</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Rust</Badge>
                <Badge>WebAssembly</Badge>
                <Badge>Temporal</Badge>
                <Badge>Vector Databases</Badge>
                <Badge>Edge Computing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          <h2>Current Goals</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">Ship 2 major platform improvements this quarter</p>
              <p className="text-sm text-muted-foreground">
                Focus on developer experience and system reliability
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">Publish weekly technical articles</p>
              <p className="text-sm text-muted-foreground">
                Sharing learnings from scaling systems and teams
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">Mentor 5 senior engineers to staff level</p>
              <p className="text-sm text-muted-foreground">
                Investing in the next generation of technical leaders
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">Contribute to 3 open-source projects</p>
              <p className="text-sm text-muted-foreground">
                Giving back to the community that&apos;s given me so much
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Coffee className="h-6 w-6" />
          <h2>Personal</h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">Current Schedule</p>
                <p className="text-sm text-muted-foreground">
                  Deep work blocks in the morning, meetings in the afternoon, 
                  family time in the evenings
                </p>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-2">Outside of Work</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Training for my first marathon</li>
                <li>• Learning to play the guitar</li>
                <li>• Building a home automation system with Raspberry Pi</li>
                <li>• Exploring local coffee shops (always looking for recommendations!)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="pt-8 border-t">
        <p className="text-sm text-muted-foreground italic">
          The idea for this page comes from <Link href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nownownow.com</Link>.
          If you have your own now page, I&apos;d love to see it!
        </p>
      </section>
    </div>
  );
}