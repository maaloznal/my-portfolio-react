export interface DataReviwes {
  id: number,
  name: string,
  location: string,
  socialMedia: string[],
  rating: number,
  text: string
}

export const reviews: DataReviwes[] = [
  {
    id: 1,
    name: 'Emily Johnson',
    location: 'USA, California',
    socialMedia: ['facebook', 'twitter', 'linkedin'],
    rating: 5,
    text: 'Bagavdin is a talented developer who doesn’t just write code; he creates products that inspire and simplify life.'
  },
  {
    id: 2,
    name: 'Michael Smith',
    location: 'Canada, Toronto',
    socialMedia: ['instagram', 'twitter', 'linkedin'],
    rating: 4,
    text: 'Working with Bagavdin was a pleasure. He pays attention to detail and pursuit of excellence.'
  },
  {
    id: 3,
    name: 'Sophia Lee',
    location: 'UK, London',
    socialMedia: ['facebook', 'instagram', 'linkedin'],
    rating: 3,
    text: 'Bagavdin’s work is exceptional. He makes complex tasks look easy.'
  },
  {
    id: 4,
    name: 'James Brown',
    location: 'Australia, Sydney',
    socialMedia: ['twitter', 'instagram', 'facebook'],
    rating: 2,
    text: 'Bagavdin is a true professional with a great eye for design and functionality.'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    location: 'Germany, Berlin',
    socialMedia: ['linkedin', 'facebook', 'twitter'],
    rating: 1,
    text: 'I highly recommend Bagavdin for any web development project.'
  },
  {
    id: 6,
    name: 'Liam Taylor',
    location: 'France, Paris',
    socialMedia: ['instagram', 'twitter', 'linkedin'],
    rating: 2,
    text: 'Bagavdin’s attention to detail is unmatched. He delivers quality work.'
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    location: 'Spain, Madrid',
    socialMedia: ['facebook', 'instagram', 'twitter'],
    rating: 3,
    text: 'Bagavdin is a creative and reliable developer. I’m impressed with his work.'
  },
  {
    id: 8,
    name: 'Noah Anderson',
    location: 'Italy, Rome',
    socialMedia: ['linkedin', 'twitter', 'facebook'],
    rating: 1,
    text: 'Bagavdin’s solutions are innovative and user-friendly.'
  },
  {
    id: 9,
    name: 'Ava Thomas',
    location: 'Japan, Tokyo',
    socialMedia: ['instagram', 'facebook', 'linkedin'],
    rating: 4,
    text: 'Bagavdin is a great developer with a deep understanding of web technologies.'
  },
  {
    id: 10,
    name: 'William Jackson',
    location: 'Brazil, Rio de Janeiro',
    socialMedia: ['twitter', 'instagram', 'facebook'],
    rating: 5,
    text: 'Bagavdin’s work is always on time and of the highest quality.'
  }
];