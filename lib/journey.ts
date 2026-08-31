// the arc behind the résumé: what actually changed, role to role. kept to
// facts already present in lib/experience.ts and the education/cert data -
// framed as a throughline, not new claims.

export interface JourneyChapter {
  year: string;
  place: string;
  title: string;
  body: string;
}

export const JOURNEY: JourneyChapter[] = [
  {
    year: "2020",
    place: "Hyderabad, India",
    title: "Where correctness had a dollar sign on it.",
    body: "I started at Capgemini, on Discover Financial Services' fraud team, building the backend APIs behind Orion — a fraud-investigation platform call center agents used to resolve real cases in real time. My first lesson in engineering wasn't a framework, it was consequence: inside a 20+ microservice architecture, a slow query or a bad deploy wasn't an abstraction, it showed up as a stuck case and a customer waiting on hold.",
  },
  {
    year: "2022",
    place: "Lee's Summit, Missouri",
    title: "Going back for the parts I'd skipped.",
    body: "Two years in, I could ship features, but I wanted the theory under the tools I'd been using by feel. I moved to the US for a Master's in Computer Science at the University of Central Missouri — the point where things I'd been doing empirically (indexing, concurrency, system design trade-offs) got names and proofs.",
  },
  {
    year: "2024",
    place: "United States",
    title: "From application code to the infrastructure under it.",
    body: "My first US role, at Techsara, moved me a layer down the stack — building checks for a network-device validation tool that caught bad configurations before they ever touched a production network. It was less about writing features and more about writing the tests that stop someone else's bad day.",
  },
  {
    year: "2025",
    place: "United States — present",
    title: "Now: owning services inside something much bigger than me.",
    body: "At CloudSky Software I maintain 5 of 1,000+ Java microservices in a network-automation ecosystem — small enough to know deeply, embedded in something too large for any one person to hold in their head. That scale is also where AI-assisted tooling stopped being a novelty and became part of how I actually work: Copilot and LLM APIs for the first pass, my judgment for the parts that matter.",
  },
];
