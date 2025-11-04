'use client'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Project Data
const projectData = {
    badge: 'React 18',
    badgeColor: 'bg-blue-100 text-blue-800',
    title: 'Social Media Analytics Platform',
    description: 'A comprehensive social media analytics platform that aggregates data from multiple social networks, providing insights, sentiment analysis, and competitor tracking for digital marketers and brands.',
    meta: {
        role: 'Developer',
        duration: '8 months',
        year: '2023-2024',
        industry: 'SaaS / Marketing'
    },
    techStack: ['React 18', 'TypeScript', 'Redux Toolkit', 'React Query', 'TailwindCSS', 'Recharts', 'Vite'],
    overview: {
        problem: 'Digital marketers were struggling to manage multiple social media platforms, manually tracking metrics, and lacking comprehensive insights into their performance.',
        solution: 'We built a unified platform using React 18\'s concurrent features and modern state management patterns to deliver real-time analytics, automated reporting, and competitor insights - helping teams save 20+ hours per week.'
    },
    features: [
        {
            title: 'Multi-Platform Integration',
            description: 'Connect Instagram, Twitter, Facebook, and LinkedIn with a unified dashboard and real-time data synchronization.'
        },
        {
            title: 'Advanced Analytics',
            description: 'Track engagement metrics, audience demographics, post performance, and growth trends with AI-powered sentiment analysis.'
        },
        {
            title: 'Content Scheduler',
            description: 'Schedule posts across platforms with best time recommendations, bulk operations, and cross-platform preview.'
        },
        {
            title: 'Competitor Analysis',
            description: 'Monitor competitor accounts, benchmark performance metrics, and gain strategic insights from their content.'
        }
    ],
    technicalArchitecture: {
        modernReactPatterns: [
            'React 18 with concurrent rendering features',
            'Custom hooks for reusable data fetching logic',
            'Compound components pattern for flexibility',
            'Error boundaries for graceful error handling'
        ],
        stateManagement: [
            'Redux Toolkit for global app state (auth, theme)',
            'React Query for server state and caching',
            'Zustand for lightweight UI state management',
            'Smart polling with WebSocket fallback'
        ],
        performanceOptimizations: [
            'Code splitting by route with lazy loading',
            'React.memo and useMemo for expensive operations',
            'Virtual scrolling for large data lists',
            'Bundle reduced from 1.2MB to 450KB'
        ]
    },
    codeExample: {
        title: 'Custom Hook for Data Fetching',
        code: `// useAnalytics.ts
import { useQuery } from '@tanstack/react-query'

export function useAnalytics(
  accountId: string,
  dateRange: DateRange
) {
  return useQuery({
    queryKey: ['analytics', accountId, dateRange],
    queryFn: () => fetchAnalytics(accountId, dateRange),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 60 * 1000, // Auto refresh
  })
}

// Usage in component
const { data, isLoading } = useAnalytics(
  accountId,
  dateRange
)`
    },
    challenges: [
        {
            number: '01',
            challenge: 'Real-time Data Updates',
            problem: 'Need to show live metrics without overwhelming the API with requests',
            solution: 'Implemented smart polling with React Query, WebSocket fallback for critical updates, and optimistic UI updates.'
        },
        {
            number: '02',
            challenge: 'Complex Data Visualization',
            problem: 'Rendering multiple charts simultaneously caused performance bottlenecks',
            solution: 'Virtualized chart rendering, memoized calculations, and worker threads for heavy computations.'
        },
        {
            number: '03',
            challenge: 'State Management Complexity',
            problem: 'Too much global state causing unnecessary re-renders across the app',
            solution: 'Separated concerns: Redux (auth), React Query (server data), and Zustand (UI state) for optimal performance.'
        }
    ],
    testing: {
        metrics: [
            { label: 'Code Coverage', value: '85%' },
            { label: 'Lighthouse Score', value: '95+' },
            { label: 'Accessibility', value: 'WCAG 2.1' }
        ],
        practices: [
            'Jest + React Testing Library for unit tests',
            'Playwright for E2E testing',
            'Visual regression testing',
            'Automated accessibility testing with axe'
        ]
    },
    results: [
        { label: 'Active Users', value: '10K+' },
        { label: 'Faster Performance', value: '70%' },
        { label: 'Enterprise Clients', value: '250+' },
        { label: 'Productivity Boost', value: '3x' },
        { label: 'User Rating', value: '4.8/5' }
    ],
    performance: [
        { label: 'First Contentful Paint', value: '1.2s', width: '90%', color: 'bg-green-500' },
        { label: 'Time to Interactive', value: '2.8s', width: '85%', color: 'bg-blue-500' },
        { label: 'Bundle Size', value: '450KB', width: '75%', color: 'bg-purple-500' }
    ],
    testimonial: {
        quote: 'SocialPulse transformed how we manage our social media. The insights are invaluable and the scheduler saved us 20+ hours per week.',
        author: 'Michael Chen',
        position: 'Social Media Director'
    },
    links: {
        demo: '#',
        github: '#'
    }
};

