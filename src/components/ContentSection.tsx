
import React from "react";
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

export const ContentSection = () => {
  return (
    <>
      <CardHeader className="border-b border-gray-800">
        <CardTitle id="about" className="text-2xl text-blue-400">About the European Accessibility Act</CardTitle>
        <CardDescription className="text-gray-300 text-base">
          Making products and services accessible across the EU
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-8">
        <section>
          <p className="text-gray-200 mb-4">
            The European Accessibility Act (EAA) is a directive that aims to improve the functioning of the internal market for accessible products and services, by removing barriers created by divergent rules in Member States.
          </p>
          <p className="text-gray-300">
            By June 28, 2025, Member States must ensure that products and services comply with the accessibility requirements outlined in the EAA.
          </p>
        </section>

        <section id="resources">
          <h3 className="text-xl font-semibold mb-3 text-green-400">Key Resources</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FileText className="mr-2 mt-0.5 text-green-400" size={18} />
              <span className="text-gray-200">Official EAA Directive Documentation</span>
            </li>
            <li className="flex items-start">
              <FileText className="mr-2 mt-0.5 text-green-400" size={18} />
              <span className="text-gray-200">Accessibility Requirements Checklist</span>
            </li>
            <li className="flex items-start">
              <FileText className="mr-2 mt-0.5 text-green-400" size={18} />
              <span className="text-gray-200">Implementation Guidelines for Businesses</span>
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
          <h3 className="text-xl font-semibold mb-4 text-purple-400">External Links</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="border-gray-700 hover:border-purple-500 hover:bg-gray-800">
              <ExternalLink className="mr-2 h-4 w-4" />
              Official EU Site
            </Button>
            <Button variant="outline" className="border-gray-700 hover:border-purple-500 hover:bg-gray-800">
              <ExternalLink className="mr-2 h-4 w-4" />
              Compliance Guide
            </Button>
            <Button variant="outline" className="border-gray-700 hover:border-purple-500 hover:bg-gray-800">
              <ExternalLink className="mr-2 h-4 w-4" />
              Accessibility Tools
            </Button>
          </div>
        </section>
      </CardContent>
    </>
  );
};
