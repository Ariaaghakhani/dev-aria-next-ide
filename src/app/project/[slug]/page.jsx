import VuePage from '@/components/VuePage'
import ReactPage from '@/components/ReactPage'

export async function generateStaticParams(){
    return [{ slug: 'vue' }, { slug: 'react' }]

}

export default async function ProjectPage({ params }) {
    if (params.slug === 'vue') {
        return <VuePage />
    }
    if (params.slug === 'react') {
        return <ReactPage />
    }

    return null // or a 404 fallback if needed
}

