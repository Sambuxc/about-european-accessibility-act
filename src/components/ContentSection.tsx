
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const ContentSection = () => {
  return (
    <>
      <CardHeader className="border-b border-gray-800">
        <CardTitle id="about" className="text-2xl text-blue-400">About the European Accessibility Act</CardTitle>
        <CardDescription className="text-gray-300 text-base">
          Aims to promote equal opportunities by ensuring that everyone regardless of ability can access essential digital and physical services across Europe.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-8">
        <section>
          <p className="text-gray-200 mb-4">
            The European Accessibility Act is a law that makes sure products and services—like websites, ATMs, and ticket machines—are easier for everyone to use, including people with disabilities. For example, it means a train ticket machine should have options for people who are blind or have trouble hearing, so everyone can buy a ticket on their own.
          </p>
          <p className="text-gray-300">
            By June 28, 2025, Member States must ensure that products and services comply with the accessibility requirements outlined in the EAA.
          </p>
        </section>

        <section id="resources">
          <h3 className="text-xl font-semibold mb-3 text-green-400">Key Resources</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <a target="_blank" rel="noopener" href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en" title="Official EU site for the European Accessibility Act" className="flex text-gray-200 hover:text-green-400 hover:duration-500">
                <ExternalLink className="mr-2 mt-0.5 text-green-400" size={18} />
                <span>Official EAA Directive Documentation</span>
              </a>
            </li>
            <li className="flex items-start">
              <a target="_blank" rel="noopener" href="https://www.a11yproject.com/checklist/" title="Accessibility (A11y) Requirements Checklist" className="flex text-gray-200 hover:text-green-400 hover:duration-500">
                <ExternalLink className="mr-2 mt-0.5 text-green-400" size={18} />
                <span>Accessibility Requirements Checklist</span>
              </a>
            </li>
            <li className="flex items-start">
              <a target="_blank" rel="noopener" href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction" title="Introduction for Implementating accessibility as a Business" className="flex text-gray-200 hover:text-green-400 hover:duration-500">
                <ExternalLink className="mr-2 mt-0.5 text-green-400" size={18} />
                <span>Introduction for Implementation as a Business</span>
              </a>
            </li>
            <li className="flex items-start">
              <a target="_blank" rel="noopener" href="https://www.w3.org/TR/WCAG22/" title="Web Content Accessibility Guidelines (WCAG) 2.2" className="flex text-gray-200 hover:text-green-400 hover:duration-500">
                <ExternalLink className="mr-2 mt-0.5 text-green-400" size={18} />
                <span>Web Content Accessibility Guidelines (WCAG) 2.2</span>
              </a>
            </li>
            <li className="flex items-start">
              <a target="_blank" rel="noopener" href="https://playfulprogramming.com/collections/art-of-accessibility" className="flex text-gray-200 hover:text-green-400 hover:duration-500" title="9 Chapters of playful programming to learn the best accessibility practices for projects and applications developed in React, Angular and Vue.">
                <ExternalLink className="mr-2 mt-0.5 text-green-400" size={18} />
                <span>The Accessibility Art of Accessibility</span>
              </a>
            </li>
          </ul>
        </section>

        <section id="timeline">
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Implementation Timeline</h3>
          <ul className="space-y-4">
            <li className="flex">
              <div className="w-24 text-gray-400">2019</div>
              <div className="text-gray-200">EAA entered into force</div>
            </li>
            <li className="flex">
              <div className="w-24 text-gray-400">2022</div>
              <div className="text-gray-200">Member States transposed the EAA into national law</div>
            </li>
            <li className="flex">
              <div className="w-24 text-orange-400 font-bold">2025</div>
              <div className="text-white">Accessibility requirements become applicable</div>
            </li>
          </ul>
        </section>

        <section id="links">
          <div className="flex flex-wrap gap-2">
            <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/test-evaluate/tools/list/" title="Web Accessibility Tools List" className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-background hover:border-purple-500 hover:bg-purple-800 hover:text-white">
              <ExternalLink className="mr-2 h-4 w-4" />
              Accessibility Tools
            </a>
          </div>
        </section>
      </CardContent>
    </>
  );
};
