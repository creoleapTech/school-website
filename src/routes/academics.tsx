import { createFileRoute } from '@tanstack/react-router'
import AcademicsPage from '@/components/sections/academics-page'

export const Route = createFileRoute('/academics')({
    component: Academics,
})

function Academics() {
    return (
        <>
            <AcademicsPage />
        </>
    )
}
