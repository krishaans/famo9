export interface FarmingStep {
  title: string;
  description: string;
  duration?: string;
  tips?: string[];
}

export interface VegetableGuide {
  id: string;
  name: string;
  image: string;
  description: string;
  climate: string;
  season: string;
  steps: FarmingStep[];
}

export const farmingGuides: VegetableGuide[] = [
  {
    id: 'carrot',
    name: 'Carrot',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=500',
    description: 'Carrots are root vegetables that are easy to grow and rich in nutrients.',
    climate: 'Cool temperatures between 16-21°C',
    season: 'Year-round in suitable climates',
    steps: [
      {
        title: 'Land Preparation',
        description: 'Prepare well-draining, loose soil free from stones. Till to a depth of 12 inches and remove any rocks or debris.',
        duration: '1-2 weeks',
        tips: [
          'Soil pH should be between 6.0-6.8',
          'Add organic matter to improve soil structure',
          'Ensure soil is free from nematodes'
        ]
      },
      {
        title: 'Sowing',
        description: 'Plant seeds 1/4 inch deep and 2 inches apart in rows that are 12 inches apart.',
        duration: '1-2 days',
        tips: [
          'Keep soil consistently moist until germination',
          'Consider succession planting every 2-3 weeks',
          'Thin seedlings to 2 inches apart when they reach 2 inches tall'
        ]
      },
      {
        title: 'Maintenance',
        description: 'Regular weeding and watering is essential. Water deeply but less frequently to encourage deep root growth.',
        duration: 'Throughout growing period',
        tips: [
          'Mulch to retain moisture and prevent weeds',
          'Avoid high-nitrogen fertilizers',
          'Watch for carrot rust flies and other pests'
        ]
      },
      {
        title: 'Harvesting',
        description: 'Harvest when roots reach desired size, typically when the crown is 1/2 to 3/4 inch in diameter.',
        duration: '70-80 days after planting',
        tips: [
          'Harvest in the morning for best flavor',
          'Gently lift from soil to avoid breaking',
          'Leave some carrots in ground for seed production if desired'
        ]
      }
    ]
  },
  {
    id: 'tomato',
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=500',
    description: 'Tomatoes are warm-season vegetables that require full sun and regular care.',
    climate: 'Warm temperatures between 21-29°C',
    season: 'Spring to Summer',
    steps: [
      {
        title: 'Land Preparation',
        description: 'Choose a sunny location with well-draining soil. Add organic matter and till to a depth of 12 inches.',
        duration: '1-2 weeks',
        tips: [
          'Soil pH should be 6.0-6.8',
          'Add compost or aged manure',
          'Consider raised beds for better drainage'
        ]
      },
      {
        title: 'Planting',
        description: 'Plant seedlings deeper than they were in their pots, up to their first true leaves.',
        duration: '1-2 days',
        tips: [
          'Space plants 2-3 feet apart',
          'Install support structures at planting time',
          'Water deeply after planting'
        ]
      },
      {
        title: 'Care and Maintenance',
        description: 'Regular watering, fertilizing, and pruning are essential for healthy growth.',
        duration: 'Throughout growing period',
        tips: [
          'Remove suckers for indeterminate varieties',
          'Maintain consistent moisture',
          'Apply balanced fertilizer monthly'
        ]
      },
      {
        title: 'Harvesting',
        description: 'Harvest when fruits are firm and fully colored but still slightly soft to touch.',
        duration: '60-80 days after transplanting',
        tips: [
          'Pick regularly to encourage production',
          'Harvest before full ripeness for storage',
          'Remove all fruits before first frost'
        ]
      }
    ]
  }
];