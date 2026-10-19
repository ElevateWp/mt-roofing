export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'MT Roofing and Damp Proofing',
  legalName: 'MT Roofing and Damp Proofing',
  tagline: 'Roofing and damp proofing services across Sevenoaks and Kent.',
  primaryLocation: {
    street: '17 Manor Rd', suite: '', city: 'Sundridge, Sevenoaks', state: 'Kent', postalCode: 'TN14 6DL', country: 'United Kingdom',
    directions: '17 Manor Rd, Sundridge, Sevenoaks TN14 6DL, United Kingdom',
    landmarks: '74GC+RF Sevenoaks, United Kingdom',
  },
  contact: { phone: '+44 7951 960060', emergencyPhone: '+44 7951 960060', whatsapp: '+44 7951 960060', website: 'https://mtroofing.co.uk/' },
  identityHighlights: ['Roofing contractor', 'Sevenoaks, Kent'],
  schedule: [
    { day: 'Monday', hours: 'Open 24 hours' }, { day: 'Tuesday', hours: 'Open 24 hours' },
    { day: 'Wednesday', hours: 'Open 24 hours' }, { day: 'Thursday', hours: 'Open 24 hours' },
    { day: 'Friday', hours: 'Open 24 hours' }, { day: 'Saturday', hours: 'Open 24 hours' }, { day: 'Sunday', hours: 'Open 24 hours' },
  ],
  verifiedStats: [], accreditations: [],
};

const teamId = 'mt-roofing-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'mt-roofing-team', name: 'MT Roofing Team', title: 'Roofing and damp proofing team',
  qualifications: '', specialization: 'Roofing and damp proofing', experienceYears: 0,
  bio: 'The MT Roofing and Damp Proofing team provides roofing and damp proofing services in Sevenoaks and surrounding areas.',
  philosophy: 'Clear communication, careful workmanship and attention to detail on every project.',
  education: [], memberships: [], specialties: ['Roofing', 'Damp proofing', 'Roof inspections', 'Emergency roof repairs'],
  image: '/images/jsroof-stock-01.jpg', warmImage: '/images/jsroof-stock-02.jpg',
}];

