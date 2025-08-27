'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate newsletter signup
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Stay Updated
        </CardTitle>
        <CardDescription>
          Get notified when I publish new articles about engineering leadership and technical insights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className="w-full sm:w-auto"
          >
            {status === 'loading' && 'Subscribing...'}
            {status === 'success' && 'Subscribed!'}
            {status === 'idle' && 'Subscribe'}
            {status === 'error' && 'Try again'}
          </Button>
        </form>
        {status === 'success' && (
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            Thanks for subscribing! Check your email to confirm.
          </p>
        )}
      </CardContent>
    </Card>
  );
}