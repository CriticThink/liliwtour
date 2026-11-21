export const categories = [
  'All',
  'Nature and Waterfalls',
  'Historical Landmarks',
  'Local Footwear and Products',
  'Cultural Experiences',
  'Food and Local Delicacies',
  'Group Tours',
  'Scenic Views',
]

const raw = [
  ['Nature and Waterfalls', 'Kilangin Falls', 'from-sky-700 to-cyan-500', 'kilangin-falls'],
  ['Nature and Waterfalls', 'Taytay Falls', 'from-teal-700 to-cyan-500', 'taytay-falls'],
  ['Historical Landmarks', 'Saint John the Baptist Parish Church', 'from-red-800 to-orange-600', 'saint-john'],
  ['Historical Landmarks', 'Nagcarlan Underground Cemetery', 'from-stone-700 to-stone-500', 'nagcarlan'],
  ['Local Footwear and Products', 'Liliw Tsinelas', 'from-amber-700 to-yellow-500', 'tsinelas'],
  ['Local Footwear and Products', 'Footwear Shops', 'from-orange-700 to-amber-500', 'footwear-shops'],
  ['Cultural Experiences', 'Heritage Town Tour', 'from-rose-700 to-orange-500', 'heritage-tour'],
  ['Food and Local Delicacies', 'Local Delicacies', 'from-yellow-700 to-orange-400', 'delicacies'],
  ['Group Tours', 'Group Adventure', 'from-forest to-emerald-500', 'group-tour'],
  ['Scenic Views', 'Yambo Lake', 'from-teal-700 to-emerald-500', 'yambo-lake'],
  ['Scenic Views', 'Brenas Farm', 'from-emerald-700 to-teal-500', 'brenas-farm'],
  ['Scenic Views', 'Laguna Countryside', 'from-green-800 to-lime-600', 'countryside'],
]

export const gallery = raw.map(([category, title, color, file]) => ({
  category,
  title,
  color,
  src: `/images/gallery/${file}.jpg`,
}))