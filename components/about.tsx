import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 green-gradient-bg">
      <div className="container px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-emerald-800">About Me</h2>
        <Card className="section-animation green-gradient-border shadow-lg border-emerald-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg leading-relaxed text-emerald-800">
                  I am a recent graduate from UC Riverside with a Bachelor's degree in Computational Mathematics and a
                  minor in Data Science. Currently working as a Technical Analyst at Esri, I combine my strong
                  mathematical foundation with practical technical skills to solve complex problems.
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-emerald-800">
                  My experience spans across data analysis, GIS technology, and software development. I'm passionate
                  about using technology to create meaningful solutions and am always eager to learn and adapt to new
                  challenges in the tech industry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

