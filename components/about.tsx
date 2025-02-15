import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground">
              Motivated and detail-oriented Software Engineering graduate with 11 months of part-time full-stack
              development experience. Skilled in designing and developing scalable web and mobile applications using
              modern technologies like Kotlin, Angular, React, Node.js, and Firebase. Proven ability to deliver projects
              under pressure while continuously improving technical and soft skills.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Location</h3>
                <p className="text-muted-foreground">Aluthgedara, Madiha, Kamburugamuwa, Matara</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Education</h3>
                <p className="text-muted-foreground">
                  BSc. Hons. Software Engineering
                  <br />
                  National School of Business Management (NSBM)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

