import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, BookOpen, Target, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'now',
  description: "what i'm currently focused on and working on.",
};

export default function NowPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">what i&apos;m doing now</h1>
        <p className="text-muted-foreground">
          last updated: {lastUpdated}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg">
            this is my <Link href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">now page</Link>, 
            inspired by Derek Sivers. it&apos;s a snapshot of what i&apos;m currently focused on in my life and work.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-6 w-6" />
          <h2>work</h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">engineering at triad labs</h3>
              <p className="text-muted-foreground">
                really want to find a balance between engineering and product. currently building products that may be useful to us and other startups.
                also, building a cool little calendar app for myself.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">AI consulting</h3>
              <p className="text-muted-foreground">
                built enough ai products to know what works and what doesn&apos;t. currently helping other startups build their ai products.
                if you need advice, reach out here: <Link href="https://cal.com/ferran" className="text-primary hover:underline">cal.com/ferran</Link>
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
                <li>&quot;Tipping Point&quot; by Malcolm Gladwell</li>
                <li>&quot;Beginning of Infinity&quot; by David Deutsch</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Technologies I&apos;m Exploring</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>ai</Badge>
                <Badge>convex</Badge>
                <Badge>product</Badge>
                <Badge>postgres</Badge>
                <Badge>typescript</Badge>
                <Badge>next.js</Badge>
                <Badge>supabase</Badge>
                <Badge>vercel</Badge>
                <Badge>tailwind</Badge>
                <Badge>shadcn</Badge>
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
              <p className="font-medium">build a cool little calendar app for myself</p>
              <p className="text-sm text-muted-foreground">
                i want to build a cool little calendar app for myself.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">publish weekly technical articles</p>
              <p className="text-sm text-muted-foreground">
                sharing learnings from building products and scaling systems
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-1 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="font-medium">get better at distilling complex ideas into simple ones</p>
              <p className="text-sm text-muted-foreground">
                i want to be able to explain complex ideas in a way that is easy to understand.
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
                <p className="font-medium">location</p>
                <p className="text-sm text-muted-foreground">san jose, ca</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">current schedule</p>
                <p className="text-sm text-muted-foreground">
                  i try to do deep work in the morning, and then work on side projects in the afternoon.
                </p>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-2">Outside of Work</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>learning to play the guitar</li>
                <li>tryna hit a PRs at the gym</li>
                <li>exploring local coffee shops (always looking for recommendations!)</li>
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