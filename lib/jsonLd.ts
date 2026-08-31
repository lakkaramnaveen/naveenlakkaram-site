// JSON.stringify doesn't escape "</script>" (or other "<" sequences), so
// injecting its output into a <script> tag via dangerouslySetInnerHTML can
// let a "<" in any string value break out of the tag early. our JSON-LD
// payloads are built entirely from our own constants today, but escaping
// here means that stays true even if a future edit pulls in less-trusted
// content, at zero cost to valid JSON-LD (parsers unescape < fine).
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
