'use client'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Project Data
const projectData = {
    badge: 'Vue 3',
    badgeColor: 'bg-green-100 text-green-800',
    title: 'E-Commerce Admin Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations, featuring real-time analytics, inventory management, order processing, and customer relationship management.',
    meta: {
        role: 'Developer',
        duration: '6 months',
        year: '2024',
        industry: 'E-Commerce'
    },
    techStack: ['Vue 3', 'Composition API', 'Pinia', 'TypeScript', 'Tailwind CSS', 'Vite', 'Chart.js'],
    overview: {
        problem: 'This project aimed to modernize the admin experience for a growing e-commerce platform. The legacy system was slow, difficult to use, and couldn\'t scale with the business needs.',
        solution: 'Using Vue 3\'s Composition API and modern development practices, we built a lightning-fast, intuitive dashboard that transformed how the team operates, resulting in a 50% improvement in page load times and 40% increase in productivity.'
    },
    features: [
        {
            title: 'Real-time Analytics',
            description: 'Interactive dashboards with live sales metrics, revenue tracking, and customer behavior analysis using Chart.js visualizations.'
        },
        {
            title: 'Inventory Management',
            description: 'Complete product CRUD operations with stock monitoring, bulk operations, and low-stock alerts to prevent stockouts.'
        },
        {
            title: 'Order Processing',
            description: 'Streamlined order tracking, automated workflows, invoice generation, and shipping integration with major carriers.'
        },
        {
            title: 'Customer Management',
            description: 'User profiles, purchase history tracking, customer segmentation, and integrated support ticket system.'
        }
    ],
    technicalHighlights: {
        modernArchitecture: [
            'Vue 3 Composition API for better code organization',
            'Pinia for centralized state management',
            'TypeScript for type safety',
            'Vue Router with lazy loading and route guards'
        ],
        performanceOptimizations: [
            'Virtual scrolling for large data tables (10,000+ items)',
            'Route-based code splitting and lazy loading',
            'Debounced search and filter operations',
            'Optimistic UI updates for better UX'
        ],
        codeQuality: [
            '90%+ test coverage with Vitest',
            'ESLint + Prettier for consistency',
            'Husky pre-commit hooks',
            'Component documentation with Storybook'
        ]
    },
    challenges: [
        {
            number: '01',
            challenge: 'Real-time Updates',
            problem: 'Dashboard needed to reflect real-time changes from multiple users',
            solution: 'Implemented WebSocket connection with automatic reconnection and optimistic updates for instant feedback.'
        },
        {
            number: '02',
            challenge: 'Large Dataset Performance',
            problem: 'Tables with 10,000+ products caused significant performance issues',
            solution: 'Implemented virtual scrolling, server-side pagination, and smart caching strategies.'
        },
        {
            number: '03',
            challenge: 'Complex Form Validation',
            problem: 'Product forms had interdependent validation rules',
            solution: 'Created custom composables with Vuelidate for reusable, maintainable validation logic.'
        }
    ],
    results: [
        { label: 'Faster Load Times', value: '50%' },
        { label: 'Productivity Increase', value: '40%' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Monthly Transactions', value: '$2M+' },
        { label: 'Training Time Reduced', value: '60%' }
    ],
    codeExample: {
        title: 'Pinia Store Pattern',
        code: `// productStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore =
  defineStore('products', () => {
  const products = ref([])

  const lowStock = computed(() =>
    products.value.filter(
      p => p.stock < p.minStock
    )
  )

  return { products, lowStock }
})`
    },
    testimonial: {
        quote: 'The new dashboard transformed our operations. What used to take hours now takes minutes. The team delivered an exceptional product.',
        author: 'Sarah Johnson',
        position: 'Operations Manager'
    },
    links: {
        demo: '#',
        github: '#'
    }
};

function VuePage() {
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

                <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-8 bg-vueBg bg-right-bottom bg-no-repeat bg-contain">
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
                    {/* Key Features */}
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

                        {/* Technical Highlights */}
                        <div className="bg-white rounded-[2rem] p-8 bg-pattern4 bg-right-bottom bg-no-repeat bg-contain">
                            <h2 className="text-3xl font-bold text-blck mb-6">Technical Highlights</h2>

                            <div className="space-y-6">
                                <TechSection
                                    title="Modern Architecture"
                                    items={projectData.technicalHighlights.modernArchitecture}
                                />

                                <TechSection
                                    title="Performance Optimizations"
                                    items={projectData.technicalHighlights.performanceOptimizations}
                                />

                                <TechSection
                                    title="Code Quality"
                                    items={projectData.technicalHighlights.codeQuality}
                                />
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="bg-white rounded-[2rem] p-8 bg-pattern5 bg-left-bottom bg-no-repeat bg-contain">
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

                        {/* Code Sample */}
                        <div className="bg-white rounded-[2rem] p-8 bg-about2 bg-right-top bg-no-repeat bg-contain">
                            <h3 className="text-2xl font-bold text-blck mb-4">Code Sample</h3>
                            <p className="text-sm text-gry mb-4">{projectData.codeExample.title}</p>
                            <div className="bg-smokeWhite rounded-lg p-4 overflow-x-auto">
                                <pre className="text-xs text-blck">
{projectData.codeExample.code}
                                </pre>
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

                        {/* Links */}
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
                                        View Code
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

function TechSection({ title, items }) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-blck mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gry">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-sm">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ChallengeCard({ number, challenge, problem, solution }) {
    return (
        <div className="border-l-4 border-blck pl-6">
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

export default VuePage;
