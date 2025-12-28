import React from "react";

interface NPCCardProps {
  name: string;
  pronouns: string;
  image: string;
  race?: string;
  role?: string;
  faction?: string;
  location?: string;
  description?: string;
}

export const NPCCard: React.FC<NPCCardProps> = ({
  name,
  pronouns,
  image,
  race,
  role,
  faction,
  location,
  description,
}) => (
  <div className="infobox">
    <a href={image} target="_blank" rel="noopener">
      <img src={image} alt={name} className="wiki-image" />
    </a>
    <h3>{name}</h3>
	{pronouns && <div><strong>Pronouns:</strong> {pronouns}</div>}
    {race && <div><strong>Race:</strong> {race}</div>}
    {role && <div><strong>Role:</strong> {role}</div>}
    {faction && <div><strong>Faction:</strong> {faction}</div>}
    {location && <div><strong>Location:</strong> {location}</div>}
    {description && <p>{description}</p>}
  </div>
);
