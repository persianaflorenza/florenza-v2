import { IconType } from 'react-icons/lib';

export type FeatureCardProps = {
  icon: IconType;
  iconClassName?: string;
  title: string;
  description?: string;
};

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="min-h-24 text-navy-500 rounded-lg bg-gray-50 p-4 flex items-center">
    <Icon className="h-16 w-16 mr-4" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);
