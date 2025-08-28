import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "about",
  description: "learn more about ferran, founding engineer at triad labs, inc.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">about me</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            i&apos;m {siteConfig.author.name}, currently serving as{" "}
            <span className="font-mono">{siteConfig.author.role}</span> at{" "}
            {siteConfig.author.company}. i&apos;ve worked at various startups,
            from building for pilots to building for enterprise. i just want to
            build things that work.
          </p>

          <p className="text-lg leading-relaxed">
            my journey started when i took a visual basic class when i was 11
            and have been coding since. there&apos;s something inherently
            satisfying about putting things together like lego blocks, only this
            time, they serve a purpose.
          </p>

          <p className="text-lg leading-relaxed">
            as the first engineer at triad labs, i&apos;ve been able to build
            without the constraints of a large company. i&apos;ve been able to
            build things that don&apos;t scale, and i&apos;ve been able to build
            things that do. and for that, i&apos;m grateful.
          </p>
          <p className="text-lg leading-relaxed">
            just build it. don&apos;t overthink it.
          </p>
        </div>
      </section>

      {/* <Separator /> */}

      {/* <section className="space-y-6">
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

      <Separator /> */}

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">speaking & writing</h2>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            i regularly share my experiences and insights through writing and
            speaking engagements. my articles focus on practical solutions to
            real-world engineering challenges, from scaling systems to building
            effective teams.
          </p>

          <p>topics i frequently cover include:</p>
          <ul>
            <li>Scaling from startup to enterprise</li>
            <li>Building engineering culture</li>
            <li>System design and architecture patterns</li>
            <p className="text-md mt-2">
              ...whatever i&apos;m interested in, honestly 🤷‍♂️
            </p>
          </ul>
        </div>
      </section>

      {/* <Separator /> */}

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">connect</h2>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href={`mailto:${siteConfig.author.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              email me
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4 mr-2" />
              twitter
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              github
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              linkedin
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          i&apos;m always interested in connecting with fellow technologists,
          entrepreneurs, and anyone passionate about building great products.
          feel free to reach out!
        </p>
      </section>
    </div>
  );
}
