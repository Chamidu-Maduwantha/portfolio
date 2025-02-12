import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const EXPERIENCE = [
  {
    title: "Full-Stack Developer (Part-Time)",
    company: "Unicent Apex",
    period: "11 months",
    responsibilities: [
      "Designed, developed, and maintained web applications using Angular, Node.js, and MongoDB",
      "Implemented RESTful APIs for seamless frontend-backend communication",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Optimized application performance and bug fixes to enhance user experience",
      "Gained hands-on experience with Agile methodologies and Git version control",
    ],
  },
]

const EDUCATION = [
  {
    degree: "BSc. Hons. Software Engineering",
    institution: "National School of Business Management (NSBM)",
    period: "2020 - 2023",
    details: "Affiliated with the University of Plymouth, United Kingdom",
  },
  {
    degree: "GCE Advanced Level",
    institution: "St. Thomas' College, Matara",
    period: "2019",
    details: "Mathematics Stream",
  },
  {
    degree: "GCE Ordinary Level",
    institution: "St. Thomas' College, Matara",
    period: "2016",
    details: "",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Work Experience</h3>
            {EXPERIENCE.map((job) => (
              <Card key={job.title} className="mb-4">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.company} | {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {job.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Education</h3>
            {EDUCATION.map((edu) => (
              <Card key={edu.degree} className="mb-4">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>
                    {edu.institution} | {edu.period}
                  </CardDescription>
                </CardHeader>
                {edu.details && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