function ReactPage() {
    return (
        <div className="min-h-screen bg-smokeWhite">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-32 pb-16">
                <Link
                    href="/"
                    className="inline-flex items-center text-gry hover:text-blck transition-colors mb-8 group"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-8 bg-reactBg bg-right-bottom bg-no-repeat bg-contain">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`px-4 py-1.5 ${projectData.badgeColor} rounded-full text-sm font-medium`}>
                                    {projectData.badge}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blck mb-4">
                                {projectData.title}
                            </h1>
                            <p className="text-xl text-gry leading-relaxed max-w-3xl">
                                {projectData.description}
                            </p>
                        </div>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-100">
                        <div>
                            <p className="text-sm text-gry mb-1">Role</p>
                            <p className="font-semibold text-blck">{projectData.meta.role}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Duration</p>
                            <p className="font-semibold text-blck">{projectData.meta.duration}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Year</p>
                            <p className="font-semibold text-blck">{projectData.meta.year}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Industry</p>
                            <p className="font-semibold text-blck">{projectData.meta.industry}</p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                        {projectData.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-smokeWhite text-blck rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <div className="bg-white rounded-[2rem] p-8 bg-pattern2 bg-bottom bg-no-repeat bg-contain">
                            <h2 className="text-3xl font-bold text-blck mb-4">Project Overview</h2>
                            <p className="text-gry leading-relaxed mb-4">
                                {projectData.overview.problem}
                            </p>
                            <p className="text-gry leading-relaxed">
                                {projectData.overview.solution}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {projectData.features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    pattern={`pattern${(index % 3) + 3}`}
                                />
                            ))}
                        </div>

                        {/* Technical Architecture */}
                        <div className="bg-white rounded-[2rem] p-8 bg-pattern4 bg-right-bottom bg-no-repeat bg-contain">
                            <h2 className="text-3xl font-bold text-blck mb-6">Technical Architecture</h2>

                            <div className="space-y-6">
                                <TechSection
                                    title="Modern React Patterns"
                                    items={projectData.technicalArchitecture.modernReactPatterns}
                                    color="blue"
                                />

                                <TechSection
                                    title="State Management Strategy"
                                    items={projectData.technicalArchitecture.stateManagement}
                                    color="blue"
                                />

                                <TechSection
                                    title="Performance Optimizations"
                                    items={projectData.technicalArchitecture.performanceOptimizations}
                                    color="blue"
                                />
                            </div>
                        </div>

                        {/* Code Sample */}
                        <div className="bg-white rounded-[2rem] p-8 bg-pattern5 bg-left-bottom bg-no-repeat bg-contain">
                            <h3 className="text-2xl font-bold text-blck mb-4">Code Example</h3>
                            <p className="text-sm text-gry mb-4">{projectData.codeExample.title}</p>
                            <div className="bg-smokeWhite rounded-lg p-4 overflow-x-auto">
                                <pre className="text-xs text-blck">
{projectData.codeExample.code}
                                </pre>
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about5 bg-right-top bg-no-repeat bg-contain">
                            <h2 className="text-3xl font-bold text-blck mb-6">Challenges & Solutions</h2>

                            <div className="space-y-6">
                                {projectData.challenges.map((challenge, index) => (
                                    <ChallengeCard
                                        key={index}
                                        number={challenge.number}
                                        challenge={challenge.challenge}
                                        problem={challenge.problem}
                                        solution={challenge.solution}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Testing */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about6 bg-center bg-no-repeat bg-contain">
                            <h2 className="text-3xl font-bold text-blck mb-6">Testing & Quality</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {projectData.testing.metrics.map((metric, index) => (
                                    <div key={index} className="text-center p-6 bg-smokeWhite rounded-xl">
                                        <div className="text-3xl font-bold text-blck mb-2">{metric.value}</div>
                                        <div className="text-sm text-gry">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                            <ul className="mt-6 space-y-2">
                                {projectData.testing.practices.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gry text-sm">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Results */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about1 bg-left-top bg-no-repeat bg-contain">
                            <h3 className="text-2xl font-bold text-blck mb-6">Impact & Results</h3>
                            <div className="space-y-4">
                                {projectData.results.map((result, index) => (
                                    <ResultItem
                                        key={index}
                                        label={result.label}
                                        value={result.value}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about2 bg-right-top bg-no-repeat bg-contain">
                            <h3 className="text-2xl font-bold text-blck mb-6">Performance</h3>
                            <div className="space-y-4">
                                {projectData.performance.map((metric, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gry">{metric.label}</span>
                                            <span className="text-sm font-semibold text-blck">{metric.value}</span>
                                        </div>
                                        <div className="w-full bg-smokeWhite rounded-full h-2">
                                            <div className={`${metric.color} h-2 rounded-full`} style={{width: metric.width}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-blck text-white rounded-[2rem] p-8 bg-about3 bg-center bg-no-repeat bg-contain">
                            <p className="text-gry mb-4 leading-relaxed">
                                "{projectData.testimonial.quote}"
                            </p>
                            <div className="pt-4 border-t border-gray-800">
                                <p className="font-semibold">{projectData.testimonial.author}</p>
                                <p className="text-sm text-gry">{projectData.testimonial.position}</p>
                            </div>
                        </div>

                        {/* Project Links */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about4 bg-center bg-no-repeat bg-contain">
                            <h3 className="text-2xl font-bold text-blck mb-4">Project Links</h3>
                            <div className="space-y-3">
                                <a href={projectData.links.demo} className="flex items-center justify-between p-3 bg-smokeWhite rounded-lg hover:bg-gray-200 transition-colors">
                                    <span className="text-blck flex items-center gap-2">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
                                        Live Demo
                                    </span>
                                </a>
                                <a href={projectData.links.github} className="flex items-center justify-between p-3 bg-smokeWhite rounded-lg hover:bg-gray-200 transition-colors">
                                    <span className="text-blck flex items-center gap-2">
                                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                                        View Source
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components
function FeatureCard({ title, description, pattern }) {
    return (
        <div className={`bg-white rounded-[2rem] p-6 bg-${pattern} bg-right-bottom bg-no-repeat bg-contain`}>
            <h3 className="text-xl font-bold text-blck mb-2">{title}</h3>
            <p className="text-gry text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function TechSection({ title, items, color = 'blue' }) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-blck mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gry">
                        <span className={`text-${color}-500 mt-1`}>✓</span>
                        <span className="text-sm">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ChallengeCard({ number, challenge, problem, solution }) {
    return (
        <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-gry font-mono text-sm">{number}</span>
                <h4 className="font-bold text-blck">{challenge}</h4>
            </div>
            <p className="text-sm text-gry mb-2">
                <span className="font-semibold text-blck">Problem:</span> {problem}
            </p>
            <p className="text-sm text-gry">
                <span className="font-semibold text-blck">Solution:</span> {solution}
            </p>
        </div>
    );
}

function ResultItem({ label, value }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <span className="text-gry text-sm">{label}</span>
            <span className="font-bold text-blck text-lg">{value}</span>
        </div>
    );
}

export default ReactPage;
