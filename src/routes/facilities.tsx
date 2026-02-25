import { createFileRoute } from '@tanstack/react-router'
import FacilitiesPage from '@/components/sections/facilities-page'

export const Route = createFileRoute('/facilities')({
  component: Facilities,
})

function Facilities() {
  return (
    <>
      <FacilitiesPage />
    </>
  )
}
