
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Contribution } from "@/data/games";

interface ProjectContributionsProps {
  contributions: Contribution[] | undefined;
}

const ProjectContributions = ({ contributions }: ProjectContributionsProps) => {
  // Only render if contributions exist and have valid data
  if (!contributions || contributions.length === 0) {
    return null;
  }

  const validContributions = contributions.filter(contribution => 
    contribution.module?.trim() && 
    contribution.name?.trim() && 
    contribution.shortDescription?.trim()
  );

  if (validContributions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">My Contributions</h3>
      <div className="grid gap-4">
        {validContributions.map((contribution) => (
          <Card key={contribution.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Contribution Image */}
              {contribution.image && contribution.image.trim() && (
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src={contribution.image} 
                    alt={contribution.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="flex-1">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      {contribution.module}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {contribution.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {contribution.shortDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Full Description */}
                  {contribution.fullDescription && contribution.fullDescription.trim() && (
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {contribution.fullDescription}
                      </p>
                    </div>
                  )}
                  
                  {/* Bullet Points */}
                  {contribution.bulletPoints && contribution.bulletPoints.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {contribution.bulletPoints
                          .filter(point => point.trim())
                          .map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectContributions;
