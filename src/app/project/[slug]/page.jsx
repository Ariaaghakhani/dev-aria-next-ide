import VuePage from '@/components/VuePage'
import ReactPage from '@/components/ReactPage'

export default async function ProjectPage({ params }) {
    const resolvedParams = await params
    if (resolvedParams.slug === 'vue') {
        return <VuePage />
    }
    if (resolvedParams.slug === 'react') {
        return <ReactPage />
    }

}