const photos = Array.from({ length: 17 }, (_, i) => `/images/jsroof-stock-${String(i + 1).padStart(2, '0')}.jpg`);

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], photo: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Talk with the team about your property, what you have noticed and the options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us about your project', duration: 'Initial conversation', description: 'Share what you have noticed and what you would like to have done.', clinicalDetails: 'The team discusses your property and project requirements.' },
    { stepNumber: 2, title: 'Inspect and quote', duration: 'By arrangement', description: 'Arrange an on-site assessment and a quote for the agreed work.', clinicalDetails: 'The scope and price are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the agreed work', duration: 'As agreed', description: 'The MT Roofing team carries out the agreed work using quality materials.', clinicalDetails: 'Scheduling depends on the project, site and weather.' },
    { stepNumber: 4, title: 'Review the finished work', duration: 'On completion', description: 'The team shares updates and photos of the completed work.', clinicalDetails: 'Ask the team about any part of the finished project.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'The team discusses the project scope, timing and access.', careProtocol: 'Share your address, project details and any access considerations.' },
    { period: 'During work', expectedSensations: 'Work duration varies with the property and project scope.', careProtocol: 'Keep clear of the work area and follow the team’s site guidance.' },
    { period: 'After work', expectedSensations: 'The finished roof is ready for a review.', careProtocol: 'Contact the team with any questions about the completed work.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Property and project requirements', 'Materials and agreed scope', 'Access and site conditions'], whatIsIncluded: ['Discussion of the work required', 'An agreed scope and quote', 'Timing confirmed before work begins'], note: 'Price and timing are confirmed after the team discusses your property and the work required.' },
  beforeAfterCase: { category: name, clinicalContext: 'Project imagery is illustrative. The work required depends on the property and agreed project scope.', beforeLabel: 'Project reference', afterLabel: 'Project reference', beforeImage: photos[photo % photos.length], afterImage: photos[(photo + 1) % photos.length], timeframe: 'Illustrative project images' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${name.toLowerCase()} involve?`, answer: `${description} The team can discuss your roof, the work involved and suitable next steps.` },
    { question: 'What affects the quote?', answer: 'The size and condition of the roof, selected materials, access and agreed work all affect the quote. The team will discuss these details with you.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the roof, materials, access, project scope and weather. The team will discuss a suitable schedule with you.' },
    { question: 'How can I prepare for an assessment?', answer: 'Share what you have noticed and any access details. Photos of the affected area can help explain the issue. Please do not access unsafe areas or work at height.' },
    { question: 'How do I arrange a quote?', answer: 'Call MT Roofing and Damp Proofing on +44 7951 960060 or use the quote form to discuss your property and next steps.' },
  ],
});

export const SERVICES: ServiceDetail[] = [
  makeService('flat-roofing', 'Flat Roofing Installation & Repair', 'Flat roofing installation and repair in Sevenoaks and Kent.', 'MT Roofing and Damp Proofing provides flat roofing installation and repair. Contact the team to discuss your roof, the work required and a quote.', ['A flat roof needing repair', 'A planned flat roof installation', 'A concern about water ingress'], ['Discuss the condition and requirements of your flat roof', 'Agree a clear scope of work and quote', 'Arrange the work with the team'], 4),
  makeService('roof-replacement', 'Roof Replacement', 'Roof replacement for homes and properties across Kent.', 'When a roof has reached the end of its life or suffered significant damage, the team can discuss replacement options and provide a quote.', ['An ageing or damaged roof', 'A roof requiring replacement', 'Planning a roofing project'], ['Discuss suitable replacement options', 'Arrange an inspection and quote', 'Agree the work before it begins'], 2),
  makeService('roof-inspection', 'Roof Inspection', 'A closer look at the condition of your roof.', 'A roof inspection can help assess its overall condition and identify areas that may need attention. Contact MT Roofing and Damp Proofing to arrange an inspection and quote.', ['A roof condition assessment', 'A concern after bad weather', 'Planning maintenance or repair work'], ['Discuss the areas you are concerned about', 'Understand potential next steps', 'Receive a no-obligation quote'], 10),
  makeService('roof-repairs', 'Roof Repairs', 'Roof repairs for leaks, wear and storm damage.', 'The team can assess roof damage and discuss repairs for leaks and other roofing problems. Contact MT Roofing and Damp Proofing to arrange a quote.', ['A roof leak or water ingress', 'Storm damage or loose materials', 'Roofing that needs repair'], ['Discuss the issue with the team', 'Agree repair work and costs before starting', 'Arrange urgent repair enquiries by phone'], 3),
  makeService('chimney-repairs', 'Chimney Repairs', 'Chimney repair and inspection services in Kent.', 'MT Roofing and Damp Proofing can inspect chimney-related roofing concerns and discuss suitable repair work for your property.', ['Visible chimney damage', 'Water ingress near a chimney', 'A chimney needing inspection'], ['Discuss visible concerns and next steps', 'Arrange an assessment and quote', 'Confirm agreed work before it begins'], 5),
  makeService('pitched-roofing', 'Pitched Roofing', 'Pitched roof installation and repair services.', 'The team provides pitched roofing installation and repair. Get in touch to discuss your property, roofing requirements and a quote.', ['A pitched roof installation', 'Repairs to a pitched roof', 'A roof needing professional assessment'], ['Discuss roofing requirements for your property', 'Arrange an inspection and quote', 'Plan the work with the team'], 7),
  makeService('damp-proofing', 'Damp Proofing', 'Damp proofing services for properties in Sevenoaks and Kent.', 'Contact MT Roofing and Damp Proofing to discuss damp concerns at your property and arrange an inspection and no-obligation quote.', ['Damp concerns in a property', 'A suspected damp issue', 'An assessment before repair work'], ['Discuss the signs you have noticed', 'Arrange a damp inspection', 'Receive a clear quote for agreed work'], 8),
  makeService('guttering', 'Guttering', 'Guttering installation and repair for your property.', 'The team provides guttering services. Discuss installation or repair requirements and arrange a quote for your property.', ['Damaged or leaking gutters', 'Guttering requiring replacement', 'Concerns with rainwater drainage'], ['Discuss guttering work with the team', 'Arrange an inspection and quote', 'Confirm the scope before work begins'], 12),
  makeService('fascias-soffits', 'Fascias & Soffits Installation & Repair', 'Fascia and soffit installation and repair in Kent.', 'MT Roofing and Damp Proofing provides fascia and soffit installation and repair. Contact the team to discuss your property and project requirements.', ['Damaged or worn fascias', 'Soffits needing repair or replacement', 'Roofline improvements'], ['Discuss roofline options', 'Arrange an inspection and quote', 'Agree project details in advance'], 13),
  makeService('emergency-roof-repairs', 'Emergency Roof Repairs', 'Urgent roofing help for leaks and roof damage.', 'For urgent roof damage or leaks, call MT Roofing and Damp Proofing on +44 7951 960060 to discuss the issue and next steps.', ['An active roof leak', 'Storm or sudden roof damage', 'Urgent roofing concerns'], ['Speak with the team by phone', 'Describe the issue and property location', 'Discuss safe next steps and availability'], 16),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water entering through the roof', 'A growing damp patch during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'Keep clear of electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Call MT Roofing and Damp Proofing to discuss the leak and arrange next steps when the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Storm damage', urgency: 'Urgent (Within 24 hours)', symptoms: ['Roofing materials displaced by wind', 'An exposed area of roof'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or attempt repairs yourself.'], clinicTreatment: 'The team can discuss an inspection when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'A sagging or changing ceiling'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'Contact a qualified professional if electrical power needs to be isolated.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; roof work can be discussed when the area is secure.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'signs-your-roof-needs-repair', title: 'Signs your roof may need repair', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Leaks, damaged roofing materials and damp patches can be reasons to arrange a roof assessment.', leadImage: photos[2], relatedServiceSlug: 'roof-repairs', content: { intro: 'Roof issues are not always obvious from inside the home. A leak or visible damage is a useful reason to ask a roofing contractor to assess the roof and discuss next steps.', sections: [{ heading: 'Look for signs from the ground', body: 'After bad weather, look for displaced materials or damage from a safe position on the ground. Do not climb onto a roof to inspect or repair it yourself.' }, { heading: 'Notice changes inside', body: 'Water marks or damp patches may point to a roof leak. Keep people and belongings away from affected areas and be cautious around electrical fittings.' }] } },
  { slug: 'planning-a-roof-replacement', title: 'Planning a roof replacement', category: 'Roof Replacement', readTime: '4 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Discuss roof condition, roof materials, access and timing before replacement work begins.', leadImage: photos[4], relatedServiceSlug: 'roof-replacement', content: { intro: 'A roof replacement starts with understanding the property, the roof condition and the work involved. Discuss materials and project scope with your roofing contractor before agreeing on a plan.', sections: [{ heading: 'Talk through the roof and materials', body: 'The existing roof and the needs of the property help guide material options and the scope of work.' }, { heading: 'Agree timing and access', body: 'Access, site conditions and weather can affect scheduling. Confirm the arrangements and quote before work starts.' }] } },
  { slug: 'roof-maintenance-and-gutters', title: 'Roof maintenance and guttering', category: 'Guttering', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Good drainage and regular attention help care for your roof and property.', leadImage: photos[12], relatedServiceSlug: 'guttering', content: { intro: 'Gutters form part of the roof drainage system. If they are damaged or not draining as expected, discuss the condition with a roofing contractor.', sections: [{ heading: 'Pay attention to drainage', body: 'Overflowing or damaged guttering may need maintenance or replacement. Describe what you have noticed when arranging an assessment.' }, { heading: 'Keep access safe', body: 'Avoid climbing ladders or working at height without the right training and equipment. Contact a qualified contractor to discuss the work.' }] } },
  { slug: 'what-to-do-after-storm-roof-damage', title: 'What to do after storm damage to a roof', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Keep clear of loose roofing materials and contact a contractor to discuss safe next steps.', leadImage: photos[16], relatedServiceSlug: 'roof-repairs', content: { intro: 'Storms can dislodge or damage roofing materials. Keep people away from affected areas and do not climb onto the roof to inspect it.', sections: [{ heading: 'Make the area safe', body: 'Keep clear of loose materials and move people and belongings away from any water entering the property. Be cautious around wet electrical fittings.' }, { heading: 'Get advice', body: 'Photograph visible damage from the ground if safe, then contact a roofing contractor to discuss inspection and repairs.' }] } },
];
