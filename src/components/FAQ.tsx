import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What file formats does DataViz support?",
      answer: "Currently, DataViz supports CSV file uploads. We automatically detect delimiters and handle various encoding formats. Support for Excel, JSON, and other formats is coming soon."
    },
    {
      question: "How secure is my data?",
      answer: "We implement enterprise-grade security with multi-factor authentication, role-based access control, and secure session management. Your data is encrypted and protected at all times."
    },
    {
      question: "Can I download my analysis results?",
      answer: "Yes! You can download comprehensive reports including summaries, visualizations, and statistical analysis. Reports are available in  HTML formats."
    },
    {
      question: "How does the AI chat feature work?",
      answer: "Our AI-powered chat allows you to ask questions about your data in natural language. It can generate insights, create visualizations, perform statistical analysis, and help you explore your dataset interactively."
    },
    {
      question: "Is there a limit on dataset size?",
      answer: "DataViz can handle datasets with millions of rows efficiently. For optimal performance, we recommend datasets under 200MB. Larger datasets may require additional processing time."
    },
    {
      question: "Can I share my projects with others?",
      answer: "Yes! You can share your projects with other by downloading reports or exporting visualizations. Collaborative features are in development and will be available soon."
    },
    {
      question: "What types of visualizations are available?",
      answer: "DataViz offers a wide range of visualizations including bar charts, line graphs, scatter plots, heatmaps, histograms, box plots, and more. You can customize them by axis."
    },
    {
      question: "How often is DataViz updated?",
      answer: "We continuously improve DataViz with new features, enhancements, and bug fixes. Major updates are rolled out quarterly, with minor updates and improvements happening regularly."
    },
    
  ];

  return (
    <section id="faq" className="py-20 bg-background">{/* Added id for navigation */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Get answers to common questions about DataViz features and capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-2xl px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline font-heading hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 font-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;