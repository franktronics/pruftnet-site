import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/accordion'

const faqs = [
  {
    question: 'What is Pruftnet?',
    answer:
      'Pruftnet is a visual network analysis tool that combines real-time packet capture with an intuitive visual workflow builder. It helps you understand, analyze, and troubleshoot networks without writing complex scripts.',
  },
  {
    question: 'Is Pruftnet really free?',
    answer:
      'Yes! Pruftnet is completely free and open source. You can use it, modify it, and contribute to its development.',
  },
  {
    question: 'What operating systems are supported?',
    answer:
      'Pruftnet works on Windows, macOS, and Linux. It is available as both a desktop application and a web application.',
  },
  {
    question: 'Do I need coding skills to use Pruftnet?',
    answer:
      'No. The visual workflow builder allows you to create sophisticated network analysis routines using a drag-and-drop interface. No coding required.',
  },
  {
    question: 'How does Pruftnet compare to Wireshark?',
    answer:
      'While Wireshark is excellent for packet inspection, Pruftnet adds visual network topology mapping and a unique workflow builder for automated analysis. Think of it as Wireshark meets visual programming.',
  },
  {
    question: 'Is my network data secure?',
    answer:
      'Absolutely. Pruftnet runs locally on your machine. Your network data never leaves your device unless you explicitly choose to export it.',
  },
]

export function Faq() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Pruftnet
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
