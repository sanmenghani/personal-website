import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Contact Information</CardTitle>
              <CardDescription className="text-emerald-600">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <a
                href="mailto:sanaya.menghani@gmail.com"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Mail className="h-4 w-4 text-emerald-600" />
                </div>
                sanaya.menghani@gmail.com
              </a>
              <a
                href="tel:+19493156235"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Phone className="h-4 w-4 text-emerald-600" />
                </div>
                (949) 315-6235
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Github className="h-4 w-4 text-emerald-600" />
                </div>
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Linkedin className="h-4 w-4 text-emerald-600" />
                </div>
                LinkedIn
              </a>
            </CardContent>
          </Card>
          <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Send a Message</CardTitle>
              <CardDescription className="text-emerald-600">I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input
                  placeholder="Name"
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
                <Textarea
                  placeholder="Message"
                  className="min-h-[100px] border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

