'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, 
    faChartLine, 
    faPalette, 
    faRocket, 
    faWrench, 
    faLightbulb,
    faArrowRight,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faReact } from '@fortawesome/free-brands-svg-icons';

function Services() {
    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4">
                <div className=" rounded-[2rem] p-8 md:p-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-medium text-blck mb-6">
                        Services
                    </h1>
                    <p className="text-base text-gry leading-relaxed w-full md:w-1/2 mx-auto">
                        With 4+ years of front-end development expertise, I specialize in building 
                        modern, scalable, and performant web applications that drive business results.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <ServiceCard 
                        icon={faVuejs}
                        iconColor="text-black"
                        title="Vue.js Development"
                        description="Expert Vue.js solutions for modern web applications with 4+ years of hands-on experience."
                        features={[
                            'Vue 3 with Composition API',
                            'TypeScript integration',
                            'Pinia/Vuex state management',
                            'Component library development',
                            'Vue 2 to Vue 3 migration',
                            'Performance optimization'
                        ]}
                        tags={['Vue 3', 'Nuxt.js', 'TypeScript', 'Pinia']}
                    />

                    <ServiceCard 
                        icon={faReact}
                        iconColor="text-black"
                        title="React Development"
                        description="Building dynamic, high-performance interfaces with React and modern best practices."
                        features={[
                            'React 18 with concurrent features',
                            'Next.js SSR & SSG',
                            'Redux Toolkit & React Query',
                            'Custom hooks & patterns',
                            'Server components',
                            'Advanced state management'
                        ]}
                        tags={['React 18', 'Next.js', 'TypeScript', 'Redux']}
                    />

                    <ServiceCard 
                        icon={faChartLine}
                        iconColor="text-black"
                        title="Architecture & Consulting"
                        description="Strategic technical guidance for scalable, maintainable web applications."
                        features={[
                            'Architecture design & review',
                            'Code review & audit',
                            'Technology stack selection',
                            'Performance optimization',
                            'Team training & workshops',
                            'Best practices implementation'
                        ]}
                        tags={['Architecture', 'Consulting', 'Code Review']}
                    />

                    <ServiceCard 
                        icon={faPalette}
                        iconColor="text-black"
                        title="UI/UX Implementation"
                        description="Transform designs into pixel-perfect, responsive, and accessible interfaces."
                        features={[
                            'Figma/Sketch to code',
                            'Responsive design',
                            'Animation & interactions',
                            'WCAG 2.1 accessibility',
                            'Cross-browser compatibility',
                            'Design system integration'
                        ]}
                        tags={['UI/UX', 'Responsive', 'Accessibility']}
                    />

                    <ServiceCard 
                        icon={faRocket}
                        iconColor="text-black"
                        title="Performance Optimization"
                        description="Make your website blazing fast with comprehensive performance tuning."
                        features={[
                            'Lighthouse audit & optimization',
                            'Core Web Vitals improvement',
                            'Bundle size reduction',
                            'Lazy loading & code splitting',
                            'Caching strategies',
                            'SEO optimization'
                        ]}
                        tags={['Performance', 'SEO', 'Optimization']}
                    />

                    <ServiceCard 
                        icon={faWrench}
                        iconColor="text-black"
                        title="Maintenance & Support"
                        description="Keep your application running smoothly with ongoing support and updates."
                        features={[
                            'Regular dependency updates',
                            'Bug fixes & security patches',
                            'Feature enhancements',
                            'Performance monitoring',
                            'Error tracking setup',
                            'Priority technical support'
                        ]}
                        tags={['Support', 'Maintenance', 'Monitoring']}
                    />
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ icon, iconColor, title, description, features, tags }) {
    return (
        <div className="bg-white rounded-[2rem] p-8 hover:shadow-lg transition-shadow bg-about3 bg-no-repeat bg-contain bg-right-top">
            <div className={`text-6xl mb-4 ${iconColor}`}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-2xl font-bold text-blck mb-3">{title}</h3>
            <p className="text-gry mb-6 leading-relaxed">{description}</p>
            
            <div className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-black/50 mt-1" />
                        <span className="text-sm text-gry">{feature}</span>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-smokeWhite text-blck rounded-full text-xs">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProcessStep({ number, title, description }) {
    return (
        <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blck text-white rounded-full font-bold text-xl mb-4">
                {number}
            </div>
            <h4 className="text-xl font-bold text-blck mb-3">{title}</h4>
            <p className="text-gry leading-relaxed">{description}</p>
        </div>
    );
}

function WhyItem({ icon, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">{icon}</div>
            <div>
                <h4 className="font-semibold text-blck mb-1">{title}</h4>
                <p className="text-sm text-gry">{description}</p>
            </div>
        </div>
    );
}

function TechCategory({ title, items }) {
    return (
        <div>
            <h4 className="text-sm font-semibold mb-3 text-gry">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Services;