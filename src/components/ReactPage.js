'use client'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

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

                <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">📱</span>
                                <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    React 18
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blck mb-4">
                                Social Media Analytics Platform
                            </h1>
                            <p className="text-xl text-gry leading-relaxed max-w-3xl">
                                A comprehensive social media analytics platform that aggregates data from multiple social networks, 
                                providing insights, sentiment analysis, and competitor tracking for digital marketers and brands.
                            </p>
                        </div>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-100">
                        <div>
                            <p className="text-sm text-gry mb-1">Role</p>
                            <p className="font-semibold text-blck">Developer</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Duration</p>
                            <p className="font-semibold text-blck">8 months</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Year</p>
                            <p className="font-semibold text-blck">2023-2024</p>
                        </div>
                        <div>
                            <p className="text-sm text-gry mb-1">Industry</p>
                            <p className="font-semibold text-blck">SaaS / Marketing</p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                        {['React 18', 'TypeScript', 'Redux Toolkit', 'React Query', 'TailwindCSS', 'Recharts', 'Vite'].map((tech) => (
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
                        <div className="bg-white rounded-[2rem] p-8">
                            <h2 className="text-3xl font-bold text-blck mb-4">Project Overview</h2>
                            <p className="text-gry leading-relaxed mb-4">
                                Digital marketers were struggling to manage multiple social media platforms, 
                                manually tracking metrics, and lacking comprehensive insights into their performance.
                            </p>
                            <p className="text-gry leading-relaxed">
                                We built a unified platform using React 18's concurrent features and modern state 
                                management patterns to deliver real-time analytics, automated reporting, and 
                                competitor insights - helping teams save 20+ hours per week.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <FeatureCard 
                                icon="🔗"
                                title="Multi-Platform Integration"
                                description="Connect Instagram, Twitter, Facebook, and LinkedIn with a unified dashboard and real-time data synchronization."
                            />
                            <FeatureCard 
                                icon="📊"
                                title="Advanced Analytics"
                                description="Track engagement metrics, audience demographics, post performance, and growth trends with AI-powered sentiment analysis."
                            />
                            <FeatureCard 
                                icon="📅"
                                title="Content Scheduler"
                                description="Schedule posts across platforms with best time recommendations, bulk operations, and cross-platform preview."
                            />
                            <FeatureCard 
                                icon="🎯"
                                title="Competitor Analysis"
                                description="Monitor competitor accounts, benchmark performance metrics, and gain strategic insights from their content."
                            />
                        </div>

                        {/* Technical Architecture */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h2 className="text-3xl font-bold text-blck mb-6">Technical Architecture</h2>
                            
                            <div className="space-y-6">
                                <TechSection 
                                    title="Modern React Patterns"
                                    items={[
                                        'React 18 with concurrent rendering features',
                                        'Custom hooks for reusable data fetching logic',
                                        'Compound components pattern for flexibility',
                                        'Error boundaries for graceful error handling'
                                    ]}
                                />
                                
                                <TechSection 
                                    title="State Management Strategy"
                                    items={[
                                        'Redux Toolkit for global app state (auth, theme)',
                                        'React Query for server state and caching',
                                        'Zustand for lightweight UI state management',
                                        'Smart polling with WebSocket fallback'
                                    ]}
                                />
                                
                                <TechSection 
                                    title="Performance Optimizations"
                                    items={[
                                        'Code splitting by route with lazy loading',
                                        'React.memo and useMemo for expensive operations',
                                        'Virtual scrolling for large data lists',
                                        'Bundle reduced from 1.2MB to 450KB'
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Code Sample */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-blck mb-4">Code Example</h3>
                            <p className="text-sm text-gry mb-4">Custom Hook for Data Fetching</p>
                            <div className="bg-smokeWhite rounded-lg p-4 overflow-x-auto">
                                <pre className="text-xs text-blck">
{`// useAnalytics.ts
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
)`}
                                </pre>
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h2 className="text-3xl font-bold text-blck mb-6">Challenges & Solutions</h2>
                            
                            <div className="space-y-6">
                                <ChallengeCard 
                                    number="01"
                                    challenge="Real-time Data Updates"
                                    problem="Need to show live metrics without overwhelming the API with requests"
                                    solution="Implemented smart polling with React Query, WebSocket fallback for critical updates, and optimistic UI updates."
                                />
                                
                                <ChallengeCard 
                                    number="02"
                                    challenge="Complex Data Visualization"
                                    problem="Rendering multiple charts simultaneously caused performance bottlenecks"
                                    solution="Virtualized chart rendering, memoized calculations, and worker threads for heavy computations."
                                />
                                
                                <ChallengeCard 
                                    number="03"
                                    challenge="State Management Complexity"
                                    problem="Too much global state causing unnecessary re-renders across the app"
                                    solution="Separated concerns: Redux (auth), React Query (server data), and Zustand (UI state) for optimal performance."
                                />
                            </div>
                        </div>

                        {/* Testing */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h2 className="text-3xl font-bold text-blck mb-6">Testing & Quality</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center p-6 bg-smokeWhite rounded-xl">
                                    <div className="text-3xl font-bold text-blck mb-2">85%</div>
                                    <div className="text-sm text-gry">Code Coverage</div>
                                </div>
                                <div className="text-center p-6 bg-smokeWhite rounded-xl">
                                    <div className="text-3xl font-bold text-blck mb-2">95+</div>
                                    <div className="text-sm text-gry">Lighthouse Score</div>
                                </div>
                                <div className="text-center p-6 bg-smokeWhite rounded-xl">
                                    <div className="text-3xl font-bold text-blck mb-2">WCAG 2.1</div>
                                    <div className="text-sm text-gry">Accessibility</div>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-2">
                                {[
                                    'Jest + React Testing Library for unit tests',
                                    'Playwright for E2E testing',
                                    'Visual regression testing',
                                    'Automated accessibility testing with axe'
                                ].map((item, i) => (
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
                        <div className="bg-white rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-blck mb-6">Impact & Results</h3>
                            <div className="space-y-4">
                                <ResultItem icon="👥" label="Active Users" value="10K+" />
                                <ResultItem icon="⚡" label="Faster Performance" value="70%" />
                                <ResultItem icon="💼" label="Enterprise Clients" value="250+" />
                                <ResultItem icon="📈" label="Productivity Boost" value="3x" />
                                <ResultItem icon="⭐" label="User Rating" value="4.8/5" />
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-blck mb-6">Performance</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gry">First Contentful Paint</span>
                                        <span className="text-sm font-semibold text-blck">1.2s</span>
                                    </div>
                                    <div className="w-full bg-smokeWhite rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gry">Time to Interactive</span>
                                        <span className="text-sm font-semibold text-blck">2.8s</span>
                                    </div>
                                    <div className="w-full bg-smokeWhite rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gry">Bundle Size</span>
                                        <span className="text-sm font-semibold text-blck">450KB</span>
                                    </div>
                                    <div className="w-full bg-smokeWhite rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-blck text-white rounded-[2rem] p-8">
                            <div className="text-4xl mb-4">💬</div>
                            <p className="text-gry mb-4 leading-relaxed">
                                "SocialPulse transformed how we manage our social media. The insights are invaluable 
                                and the scheduler saved us 20+ hours per week."
                            </p>
                            <div className="pt-4 border-t border-gray-800">
                                <p className="font-semibold">Michael Chen</p>
                                <p className="text-sm text-gry">Social Media Director</p>
                            </div>
                        </div>

                        {/* Project Links */}
                        <div className="bg-white rounded-[2rem] p-8">
                            <h3 className="text-2xl font-bold text-blck mb-4">Project Links</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between p-3 bg-smokeWhite rounded-lg hover:bg-gray-200 transition-colors">
                                    <span className="text-blck flex items-center gap-2">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
                                        Live Demo
                                    </span>
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 bg-smokeWhite rounded-lg hover:bg-gray-200 transition-colors">
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

// Helper Components (reused from VuePage)
function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-[2rem] p-6">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-xl font-bold text-blck mb-2">{title}</h3>
            <p className="text-gry text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function TechSection({ title, items }) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-blck mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gry">
                        <span className="text-blue-500 mt-1">✓</span>
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

function ResultItem({ icon, label, value }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <span className="flex items-center gap-2 text-gry">
                <span>{icon}</span>
                <span className="text-sm">{label}</span>
            </span>
            <span className="font-bold text-blck text-lg">{value}</span>
        </div>
    );
}

export default ReactPage;